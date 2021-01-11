const express = require('express');
const http = require('http');
const request = require('request');
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

const app = express();
app.use(cors(corsOptions));
const API_KEY = '19847434-63e21816721aa50791068e628';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;

app.get('/search/:query', function(req, res) {
    request(`${BASE_URL}&q=${req.params.query}`, function(error, response, body) {
        res.end(body)
    })
});

const server = http.createServer(app);
server.listen(8080, function(){
    console.log("server running at http://localhost:8080/")
});


