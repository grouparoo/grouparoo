import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import Head from "next/head";
import { useState } from "react";
import { Button } from "react-bootstrap";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import GroupTabs from "@grouparoo/ui-components/components/tabs/group";
import RecordsList from "@grouparoo/ui-components/components/record/list";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { SuccessHandler } from "@grouparoo/ui-components/utils/successHandler";
import { Models, Actions } from "@grouparoo/ui-components/utils/apiData";

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

  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  async function handleExport(type = "csv") {
    setLoading(true);
    const response: Actions.GroupExport = await execApi(
      "put",
      `/group/${group.id}/export`,
      {
        type,
      }
    );
    setLoading(false);
    if (response?.success) {
      successHandler.set({
        message:
          "Started Group Export.  It will be available in Files when complete...",
      });
    }
  }

  async function run() {
    if (window.confirm("are you sure? this could take a while")) {
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
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {group.name}</title>
      </Head>
      <GroupTabs group={group} />
      <h1>{group.name} - Members</h1>
      <StateBadge state={group.state} />
      <br />
      <Button
        disabled={group.state !== "ready"}
        variant="outline-secondary"
        size="sm"
        onClick={() => {
          handleExport("csv");
        }}
      >
        Export all Group Members to CSV
      </Button>
      &nbsp;
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => {
          run();
        }}
      >
        Recalculate Members
      </Button>
      <br />
      <hr />
      <RecordsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = useApi(ctx);
  const { group } = await execApi("get", `/group/${id}`);
  const recordListInitialProps = await RecordsList.hydrate(ctx);

  return { group, ...recordListInitialProps };
};
