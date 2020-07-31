const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./jwt-auth-template/config/database');

const userRouter = require('./jwt-auth-template/routes/users');
const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/users', userRouter);

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
