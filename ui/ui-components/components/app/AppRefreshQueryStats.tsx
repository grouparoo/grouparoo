import { Card, ListGroup } from "react-bootstrap";
import { Models } from "../../utils/apiData";
import { formatTimestamp } from "../../utils/formatTimestamp";

export default function AppRefreshQueryStats({
  app,
  appRefreshQuery,
}: {
  app: Models.AppType;
  appRefreshQuery: Models.AppRefreshQueryType;
}) {
  return (
    <>
      <Card bg="light" className="mx-auto">
        <Card.Header>
          {" "}
          <Card.Title className="mx-auto text-center mt-1">
            {app.name} Refresh Query
          </Card.Title>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item variant="light" className="px-4">
            <strong>Last Confirmed:</strong>{" "}
            {formatTimestamp(appRefreshQuery.lastConfirmedAt)}
          </ListGroup.Item>
          <ListGroup.Item variant="light" className="px-4">
            <strong>Last Changed:</strong>{" "}
            {formatTimestamp(appRefreshQuery.lastChangedAt)}
          </ListGroup.Item>
          <ListGroup.Item variant="light" className="px-4">
            <strong>Stored Value:</strong> {appRefreshQuery.value}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
