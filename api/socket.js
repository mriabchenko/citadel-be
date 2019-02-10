const gamesController = require('./../controllers/games.controller');
const GameSchema = require('./../schemas/game.schema');
const Game = require('./../models/game.model');

function updateLobby(socketOrIo) {
    Game.lobby().then(games => {
        socketOrIo.emit('lobby', games);
    });
}

module.exports = io => {
    io.on('connection', socket => {
        updateLobby(socket);
        socket.on('game.create', (config, callback) => {
            gamesController.create(config).then(game => {
                callback(game);
                updateLobby(io);
            });
        });
        socket.on('game.join', (req, callback) => {
            gamesController.join(req.gameId, req.user).then(joined => {
                if (joined) {
                    updateLobby(io);
                }
                callback(joined);
            })
        });
    });
};
