const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise; // töötab ilma selleta ka

mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

// ühenda enne testide tegemist
before(function(done) {
    mongoose.connection.once('open', function() {
        console.log('ühendus loodud');
        done();
    }).on('error', function(err) {
        console.log('Viga:', err);
    })
})

// kustuta andmed enne iga testi
beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop(function() {
        done();
    })
})