import { useApi } from "../contexts/api";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Row, Col, ProgressBar, Alert } from "react-bootstrap";
import SetupStepCard from "../components/setupSteps/SetupStepCard";
import Loader from "../components/Loader";
import { Actions } from "../utils/apiData";
import { setupStepsHandler } from "../eventHandlers";
import { GetServerSidePropsContext } from "next";
import { NextPageWithInferredProps } from "../utils/pageHelper";
import { generateClient } from "../client/client";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const client = generateClient(ctx);
  const { setupSteps } = await client.request<Actions.SetupStepsList>(
    "get",
    `/setupSteps`
  );
  return { props: { setupSteps } };
};

const Page: NextPageWithInferredProps<typeof getServerSideProps> = (props) => {
  const { client } = useApi();
  const [setupSteps, setSetupSteps] = useState(props.setupSteps);

  useEffect(() => {
    load();
  }, []);

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

  async function load() {
    const response = await client.request<Actions.SetupStepsList>(
      "get",
      `/setupSteps`,
      {},
      { useCache: false }
    );
    if (response.setupSteps) {
      setSetupSteps(response.setupSteps);
      setupStepsHandler.set(response.setupSteps);
    }
  }

  if (setupSteps.length === 0) {
    return <Loader />;
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
              reload={load}
            />
          ))}
        </Col>
      </Row>
      <br />
    </>
  );
};

export default Page;
