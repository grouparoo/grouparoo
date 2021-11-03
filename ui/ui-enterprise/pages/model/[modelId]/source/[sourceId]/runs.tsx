import Head from "next/head";
import RunsList from "@grouparoo/ui-components/components/runs/list";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { useState } from "react";
import SourceTabs from "@grouparoo/ui-components/components/tabs/source";
import PageHeader from "@grouparoo/ui-components/components/pageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/lockedBadge";
import ModelBadge from "@grouparoo/ui-components/components/badges/modelBadge";
import { Row, Col } from "react-bootstrap";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { SuccessHandler } from "@grouparoo/ui-components/utils/successHandler";
import { RunsHandler } from "@grouparoo/ui-components/utils/runsHandler";
import { Models, Actions } from "@grouparoo/ui-components/utils/apiData";
import LoadingButton from "@grouparoo/ui-components/components/loadingButton";

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
      if (response.run) {
        successHandler.set({ message: `run ${response.run.id} enqueued` });
        runsHandler.set([response.run]);
      }
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
                <LockedBadge key="header-badge-1" object={source} />,
                <StateBadge key="header-badge-2" state={source.state} />,
                <ModelBadge
                  key="header-badge-3"
                  modelName={source.modelName}
                  modelId={source.modelId}
                />,
              ]}
            />

            <Row>
              <Col>
                <LoadingButton
                  size="sm"
                  variant="outline-primary"
                  disabled={loading}
                  onClick={() => {
                    enqueueScheduleRun();
                  }}
                >
                  Run Now
                </LoadingButton>
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
  const { sourceId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { source } = await execApi("get", `/source/${sourceId}`);
  const runsListInitialProps = await RunsList.hydrate(ctx, { topic: "source" });
  return { source, ...runsListInitialProps };
};
