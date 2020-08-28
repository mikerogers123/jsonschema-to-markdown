import winston = require('winston');
import { config } from '../config';

export const log = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: config.logOutput() })
  ]
});

export const logBreak = () => log.info('----------------------------------------------------');

export const logChunk = (logFn: () => void) => {
  logBreak();

  logFn();

  logBreak();
};
