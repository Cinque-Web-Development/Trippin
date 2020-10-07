const express = require('express');
const app = express();
const port = 3001;
require("dotenv").config()

const userRouter = require('./routes/users');

app.use('/api/users', userRouter);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});