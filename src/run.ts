import { log, logChunk } from './logging/logger';
import { CliOptions } from './cli-options';
import { parseSchema as resolveSchema } from './read-json/resolve-schema';
import { validateSchema } from './validation/validate-schema';
import { generateMarkdown } from './markdown/generate';

const openingLog = (options: CliOptions) => {
  logChunk(() => {
    log.info(`Source JSON schema located at ${options.src}`);
    log.info(`Markdown to be output to console.`);
  });
};

export const run = (options: CliOptions) => {
  openingLog(options);

  return resolveSchema(options.src)
    .then(validateSchema)
    .then(generateMarkdown)
    .catch((err) => log.error(err.message));
};
