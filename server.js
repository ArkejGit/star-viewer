const express = require('express');
var request = require('request');

const app = express();
const port = process.env.PORT || 5000;

const API = 'http://www.astropical.space/astrodb/api.php?';

app.get('/api/stars', (req, res) => {

	request(`${API}table=stars&which=magnitude&limit=4.97&format=json`, (err, res, body) => {
		if (err) { return console.log(err); }
	})
	.pipe(res);

});

app.listen(port, () => console.log(`Listening on port ${port}`));
