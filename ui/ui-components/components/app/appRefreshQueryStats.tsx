import { Card, Row, Col } from "react-bootstrap";
import { Models } from "../../utils/apiData";

export default function AppRefreshQueryStats({
  app,
  appRefreshQuery,
}: {
  app: Models.AppType;
  appRefreshQuery: Models.AppRefreshQueryType;
}) {
  return (
    <>
      <Card bg="light">
        <Card.Body style={{ textAlign: "center", color: "white" }}>
          <Card.Title>{app.name} Refresh Query</Card.Title>
          <Col>
            <Row>Last Confirmed At: {appRefreshQuery.lastConfirmedAt}</Row>
            <Row>Last Changed At: {appRefreshQuery.lastChangedAt}</Row>
            <Row>Stored Value: {appRefreshQuery.value}</Row>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
}
