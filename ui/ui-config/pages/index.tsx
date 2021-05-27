import Head from "next/head";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import { Actions } from "@grouparoo/ui-components/utils/apiData";

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
          <ul>
            <Link href="/validate">
              <a>Validate</a>
            </Link>
          </ul>
        </Col>
      </Row>
    </>
  );
}

IndexPage.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  // Hit an auth route so that we redirect to sign in if not already signed in.
  const apiStatus: Actions.PrivateStatus = await execApi(
    "get",
    `/status/private`
  );
  return { apiStatus };
};
