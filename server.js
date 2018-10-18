const express=require ('express');
const mongoose=require ('mongoose');
const bodyParser=require ('body-parser');
const path=require ('path');


var app = express();
app.set('views', __dirname + '/client/views'); //was added after mod routes
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));//middleware used to understand the requests






require('./server/config/routes.js')(app); //was added after mod routes
require('./server/config/mongoose.js');

app.listen(8000, function () {
    console.log("listening on port 8000");
})