var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var mPKey = "c3f554ea29d5a46ceb7c3b084bbd0514";
var mPrKey = "b52d783b332612f511c4a721036c864a26d13ac9";


app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    // res.sendFile(path.join(__dirname + '/public'));
    res.send({message: "Turn it up Kris"})
})


app.listen(3000, function (err) {
    if(err) {
      console.log("There was an error ❌", err);
    }
    console.log("Listening on port 3000 ✅");
})