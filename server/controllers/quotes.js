var mongoose=require('mongoose');
require('./../models/quote.js');
var Quote=mongoose.model('Quote');


module.exports={
    index: function(req, res){
        res.render('index')
    },

    create: function(req, res){
        var newquote = new Quote(req.body);
        newquote.save(function (err) {
            if (err) {
                console.log('errors in newquote');
            } else {
                console.log('quote added');
                res.redirect('/quotes');
            }
        })
    },

    show: function(req, res){
        Quote.find({}, (err, quotes) => { //data is an inbuilt function
            if (err) {
                console.log('something went wrong')
            }
            else {
                console.log(quotes)
                res.render('quotes', { allquotes: quotes });
            }
        });
    
    }
};