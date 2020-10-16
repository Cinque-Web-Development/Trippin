const express = require('express')
const app = express()
const port = 3001
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
require("dotenv").config()
require('./config/database')
const axios = require('axios');

const authRouter = require('./routes/auth')
const tripRouter = require('./routes/trips')

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/api/auth/', authRouter)
app.use('/api/trips/', tripRouter)

app.use('/citycoord', (req, res) => {
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.city}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => console.log(err));
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})