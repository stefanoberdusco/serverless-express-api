const app = require('./src/app');
const config = require('./src/config');

const port = config.port || 3000;

app.listen(port, () => console.log(`${config.name} listening on port ${port}`));
