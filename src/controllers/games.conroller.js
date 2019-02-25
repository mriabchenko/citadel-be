const express = require('express');
const router = express.Router();
const gameService = require('./../services/game.service');

// routes
router.post('/create', create);
router.post('/join', join);

module.exports = router;

function create(req, res, next) {
    const config = req.body;
    gameService.create(config)
        .then(game => game ? res.json(game) : {})
        .catch(err => next(err));
}

function join(req, res, next) {
    gameService.join(req.body.gameId, req.body.user)
        .then(game => game ? res.json(game) : {})
        .catch(err => next(err));
}

function leave(req, res, next) {
    gameService.leave(req.body.gameId, req.body.playerId)
        .then(game => game ? res.json(game) : {})
        .catch(err => next(err));
}
