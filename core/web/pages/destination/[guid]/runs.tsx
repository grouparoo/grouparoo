import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import { Button } from "react-bootstrap";
import { useState } from "react";
import DestinationTabs from "../../../components/tabs/destination";
import RunsList from "../../../components/runs/list";

export default function Page(props) {
  const { destination, successHandler, errorHandler, runsHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  const exportDestination = async () => {
    if (confirm("Are you sure?")) {
      try {
        await execApi("post", `/destination/${destination.guid}/export`, {
          force: true,
        });
        successHandler.set({ message: "Profiles Exporting..." });
        runsHandler.set({});
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Grouparoo: Destination Runs</title>
      </Head>

      <DestinationTabs destination={destination} />

      <Button
        variant="outline-primary"
        size="sm"
        disabled={loading}
        onClick={exportDestination}
      >
        Export Profiles to Destination
      </Button>
      <br />
      <br />

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
