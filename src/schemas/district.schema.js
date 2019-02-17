const mongoose = require('mongoose');

const DistrictSchema = module.exports = new mongoose.Schema({
    title: String,
    price: Number,
    type: String,
    imageFile: {type: String, default: 'district-back.jpg'},
    description: {type: String, default: 'Пустой квартал'},
});

DistrictSchema.methods.setData = function(data) {
    this.title = data.title;
    this.price = data.price;
    this.type = data.type;
    this.imageFile = data.imageFile;
    this.description = data.description;
};