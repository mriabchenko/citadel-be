const Game = require('./../models/game.model');

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
