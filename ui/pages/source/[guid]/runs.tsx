import Head from "next/head";
import RunsList from "../../../components/runs/list";
import { useApi } from "../../../hooks/useApi";
import { useState } from "react";
import SourceTabs from "../../../components/tabs/source";
import PageHeader from "../../../components/pageHeader";
import StateBadge from "../../../components/badges/stateBadge";
import LockedBadge from "../../../components/badges/lockedBadge";
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
            <PageHeader
              icon={source.app.icon}
              title={`${source.name} - Runs`}
              badges={[
                <LockedBadge object={source} />,
                <StateBadge state={source.state} />,
              ]}
            />

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
