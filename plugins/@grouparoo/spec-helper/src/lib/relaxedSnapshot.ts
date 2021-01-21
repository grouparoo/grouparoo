/**
 * I take a complex object and which is to be tested against a Jest snapshot and relax the matchers for any keys matching the regular expressions provided by fieldMatches.
 * By default, all *guid (UUIDs) and *At (timestamps) are relaxed and won't be expected to match in value, only in type (ie: strings=strings).
 * Usage: expect(snapshot).toMatchSnapshot(relaxedSnapshot(snapshot));
 */
export function relaxedSnapshot(
  object: { [key: string]: any },
  fieldMatches = [/^guid$/, /^.+Guid$/, /^.+At$/]
) {
  const matcherExceptions: { [key: string]: any } = {};

  function clean(object, key) {
    if (Object.keys(object[key]).length === 0) delete object[key];
  }

  function resolve(key) {
    let matched = false;
    fieldMatches.forEach((m) => (key.match(m) ? (matched = true) : null));

    if (matched) {
      if (object[key] instanceof Date) {
        matcherExceptions[key] = expect.any(Date);
      } else if (typeof object[key] === "number") {
        matcherExceptions[key] = expect.any(Number);
      } else if (typeof object[key] === "string") {
        matcherExceptions[key] = expect.any(String);
      } else if (typeof object[key] === "boolean") {
        matcherExceptions[key] = expect.any(Boolean);
      }
    }
  }

  for (const key in object) {
    const item = object[key];
    if (item === null || item === undefined) {
      continue;
    } else if (Array.isArray(item)) {
      matcherExceptions[key] = item
        .map((e) =>
          typeof e === "object" && !(e instanceof Date)
            ? relaxedSnapshot(e, fieldMatches)
            : resolve(key)
        )
        .filter((e) => e !== undefined);
      clean(matcherExceptions, key);
    } else if (typeof item === "object" && !(item instanceof Date)) {
      matcherExceptions[key] = {};
      for (const j in item) {
        matcherExceptions[key][j] = relaxedSnapshot(item[j], fieldMatches);
        clean(matcherExceptions[key], j);
      }
      clean(matcherExceptions, key);
    } else {
      resolve(key);
    }
  }

  return matcherExceptions;
}
