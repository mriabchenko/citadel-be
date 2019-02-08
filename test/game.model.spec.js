const assert = require('assert');
const GameStatusEnum = require('./../enums/game-status.enum');
const GameStatus = require('./../enums/game-status.enum');
const DistrictsDeckModel = require('./../models/districts-deck.model');
const GameConfigModel = require('./../models/game-config.model');
const GameModel = require('./../models/game.model');
const PlayerModel = require('./../models/player.model');
const assassin = require('./../models/roles/assassin');
const thief = require('./../models/roles/thief');
const magician = require('./../models/roles/magician');
const king = require('./../models/roles/king');


describe('Game model', () => {
    let game;
    let host;
    beforeEach(() => {
        host = new PlayerModel({
            name: 'name1',
            role: assassin,
            districts: [],
            districtOptions: [],
            money: 0,
            photo: null,
            isReadyToStart: false,
            isHost: true,
            isCreator: true,
        });
        game = new GameModel({
                config: new GameConfigModel({creatorId: host.id}),
                players: [
                    host,
                    new PlayerModel({
                        name: 'name2',
                        role: thief,
                        districts: [],
                        districtOptions: [],
                        money: 0,
                        photo: null,
                        isReadyToStart: false,
                        isHost: false,
                        isCreator: false,
                    }),
                    new PlayerModel({
                        name: 'name3',
                        role: magician,
                        districts: [],
                        districtOptions: [],
                        money: 0,
                        photo: null,
                        isReadyToStart: false,
                        isHost: false,
                        isCreator: false,
                    }),
                    new PlayerModel({
                        name: 'name4',
                        role: king,
                        districts: [],
                        districtOptions: [],
                        money: 0,
                        photo: null,
                        isReadyToStart: false,
                        isHost: false,
                        isCreator: false,
                    }),
                ],
                districtsDeck: new DistrictsDeckModel(),
                status: GameStatus.gathering,
            });
        game.districtsDeck.create();
        game.districtsDeck.shuffle();
    });

    it('should set status', () => {
        game.setStatus(GameStatusEnum.inProgress);
        assert.equal(game.status, GameStatusEnum.inProgress);
    });

    it('should add and remove player', () => {
        const newPlayer = new PlayerModel();
        assert.equal(!!game.players.id(newPlayer.id), false);
        game.addPlayer(newPlayer);
        assert.equal(!!game.players.id(newPlayer.id), true);
        game.removePlayer(newPlayer.id);
        assert.equal(!!game.players.id(newPlayer.id), false);
    });

    it('should give player a card from the top of the deck and place it to the bottom', () => {
        const player = game.players[0];
        const distrcitsDeckLength = game.districtsDeck.cards.length;
        const card = game.districtsDeck.cards[distrcitsDeckLength - 1];
        game.givePlayerACardFromTheTopOfTheDeck(player.id);
        assert.equal(!!player.districtOptions.id(card.id), true);
        assert.equal(!!game.districtsDeck.cards.id(card.id), false);
        game.takePlayersDistrictOptionAndPutItInTheBottomOfTheDeck(player.id, card.id);
        assert.equal(!!player.districtOptions.id(card.id), false);
        assert.equal(!!game.districtsDeck.cards.id(card.id), true);
    });

    it('should start', () => {
        const playersNumber = game.players.length;
        const districtsDeckLength = game.districtsDeck.cards.length;
        game.start();
        assert.equal(game.status, GameStatusEnum.inProgress);
        assert.equal(game.districtsDeck.cards.length, districtsDeckLength - playersNumber * 2);
        assert.equal(game.players[0].districtOptions.length, 2);
    });
});