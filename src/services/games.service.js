const Game = require('./../models/game.model');
const Player = require('./../models/player.model');

exports.create = config => {
    const newGame = new Game();
    newGame.initFromConfig(config);
    return newGame.save()
};

exports.read = function(req, res) {
    Game.findById(req.params.id, function(err, game) {
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.update = function(req, res) {
    Game.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, game) {
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.delete = function(req, res) {
    Game.remove({
        _id: req.params.game$
    }, function(err, game) {
        if (err)
            res.send(err);
        res.json({ message: 'Game successfully deleted' });
    });
};

exports.join = (gameId, user) => {
    return new Promise((resolve, reject) => {
        Game.findById(gameId, function(err, game) {
            if (err) {
                resolve(false);
            }
            const player = new Player();
            player.initFromUserInfo(user);
            const isAlreadyInTheGame = game.isAlreadyInTheGame(player);
            const canJoin = game.canJoin(player);
            if (isAlreadyInTheGame) {
                resolve(true);
            }
            if (canJoin) {
                game.addPlayer(player);
                game.save();
                resolve(true);
            }
            resolve(false);
        });
    })
};

exports.leave = (gameId, playerId) => {
    return new Promise((resolve, reject) => {
        Game.findById(gameId, function(err, game) {
            if (game) {
                game.removePlayer(playerId);
                game.save();
                resolve(false);
            }
        });
    })
};

exports.playerReady = (gameId, playerId, ready) => {
    return new Promise((resolve, reject) => {
        Game.findById(gameId, function(err, game) {
            if (game) {
                game.players.id(playerId).setReadiness(ready);
                game.save();
                resolve();
            }
        });
    })
};