import { Row, Col, Card } from "react-bootstrap";
import Head from "next/head";
import { useApi } from "./../../hooks/useApi";
import { usePlugins } from "./../../hooks/usePlugin";
import SignIn from "../../components/forms/session/signIn";

export default function (props) {
  const [plugins] = usePlugins("session/sign-in");

  return (
    <>
      <Head>
        <title>Grouparoo: Sign In</title>
      </Head>

      <h1>Sign In</h1>
      <Card border="success">
        <Card.Body>
          <Row className="border-between-columns">
            {plugins.map((PluginComponent, idx) => (
              <Col key={`plugin-${idx}`}>
                <PluginComponent {...props} useApi={useApi} />
              </Col>
            ))}

            {plugins.length === 0 ? (
              <Col>
                <SignIn {...props} useApi={useApi} />
              </Col>
            ) : null}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
