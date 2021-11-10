import { GrouparooChart, ChartLinData } from "./GrouparooChart";
import { Models } from "../../utils/apiData";

export default function RunDurationChart({ runs }: { runs: Models.RunType[] }) {
  const chartData: ChartLinData = [];

  const types: string[] = [];
  runs.map((run) => {
    if (!types.includes(run.creatorType)) types.push(run.creatorType);
  });

  runs
    .sort((a, b) => {
      return (
        new Date(b.completedAt || 0).getTime() -
        new Date(a.completedAt || 0).getTime()
      );
    })
    .map((run) => {
      const type = run.creatorType;
      const idx = types.indexOf(type);
      if (!chartData[idx]) chartData[idx] = [];

      if (run.completedAt) {
        const start = new Date(run.createdAt).getTime();
        const durationMinutes =
          Math.round(
            (new Date(run.completedAt).getTime() -
              new Date(run.createdAt).getTime()) /
              10 /
              60
          ) / 100;

        chartData[idx].push({ x: start, y: durationMinutes });
      }
    });

  if (chartData.length === 0) {
    return null;
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <GrouparooChart data={chartData} keys={types} interpolation="linear" />
    </div>
  );
}
