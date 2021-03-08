import { Alert } from "react-bootstrap";
import { Fragment, useState, useEffect } from "react";
import StackTrace from "stacktrace-js";

export default function ErrorPage({ err, statusCode }) {
  const [stringifiedStack, setStringifiedStack] = useState(
    "Loading source map..."
  );

  useEffect(() => {
    parseError();
  }, []);

  function parseError() {
    StackTrace.fromError(err)
      .then((stackFrames) => {
        const _stringifiedStack = stackFrames
          .map((sf) => sf.toString().replace(/webpack:\/\/_\w_\w/g, "")) // this would match a prefix like "webpack://_N_E"
          .join("\n");
        setStringifiedStack(_stringifiedStack);
      })
      .catch(console.error);
  }

  return (
    <>
      <h1>An Error has Occurred</h1>

      <Alert variant="danger">
        <Alert.Heading>
          {err?.message} {statusCode ? `, status code: ${statusCode}` : null}
        </Alert.Heading>

        <strong>Error Details:</strong>

        <pre
          style={{
            color: "white",
            backgroundColor: "black",
            borderRadius: 5,
            padding: 10,
          }}
        >
          {stringifiedStack.split("\n").map((line, idx) => {
            return (
              <Fragment key={`error-stack-${idx}`}>
                <span
                  className={
                    line.includes("node_modules") ? "text-muted" : null
                  }
                >
                  {line}
                </span>
                <br />
              </Fragment>
            );
          })}
        </pre>
      </Alert>
    </>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
