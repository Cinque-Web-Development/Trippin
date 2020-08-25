const axios = require('axios');
const BASE_URL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/`

module.exports = {
    searchCities
}

function searchCities(req, res) {
    console.log(req.body)
    axios.get(`${BASE_URL}/json?key=${process.env.REACT_APP_GOOGLE_API}&input=${req.body}`)
    .then(response => {res.json(response)})
}