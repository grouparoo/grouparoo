import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import ExportsList from "../../../components/export/list";
import getProfileDisplayName from "../../../components/profile/getProfileDisplayName";
import ProfileTabs from "../../../components/tabs/profile";

export default function Page(props) {
  const { profile } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {getProfileDisplayName(profile)}</title>
      </Head>

      <ProfileTabs profile={profile} />

      <ExportsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { guid } = ctx.query;
  const { profile } = await execApi("get", `/profile/${guid}`);
  const exportListInitialProps = await ExportsList.hydrate(ctx);
  return { profile, ...exportListInitialProps };
};
