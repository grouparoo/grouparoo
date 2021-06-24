// Inspired by https://stackoverflow.com/questions/6525538/convert-utc-date-time-to-local-date-time

export function formatTimestamp(
  timestamp: string | number | Date,
  displayInUTC = false
) {
  if (!timestamp || timestamp === "") return "";

  const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
  const offset = !displayInUTC ? date.getTimezoneOffset() * 60 * 1000 : 0;
  return new Date(date.getTime() - offset)
    .toJSON()
    .slice(0, 19)
    .replace("T", " ");
}
