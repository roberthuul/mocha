const assert = require('assert');
const MarioChar = require('../models/mariochar');



describe('Andmete otsimine', function() {
    var char;
    beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario'
       });
       char.save().then(function() { // ootab salvestamise ära
            done(); // callback, et test on tehtud
       });
    })
    it('leiab kirje andmebaasist', function(done) {
        MarioChar.findOne({
            name: 'Mario'
        }).then(function(result) {
            assert(result.name === 'Mario');
            done();
        });
    });
    it('leiab kirje andmebaasist ID  järgi', function(done) {
        MarioChar.findOne({
            _id: char._id
        }).then(function(result) {
            assert(result._id.toString() === char._id.toString()); // id on objekt 
            done();
        });
    });
});