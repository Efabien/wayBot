
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const fbVerification = require('./middlewares/fb-verification');
const controler = require('./modules/controler');

app.set('port', (process.env.PORT || 5000));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// index
app.get('/', function (req, res) {
	res.send('hello world i am a secret bot')
})

// for facebook verification
app.get('/webhook/', fbVerification);

// to post data
app.post('/webhook/', controler)


// spin server
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})
