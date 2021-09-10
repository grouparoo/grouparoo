import Head from "next/head";
import RunsList from "@grouparoo/ui-components/components/runs/list";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import GroupTabs from "@grouparoo/ui-components/components/tabs/group";

export default function Page(props) {
  const { group } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {group.name}</title>
      </Head>

      <GroupTabs group={group} />

      <RunsList header={<h1>{group.name} - Runs</h1>} {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { group } = await execApi("get", `/group/${id}`);
  const runsListInitialProps = await RunsList.hydrate(ctx);
  return { group, ...runsListInitialProps };
};
