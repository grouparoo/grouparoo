import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { Models } from "../utils/apiData";
import { Row, Col, ProgressBar, Alert } from "react-bootstrap";
import SetupStepCard from "../components/setupSteps/setupStepCard";

export default function Page(props) {
  const { errorHandler, setupStepHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const [setupSteps, setSetupSteps] = useState<Models.SetupStepType[]>(
    props.setupSteps
  );

  const completeStepsCount = setupSteps.filter(
    (step) => step.complete || step.skipped
  ).length;
  const totalStepsCount = setupSteps.length;
  const percentComplete = Math.round(
    (100 * completeStepsCount) / totalStepsCount
  );
  const currentStep = setupSteps.find(
    (step) => !step.complete && !step.skipped
  );

  async function reload() {
    const response = await execApi("get", `/setupSteps`, {}, null, null, false);
    if (response.setupSteps) {
      setSetupSteps(response.setupSteps);
      setupStepHandler.set(response.setupSteps);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Setup</title>
      </Head>

      <h1 id="setup">Setup Grouparoo</h1>
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
          <br />
          <br />
          {process.env.GROUPAROO_UI_EDITION === "config" ? null : (
            <HideSetupButton />
          )}
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
              execApi={execApi}
              setupStep={setupStep}
              reload={reload}
            />
          ))}
        </Col>
      </Row>

      <br />

      {process.env.GROUPAROO_UI_EDITION === "config" ? null : (
        <Row>
          <Col style={{ textAlign: "center" }}>
            <HideSetupButton /> <br /> <br />
          </Col>
        </Row>
      )}
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { setupSteps } = await execApi("get", `/setupSteps`);
  return { setupSteps };
};

function HideSetupButton() {
  return (
    <Link href="/settings/interface">
      <a>
        Hide this Setup Guide for everyone in your organization via settings
      </a>
    </Link>
  );
}
