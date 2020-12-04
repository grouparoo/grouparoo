import { Row, Col } from "react-bootstrap";
import Head from "next/head";
import { useApi } from "./../../hooks/useApi";
import SignIn from "../../components/session/signIn";

export default function SignInPage(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Sign In</title>
      </Head>

      <h1>Sign In</h1>

      <Row className="border-between-columns">
        <Col>
          <SignIn {...props} useApi={useApi} />
        </Col>
      </Row>
    </>
  );
}
