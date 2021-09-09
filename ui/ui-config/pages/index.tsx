import { useRouter } from "next/router";
import { useApi } from "../../ui-components/hooks/useApi";
import Head from "next/head";
import { Row, Col, Image, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Loader from "../../ui-components/components/loader";
import { Models } from "../../ui-components/utils/apiData";

export default function Page(props) {
  const router = useRouter();
  const { navigationMode, navigation } = props;
  const [shouldRender, setShouldRender] = useState(false);
  const [CTAs, setCTAs] = useState({
    CTALink: "/session/sign-in",
    CTAMessage: "Register",
    CTATarget: null,
  });
  let currentStep = null;

  useEffect(() => {
    if (navigationMode === "config:authenticated") {
      checkSetupSteps(props);
    } else {
      setShouldRender(true);
    }

    async function checkSetupSteps(props) {
      const { execApi } = useApi(props);
      const { setupSteps } = await execApi("get", `/setupSteps`);
      const foundStep = await setupSteps.find(
        (step) => !step.complete && !step.skipped
      );
      currentStep = foundStep;

      if (navigationMode === "config:authenticated" && currentStep) {
        setCTAs({
          CTAMessage: "Set Up Grouparoo",
          CTALink: "/setup",
          CTATarget: null,
        });
      } else if (navigationMode === "config:authenticated" && !currentStep) {
        setCTAs({
          CTAMessage: "Configure Records",
          CTALink: "/records",
          CTATarget: null,
        });
      }
      setShouldRender(true);
    }
  }, []);

  if (shouldRender === false) {
    return <Loader />;
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
                  CTAs.CTATarget
                    ? window.open(CTAs.CTALink, CTAs.CTATarget)
                    : router.push(CTAs.CTALink);
                }}
              >
                {CTAs.CTAMessage}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
