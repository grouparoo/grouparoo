import { useApi } from "../../../../../contexts/api";
import Head from "next/head";
import { NextPageContext } from "next";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { successHandler } from "../../../../../eventHandlers";
import StateBadge from "../../../../../components/badges/StateBadge";
import GroupTabs from "../../../../../components/tabs/Group";
import RecordsList from "../../../../../components/record/List";
import { Models, Actions } from "../../../../../utils/apiData";
import PageHeader from "../../../../../components/PageHeader";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { generateClient } from "../../../../../client/client";

export default function Page(props) {
  const {
    model,
    group,
  }: {
    model: Models.GrouparooModelType;
    group: Models.GroupType;
  } = props;

  const { client } = useApi();
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    const response: Actions.GroupRun = await client.request(
      "put",
      `/group/${group.id}/run`
    );
    setLoading(false);
    if (response?.success) {
      successHandler.set({ message: "Update Run Enqueued" });
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {group.name}</title>
      </Head>

      <GroupTabs group={group} model={model} />

      <RecordsList
        {...props}
        header={
          <>
            <PageHeader
              title={`${group.name} - Members`}
              iconType="group"
              badges={[
                <LockedBadge key="header-badge-1" object={group} />,
                <StateBadge key="header-badge-2" state={group.state} />,
                <ModelBadge
                  key="header-badge-3"
                  modelName={group.modelName}
                  modelId={group.modelId}
                />,
              ]}
            />

            <Button
              variant="outline-info"
              size="sm"
              onClick={() => {
                run();
              }}
            >
              Recalculate Members
            </Button>
            <br />
            <br />
          </>
        }
      />
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { groupId, modelId } = ctx.query;
  const client = generateClient(ctx);
  const { group } = await client.request("get", `/group/${groupId}`);
  const { model } = await client.request<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );
  const recordListInitialProps = await RecordsList.hydrate(ctx);

  return { group, model, ...recordListInitialProps };
};
