const mongoose = require('mongoose');
const GameConfigSchema = require('./game-config.schema');
const PlayerSchema = require('./player.schema');
const DistrictsDeckSchema = require('./districts-deck.schema');
const GameStatusEnum = require('../enums/game-status.enum');

const GameSchema = module.exports = new mongoose.Schema({
    config: {type: GameConfigSchema, default: {}},
    players: {type: [PlayerSchema], default: []},
    districtsDeck: {type: DistrictsDeckSchema, default: {}},
    status: {type: String, default: GameStatusEnum.gathering}
});

GameSchema.methods.initFromConfig = function (config) {
    this.config = config;
};

GameSchema.methods.setStatus = function (newStatus) {
    this.status = newStatus;
};

GameSchema.methods.addPlayer = function (playerModel) {
    this.players.push(playerModel);
};

GameSchema.methods.removePlayer = function (playerId) {
    this.players.id(playerId).remove();
};

GameSchema.methods.givePlayerACardFromTheTopOfTheDeck = function (playerId) {
    const card = this.districtsDeck.takeFromTheTop();
    const player = this.players.id(playerId);
    player.giveDistrictOption(card)
};

GameSchema.methods.takePlayersDistrictOptionAndPutItInTheBottomOfTheDeck = function (playerId, cardId) {
    const player = this.players.id(playerId);
    const card = player.districtOptions.id(cardId);
    player.takeDistrictOption(cardId);
    this.districtsDeck.placeToTheBottom(card);
};

GameSchema.methods.start = function () {
    this.status = GameStatusEnum.inProgress;
    this.districtsDeck.create();
    this.districtsDeck.shuffle();
    this.players.forEach(p => {
        p.giveMoney(2);
        const district1 = this.districtsDeck.takeFromTheTop();
        p.giveDistrictOption(district1);
        const district2 = this.districtsDeck.takeFromTheTop();
        p.giveDistrictOption(district2);
    });
};

GameSchema.methods.isAlreadyInTheGame = function (playerModel) {
    const pid = playerModel._id;
    return !!this.players.id(pid);
};

GameSchema.methods.canJoin = function (playerModel) {
    const isAlreadyInTheGame = this.isAlreadyInTheGame(playerModel);
    const theGameIsFull = this.players.length >= this.config.maxPlayers;
    if (isAlreadyInTheGame || theGameIsFull) {
        return false;
    } else {
        return true;
    }
};
