const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios')
// const logger = require('morgan');
// const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config()
require('./config/database')

const authRouter = require('./routes/auth');
const key = process.env.REACT_APP_GOOGLE_API_KEY;

app.use('/citydetails/:id', (req, res) => {
  axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.query.id}&key=${key}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((err) => console.log(err))
})

// app.use(cors());
app.use(bodyParser.json());
// app.use(logger('dev'));
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});