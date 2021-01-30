import { useRouter } from "next/router";
import Head from "next/head";
import { Row, Col, Image, Button } from "react-bootstrap";

export default function Page(props) {
  const router = useRouter();
  const { navigationMode, navigation } = props;

  let CTALink = "/session/sign-in";
  let CTAMessage = "Sign In";

  if (navigationMode === "authenticated") {
    CTAMessage = "View Dashboard";
    CTALink = "/dashboard";
  } else if (
    process.env.GROUPAROO_UI_EDITION === "enterprise" &&
    navigation?.bottomMenuItems[0] &&
    navigation?.bottomMenuItems[0].href === "/team/initialize"
  ) {
    CTAMessage = "Create Team";
    CTALink = "/team/initialize";
  } else if (
    process.env.GROUPAROO_UI_EDITION === "community" &&
    navigation?.bottomMenuItems[0] &&
    navigation?.bottomMenuItems[0].href === "/team/initialize"
  ) {
    CTAMessage = "Configure your Grouparoo Server";
    CTALink = "https://www.grouparoo.com/docs";
  }

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
            <br />

            <div style={{ textAlign: "center" }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  router.push(CTALink);
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
