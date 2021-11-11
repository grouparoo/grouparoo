import Head from "next/head";
import { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useRouter } from "next/router";
import { ErrorHandler } from "../../../../../utils/errorHandler";
import { UseApi } from "../../../../../hooks/useApi";
import AppSelectorList from "../../../../../components/AppSelectorList";
import { Actions } from "../../../../../utils/apiData";
import LinkButton from "../../../../../components/LinkButton";

export default function Page(props) {
  const {
    errorHandler,
    connectionApps,
    model,
  }: {
    errorHandler: ErrorHandler;
    connectionApps: Actions.SourceConnectionApps["connectionApps"];
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
    connectionApp: Actions.SourceConnectionApps["connectionApps"][number]["app"]
  ) {
    setApp({ id: connectionApp.id });
    const matchingApps = connectionApps.filter(
      (a) => a.app.id === connectionApp.id
    );

    if (matchingApps.length > 1) {
      router.push(`/model/${model.id}/source/new/${connectionApp.id}`);
    } else {
      if (loading) return;

      setLoading(true);
      const response: Actions.SourceCreate = await execApi("post", `/source`, {
        appId: connectionApp.id,
        modelId: model.id,
        type: matchingApps[0].connection.name,
      });
      if (response?.source) {
        router.push(
          `/model/${response.source.modelId}/source/${response.source.id}/edit`
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
        <title>Grouparoo: New Source</title>
      </Head>

      <h1>Choose App for new Source</h1>

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
  const { connectionApps } = await execApi("get", `/sources/connectionApps`);
  const { model } = await execApi("get", `/model/${modelId}`);
  return { connectionApps, model };
};
