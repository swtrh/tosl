var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send('Hello Torbjørn Slørdal')
})

app.listen(1337)