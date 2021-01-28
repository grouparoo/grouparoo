import { Row, Col } from "react-bootstrap";
import { ResponsiveLine } from "@nivo/line";
import { Models } from "../../utils/apiData";

const NodeMoment = require("moment");

export default function RunDurationChart({ runs }: { runs: Models.RunType[] }) {
  const chartData = [];
  const typeTotals = {};

  runs.map((run) => {
    const type = run.creatorType;
    if (run.completedAt) {
      if (!typeTotals[type]) {
        typeTotals[type] = [];
      }
      const start = NodeMoment(run.createdAt).format("YYYY-MM-DDTHH:mm:ss");
      const durationMinutes =
        (new Date(run.completedAt).getTime() -
          new Date(run.createdAt).getTime()) /
        1000 /
        60;
      typeTotals[type].push({ x: start, y: durationMinutes });
    }
  });

  for (const type in typeTotals) {
    chartData.push({
      id: type,
      data: typeTotals[type].sort((a, b) => {
        return a.x - b.x;
      }),
    });
  }

  if (chartData.length === 0) {
    return null;
  }

  return (
    <Row>
      <Col md={12} style={{ height: 450 }}>
        <h3>Run Duration Times</h3>
        <ResponsiveLine
          data={chartData}
          colors={{ scheme: "category10" }}
          useMesh={true}
          animate={false}
          margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
          curve={"monotoneX"}
          lineWidth={3}
          pointSize={5}
          xScale={{
            type: "time",
            format: "%Y-%m-%dT%H:%M:%S",
            precision: "second",
          }}
          xFormat="time:%Y-%m-%dT%H:%M:%S"
          yScale={{
            type: "linear",
          }}
          axisBottom={{
            format: "%Y-%m-%d %H:%M",
            tickValues: 5,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "minutes",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Col>
    </Row>
  );
}
