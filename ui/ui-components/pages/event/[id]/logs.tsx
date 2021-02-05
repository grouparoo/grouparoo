import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import LogsList from "../../../components/log/list";
import EventTabs from "../../../components/tabs/event";

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
  const { id } = ctx.query;
  const { execApi } = useApi(ctx);
  const { event } = await execApi("get", `/event/${id}`);
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { event, ...logListInitialProps };
};
