export function ensureNoTsHeaderFiles(files: string[]): string[] {
  return files.filter((f) => {
    if (f.match(/.*\.d\.ts$/)) {
      return false;
    } else {
      return true;
    }
  });
}
