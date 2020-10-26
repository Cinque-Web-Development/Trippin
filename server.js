const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
require("dotenv").config()
require('./config/database')
const path = require('path');

const authRouter = require('./routes/auth')
const tripRouter = require('./routes/trips')

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/api/auth', authRouter)
app.use('/api/trips', tripRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => {
  console.log(`Listening on ${port}`)
})