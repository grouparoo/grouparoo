import { useState } from "react";
import { Models } from "../../utils/apiData";
import { Accordion, Card, Row, Col, Button, Badge } from "react-bootstrap";

export default function SetupStepCard({
  setupStep: step,
  execApi,
  reload,
}: {
  setupStep: Models.SetupStepType;
  execApi: Function;
  reload: Function;
}) {
  const [activeKey, setActiveKey] = useState(
    step.skipped || step.complete ? null : "0"
  );

  async function skip() {
    await execApi("put", `/setupStep/${step.id}`, {
      skipped: !step.skipped,
    });
    reload();
    setActiveKey(step.skipped ? "0" : null);
  }

  return (
    <>
      <Accordion activeKey={activeKey}>
        <Card
          border={step.complete ? "success" : null}
          data-testid="setupStepCard"
        >
          <Card.Header>
            <Row>
              <Col>
                <strong>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="0"
                    onClick={() => setActiveKey(activeKey ? null : "0")}
                  >
                    {step.position}: {step.title}
                  </Accordion.Toggle>
                </strong>
              </Col>

              <Col style={{ textAlign: "right" }}>
                {step.outcome && step.complete ? (
                  <Badge variant="primary">{step.outcome}</Badge>
                ) : null}
                &nbsp;&nbsp;&nbsp;
                {step.complete ? (
                  <span style={{ fontSize: 18 }}>✅</span>
                ) : null}
                {step.skipped && !step.complete ? (
                  <span style={{ fontSize: 18 }}>➖</span>
                ) : null}
              </Col>
            </Row>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>{step.description}</p>
              {step.complete ? null : (
                <Row>
                  <Col md={6}>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      target="_blank"
                      href={step.helpLink}
                    >
                      Learn More
                    </Button>
                    &nbsp;&nbsp;
                    {(process.env.GROUPAROO_UI_EDITION !== "community" ||
                      step.showCtaOnCommunity) &&
                      step.cta && (
                        <Button size="sm" href={step.href}>
                          {step.cta}
                        </Button>
                      )}
                  </Col>
                  {process.env.GROUPAROO_UI_EDITION === "config" ? null : (
                    <Col md={6} style={{ textAlign: "right" }}>
                      {step.skipped ? (
                        <Button
                          size="sm"
                          variant="outline-dark"
                          onClick={() => skip()}
                        >
                          un-skip
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline-dark"
                          onClick={() => skip()}
                        >
                          skip
                        </Button>
                      )}
                    </Col>
                  )}
                </Row>
              )}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <br />
    </>
  );
}
