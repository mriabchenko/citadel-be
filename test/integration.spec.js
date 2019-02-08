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


describe('Integration', () => {
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
        game.start();
    });

    it('player should define if can build district', () => {
        const player = game.players[0];
        assert.equal(player.canBuildDistrict(game.districtsDeck.cards[0].id), false);
        player.takeAllMoney();
        assert.equal(player.canBuildDistrict(player.districtOptions[0]), false);
        player.giveMoney(20);
        assert.equal(player.canBuildDistrict(player.districtOptions[0]), true);
        game.config.districtsToWin = 0;
        assert.equal(player.canBuildDistrict(player.districtOptions[0]), false);
    });


});