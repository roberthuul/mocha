const assert = require('assert');
const MarioChar = require('../models/mariochar');



describe('Andmete salvestamine', function() {
    it('salvestab andmed andmebaasi', function(done) {
        var char = new MarioChar({
             name: 'Mario'
        });
        char.save().then(function() { // ootab salvestamise ära ja siis kontrollib
             assert(char.isNew === false); // kui pole uus, siis on salvestatud
             done(); // callback, et test on tehtud
        });
    });
});