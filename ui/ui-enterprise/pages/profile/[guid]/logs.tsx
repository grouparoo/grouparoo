import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import LogsList from "../../../components/log/list";
import ProfileTabs from "../../../components/tabs/profile";
import getProfileDisplayName from "../../../components/profile/getProfileDisplayName";

export default function Page(props) {
  const { profile } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: Logs</title>
      </Head>

      <ProfileTabs profile={profile} />

      <LogsList
        header={
          <>
            <h1>{getProfileDisplayName(profile)} - Logs</h1>
            <br />
          </>
        }
        {...props}
      />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { profile } = await execApi("get", `/profile/${guid}`);
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { profile, ...logListInitialProps };
};
