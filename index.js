var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send('Hello Torbjørn Slørdal')
})
var port = (process.env.PORT || 3000);
console.log("App started on port "+port);
app.listen(port);