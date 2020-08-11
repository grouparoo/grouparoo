import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import DestinationTabs from "../../../components/tabs/destination";
import RunsList from "../../../components/runs/list";

export default function Page(props) {
  const { destination } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: Destination Runs</title>
      </Head>

      <DestinationTabs destination={destination} />

      <RunsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { guid } = ctx.query;
  const { destination } = await execApi("get", `/destination/${guid}`);
  const runsListInitialProps = await RunsList.hydrate(ctx);
  return { destination, ...runsListInitialProps };
};
