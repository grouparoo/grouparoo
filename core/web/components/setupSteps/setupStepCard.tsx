import { SetupStepAPIData } from "../../utils/apiData";
import { Accordion, Card, Row, Col, Button, Badge } from "react-bootstrap";

export default function SetupStepCard({
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
                  <Button href={step.href}>{step.cta}</Button>
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
