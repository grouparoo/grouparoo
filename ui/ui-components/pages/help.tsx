import Head from "next/head";
import { Row, Col, Alert, Button } from "react-bootstrap";

export default function Page() {
  const supportPageURL = "https://www.grouparoo.com/support";

  return (
    <>
      <Head>
        <title>Grouparoo: Help</title>
      </Head>
      <h1>Need Help?</h1>
      <Row>
        <Col>
          <p>
            Grouparoo is an open-source project.{" "}
            <b>
              We strive to respond to bugs, questions, and problems
              transparently in the open
            </b>
            . We believe this this is important so that future Grouparoo users
            can find previous questions and answers to help themselves,
            ultimately leading to a stronger and more informed community.
          </p>
        </Col>
      </Row>
      <h3>Support Channels:</h3>
      <br />
      <Row style={{ textAlign: "center" }}>
        <Col>
          <Button
            size="sm"
            variant="outline-primary"
            href="https://www.grouparoo.com/docs"
            target="_blank"
          >
            Documentation
          </Button>
        </Col>
        <Col>
          <Button
            size="sm"
            variant="outline-primary"
            href="https://github.com/grouparoo/grouparoo/issues/new/choose"
            target="_blank"
          >
            Github Issue
          </Button>
        </Col>
        <Col>
          <Button
            size="sm"
            variant="outline-primary"
            href="https://github.com/grouparoo/grouparoo/discussions"
            target="_blank"
          >
            Forum
          </Button>
        </Col>
        <Col>
          <Button
            size="sm"
            variant="outline-primary"
            href="https://www.grouparoo.com/docs/community"
            target="_blank"
          >
            Grouparoo Community
          </Button>
        </Col>
      </Row>
      <br /> <br />
      <Row style={{ textAlign: "center" }}>
        <Col>
          <Alert variant="warning">
            You can learn more about obtaining support for Grouparoo at{" "}
            <a target="_blank" href={supportPageURL}>
              {supportPageURL}
            </a>
          </Alert>
        </Col>
      </Row>
    </>
  );
}
