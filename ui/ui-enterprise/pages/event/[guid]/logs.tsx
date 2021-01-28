import Head from "next/head";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import LogsList from "@grouparoo/ui-components/components/log/list";
import EventTabs from "@grouparoo/ui-components/components/tabs/event";

export default function Page(props) {
  const { event } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: Logs</title>
      </Head>

      <EventTabs event={event} />

      <LogsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { event } = await execApi("get", `/event/${guid}`);
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { event, ...logListInitialProps };
};
