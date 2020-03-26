import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import RunEdit from "../../components/forms/run/edit";

export default function (props) {
  return (
    <TabbedContainer
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="run"
      defaultTab="edit"
      query={props.query}
    >
      <Fragment key="edit">
        <Card border="success">
          <Card.Body>
            <RunEdit {...props} />
          </Card.Body>
        </Card>
      </Fragment>
    </TabbedContainer>
  );
}
