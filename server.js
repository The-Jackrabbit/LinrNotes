const express = require("express");
const path = require("path");
const axios = require('axios');
var app = express();
const base = 'http://api.musixmatch.com/ws/1.1/'
const apikey = 'a029307bd598a1be4c8e5e2157b1fd5c'
var cors = require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname, "./dist/")));

app.get('/api/search', (request, response) => {
    const search = utils.cleanSearchInput(request.query.keyword)
    const resultsAmount = 'page_size=20'
    const url = `${base}track.search?apikey=${apikey}&q=${search}&f_has_lyrics=1&${resultsAmount}`
    
    axios(url)
        .then(utils.checkStatus)
        .then(res => {
            response.json(res.data.message.body.track_list)
        })
        .catch(error => {
            console.log('Error in /search', error, error.status, error.statusText)
            
            response.json({ 
                status: error.status,
                statusText: error.statusText,
            })
        })
})

app.listen(3000, function() {
    console.log("server started");
})