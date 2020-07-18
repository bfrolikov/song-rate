const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mainRouter = require('./controllers/main');

app.use(bodyParser.json());
app.use(express.static('build'))
app.use('/api', mainRouter);

module.exports = app;