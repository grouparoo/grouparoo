export function titleize(str: string): string {
  return str
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[\w]|[ _-]\w/g, (m) => {
      return m.toUpperCase();
    });
}
