import { log } from './logging/logger';
import { CliOptions } from './cli-options';

export const generate = (options: CliOptions) => {
  log(options.src);
  log(options.dest);
};
