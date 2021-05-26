import { Row, Col } from "react-bootstrap";
import Head from "next/head";
// import { useApi } from "@grouparoo/ui-components/hooks/useApi";
// import SignIn from "@grouparoo/ui-components/components/session/signIn";

export default function SignInPage(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Sign In</title>
      </Head>

      <h1>Sign In</h1>

      <Row className="border-between-columns">
        <Col>
          {/* <SignIn {...props} useApi={useApi} /> */}
          Sign in form goes here ...
        </Col>
      </Row>
    </>
  );
}
