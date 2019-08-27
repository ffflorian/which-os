#!/usr/bin/env node

import * as program from 'commander';

import * as whichOS from './which-os';

const {description, name, version} = require('../package.json');

program
  .name(name.replace(/^@[^/]+\//, ''))
  .option('--is-linux')
  .option('--is-macos')
  .option('--is-windows')
  .option('-V, --verbose')
  .description(description)
  .version(version, '-v, --version')
  .parse(process.argv);

let result;

if (program.isLinux) {
  result = whichOS.isLinux();
} else if (program.isMacos) {
  result = whichOS.isMacOS();
} else if (program.Windows) {
  result = whichOS.isWindows();
}

if (result !== undefined && program.verbose) {
  console.log(result);
}

if (result === true) {
  process.exit();
} else if (result === false) {
  process.exit(1);
} else {
  program.help();
}
