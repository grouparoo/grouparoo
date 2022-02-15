import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { generateClient } from "../../../../../client/client";
import AppSelectorList from "../../../../../components/AppSelectorList";
import LinkButton from "../../../../../components/LinkButton";
import { useApi } from "../../../../../contexts/api";
import { useGrouparooModel } from "../../../../../contexts/grouparooModel";
import { Actions } from "../../../../../utils/apiData";
import { NextPageWithInferredProps } from "../../../../../utils/pageHelper";
import { withServerErrorHandler } from "../../../../../utils/withServerErrorHandler";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const client = generateClient(ctx);
  const { connectionApps } =
    await client.request<Actions.DestinationConnectionApps>(
      "get",
      `/destinations/connectionApps`
    );
  return { props: { connectionApps } };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  connectionApps,
}) => {
  const router = useRouter();
  const { client } = useApi();
  const { model } = useGrouparooModel();
  const [loading, setLoading] = useState(false);
  const [app, setApp] = useState({ id: null });

  const apps = [];
  connectionApps.forEach((connectionApp) => {
    if (!apps.map((a) => a.id).includes(connectionApp.app.id)) {
      apps.push(connectionApp.app);
    }
  });

  async function updateApp(
    connectionApp: Actions.DestinationConnectionApps["connectionApps"][number]["app"]
  ) {
    setApp({ id: connectionApp.id });
    const matchingApps = connectionApps.filter(
      (a) => a.app.id === connectionApp.id
    );

    if (matchingApps.length > 1) {
      router.push(`/model/${model.id}/destination/new/${connectionApp.id}`);
    } else {
      if (loading) return;

      setLoading(true);
      const response: Actions.DestinationCreate = await client.request(
        "post",
        `/destination`,
        {
          appId: connectionApp.id,
          modelId: model.id,
          type: matchingApps[0].connection.name,
        }
      );
      if (response?.destination) {
        router.push(
          `/model/${response.destination.modelId}/destination/${response.destination.id}/edit`
        );
      } else {
        setLoading(false);
      }
    }
  }

  if (apps.length === 0) {
    return (
      <>
        <Alert variant="primary">
          There are no Apps in the ready state yet.
          <br />
          <br />
          <LinkButton size="sm" href="/apps">
            Add an App
          </LinkButton>
        </Alert>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New Destination</title>
      </Head>

      <h1>Choose App for new Destination</h1>

      <Form id="form">
        <AppSelectorList
          onClick={updateApp}
          selectedItem={app}
          items={apps}
          displayAddAppButton={true}
        />
      </Form>
    </>
  );
};

export default Page;
