import * as os from 'os';

const platform = os.platform();

export function getOsInfo(): typeof os {
  return os;
}

export const isDarwin = (): boolean => platform === 'darwin';
export const isLinux = (): boolean => platform === 'linux';
export const isWin32 = (): boolean => platform === 'win32';

export {isDarwin as isMacOS, isWin32 as isWin, isWin32 as isWindows};
