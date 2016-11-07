var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.send({message: "Working"})
})


app.listen(3000, function (err) {
    if(err) {
      console.log("There was an error ❌", err);
    }
    console.log("Listening on port 3000 ✅");
})