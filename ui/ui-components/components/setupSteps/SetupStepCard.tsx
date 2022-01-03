import { useState } from "react";
import { Models } from "../../utils/apiData";
import { Accordion, Card, Row, Col, Button, Badge } from "react-bootstrap";
import LoadingButton from "../LoadingButton";
import LinkButton from "../LinkButton";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function SetupStepCard({
  setupStep: step,
  execApi,
  reload,
}: {
  setupStep: Models.SetupStepType;
  execApi: Function;
  reload: Function;
}) {
  const [loading, setLoading] = useState(false);
  const [activeKey, setActiveKey] = useState(
    step.skipped || step.complete ? null : "0"
  );

  async function skip() {
    setLoading(true);
    await execApi("put", `/setupStep/${step.id}`, {
      skipped: !step.skipped,
    });

    try {
      await reload();
    } finally {
      setLoading(false);
    }

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
                  <Accordion.Button
                    as={Button}
                    variant="link"
                    eventKey="0"
                    onClick={() => setActiveKey(activeKey ? null : "0")}
                  >
                    {step.position}: {step.title}
                  </Accordion.Button>
                </strong>
              </Col>

              <Col style={{ textAlign: "right" }}>
                {step.outcome && step.complete ? (
                  <Badge bg="primary">{step.outcome}</Badge>
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
                    <LinkButton
                      variant="outline-primary"
                      size="sm"
                      className="m-1"
                      target="_blank"
                      href={step.helpLink}
                    >
                      Learn More
                    </LinkButton>
                    &nbsp;&nbsp;
                    {(grouparooUiEdition() !== "community" ||
                      step.showCtaOnCommunity) &&
                      step.cta && (
                        <LinkButton
                          size="sm"
                          className="m-1"
                          href={step.href}
                          disabled={step.disabled}
                        >
                          {step.cta}
                        </LinkButton>
                      )}
                  </Col>
                  {grouparooUiEdition() === "config" ? null : (
                    <Col md={6} style={{ textAlign: "right" }}>
                      {step.skipped ? (
                        <LoadingButton
                          size="sm"
                          disabled={loading}
                          className="m-1"
                          variant="outline-dark"
                          onClick={() => skip()}
                        >
                          un-skip
                        </LoadingButton>
                      ) : (
                        <LoadingButton
                          size="sm"
                          disabled={loading}
                          className="m-1"
                          variant="outline-dark"
                          onClick={() => skip()}
                        >
                          Skip
                        </LoadingButton>
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
