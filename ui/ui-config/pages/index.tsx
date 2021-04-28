import Head from "next/head";
import { Row, Col } from "react-bootstrap";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Grouparoo</title>
      </Head>

      <div style={{ width: "100%", height: "100%" }}>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h1>
              Hello from <code>@grouparoo/ui-config</code>
            </h1>
          </Col>
        </Row>
      </div>
    </>
  );
}
