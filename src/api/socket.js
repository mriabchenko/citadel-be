const gameService = require('../services/game.service');
const Game = require('./../models/game.model');
const GameStatusEnum = require('./../enums/game-status.enum');

function updateLobby(io) {
    Game.find({status: GameStatusEnum.gathering}).exec(function (err, games) {
        io.emit('lobby', games);
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
        updateLobby(io);
        socket.on('game.player.ready', (req, callback) => {
            gameService.playerReady(req.gameId, req.playerId, req.ready).then(() => {
                updateGame(req.gameId, io);
                callback();
            })
        });
    });
};
