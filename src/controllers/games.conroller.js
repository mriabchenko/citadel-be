const express = require('express');
const router = express.Router();
const gameService = require('./../services/game.service');
const socket = require('./socket');

// routes
router.post('/create', create);
router.post('/join', join);

module.exports = router;

function create(req, res, next) {
    const config = req.body;
    gameService.create(config)
        .then(game => {
            socket.updateLobby();
            if (game) {
                res.json(game)
            } else {
                return {}
            }
        })
        .catch(err => next(err));
}

function join(req, res, next) {
    gameService.join(req.body.gameId, req.body.user)
        .then(canJoin => {
            socket.updateLobby();
            res.json(canJoin)
        })
        .catch(err => next(err));
}

function leave(req, res, next) {
    gameService.leave(req.body.gameId, req.body.playerId)
        .then(game => {
            socket.updateLobby();
            if (game) {
                res.json(game);
                socket.updateGame(game._id);
            } else {
                return {}
            }
        })
        .catch(err => next(err));
}
