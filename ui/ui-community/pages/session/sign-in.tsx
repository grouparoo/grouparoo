import { Row, Col, Image } from "react-bootstrap";
import Head from "next/head";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import SignIn from "@grouparoo/ui-components/components/session/signIn";

export default function SignInPage(props) {
  return (
    <>
      <Head>
        <title>Grouparoo</title>
      </Head>

      <div style={{ width: "100%", height: "100%" }}>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Image
              style={{ maxHeight: 50, margin: 40 }}
              src="/public/images/logo/logo-and-wordmark-black-words.svg"
            />
            <br />
            <h2>Sync, Segment, and Send your Product Data Everywhere</h2>
            <p>
              Grouparoo is open source data infrastructure to keep customer data
              in-sync between your data warehouse and 3rd party tools.
            </p>
            <p>
              Learn more at{" "}
              <a target="_blank" href="https://www.grouparoo.com">
                www.grouparoo.com
              </a>
            </p>
            <br />
          </Col>
        </Row>
        <Row className="border-between-columns">
          <Col>
            <SignIn {...props} useApi={useApi} />
          </Col>
        </Row>
      </div>
    </>
  );
}
