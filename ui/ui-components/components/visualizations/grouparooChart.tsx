import { ContainerWidthSizer } from "../../utils/ContainerWidthSizer";
import { ChartColors } from "./ChartColors";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import Loader from "../Loader";

export type ChartLinData = { x: number; y: number }[][];

function pad(n: number) {
  return n.toString().length === 2 ? `${n}` : `0${n}`;
}

function buildTimeLabel(t: number) {
  const date = new Date(t);
  return (
    date.getUTCFullYear() +
    "-" +
    pad(date.getUTCMonth() + 1) +
    "-" +
    pad(date.getUTCDate()) +
    " " +
    pad(date.getUTCHours()) +
    ":" +
    pad(date.getUTCMinutes()) +
    ":" +
    pad(date.getUTCSeconds())
  );
}

export function GrouparooChart({
  data,
  keys,
  interpolation,
}: {
  data: ChartLinData;
  keys: string[];
  interpolation?:
    | "basis"
    | "linear"
    | "linearClosed"
    | "natural"
    | "monotone"
    | "step";
}) {
  if (keys.length === 0) return <Loader />;

  const formattedData: {
    [key: string]: number | string;
    time: number;
  }[] = [];

  let lineId = 0;
  for (const line of data) {
    let title = keys[lineId];
    for (const point of line) {
      const existingPoint = formattedData.find((p) => p.time === point.x);
      if (existingPoint) {
        const idx = formattedData.indexOf(existingPoint);
        formattedData.splice(idx, 1, { ...existingPoint, [title]: point.y });
      } else {
        formattedData.push({
          time: point.x,
          [title]: point.y,
        });
      }
    }
    lineId++;
  }

  formattedData.sort((a, b) => a.time - b.time);
  const minX = formattedData.length > 0 ? formattedData[0].time : 0;
  const maxX =
    formattedData.length > 1 ? formattedData[formattedData.length - 1].time : 1;

  return (
    <ContainerWidthSizer>
      {({ width, height }) => (
        <LineChart
          width={width}
          height={height}
          data={formattedData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          layout={"horizontal"}
        >
          {keys.map((k, idx) => (
            <Line
              key={`line-${k}`}
              type={interpolation ?? "monotone"}
              dataKey={k}
              stroke={ChartColors[idx]}
              strokeWidth={3}
              dot={{ stroke: ChartColors[idx], strokeWidth: 1 }}
              isAnimationActive={false}
            />
          ))}

          <CartesianGrid stroke="#ddd" strokeDasharray="5 5" />
          <XAxis
            dataKey="time"
            domain={[minX, maxX]}
            type="number"
            tickFormatter={buildTimeLabel}
          />
          <YAxis />
          <Tooltip labelFormatter={(t) => `@ ${buildTimeLabel(t)}`} />
          <Legend align="center" />
        </LineChart>
      )}
    </ContainerWidthSizer>
  );
}
