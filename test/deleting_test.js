const assert = require('assert');
const MarioChar = require('../models/mariochar');



describe('Andmete kustutamine', function() {
    var char;
    beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario'
       });
       char.save().then(function() { // ootab salvestamise ära
            done(); // callback, et test on tehtud
       });
    })
    it('kustutab kirje andmebaasist', function(done) {
        MarioChar.findOneAndRemove({
            name: 'Mario'
        }).then(function(result) {
            MarioChar.findOne({name: 'Mario'}).then(function(result) {
                assert(result === null);
                done();
            });
        });
    });
});