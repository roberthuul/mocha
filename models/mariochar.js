const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MarioCharChema = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharChema);

module.exports = MarioChar;