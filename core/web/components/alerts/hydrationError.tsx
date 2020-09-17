import { Card } from "react-bootstrap";

export default function HydrationError({
  hydrationError,
}: {
  hydrationError: string;
}) {
  const parsed = JSON.parse(hydrationError);
  const error = new Error(parsed.message);
  error.stack = parsed.stack;

  return (
    <>
      <Card border={"warning"}>
        <Card.Header>There was an Error loading this Page</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{error.message}</p>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}
