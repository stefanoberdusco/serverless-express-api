const express = require('express');
const config = require('../../config/config');

const router = express.Router();

router.get('/healthcheck', (req, res) => {
  const heartbeat = {
    name: config.name,
    time: Date.now(),
  };
  res.json(heartbeat);
});

module.exports = router;
