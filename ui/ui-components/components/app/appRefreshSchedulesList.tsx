import { ModelsList } from "@grouparoo/core/src/actions/models";
import { Card, Row, Col, ListGroup, Table } from "react-bootstrap";
import { Models } from "../../utils/apiData";
import { formatTimestamp } from "../../utils/formatTimestamp";

export default function AppRefreshQueryScheduleList({
  app,
  schedules,
  runs,
}: {
  app: Models.AppType;
  schedules: Models.ScheduleType[];
  runs: Models.RunType[];
}) {
  const runsByScheduleId: Record<string, Models.RunType>[] = [];

  runs.forEach((run) => {
    runsByScheduleId[run.creatorId] = run;
  });

  return (
    <>
      <Table className="bg-light col-9 p-0 mx-auto mt-3 mb-5">
        <thead>
          <tr>
            <th>Schedule</th>
            <th>Most Recent Run</th>
          </tr>
          {schedules.map((schedule) => {
            return (
              <tr key={schedule.id} style={{ backgroundColor: "#E7EAED" }}>
                <td className="border-light">{schedule.name}</td>
                <td className="border-light">
                  {formatTimestamp(runsByScheduleId[schedule.id].createdAt)}
                </td>
              </tr>
            );
          })}
        </thead>
      </Table>
    </>
  );
}
