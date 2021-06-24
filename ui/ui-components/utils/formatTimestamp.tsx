export function formatTimestamp(timestamp: string | number | Date) {
  if (!timestamp || timestamp === "") return "";

  const [date, time] = (
    timestamp instanceof Date ? timestamp : new Date(timestamp)
  )
    .toLocaleString()
    .split(",");

  return `${date} ${time}`;
}
