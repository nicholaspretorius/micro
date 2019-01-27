require("dotenv").config();
const root = require("app-root-path");
const winston = require("winston");

// define 'winston' config options
const options = {
  file: {
    level: process.env.LOG_LEVEL || "info",
    filename: `${root}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: process.env.LOG_LEVEL || "debug",
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

// instantiate 'winston' logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false
});

// create a stream object with a 'write' function that will be used by 'morgan'
logger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports
    logger.info(message);
  }
};

module.exports = logger;
