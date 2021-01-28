import Head from "next/head";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import ExportsList from "@grouparoo/ui-components/components/export/list";
import getProfileDisplayName from "@grouparoo/ui-components/components/profile/getProfileDisplayName";
import ProfileTabs from "@grouparoo/ui-components/components/tabs/profile";

export default function Page(props) {
  const { profile } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {getProfileDisplayName(profile)}</title>
      </Head>

      <ProfileTabs profile={profile} />

      <ExportsList
        header={
          <>
            <h1>{getProfileDisplayName(profile)} - Exports</h1>
            <br />
          </>
        }
        {...props}
      />
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
