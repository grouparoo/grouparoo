import Head from "next/head";
import { useState } from "react";
import { UseApi } from "../../../../../hooks/useApi";
import { Form, Alert } from "react-bootstrap";
import AppSelectorList from "../../../../../components/AppSelectorList";
import { useRouter } from "next/router";
import { Actions } from "../../../../../utils/apiData";
import LinkButton from "../../../../../components/LinkButton";
import { ErrorHandler } from "../../../../../utils/errorHandler";

export default function Page(props) {
  const {
    errorHandler,
    connectionApps,
    model,
  }: {
    errorHandler: ErrorHandler;
    connectionApps: Actions.DestinationConnectionApps["connectionApps"];
    model: Actions.ModelView["model"];
  } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
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
      const response: Actions.DestinationCreate = await execApi(
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
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { modelId } = ctx.query;
  const { model } = await execApi("get", `/model/${modelId}`);
  const { connectionApps } = await execApi(
    "get",
    `/destinations/connectionApps`
  );
  return { connectionApps, model };
};
