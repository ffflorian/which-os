import * as os from 'os';
import * as process from 'process';

const platform = os.platform();

export function getOsInfo(): typeof os {
  return os;
}

export const isDarwin = (): boolean => platform === 'darwin';
export const isLinux = (): boolean => platform === 'linux';
export const isWin32 = (): boolean => platform === 'win32';

export const isX64 = (): boolean => process.arch === 'x64';
export const isARM = (): boolean => process.arch === 'arm';
export const isIA32 = (): boolean => process.arch === 'ia32';

export {isDarwin as isMacOS, isWin32 as isWin, isWin32 as isWindows};
