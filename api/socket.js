const gamesController = require('./../controllers/games.controller');
const GameSchema = require('./../schemas/game.schema');
const Game = require('./../models/game.model');

module.exports = io => {
    io.on('connection', socket => {
        Game.lobby().then(games => {
            socket.emit('lobby', games);
        });


    });
};
