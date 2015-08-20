//var express = require('express');
//var app = express();
//
//app.set('port', (process.env.PORT || 5000));
//
//app.use(express.static(__dirname + '/public'));
//
//// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
//
//app.get('/', function(request, response) {
//    response.sendFile('index.html')
//    //response.render('pages/index');
//});
//
//app.listen(app.get('port'), function() {
//  console.log('Node app is running on port', app.get('port'));
//});
//
//

var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/public'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.

console.log(__dirname);
app.get('/',function(req,res){
    res.sendFile('public/Published-HTML/Centaur_Design-1/start.html' , { root : __dirname});
    //res.sendFile('public/Published-HTML/index.html' , { root : __dirname});
   //It will find and locate index.html from View or Scripts
});

app.get('/about',function(req,res){
  res.sendFile('/about.html');
});

app.get('/sitemap',function(req,res){
  res.sendFile('/sitemap.html');
});

app.listen(5000);

console.log("Running at Port 5000");
