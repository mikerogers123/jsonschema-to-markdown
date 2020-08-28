#!/usr/bin/env node

import yargs = require('yargs');
import { run } from './src/run';

const argv = yargs.options({
  src: { type: 'string', default: '' },
  dest: { type: 'string', default: '' }
}).argv;

run(argv);

