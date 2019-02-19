const gamesController = require('../services/games.service');
const googleController = require('../services/google.service');
const GameSchema = require('./../schemas/game.schema');
const Game = require('./../models/game.model');
const GameStatusEnum = require('./../enums/game-status.enum');

function updateLobby(socket) {
    Game.find({status: GameStatusEnum.gathering}).exec(function (err, games) {
        socket.broadcast.emit('lobby', games);
        socket.emit('lobby', games);
    });
}

function updateGame(gameId, io) {
    Game.findById(gameId, (err, game) => {
        if (!err) {
            io.sockets.in(gameId).emit('game', game);
        }
    })
}

module.exports = io => {
    io.on('connection', socket => {
        socket.on('login.url', (config, callback) => {
            const loginUrl = googleController.urlGoogle();
            callback(loginUrl);
        });
        socket.on('lobby', (config, callback) => {
            updateLobby(socket);
            callback();
        });
        socket.on('game.create', (config, callback) => {
            gamesController.create(config).then(game => {
                callback(game);
                updateLobby(socket);
            });
        });
        socket.on('game.join', (req, callback) => {
            gamesController.join(req.gameId, req.user).then(joined => {
                if (joined) {
                    updateLobby(socket);
                    socket.join(req.gameId);
                    updateGame(req.gameId, io);
                }
                callback(joined);
            })
        });
        socket.on('game.leave', (req, callback) => {
            gamesController.leave(req.gameId, req.playerId).then(isInTheGame => {
                if (!isInTheGame) {
                    updateLobby(socket);
                    socket.leave(req.gameId);
                    updateGame(req.gameId, io);
                }
                callback(isInTheGame);
            })
        });
        socket.on('game.player.ready', (req, callback) => {
            gamesController.playerReady(req.gameId, req.playerId, req.ready).then(() => {
                updateGame(req.gameId, io);
                callback();
            })
        });
    });
};
