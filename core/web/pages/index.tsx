import Router from "next/router";
import Head from "next/head";
import { Row, Col, Image, Button } from "react-bootstrap";

export default function Page(props) {
  const { navigationMode, navigation } = props;

  let CTALink = "/session/sign-in";
  let CTAMessage = "Sign In";

  if (navigationMode === "authenticated") {
    CTAMessage = "View Dashboard";
    CTALink = "/dashboard";
  } else if (
    navigation?.bottomMenuItems[0] &&
    navigation?.bottomMenuItems[0].href === "/team/initialize"
  ) {
    CTAMessage = "Create Team";
    CTALink = "/team/initialize";
  }

  return (
    <>
      <Head>
        <title>Grouparoo</title>
      </Head>

      <div style={{ width: "100%", height: "100%" }}>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <br />
            <br />
            <br />
            <br />
            <Image style={{ maxHeight: 200 }} src="/images/logo/logo.svg" />
            <br />
            <br />
            <h1>Grouparoo</h1>
            <p>Achieve Marketing Autonomy</p>
            <br />
            <br />

            <div style={{ textAlign: "center" }}>
              <Button
                variant="success"
                onClick={() => {
                  Router.push(CTALink);
                }}
              >
                {CTAMessage}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
