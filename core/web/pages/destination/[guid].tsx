import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import DestinationEditForm from "../../components/forms/destination/edit";
import DestinationData from "../../components/forms/destination/data";
import ExportsList from "../../components/lists/exports";
import { useApi } from "./../../hooks/useApi";

import { DestinationAPIData } from "../../utils/apiData";

export default function (props) {
  const [destination, setDestination] = useState<DestinationAPIData>({});
  const { execApi } = useApi(props.errorHandler);

  useEffect(() => {
    load();

    props.destinationHandler.subscribe("tabs", () => {
      load();
    });

    return () => {
      props.destinationHandler.unsubscribe("tabs");
    };
  }, []);

  async function load() {
    const response = await execApi("get", `/destination/${props.query.guid}`);
    if (response?.destination) {
      setDestination(response.destination);
    }
  }

  return (
    <TabbedContainer
      name={destination.name}
      errorHandler={props.errorHandler}
      type="destination"
      defaultTab={destination.state === "draft" ? "edit" : "data"}
      query={props.query}
    >
      <Fragment key="edit">
        <h1>Edit Destination</h1>
        <Card border="success">
          <Card.Body>
            <DestinationEditForm {...props} />
          </Card.Body>
        </Card>
      </Fragment>

      {destination.state !== "draft" ? (
        <Fragment key="data">
          <DestinationData {...props} />
        </Fragment>
      ) : null}

      {destination.state !== "draft" ? (
        <Fragment key="exports">
          <h1>Exports</h1>
          <ExportsList {...props} />
        </Fragment>
      ) : null}
    </TabbedContainer>
  );
}
