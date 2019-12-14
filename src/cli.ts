#!/usr/bin/env node

import * as program from 'commander';
import {inspect} from 'util';
import * as whichOS from './which-os';

const {description, name, version} = require('../package.json');

const capitalize = (name: string): string => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

const options = [
  {
    category: 'osType',
    description: 'Is the operating system Linux?',
    fn: whichOS.isLinux,
    short: 'linux',
  },
  {
    category: 'osType',
    description: 'Is the operating system macOS?',
    fn: whichOS.isMacOS,
    short: 'macos',
  },
  {
    category: 'osType',
    description: 'Is the operating system Windows?',
    fn: whichOS.isWindows,
    short: 'windows',
  },
  {
    category: 'archType',
    description: 'Is the processor architecture x64?',
    fn: whichOS.isX64,
    short: 'x64',
  },
  {
    category: 'archType',
    description: 'Is the processor architecture ia32?',
    fn: whichOS.isIA32,
    short: 'ia32',
  },
  {
    category: 'archType',
    description: 'Is the processor architecture ARM?',
    fn: whichOS.isARM,
    short: 'arm',
  },
];

for (const option of options) {
  program.option(`--is-${option.short}`, option.description);
}

program
  .name(name.replace(/^@[^/]+\//, ''))
  .option('-i, --os-info', 'Output all OS informations')
  .option('-V, --verbose', 'Enable verbose output')
  .description(description)
  .version(version, '-v, --version')
  .parse(process.argv);

if (program.osInfo) {
  console.log(inspect(whichOS.getOsInfo(), true, Infinity, true));
  process.exit();
}

let archResult = null;
let osResult = null;

for (const option of options) {
  const command = `is${capitalize(option.short)}`;
  if (typeof program[command] !== 'undefined') {
    const result = option.fn();
    if (!!program.verbose) {
      console.log(option.description, result);
    }
    if (option.category === 'archType') {
      archResult = result;
    } else if (option.category === 'osType') {
      osResult = result;
    }
  }
}

if (osResult === null && archResult === null) {
  program.help();
}

if (osResult === false || archResult === false) {
  process.exit(1);
} else {
  process.exit(0);
}
