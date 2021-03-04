export function truncate(string: string, maxCharacters: number) {
  if (string.length <= maxCharacters) return string;
  return `${string.slice(0, maxCharacters)}...`;
}
