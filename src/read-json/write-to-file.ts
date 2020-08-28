import fs = require('fs');
import path = require('path');
import { MarkdownGenerationResult } from 'src/markdown/generation-result';
import { log } from '../logging/logger';

export const writeMarkdownToDirectory = (directoryPath: string, result: MarkdownGenerationResult) => {
  log(`Writing ${result.markdown}`);

  const fileName = `${result.schema.title}.md`

  const filePath = path.join(directoryPath, fileName);

  fs.writeFile(filePath, result.markdown, (err) => {
    if (err) throw err;
  });
};
