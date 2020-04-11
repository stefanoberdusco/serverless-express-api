const express = require('express');
const routes = require('./routes');

const app = express();
app.use('/api', routes.api);

module.exports = app;
