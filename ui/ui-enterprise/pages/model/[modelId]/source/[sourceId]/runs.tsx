import { useApi } from "../../../../../../ui-components/contexts/api";
import Head from "next/head";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import RunsList from "@grouparoo/ui-components/components/runs/List";
import SourceTabs from "@grouparoo/ui-components/components/tabs/Source";
import PageHeader from "@grouparoo/ui-components/components/PageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/StateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/LockedBadge";
import ModelBadge from "@grouparoo/ui-components/components/badges/ModelBadge";
import {
  runsHandler,
  successHandler,
} from "@grouparoo/ui-components/eventHandlers";
import { Models, Actions } from "@grouparoo/ui-components/utils/apiData";
import LoadingButton from "@grouparoo/ui-components/components/LoadingButton";
import { ensureMatchingModel } from "@grouparoo/ui-components/utils/ensureMatchingModel";
import { NextPageContext } from "next";
import { generateClient } from "@grouparoo/ui-components/client/client";

export default function Page(props) {
  const {
    source,
  }: {
    source: Models.SourceType;
  } = props;
  const { client } = useApi();
  const [loading, setLoading] = useState(false);

  async function enqueueScheduleRun() {
    setLoading(true);
    try {
      const response: Actions.ScheduleRun = await client.request(
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

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { sourceId, modelId } = ctx.query;
  const client = generateClient(ctx);
  const { source } = await client.request("get", `/source/${sourceId}`);
  ensureMatchingModel("Source", source.modelId, modelId.toString());

  const runsListInitialProps = await RunsList.hydrate(ctx, { topic: "source" });

  return { source, ...runsListInitialProps };
};
