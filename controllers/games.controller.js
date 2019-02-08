const Game = require('./../models/game.model');

exports.list = socket => {
    Game.find({}, function(err, games) {
        socket.emit('games', games);
    });
};

exports.create = config => {
    const newGame = new Game();
    newGame.initFromConfig(config);
    newGame.save();
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

// code auth
// 3214/\
// c234234/
// 2342344
// 234234


// 123123
// 324234
