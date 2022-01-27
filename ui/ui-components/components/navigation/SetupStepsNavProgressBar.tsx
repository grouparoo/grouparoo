import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, ProgressBar, Row } from "react-bootstrap";
import { useApi } from "../../contexts/api";
import { setupStepHandler } from "../../eventHandlers";
import { Actions, Models } from "../../utils/apiData";

export default function SetupStepsNavProgressBar() {
  const { client } = useApi();
  const [steps, setSteps] = useState<Models.SetupStepType[]>([]);
  const [initialOnBoardingState, setInitialOnBoardingState] =
    useState<boolean>(null);
  //because shouldDisplay is set on every Setup Step call, track if a user manually hides setup steps separately
  const [hideCard, setHideCard] = useState<boolean>(null);
  const router = useRouter();

  useEffect(() => {
    getSetupSteps();
    router?.events?.on("routeChangeStart", getSetupSteps);

    setupStepHandler.subscribe("setup-steps-nav-progress-bar", () =>
      getSetupSteps()
    );

    return () => {
      router?.events?.off("routeChangeStart", getSetupSteps);
      setupStepHandler.unsubscribe("setup-steps-nav-progress-bar");
    };
  }, []);

  async function getSetupSteps(newUrl?: string) {
    if (router.pathname.match(/^\/session\//)) return;
    if (newUrl && newUrl.match(/^\/session\//)) return;
    if (newUrl && newUrl === "/") return;

    const response: Actions.SetupStepsList = await client.request(
      "get",
      `/setupSteps`
    );

    if (response?.setupSteps) setSteps(response.setupSteps);
  }

  const activeStep = steps.find((step) => !step.complete && !step.skipped);
  const isOnBoardingComplete = steps.every(
    (step) => step.complete || step.skipped
  );
  const totalStepsCount = steps.length;
  const completeStepsCount = steps.filter(
    (step) => step.complete || step.skipped
  ).length;
  const percentComplete = Math.round(
    (100 * completeStepsCount) / totalStepsCount
  );

  let onBoardingState = percentComplete === 100 ? true : false;

  //make sure we've waited until percentComplete calculates to set initialOnBoardingState
  if (initialOnBoardingState === null && !isNaN(percentComplete)) {
    setInitialOnBoardingState(onBoardingState);
  }

  //if we haven't figured out initial state yet, or the initial state is complete, or someone chooses to... hide the card
  if (
    initialOnBoardingState === null ||
    initialOnBoardingState === true ||
    hideCard === true
  )
    return null;

  return (
    <div
      data-testid="setupStepsProgressBar"
      className="m-2 px-1 pb-3 pt-1 rounded"
      style={{
        backgroundColor: "var(--grouparoo-background-blue)",
      }}
    >
      {initialOnBoardingState === false && onBoardingState === true ? (
        <Row>
          <Col className="d-flex justify-content-end mr-1 text-light">
            {" "}
            <Button
              variant="link"
              className="p-0 m-0 text-light"
              onClick={() => {
                setHideCard(true);
              }}
            >
              <FontAwesomeIcon icon="times" size="xs" />
            </Button>
          </Col>
        </Row>
      ) : null}

      <Row
        className="px-3"
        style={{
          fontSize: 18,
          color: "var(--secondary)",
        }}
      >
        <Col>
          <Link href="/setup">
            <a>{isOnBoardingComplete ? "Setup Complete 🎉" : "Get Started:"}</a>
          </Link>
        </Col>
      </Row>
      <Row className="px-3">
        <Col>
          <div
            style={{
              paddingLeft: 0,
              paddingBottom: 10,
            }}
          >
            {activeStep?.title}
          </div>
          <ProgressBar now={percentComplete} />
        </Col>
      </Row>
    </div>
  );
}
