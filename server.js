var express = require('express');
var app = express();

app.set('views', __dirname + '/client');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(3000, function() {
	console.log('Server has started on port 3000');
});