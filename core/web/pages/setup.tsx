import Head from "next/head";
import { useApi } from "../hooks/useApi";
import { SetupStepAPIData } from "../utils/apiData";
import { Row, Col, ProgressBar } from "react-bootstrap";
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
  const currentStep = setupSteps.filter((step) => !step.complete)[0];

  return (
    <>
      <Head>
        <title>Grouparoo: Setup</title>
      </Head>

      <h1>Setup Grouparoo</h1>
      <p>
        Thanks for installing Grouparoo! There are few steps to get started
        importing your customer data:
      </p>

      <div>
        Progress: {completeStepsCount} / {totalStepsCount} steps completed
        <br />
        <ProgressBar label={`${percentComplete}%`} now={percentComplete} />
      </div>

      <br />

      <Row>
        <Col>
          {setupSteps.map((setupStep) => (
            <SetupStepCard
              key={`setupStep-${setupStep.key}`}
              setupStep={setupStep}
              active={currentStep.position === setupStep.position}
            />
          ))}
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
