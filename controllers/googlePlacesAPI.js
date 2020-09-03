const axios = require('axios');
const BASE_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?`

module.exports = {
    searchCities
}

function searchCities(req, res) {
    axios.get(`${BASE_URL}json?key=${process.env.REACT_APP_GOOGLE_API}&query=${req.body.term}`)
    .then(response => {res.json(response)})
    .catch(err => console.log(err))
}