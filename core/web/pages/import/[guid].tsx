import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import ImportEdit from "../../components/forms/import/edit";

export default function (props) {
  return (
    <TabbedContainer
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="import"
      defaultTab="edit"
      query={props.query}
    >
      <Fragment key="edit">
        <Card border="success">
          <Card.Body>
            <ImportEdit {...props} />
          </Card.Body>
        </Card>
      </Fragment>
    </TabbedContainer>
  );
}
