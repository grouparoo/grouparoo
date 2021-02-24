// import { ResponsiveLine } from "@nivo/line";
import { Fragment } from "react";
import { ContainerWidthSizer } from "../../utils/ContainerWidthSizer";
import {
  VictoryChart,
  VictoryLine,
  VictoryLegend,
  VictoryTheme,
} from "victory";
// import { useState, useEffect } from "react";

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

export default function Chart({ data, keys }) {
  const LineData: { x: number; y: number }[][] = [];
  keys.forEach((k) => {
    const yData: number[] = data.map((d) => d[k]);
    const xData: number[] = data.map((d) => d["time"]);
    const _data = xData.map((x, idx) => {
      return { x, y: yData[idx] };
    });
    LineData.push(_data);
  });

  console.log(LineData);

  return
  (  <ContainerWidthSizer>
    {({ width }) => (
        <VictoryChart
        height={box.height} width={width}
      // width={1000}
      domainPadding={{ x: 25 }}
      // padding={{ top: 50, bottom: 50, right: 0, left: 50 }}
      theme={VictoryTheme.material}
      // animate={{ duration: 500 }}
    >
      <VictoryLegend
        orientation="vertical"
        gutter={20}
        data={keys.map((k, idx) => {
          return {
            name: k,
            symbol: { fill: colors[idx] },
          };
        })}
      />
      {LineData.map((lineData, idx) => (
        <VictoryLine
          key={`line-${idx}`}
          data={lineData}
          style={{ data: { stroke: colors[idx] } }}
          interpolation="natural"
        />
      ))}

      {/* <VictoryLine
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 6 },
        ]}
      /> */}
    </VictoryChart></ContainerWidthSizer>)



  );

  // const [chartData, setChartData] = useState([]);
  // console.log(data);
  // useEffect(() => {
  //   processData();
  // }, [data, keys]);
  // function processData() {
  //   const formattedData = { _total: [] };
  //   keys.forEach((q) => {
  //     formattedData[q] = [];
  //   });
  //   data.forEach((sample) => {
  //     let total = 0;
  //     keys.forEach((q) => {
  //       formattedData[q].push({ x: sample.time, y: sample[q] });
  //       total += sample[q];
  //     });
  //     formattedData._total.push({ x: sample.time, y: total });
  //   });
  //   const _chartData = [
  //     { id: "total", data: formattedData._total, _color: "#DDD" },
  //   ];
  //   keys
  //     .sort()
  //     .reverse()
  //     .forEach((q, idx) => {
  //       _chartData.push({
  //         id: q,
  //         data: formattedData[q],
  //         _color: colors[idx],
  //       });
  //     });
  //   setChartData(_chartData);
  // }
  // return (
  //   <ResponsiveLine
  //     data={chartData}
  //     enableSlices={"x"}
  //     useMesh={true}
  //     //@ts-ignore
  //     animate={false}
  //     margin={{ top: 40, right: 150, bottom: 40, left: 50 }}
  //     colors={{ datum: "_color" }}
  //     curve={"monotoneX"}
  //     lineWidth={3}
  //     pointSize={5}
  //     xScale={{
  //       type: "time",
  //       format: "native",
  //       precision: "second",
  //     }}
  //     xFormat="time:%H:%M:%S"
  //     yScale={{
  //       type: "linear",
  //     }}
  //     axisBottom={{
  //       format: "%H:%M:%S",
  //       tickValues: "every 5 seconds",
  //     }}
  //     legends={[
  //       {
  //         anchor: "bottom-right",
  //         direction: "column",
  //         justify: false,
  //         translateX: 100,
  //         translateY: 0,
  //         itemsSpacing: 0,
  //         itemDirection: "left-to-right",
  //         itemWidth: 80,
  //         itemHeight: 20,
  //         itemOpacity: 0.75,
  //         symbolSize: 12,
  //         symbolShape: "circle",
  //         symbolBorderColor: "rgba(0, 0, 0, .5)",
  //         effects: [
  //           {
  //             on: "hover",
  //             style: {
  //               itemBackground: "rgba(0, 0, 0, .03)",
  //               itemOpacity: 1,
  //             },
  //           },
  //         ],
  //       },
  //     ]}
  //   />
  // );
}
