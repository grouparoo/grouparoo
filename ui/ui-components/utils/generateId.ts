export function generateId(name, separator: string = "_"): string {
  if (!name || name.length === 0) return;
  const id = name
    .toLowerCase()
    // replace bad characters with a space
    .replace(/[^a-zA-Z0-9\-_ ]/g, " ")
    // remove spaces from beginning and end
    .trim()
    // replace spaces with underscore
    .replace(/[ ]/g, separator)
    // replace multiple word separators with an underscore
    .replace(/[\-_ ][\-_ ]+/g, separator);
  if (id.length === 0) throw new Error("Could not generate ID from name.");
  return id;
}
