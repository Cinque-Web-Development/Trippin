const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const port = process.env.PORT || 3001;
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();
require('./config/database');
require('./config/passport');


const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const tripRouter = require('./routes/trips')
const reviewRouter = require('./routes/reviews')
const googlePlacesRouter = require('./routes/googlePlacesAPI');
const cors = require('cors')

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use('/', indexRouter);
app.use('/api/users', userRouter);
app.use('/api/googleplaces', googlePlacesRouter);
app.use('/trips', tripRouter);
app.use('/reviews', reviewRouter);

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
