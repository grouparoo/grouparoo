import TabbedContainer from "../../../components/layouts/tabbedContainer";
import { useState, useEffect, Fragment } from "react";
import { Card } from "react-bootstrap";
import { useApi } from "../../../hooks/useApi";
import SourceOverview from "../../../components/forms/source/overview";
import SourceEdit from "../../../components/forms/source/edit";
import SourceMapping from "../../../components/forms/source/mapping";
import ScheduleEditForm from "../../../components/forms/schedule/edit";
import RunsList from "../../../components/lists/runs";

export default function (props) {
  const { query, errorHandler, apiVersion } = props;
  const { guid } = query;
  const { execApi } = useApi(errorHandler);
  const [source, setSource] = useState({ schedule: { guid: "" } });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi("get", `/api/${apiVersion}/source/${guid}`);
    setSource(response.source);
  }

  const hasSchedule =
    source?.schedule?.guid && source?.schedule?.guid !== "" ? true : false;

  return (
    <TabbedContainer
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="source"
      defaultTab="overview"
      query={props.query}
    >
      <Fragment key="overview">
        <SourceOverview {...props} />
      </Fragment>

      <Fragment key="edit">
        <Card border="success">
          <Card.Body>
            <SourceEdit {...props} />
          </Card.Body>
        </Card>
      </Fragment>

      <Fragment key="mapping">
        <SourceMapping {...props} />
      </Fragment>

      {hasSchedule ? (
        <Fragment key="schedule">
          <h1>Edit Schedule</h1>
          <Card border="success">
            <Card.Body>
              <ScheduleEditForm {...props} />
            </Card.Body>
          </Card>
        </Fragment>
      ) : null}

      {hasSchedule ? (
        <Fragment key="runs">
          <h1>Runs</h1>
          <RunsList {...props} />
        </Fragment>
      ) : null}
    </TabbedContainer>
  );
}
