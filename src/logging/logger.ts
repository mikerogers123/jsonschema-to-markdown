import winston = require('winston');

const fileName = process.env.npm_package_config_logoutput;

export const log = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: fileName })
  ]
});

export const logBreak = () => log.info('----------------------------------------------------');

export const logChunk = (logFn: () => void) => {
  logBreak();

  logFn();

  logBreak();
};
