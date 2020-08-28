#!/usr/bin/env node

import yargs = require('yargs');
import { run } from './src/run';

const argv = yargs
  .options({
    s: {
      type: 'string',
      default: '',
      alias: 'source',
      describe: 'The path to the source JSON file. Contents should obey the JSON Schema v3 or v4.'
    }
  })
  .usage('Usage: $0 --source path')
  .example(
    '$0 --source C:\example.json',
    'Returns formatted markdown based on the structure and properties of the example.json file.'
  )
  .argv;

run({src: argv.s}).then(console.log);
