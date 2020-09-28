const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
require("dotenv").config()

const key=process.env.GOOGLE_API_KEY;

app.get("/cities", (req, res) => {
  
  axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.query.searchCity}&radius=50000&key=${key}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => console.log(err));
})


app.listen(port, () => {
  console.log(`Listening on ${port}`)
});