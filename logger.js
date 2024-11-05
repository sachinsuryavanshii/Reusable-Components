const winston = require('winston');

// Set up logger with winston
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

module.exports = logger;
