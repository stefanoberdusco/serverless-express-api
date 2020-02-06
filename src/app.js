const serverless = require('serverless-http');
const express = require('express');
const config = require('./config');

const app = express();
app.get('/', (req, res) => {
  const heartbeat = {
    name: config.name,
    time: Date.now()
  };
  res.json(heartbeat);
});

module.exports = app;
