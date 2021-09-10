import Head from "next/head";
import RunsList from "@grouparoo/ui-components/components/runs/list";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { useState } from "react";
import SourceTabs from "@grouparoo/ui-components/components/tabs/source";
import PageHeader from "@grouparoo/ui-components/components/pageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/lockedBadge";
import { Button, Row, Col } from "react-bootstrap";
import { ErrorHandler } from "../../../../ui-components/utils/errorHandler";
import { SuccessHandler } from "../../../../ui-components/utils/successHandler";
import { RunsHandler } from "../../../../ui-components/utils/runsHandler";
import { Models, Actions } from "../../../../ui-components/utils/apiData";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    runsHandler,
    source,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    runsHandler: RunsHandler;
    source: Models.SourceType;
  } = props;
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  async function enqueueScheduleRun() {
    setLoading(true);
    try {
      const response: Actions.ScheduleRun = await execApi(
        "post",
        `/schedule/${source.schedule.id}/run`
      );
      successHandler.set({ message: `run ${response.run.id} enqueued` });
      runsHandler.set(null);
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
                <LockedBadge key="badge-1" object={source} />,
                <StateBadge key="badge-2" state={source.state} />,
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
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { source } = await execApi("get", `/source/${id}`);
  const runsListInitialProps = await RunsList.hydrate(ctx, {
    topic: "source",
  });
  return { source, ...runsListInitialProps };
};
