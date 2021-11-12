import { ModelsList } from "@grouparoo/core/src/actions/models";
import { Card, Row, Col, ListGroup, Table } from "react-bootstrap";
import Link from "next/link";
import { Models } from "../../utils/apiData";
import { formatTimestamp } from "../../utils/formatTimestamp";

export default function AppRefreshQueryScheduleList({
  app,
  schedules,
  runs,
  sources,
}: {
  app: Models.AppType;
  schedules: Models.ScheduleType[];
  runs: Models.RunType[];
  sources: Models.SourceType[];
}) {
  const runsByScheduleId: Record<string, Models.RunType>[] = [];
  const sourcesById: Record<string, Models.SourceType>[] = [];
  runs.forEach((run) => {
    runsByScheduleId[run.creatorId] = run;
  });
  sources.forEach((source) => {
    sourcesById[source.id] = source;
  });

  return (
    <>
      <Table className="bg-light p-0 mx-auto mt-3 mb-5">
        <thead>
          <tr>
            <th>Schedule</th>
            <th>Most Recent Run</th>
          </tr>
          {schedules.map((schedule) => {
            return (
              <tr key={schedule.id} style={{ backgroundColor: "#E7EAED" }}>
                <td className="border-light">
                  <Link
                    href={`/model/${
                      sourcesById[schedule.sourceId].modelId
                    }/source/${schedule.sourceId}/schedule`}
                  >
                    {schedule.name}
                  </Link>
                </td>
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
