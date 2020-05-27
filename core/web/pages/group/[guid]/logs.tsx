import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import LogsList from "../../../components/logs/list";
import GroupTabs from "../../../components/tabs/group";

export default function Page(props) {
  const { group } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: Logs</title>
      </Head>

      <GroupTabs group={group} />

      <LogsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(null, ctx);
  const { group } = await execApi("get", `/group/${guid}`);
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { group, ...logListInitialProps };
};
