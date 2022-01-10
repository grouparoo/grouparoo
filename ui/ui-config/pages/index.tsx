import { useRouter } from "next/router";
import { UseApi } from "../../ui-components/hooks/useApi";
import Head from "next/head";
import { Row, Col, Image, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Loader from "../../ui-components/components/Loader";
import { Actions } from "@grouparoo/ui-components/utils/apiData";

export default function Page(props) {
  const router = useRouter();
  const { navigationMode } = props;
  const [shouldRender, setShouldRender] = useState(false);
  const [cta, setCTA] = useState<{
    link: string;
    message: string;
    target?: string;
  }>({
    link: "/session/sign-in",
    message: "Register",
  });

  useEffect(() => {
    if (navigationMode === "config:authenticated") {
      checkSetupSteps(props);
    } else {
      setShouldRender(true);
    }

    async function checkSetupSteps(props) {
      const { execApi } = UseApi(props);
      const { setupSteps } = await execApi("get", `/setupSteps`);
      const currentStep = await setupSteps.find(
        (step) => !step.complete && !step.skipped
      );

      if (navigationMode === "config:authenticated" && currentStep) {
        setCTA({
          message: "Set Up Grouparoo",
          link: "/setup",
          target: null,
        });
      } else if (navigationMode === "config:authenticated" && !currentStep) {
        const {
          models: [model],
        } = await execApi<Actions.ModelsList>("get", "/models", {
          limit: 1,
          order: [["name", "asc"]],
        });
        setCTA(
          model
            ? {
                message: "Configure Records",
                link: `/model/${model?.id}/records`,
              }
            : undefined
        );
      }
      setShouldRender(true);
    }
  }, [navigationMode, props]);

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
              alt="Grouparoo logo"
              style={{ maxHeight: 80, margin: 40 }}
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
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.grouparoo.com"
              >
                www.grouparoo.com
              </a>
            </p>
            <br />
            <br />

            {cta && (
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    cta.target
                      ? window.open(cta.link, cta.target)
                      : router.push(cta.link);
                  }}
                >
                  {cta.message}
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}
