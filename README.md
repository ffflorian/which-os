# which-os [![Build Status](https://github.com/ffflorian/which-os/workflows/Build/badge.svg)](https://github.com/ffflorian/which-os/actions/) [![npm version](https://img.shields.io/npm/v/@ffflorian/which-os.svg?style=flat)](https://www.npmjs.com/package/@ffflorian/which-os) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ffflorian/which-os)](https://dependabot.com)

Get informations about your OS

## Installation

Run `yarn global add @ffflorian/which-os` or `npm install -g @ffflorian/which-os`.

## Usage

```
Usage: which-os [options]

Get informations about your OS

Options:
  --is-linux     Is the operating system Linux?
  --is-macos     Is the operating system macOS?
  --is-windows   Is the operating system Windows?
  --is-x64       Is the processor architecture x64?
  --is-ia32      Is the processor architecture ia32?
  --is-arm       Is the processor architecture ARM?
  -i, --os-info  Output all OS informations
  -V, --verbose  Enable verbose output
  -v, --version  output the version number
  -h, --help     output usage information
```

## TypeScript Usage

See [`./src/cli.ts`](./src/cli.ts)
