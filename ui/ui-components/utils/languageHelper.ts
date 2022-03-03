export function humanizePluginName(name: string) {
  name = name.replace(/-/g, " ");
  name = name.replace(/_/g, " ");
  const words = name.toLowerCase().split(" ");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
}

export function capitalize(s: string) {
  return s
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export const kebabCase = (str: string) => str.replace(/\ /g, "-").toLowerCase();

export const snakeCase = (str: string) => str.replace(/\ /g, "_").toLowerCase();
