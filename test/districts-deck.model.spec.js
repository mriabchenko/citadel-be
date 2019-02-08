const assert = require('assert');
const DistrictsDeckModel = require('./../models/districts-deck.model');

describe('Districts deck model', () => {
    let deck;
    beforeEach(() => {
        deck = new DistrictsDeckModel();
        deck.create();
        deck.shuffle();
    });

    it('should create districts deck', () => {
        assert.equal(deck.cards.length, 66);
        const cardIds = new Set(deck.cards.map(d => d.id));
        assert.equal(cardIds.size, 66);// card ids should be unique
    });

    it('should take a card from the top', () => {
        const card = deck.takeFromTheTop();
        assert.equal(deck.cards.length, 65);
        assert(!!card, true);
    });

    it('should place a card to the bottom', () => {
        deck.placeToTheBottom({});
        assert.equal(deck.cards.length, 67);
    });
});