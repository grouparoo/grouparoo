import { Actions } from "../utils/apiData";

export function filtersAreEqual(
  a:
    | Actions.PropertyView["property"]["filters"][0]
    | Actions.ScheduleView["schedule"]["filters"][0],
  b:
    | Actions.PropertyView["property"]["filters"][0]
    | Actions.ScheduleView["schedule"]["filters"][0]
) {
  let matched = true;

  const keys = [
    "key",
    "op",
    "match",
    "relativeMatchNumber",
    "relativeMatchUnit",
    "relativeMatchDirection",
  ];

  if (!a || !b) return false;

  for (const i in keys) {
    const key = keys[i];

    if (
      (a[key] === undefined || a[key] == null) &&
      (b[key] === undefined || b[key] == null)
    ) {
      continue;
    }

    if (a[key] !== b[key]) {
      matched = false;
      break;
    }
  }

  return matched;
}
