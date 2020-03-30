import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import DestinationEditForm from "../../components/forms/destination/edit";
import DestinationMappings from "../../components/forms/destination/mapping";
import ExportsList from "../../components/lists/exports";

export default function (props) {
  return (
    <TabbedContainer
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
