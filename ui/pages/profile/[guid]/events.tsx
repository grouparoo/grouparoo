import Head from "next/head";
import EventsList from "../../../components/events/list";
import ProfileTabs from "../../../components/tabs/profile";
import { useApi } from "../../../hooks/useApi";
import getProfileDisplayName from "../../../components/profile/getProfileDisplayName";

export default function Page(props) {
  const { profile } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {getProfileDisplayName(profile)}</title>
      </Head>

      <ProfileTabs profile={profile} />

      <EventsList
        header={
          <>
            <h1>{getProfileDisplayName(profile)} - Events</h1>
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
  const eventsListInitialProps = await EventsList.hydrate(ctx);

  return { profile, ...eventsListInitialProps };
};
