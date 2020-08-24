const axios = require('axios');
const BASE_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cities`

module.exports = {
    searchCities
}

function searchCities(req, res) {
    axios.get(`${BASE_URL}+${req.body}&key=${process.env.REACT_APP_GOOGLE_API}`)
    .then(response => {res.json(response)})
}