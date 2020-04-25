const assert = require('assert');
const MarioChar = require('../models/mariochar');



describe('Andmete muutmine', function() {
    var char;
    beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
       });
       char.save().then(function() { // ootab salvestamise ära
            done(); // callback, et test on tehtud
       });
    })
    it('muudab kirje andmebaasis', function(done) {
        MarioChar.findOneAndUpdate({
            name: 'Mario'
        }, {name: 'Luigi'}).then(function() {
            MarioChar.findOne({_id: char._id}).then(function(result) {
                assert(result.name === 'Luigi');
                done();
            });
        });
    });
    it('suurendab kaalu ühe võrra', function(done) {
        MarioChar.update({}, {$inc: {weight: 1}}).then(function() {
            MarioChar.findOne({name: 'Mario'}).then(function(result) {
                assert(result.weight === 51);
                done();
            });
        });
    });
});