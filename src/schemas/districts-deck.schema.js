const mongoose = require('mongoose');
const DistrictSchema = require('./district.schema');
const DISTRICTS = require('../data/districts');

const DistrictsDeckSchema = module.exports = new mongoose.Schema({
    cards: {type: [DistrictSchema], default: []},
});

DistrictsDeckSchema.methods.create = function () {
    this.cards = [];
    DISTRICTS.forEach(district => {
        if (district.number && district.number !== 1) {
            new Array(district.number).fill(null).forEach(_ => this.cards.push({...district}));
        } else {
            this.cards.push({...district});
        }
    });
};

DistrictsDeckSchema.methods.shuffle = function () {
    for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
};

DistrictsDeckSchema.methods.takeFromTheTop = function () {
    return this.cards.pop();
};

DistrictsDeckSchema.methods.placeToTheBottom = function (card) {
    return this.cards.unshift(card);
};