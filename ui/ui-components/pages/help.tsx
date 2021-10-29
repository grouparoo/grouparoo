import Head from "next/head";
import { Row, Col, Alert } from "react-bootstrap";
import LinkButton from "../components/linkButton";

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
            . We believe that this is important so that future Grouparoo users
            can find previous questions and answers to help themselves,
            ultimately leading to a stronger and more informed community.
          </p>
        </Col>
      </Row>
      <h3>Support Channels:</h3>
      <br />
      <Row style={{ textAlign: "center" }}>
        <Col>
          <LinkButton
            size="sm"
            variant="outline-primary"
            href="https://www.grouparoo.com/docs"
            target="_blank"
          >
            Documentation
          </LinkButton>
        </Col>
        <Col>
          <LinkButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/grouparoo/grouparoo/issues/new/choose"
            target="_blank"
          >
            Github Issue
          </LinkButton>
        </Col>
        <Col>
          <LinkButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/grouparoo/grouparoo/discussions"
            target="_blank"
          >
            Forum
          </LinkButton>
        </Col>
        <Col>
          <LinkButton
            size="sm"
            variant="outline-primary"
            href="https://www.grouparoo.com/docs/community"
            target="_blank"
          >
            Grouparoo Community
          </LinkButton>
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
