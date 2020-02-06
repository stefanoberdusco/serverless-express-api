const config = require('../config/config');
const app = require('./app');

const port = config.port || 3000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`${config.name} listening on port ${port}`));
