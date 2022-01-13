import Head from "next/head";
import RunsList from "@grouparoo/ui-components/components/runs/List";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { useState } from "react";
import SourceTabs from "@grouparoo/ui-components/components/tabs/Source";
import PageHeader from "@grouparoo/ui-components/components/PageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/StateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/LockedBadge";
import ModelBadge from "@grouparoo/ui-components/components/badges/ModelBadge";
import { Row, Col } from "react-bootstrap";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { SuccessHandler } from "@grouparoo/ui-components/utils/successHandler";
import { RunsHandler } from "@grouparoo/ui-components/utils/runsHandler";
import { Models, Actions } from "@grouparoo/ui-components/utils/apiData";
import LoadingButton from "@grouparoo/ui-components/components/LoadingButton";
import { ensureMatchingModel } from "@grouparoo/ui-components/utils/ensureMatchingModel";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    runsHandler,
    source,
    model,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    runsHandler: RunsHandler;
    source: Models.SourceType;
    model: Models.GrouparooModelType;
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

      <SourceTabs source={source} model={model} />

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
  const { sourceId, modelId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { source } = await execApi("get", `/source/${sourceId}`);
  ensureMatchingModel("Source", source.modelId, modelId.toString());

  const { model } = await execApi<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );
  const runsListInitialProps = await RunsList.hydrate(ctx, { topic: "source" });

  return { source, model, ...runsListInitialProps };
};
