import Moment from "react-moment";

export function DurationTime({ start, end }: { start: number; end: number }) {
  if (!start || !end) return <>pending</>;
  if (start === end) end++; // moment needs a non-0 delta to calculate a range
  return <Moment duration={start} date={end} />;
}
