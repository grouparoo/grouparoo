import { Alert } from "react-bootstrap";
import { Fragment, useState, useEffect } from "react";
import StackTrace from "stacktrace-js";
import { useRouter } from "next/router";

export default function ErrorPage({ err, statusCode, errorCode }) {
  const router = useRouter();
  const [stringifiedStack, setStringifiedStack] = useState(
    "Loading source map..."
  );

  useEffect(() => {
    redirect();
    parseError();
  }, []);

  function parseError() {
    if (errorCode) return;

    StackTrace.fromError(err)
      .then((stackFrames) => {
        const _stringifiedStack = stackFrames
          .map((sf) => sf.toString().replace(/webpack:\/\/_\w_\w/g, "")) // this would match a prefix like "webpack://_N_E"
          .join("\n");
        setStringifiedStack(_stringifiedStack);
      })
      .catch(console.error);
  }

  function redirect() {
    if (errorCode === "NO_TEAMS_ERROR") {
      router.push("/");
    }
    if (
      errorCode === "AUTHENTICATION_ERROR" &&
      window.location.pathname !== "/session/sign-in"
    ) {
      router.push(`/session/sign-in?nextPage=${window.location.pathname}`);
    }
  }

  if (errorCode) return null;

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
  const errorCode: string = err["code"];
  return { statusCode, errorCode };
};
