const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
require("dotenv").config()

const key = process.env.REACT_APP_GOOGLE_API_KEY;

app.get("/hotels", (req, res) => {
  axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+${req.query.searchTerm}&key=${key}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => console.log(err));
})

app.get('/restaurants', (req, res) => {
  axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+${req.query.searchTerm}&key=${key}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => console.log(err))
})


app.listen(port, () => {
  console.log(`Listening on ${port}`)
});