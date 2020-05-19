import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import EventEdit from "../../components/forms/event/edit";
import { useApi } from "../../hooks/useApi";

import { EventAPIData } from "../../utils/apiData";

export default function (props) {
  const [event, setEvent] = useState<EventAPIData>({});
  const { execApi } = useApi(props.errorHandler);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      `/api/${props.apiVersion}/event/${props.query.guid}`
    );
    if (response?.event) {
      setEvent(response.event);
    }
  }

  return (
    <TabbedContainer
      name={event.guid}
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="event"
      defaultTab="edit"
      query={props.query}
    >
      <Fragment key="edit">
        <Card border="success">
          <Card.Body>
            <EventEdit {...props} />
          </Card.Body>
        </Card>
      </Fragment>
    </TabbedContainer>
  );
}
