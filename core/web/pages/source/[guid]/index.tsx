import TabbedContainer from "../../../components/layouts/tabbedContainer";
import { useState, useEffect, Fragment } from "react";
import { Card } from "react-bootstrap";
import { useApi } from "../../../hooks/useApi";
import SourceOverview from "../../../components/forms/source/overview";
import SourceEdit from "../../../components/forms/source/edit";
import SourceMapping from "../../../components/forms/source/mapping";
import ScheduleEditForm from "../../../components/forms/schedule/edit";
import RunsList from "../../../components/lists/runs";

import { SourceAPIData } from "../../../utils/apiData";

export default function (props) {
  const { query, errorHandler } = props;
  const { guid } = query;
  const { execApi } = useApi(errorHandler);
  const [source, setSource] = useState<SourceAPIData>({});

  useEffect(() => {
    load();

    props.sourceHandler.subscribe("tabs", () => {
      load();
    });

    return () => {
      props.sourceHandler.unsubscribe("tabs");
    };
  }, []);

  async function load() {
    const response = await execApi("get", `/source/${guid}`);
    setSource(response.source);
  }

  const hasSchedule =
    source?.schedule?.guid && source?.schedule?.guid !== "" ? true : false;

  return (
    <TabbedContainer
      name={source.name}
      errorHandler={props.errorHandler}
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

      {source.previewAvailable && !source.connection.skipSourceMapping ? (
        <Fragment key="mapping">
          <SourceMapping {...props} />
        </Fragment>
      ) : null}

      {hasSchedule && source.state !== "draft" ? (
        <Fragment key="schedule">
          <h1>Edit Schedule</h1>
          <Card border="success">
            <Card.Body>
              <ScheduleEditForm {...props} />
            </Card.Body>
          </Card>
        </Fragment>
      ) : null}

      {hasSchedule && source.state !== "draft" ? (
        <Fragment key="runs">
          <h1>Runs</h1>
          <RunsList {...props} />
        </Fragment>
      ) : null}
    </TabbedContainer>
  );
}
