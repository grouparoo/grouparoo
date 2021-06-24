export function formatTimestamp(timestamp: number | Date) {
  if (!timestamp) return "";

  const [date, time] = (
    timestamp instanceof Date ? timestamp : new Date(timestamp)
  )
    .toLocaleString()
    .split(",");

  return `${date} ${time}`;
}
