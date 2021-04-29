import Head from "next/head";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Grouparoo</title>
      </Head>

      <Row>
        <Col style={{ textAlign: "center" }}>
          <h1>
            Hello from <code>@grouparoo/ui-config</code>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            <Link href="/plugins">
              <a>Plugins</a>
            </Link>
          </ul>
        </Col>
      </Row>
    </>
  );
}
