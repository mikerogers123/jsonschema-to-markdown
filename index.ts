#!/usr/bin/env node

import { program } from 'commander';

program
  .version('0.0.1')
  .description('A CLI for generating markdown from JSON')
  .option('-s, --source', 'Path to the JSON files, used for generating to markdown')
  .option('-d, --destination', 'Directory to send the output markdown files to');

program.outputHelp();