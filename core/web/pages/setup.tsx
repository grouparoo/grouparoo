import Head from "next/head";
import { useApi } from "../hooks/useApi";
import { SetupStepAPIData } from "../utils/apiData";
import { Row, Col, ProgressBar, Alert, Button } from "react-bootstrap";
import SetupStepCard from "../components/setupSteps/setupStepCard";

export default function Page({
  setupSteps,
}: {
  setupSteps: SetupStepAPIData[];
}) {
  const completeStepsCount = setupSteps.filter((step) => step.complete).length;
  const totalStepsCount = setupSteps.length;
  const percentComplete = Math.round(
    (100 * completeStepsCount) / totalStepsCount
  );
  const currentStep = setupSteps.find((step) => !step.complete);

  return (
    <>
      <Head>
        <title>Grouparoo: Setup</title>
      </Head>

      <h1>Setup Grouparoo</h1>
      {currentStep ? (
        <p>
          Thanks for installing Grouparoo! There are few steps to get started
          importing your customer data:
        </p>
      ) : (
        <Alert variant="success">
          You’ve finished the Setup Guide! 🎉 <br />
          If you have additional questions, please read our{" "}
          <a target="_blank" href="https://www.grouparoo.com/docs">
            Docs
          </a>{" "}
          or ask our{" "}
          <a target="_blank" href="https://www.grouparoo.com/docs/community">
            Community
          </a>
        </Alert>
      )}

      <div>
        Progress: {completeStepsCount} / {totalStepsCount} steps completed
        <br />
        <ProgressBar
          data-test-id="setupPageProgressBar"
          label={`${percentComplete}%`}
          now={percentComplete}
        />
      </div>

      <br />

      <Row>
        <Col>
          {setupSteps.map((setupStep) => (
            <SetupStepCard
              key={`setupStep-${setupStep.key}`}
              setupStep={setupStep}
            />
          ))}
        </Col>
      </Row>

      <br />

      <Row>
        <Col style={{ textAlign: "center" }}>
          <Button href="/settings/interface" size="sm">
            Hide this Setup Guide from everyone in your team
          </Button>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { setupSteps } = await execApi("get", `/setupSteps`);
  return { setupSteps };
};
