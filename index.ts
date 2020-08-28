#!/usr/bin/env node

import yargs = require('yargs');
import { generate } from 'src/generate-markdown';

const argv = yargs.options({
  src: { type: 'string', default: '' },
  dest: { type: 'string', default: '' }
}).argv;

generate(argv);

