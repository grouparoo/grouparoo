import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import ExportsList from "../../../components/exports/list";
import DestinationTabs from "../../../components/tabs/destination";

export default function Page(props) {
  const { destination } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {destination.name}</title>
      </Head>

      <DestinationTabs destination={destination} />

      <ExportsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(null, ctx);
  const { guid } = ctx.query;
  const { destination } = await execApi("get", `/destination/${guid}`);
  const exportListInitialProps = await ExportsList.hydrate(ctx);
  return { destination, ...exportListInitialProps };
};
