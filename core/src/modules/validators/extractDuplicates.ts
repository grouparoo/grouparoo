/**
 * Extracts duplicate items from an array and returns unique duplicate values
 * (i.e. only one version of each duplicate).
 *
 * @param objects An array of strings or objects to test for validation.
 * @param key (optional) If the array is an array of objects, use this property
 * to locate duplicates.
 */
export default function extractDuplicates(
  objects: any[],
  key?: string
): string[] {
  const values: string[] = key ? objects.map((obj) => obj[key]) : objects;
  const onlyUnique = (value, index, self) => self.indexOf(value) === index;
  const onlyDuplicates = (value, index, self) => self.indexOf(value) !== index;
  const duplicates = values.filter(onlyDuplicates).filter(onlyUnique);
  return duplicates;
}
