const mongoose = require('mongoose'); //was added after mod routes
var quotes=require('../controllers/quotes.js');

module.exports = function (app) { //was added after mod routes
    app.get('/', (req, res) => {
        quotes.index(req, res);
    })

    app.post('/quotes', (req, res) => {
        quotes.create(req, res);
    })

    app.get('/quotes', (req, res) => {
        quotes.show(req, res);
      
    })  // all other routes
} 