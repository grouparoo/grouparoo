import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import DestinationEditForm from "../../components/forms/destination/edit";
import DestinationMappings from "../../components/forms/destination/mapping";
import DestinationGroups from "../../components/forms/destination/groups";
import ExportsList from "../../components/lists/exports";
import { useApi } from "./../../hooks/useApi";

export default function (props) {
  const [destination, setDestination] = useState({ name: "" });
  const { execApi } = useApi(props.errorHandler);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      `/api/${props.apiVersion}/destination/${props.query.guid}`
    );
    if (response?.destination) {
      setDestination(response.destination);
    }
  }

  return (
    <TabbedContainer
      name={destination.name}
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="destination"
      defaultTab="exports"
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

      <Fragment key="groups">
        <h1>Groups</h1>
        <DestinationGroups {...props} />
      </Fragment>

      <Fragment key="exports">
        <h1>Exports</h1>
        <ExportsList {...props} />
      </Fragment>

      <Fragment key="mapping">
        <h1>Mapping</h1>
        <DestinationMappings {...props} />
      </Fragment>
    </TabbedContainer>
  );
}
