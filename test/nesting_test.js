const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Tabelid tabelite sees', function() {
    beforeEach(function(done) {
        mongoose.connection.collections.authors.drop(function() {
            done();
        })
    })
    it('Loob autori koos alamandmetega', function(done) {
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the wind', pages: 400}]
        });
        pat.save().then(function() {
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(result) {
                assert(result.books.length === 1);
                done();
            });
        });
    });
    it('Lisab autorile raamatu', function(done) {
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the wind', pages: 400}]
        });
        pat.save().then(function() {
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(result) {
                result.books.push({title: "Wise man's fear", pages: 500});
                result.save().then(function() {
                    Author.findOne({name: 'Patrick Rothfuss'}).then(function(result2) {
                        assert(result2.books.length == 2);
                        done();
                    })
                })
            });
        }); 
    })
})