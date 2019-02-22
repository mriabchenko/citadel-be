const express = require('express');
const router = express.Router();
const gameService = require('./../services/game.service');

// routes
router.post('/create', create);

module.exports = router;

function create(req, res, next) {
    gameService.create(config)
        .then(game => game ? res.json(game) : {})
        .catch(err => next(err));
}
