const gamesController = require('./../controllers/games.controller');
const GameSchema = require('./../schemas/game.schema');
const Game = require('./../models/game.model');

module.exports = io => {
    io.on('connection', socket => {
        Game.lobby().then(games => {
            socket.emit('lobby', games);
        });
        socket.on('game.create', (config, callback) => {
            gamesController.create(config).then(game => {
                callback(game);
                Game.lobby().then(games => {
                    io.emit('lobby', games);
                });
            });
        });
    });
};
