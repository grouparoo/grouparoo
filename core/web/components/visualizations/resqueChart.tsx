import { ResponsiveLine } from "@nivo/line";

const colors = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
];

function Chart({ data, queueNames }) {
  const formattedData = { _total: [] };

  queueNames.forEach((q) => {
    formattedData[q] = [];
  });

  data.forEach((sample) => {
    let total = 0;
    queueNames.forEach((q) => {
      formattedData[q].push({ x: sample.time, y: sample[q] });
      total += sample[q];
    });
    formattedData._total.push({ x: sample.time, y: total });
  });

  const chartData = [
    { id: "total", data: formattedData._total, color: "#DDD" },
  ];
  queueNames
    .sort()
    .reverse()
    .forEach((q, idx) => {
      chartData.push({
        id: q,
        data: formattedData[q],
        color: colors[idx],
      });
    });

  return (
    <ResponsiveLine
      data={chartData}
      enableSlices={"x"}
      useMesh={true}
      animate={false}
      margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
      colors={{ datum: "color" }}
      curve={"monotoneX"}
      lineWidth={3}
      pointSize={5}
      xScale={{
        type: "time",
        format: "native",
        precision: "second",
      }}
      xFormat="time:%H:%M:%S"
      yScale={{
        type: "linear",
      }}
      axisBottom={{
        format: "%H:%M:%S",
        tickValues: "every 5 seconds",
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
  );
}

export default Chart;
