const gameService = require('../services/game.service');
const Game = require('../models/game.model');
const GameStatusEnum = require('../enums/game-status.enum');

let IO; // maybe it is not the best approach

function start(app) {
    const server = require('http').Server(app);
    const io = require('socket.io')(server);
    IO = io;
    const socketPort = 80;
    server.listen(socketPort, function () {
        console.log(`Socket server started on port ${socketPort}...`);
    });
    socketApi();
}

function updateLobby() {
    Game.find({status: GameStatusEnum.gathering}).exec(function (err, games) {
        IO.emit('lobby', games);
    });
}

function updateGame(gameId) {
    Game.findById(gameId, (err, game) => {
        if (!err) {
            IO.sockets.in(gameId).emit('game', game);
        }
    })
}

function socketApi() {
    IO.on('connection', socket => {
        updateLobby();
        socket.on('join', room => {
            // console.log(socket.id, 'join room', room);
            socket.join(room);
            updateGame(room);
        });
        socket.on('leave', room => {
            // console.log('socket.id, leave room', room);
            socket.leave(room);
            updateGame(room);
        });
        socket.on('game.player.ready', (req, callback) => {
            gameService.playerReady(req.gameId, req.playerId, req.ready).then(() => {
                updateGame(req.gameId);1
                callback();
            })
        });
    });
}

function join(gameId) {
    console.log(gameId);
}

function leave() {

}

module.exports = {start, updateLobby, updateGame, join, leave};
