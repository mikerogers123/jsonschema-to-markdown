#!/usr/bin/env node

import yargs = require('yargs');

const argv = yargs.options({
  src: { type: 'string', default: '' },
  dest: { type: 'string', default: '' }
}).argv;

interface Options {
  src?: string,
  dest?: string
}

const run = (o: Options) => {
  console.log(o.src);
  console.log(o.dest);
}

run({
  ...argv
});

