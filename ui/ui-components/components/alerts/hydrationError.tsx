import { Fragment } from "react";
import { Card } from "react-bootstrap";

export default function HydrationError({
  hydrationError,
}: {
  hydrationError: string;
}) {
  let error: Error;
  let errorData: { [key: string]: any };
  try {
    const parsed = JSON.parse(hydrationError);
    error = new Error(parsed.message);
    error.stack = parsed.stack;
    errorData = parsed.data;
  } catch (e) {
    error = new Error(hydrationError);
  }

  return (
    <>
      <Card border={"warning"}>
        <Card.Header>There was an error loading this Page</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{error.message}</p>
          </blockquote>
          {errorData ? (
            <>
              <code>
                {Object.keys(errorData).map((k) =>
                  errorDataDisplay(k, errorData[k])
                )}
              </code>
            </>
          ) : null}
        </Card.Body>
      </Card>
    </>
  );
}

function errorDataDisplay(name: string, content: string | Object) {
  const stringContent =
    typeof content === "string" ? content : JSON.stringify(content);

  return (
    <Fragment key={`errorData-${name}`}>
      {name}: {stringContent}
      <br />
    </Fragment>
  );
}
