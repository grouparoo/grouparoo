export function humanizePluginName(name: string) {
  name = name.replace(/-/g, " ");
  name = name.replace(/_/g, " ");
  const words = name.toLowerCase().split(" ");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
}
