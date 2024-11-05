require('dotenv').config();
const app = require('./app.js');
const logger = require('./logger.js');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
