import { ContainerWidthSizer } from "../../utils/ContainerWidthSizer";
import {
  VictoryChart,
  VictoryLine,
  VictoryLegend,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from "victory";
import { ChartColors } from "./chartColors";

export type ChartLinData = { x: number; y: number }[][];

export function GrouparooChart({
  data,
  keys,
  minPoints,
  missingPointSpread,
  animate,
  interpolation,
}: {
  data: ChartLinData;
  keys: string[];
  minPoints?: number;
  missingPointSpread?: number;
  animate?: boolean;
  interpolation?:
    | "linear"
    | "natural"
    | "basis"
    | "basisClosed"
    | "basisOpen"
    | "bundle"
    | "cardinal"
    | "cardinalClosed"
    | "cardinalOpen";
}) {
  if (!data || data.length < 1) return null;
  if (!minPoints) minPoints = 2;
  if (!missingPointSpread) missingPointSpread = 1000; // 1 second

  let yMax = 1.25;

  data.forEach((line) => {
    // ensure the x-axis points are sorted
    line = line.sort((a, b) => {
      return a.x - b.x;
    });

    line.forEach((point) => {
      if (point.y > yMax) yMax = point.y + point.y / 10; // add 10% more to show the rounded curve top
    });

    while (line.length < minPoints) {
      line.unshift({ x: line[0].x - missingPointSpread, y: 0 });
    }
  });

  return (
    <ContainerWidthSizer>
      {({ width, height }) => (
        <VictoryChart
          width={width}
          height={height}
          domainPadding={{ x: 25 }}
          theme={VictoryTheme.material}
          scale={{ x: "time" }}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={({ datum }) => {
                const lineId = parseInt(datum.childName.split("-")[2]) - 1;
                return `${keys[lineId]}: ${datum.y}`;
              }}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={0}
                  flyoutStyle={{ fill: "white" }}
                />
              }
            />
          }
          animate={animate ? { duration: 500 } : undefined}
        >
          <VictoryLegend
            centerTitle
            orientation="horizontal"
            gutter={20}
            x={10}
            y={10}
            data={keys.map((k, idx) => {
              return {
                name: k,
                symbol: { fill: ChartColors[idx] },
              };
            })}
          />
          {data.map((lineData, idx) => (
            <VictoryLine
              key={`line-${idx}`}
              data={lineData}
              style={{ data: { stroke: ChartColors[idx], strokeWidth: 4 } }}
              interpolation={interpolation || "natural"}
              domain={{ y: [0, yMax] }}
            />
          ))}
        </VictoryChart>
      )}
    </ContainerWidthSizer>
  );
}
