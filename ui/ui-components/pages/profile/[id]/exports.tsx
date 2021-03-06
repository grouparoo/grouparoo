import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import ExportsList from "../../../components/export/list";
import {
  getProfileDisplayName,
  getProfilePageTitle,
} from "../../../components/profile/getProfileDisplayName";
import ProfileTabs from "../../../components/tabs/profile";

export default function Page(props) {
  const { profile } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {getProfilePageTitle(profile)}</title>
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
  const { id } = ctx.query;
  const { profile } = await execApi("get", `/profile/${id}`);
  const exportListInitialProps = await ExportsList.hydrate(ctx);
  return { profile, ...exportListInitialProps };
};
