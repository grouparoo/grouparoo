import Head from "next/head";
import RunsList from "../../../components/runs/list";
import { useApi } from "../../../hooks/useApi";
import { useState } from "react";
import SourceTabs from "../../../components/tabs/source";
import AppIcon from "../../../components/appIcon";
import StateBadge from "../../../components/stateBadge";
import LockedBadge from "../../../components/lockedBadge";
import { Button, Row, Col } from "react-bootstrap";

export default function Page(props) {
  const { errorHandler, successHandler, runsHandler, source } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  async function enqueueScheduleRun() {
    setLoading(true);
    try {
      await execApi("post", `/schedule/${source.schedule.guid}/run`);
      successHandler.set({ message: "run enqueued" });
      runsHandler.set({});
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {source.name}</title>
      </Head>

      <SourceTabs source={source} />

      <RunsList
        header={
          <>
            <Row>
              <Col md={1}>
                <AppIcon src={source?.app?.icon} fluid size={100} />
              </Col>
              <Col>
                <h1>{source.name} - Runs</h1>
                <StateBadge state={source.state} />{" "}
                <LockedBadge object={source} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  size="sm"
                  variant="outline-primary"
                  disabled={loading}
                  onClick={() => {
                    enqueueScheduleRun();
                  }}
                >
                  Run Now
                </Button>
                <br />
                <br />
              </Col>
            </Row>
          </>
        }
        {...props}
      />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { source } = await execApi("get", `/source/${guid}`);
  const runsListInitialProps = await RunsList.hydrate(ctx);
  return { source, ...runsListInitialProps };
};
