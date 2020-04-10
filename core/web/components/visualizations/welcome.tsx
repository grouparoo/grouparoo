import { Jumbotron, Row, Col, Button } from "react-bootstrap";

export default function Welcomes() {
  return (
    <>
      <Jumbotron>
        <h1>Welcome to Grouparoo</h1>
        <p>Hello and welcome to your new Grouparoo Instance!</p>
        <p>
          To get started, please choose one of the options below. Once your
          Grouparoo instance has your first app connected, you will see your
          dashboard here.
        </p>

        <br />

        <Row style={{ textAlign: "center" }}>
          <Col>
            <Button href="/teams">Add Team Members</Button>
          </Col>
          <Col>
            <Button href="/apps">Add Apps</Button>
          </Col>
        </Row>

        <hr />

        <p style={{ textAlign: "center" }}>
          To learn more about Grouparoo or get help, please visit{" "}
          <a href="https://www.grouparoo.com" target="_blank">
            www.grouparoo.com
          </a>
          .
        </p>
      </Jumbotron>
    </>
  );
}
