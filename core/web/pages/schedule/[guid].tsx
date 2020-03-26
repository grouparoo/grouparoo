import TabbedContainer from "../../components/layouts/tabbedContainer";
import { useState, useEffect, Fragment } from "react";
import { Card, Alert } from "react-bootstrap";
import ScheduleEditForm from "../../components/forms/schedule/edit";
import RunsList from "../../components/lists/runs";
import { useApi } from "../../hooks/useApi";
import Link from "next/link";

export default function (props) {
  const { query, errorHandler, apiVersion } = props;
  const { guid } = query;
  const { execApi } = useApi(errorHandler);
  const [schedule, setSchedule] = useState({ source: { name: "", guid: "" } });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      `/api/${apiVersion}/schedule/${guid}`
    );
    setSchedule(response.schedule);
  }

  return (
    <>
      <Alert variant="info">
        <Link href="/source/[guid]" as={`/source/${schedule.source.guid}`}>
          <a>↞ Back to Source {schedule.source.name}</a>
        </Link>
      </Alert>

      <TabbedContainer
        errorHandler={props.errorHandler}
        apiVersion={props.apiVersion}
        type="schedule"
        defaultTab="runs"
        query={props.query}
      >
        <Fragment key="edit">
          <h1>Edit Schedule</h1>
          <Card border="success">
            <Card.Body>
              <ScheduleEditForm {...props} />
            </Card.Body>
          </Card>
        </Fragment>

        <Fragment key="runs">
          <h1>Runs</h1>
          <RunsList {...props} />
        </Fragment>
      </TabbedContainer>
    </>
  );
}
