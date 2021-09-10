import { Row, Col } from "react-bootstrap";
import Head from "next/head";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import SignIn from "@grouparoo/ui-components/components/session/signIn";

export default function SignInPage(props) {
  return (
    <>
      <Head>
        <title>Grouparoo</title>
      </Head>
      <div style={{ width: "100%", height: "100%" }}>
        <Row className="border-between-columns">
          <Col>
            <SignIn {...props} UseApi={UseApi} />
          </Col>
        </Row>
      </div>
    </>
  );
}
