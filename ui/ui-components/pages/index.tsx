import { useRouter } from "next/router";
import { useApi } from "../hooks/useApi";
import Head from "next/head";
import { Row, Col, Image, Button } from "react-bootstrap";
import { useEffect } from "react";

export default function Page(props) {
  const router = useRouter();
  const { navigationMode, navigation } = props;

  let currentStep = null;

  useEffect(() => {
    async function getCurrentStep(props) {
      if (navigationMode === "config:authenticated") {
        const { execApi } = useApi(props);
        const { setupSteps } = await execApi("get", `/setupSteps`);
        const foundStep = setupSteps.find(
          (step) => !step.complete && !step.skipped
        );
        currentStep = foundStep;
        console.log(currentStep);
      }
    }
    getCurrentStep(props);
    console.log(currentStep);
  }, []);

  let CTALink = "/session/sign-in";
  let CTAMessage = "Sign In";
  let CTATarget: string;

  if (navigationMode.indexOf("config") >= 0 && currentStep) {
    CTAMessage = "Set Up Grouparoo";
    CTALink = "/setup";
  } else if (navigationMode === "config:authenticated" && !currentStep) {
    CTAMessage = "Configure Your Profiles";
    CTALink = "/profiles";
  } else if (navigationMode === "authenticated") {
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
                  CTATarget
                    ? window.open(CTALink, CTATarget)
                    : router.push(CTALink);
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

// Page.getInitialProps = async (ctx) => {
//   const { execApi } = useApi(ctx);
//   const { setupSteps } = await execApi("get", `/setupSteps`);
//   return { setupSteps };
// };
