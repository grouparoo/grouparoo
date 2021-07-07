import { useEffect, useState } from "react";
import { Models } from "../../utils/apiData";
import { ProgressBar, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { Actions } from "../../utils/apiData";

export default function SetupStepsNavProgressBar({
  execApi,
  setupStepHandler,
  successHandler,
}) {
  const [steps, setSteps] = useState<Models.SetupStepType[]>([]);
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const [initialOnBoardingState, setInitialOnBoardingState] = useState(null);
  const [hideCard, setHideCard] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getSetupSteps();
    router?.events?.on("routeChangeStart", getSetupSteps);

    setupStepHandler?.subscribe("setup-steps-nav-progress-bar", getSetupSteps);

    return () => {
      router?.events?.off("routeChangeStart", getSetupSteps);
      setupStepHandler?.unsubscribe(
        "setup-steps-nav-progress-bar",
        getSetupSteps
      );
    };
  }, []);

  async function getSetupSteps(newUrl?: string) {
    if (router.pathname.match(/^\/session\//)) return;
    if (newUrl && newUrl.match(/^\/session\//)) return;
    if (newUrl && newUrl === "/") return;

    const { setupSteps, toDisplay }: Actions.SetupStepsList = await execApi(
      "get",
      `/setupSteps`
    );

    if (setupSteps) {
      setShouldDisplay(toDisplay);
      setSteps(setupSteps);
    }
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

  let onBoardingState = percentComplete === 100 ? "complete" : "incomplete";

  if (initialOnBoardingState === null && !isNaN(percentComplete)) {
    console.log(`done: ${percentComplete}`);
    setInitialOnBoardingState(onBoardingState);
  }

  useEffect(() => {
    console.log(`was: ${initialOnBoardingState} now: ${onBoardingState}`);
    if (
      initialOnBoardingState === "incomplete" &&
      onBoardingState === "complete"
    ) {
      console.log("done!!!");
    }
  }, [percentComplete]);

  if (
    !shouldDisplay ||
    initialOnBoardingState === "complete" ||
    hideCard === true
  )
    return null;

  return (
    <div
      className="m-2 px-1 pb-3 pt-1 rounded"
      style={{
        backgroundColor: "var(--grouparoo-background-blue)",
      }}
    >
      {initialOnBoardingState === "incomplete" &&
      onBoardingState === "complete" ? (
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
              color: "var(--secondary)",
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
