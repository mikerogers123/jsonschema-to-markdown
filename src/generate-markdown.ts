import { log, logBreak } from './logging/logger';
import { CliOptions } from './cli-options';
import { parseSchema } from './read-json/parse-schema';

export const generate = (options: CliOptions) => {
  logBreak();
  log(`Source JSON schema located at ${options.src}`);
  log(`Markdown to be stored in ${options.dest}`);
  logBreak();

  parseSchema(options.src);
};
