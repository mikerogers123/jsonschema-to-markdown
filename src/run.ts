import { log, logChunk } from './logging/logger';
import { CliOptions } from './cli-options';
import { parseSchema as resolveSchema } from './read-json/resolve-schema';
import { validateSchema } from './validation/validate-schema';
import { LogCategory } from './logging/log-category';
import { generateMarkdown } from './markdown/generate';
import { writeMarkdownToDirectory } from './read-json/write-to-file';

const openingLog = (options: CliOptions) => {
  logChunk(() => {
    log(`Source JSON schema located at ${options.src}`);
    log(`Markdown to be stored in ${options.dest}`);
  });
};

export const run = (options: CliOptions) => {
  openingLog(options);

  resolveSchema(options.src)
    .then(validateSchema)
    .then(generateMarkdown)
    .then(res => writeMarkdownToDirectory(options.dest, res))
    .catch((err) => log(err.message, LogCategory.Error));
};
