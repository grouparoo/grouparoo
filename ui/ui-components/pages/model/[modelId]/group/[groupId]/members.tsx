import Head from "next/head";
import { NextPageContext } from "next";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { UseApi } from "../../../../../hooks/useApi";
import StateBadge from "../../../../../components/badges/StateBadge";
import GroupTabs from "../../../../../components/tabs/Group";
import RecordsList from "../../../../../components/record/List";
import { ErrorHandler } from "../../../../../utils/errorHandler";
import { SuccessHandler } from "../../../../../utils/successHandler";
import { Models, Actions } from "../../../../../utils/apiData";
import PageHeader from "../../../../../components/PageHeader";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import ModelBadge from "../../../../../components/badges/ModelBadge";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    group,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    group: Models.GroupType;
  } = props;

  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    const response: Actions.GroupRun = await execApi(
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

      <GroupTabs group={group} />

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
  const { groupId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { group } = await execApi("get", `/group/${groupId}`);
  const recordListInitialProps = await RecordsList.hydrate(ctx);

  return { group, ...recordListInitialProps };
};
