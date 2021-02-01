import Head from "next/head";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import LogsList from "@grouparoo/ui-components/components/log/list";
import GroupTabs from "@grouparoo/ui-components/components/tabs/group";

export default function Page(props) {
  const { group } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: Logs</title>
      </Head>

      <GroupTabs group={group} />

      <LogsList header={<h1>{group.name} - Logs</h1>} {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { group } = await execApi("get", `/group/${guid}`);
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { group, ...logListInitialProps };
};
