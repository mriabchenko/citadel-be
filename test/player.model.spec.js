const assert = require('assert');
const PlayerModel = require('./../models/player.model');
const architect = require('../models/roles/architect');
const DistrictModel = require('../models/district.model');

describe('Player model', () => {
    let player;
    let district;
    let distrcitId;
    beforeEach(() => {
        player = new PlayerModel();
        district = new DistrictModel();
        distrcitId = district.id;
    });

    it('should set readiness', () => {
        assert.equal(player.isReadyToStart, false);
        player.setReadiness(true);
        assert.equal(player.isReadyToStart, true);
        player.setReadiness(false);
        assert.equal(player.isReadyToStart, false);
    });

    it('should give money', () => {
        assert.equal(player.money, 0);
        player.giveMoney(2);
        assert.equal(player.money, 2);
        player.giveMoney(2);
        assert.equal(player.money, 4);
    });

    it('should define if can take money', () => {
        assert.equal(player.canTakeMoney(1), false);
        player.giveMoney(1);
        assert.equal(player.canTakeMoney(1), true);
    });

    it('should take money', () => {
        player.giveMoney(2);
        player.takeMoney(1);
        assert.equal(player.money, 1);
    });

    it('should take all money', () => {
        player.giveMoney(2);
        player.takeAllMoney();
        assert.equal(player.money, 0);
    });

    it('should set role', () => {
        player.setRole(architect);
        assert.equal(player.role.turn, 7);
    });

    it('should set role', () => {
        player.setRole(architect);
        assert.equal(player.role.turn, 7);
    });

    it('should give and take district option', () => {
        player.giveDistrictOption(district);
        assert.equal(!!player.districtOptions.id(distrcitId), true);
        player.takeDistrictOption(distrcitId);
        assert.equal(!!player.districtOptions.id(distrcitId), false);
    });

    it('should build and remove district', () => {
        player.giveDistrictOption(district);
        player.buildDistrict(distrcitId);
        assert.equal(!!player.districts.id(distrcitId), true);
        assert.equal(!!player.districtOptions.id(distrcitId), false);
        player.removeDistrict(distrcitId);
        assert.equal(!!player.districts.id(distrcitId), false);
    });

    it('should calculate score', () => {
        assert.equal(player.score(), 0);
        const district1 = new DistrictModel({price: 10});
        player.giveDistrictOption(district1);
        player.buildDistrict(district1.id);
        assert.equal(player.score(), 10);
        const district2 = new DistrictModel({price: 3});
        player.giveDistrictOption(district2);
        player.buildDistrict(district2.id);
        assert.equal(player.score(), 13);
    });
});
