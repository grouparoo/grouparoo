import Head from "next/head";
import { useApi } from "../hooks/useApi";
import { SetupStepAPIData } from "../utils/apiData";
import {
  Row,
  Col,
  Card,
  Button,
  Accordion,
  Badge,
  ProgressBar,
} from "react-bootstrap";

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
      <p>
        Progress: {completeStepsCount} / {totalStepsCount} steps completed
        <ProgressBar label={`${percentComplete}%`} now={percentComplete} />
      </p>

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

function SetupStepCard({
  setupStep: step,
  active,
}: {
  setupStep: SetupStepAPIData;
  active: boolean;
}) {
  return (
    <>
      <Accordion defaultActiveKey={step.complete ? null : "0"}>
        <Card border={step.complete ? "success" : null}>
          <Card.Header>
            <Row>
              <Col>
                <strong>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {step.position}: {step.title}
                  </Accordion.Toggle>
                </strong>
              </Col>
              <Col style={{ textAlign: "right" }}>
                {step.complete ? <h5>✅</h5> : null}
              </Col>
            </Row>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>{step.description}</p>
              {active ? (
                <p>
                  <Button href={step.href}>Let's Go</Button>
                </p>
              ) : null}
              {step.outcome && step.complete ? (
                <p>
                  <Badge variant="primary">{step.outcome}</Badge>
                </p>
              ) : null}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <br />
    </>
  );
}
