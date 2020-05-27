import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import LogsList from "../../../components/log/list";
import ProfilePropertyRuleTabs from "../../../components/tabs/profilePropertyRule";

export default function Page(props) {
  const { profilePropertyRule } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: Logs</title>
      </Head>

      <ProfilePropertyRuleTabs profilePropertyRule={profilePropertyRule} />

      <LogsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(null, ctx);
  const { profilePropertyRule } = await execApi(
    "get",
    `/profilePropertyRule/${guid}`
  );
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { profilePropertyRule, ...logListInitialProps };
};
