import Head from "next/head";
import { useState } from "react";
import { Form, Alert, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

import { UseApi } from "../../../hooks/useApi";
import AppSelectorList from "../../../components/appSelectorList";
import { Actions } from "../../../utils/apiData";

export default function Page(props) {
  const {
    connectionApps,
  }: { connectionApps: Actions.SourceConnectionApps["connectionApps"] } = props;
  const router = useRouter();
  const [app, setApp] = useState({ id: null });

  const apps = [];
  connectionApps.forEach((connectionApp) => {
    if (!apps.map((a) => a.id).includes(connectionApp.app.id)) {
      apps.push(connectionApp.app);
    }
  });

  function updateApp({ id }) {
    setApp({ id });
    router.push(`/source/new/[appId]`, `/source/new/${id}`);
  }

  if (apps.length === 0) {
    return (
      <>
        <Alert variant="primary">
          There are no Apps in the ready state yet.
          <br />
          <br />
          <Button size="sm" href="/apps">
            Add an App
          </Button>
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
  const { connectionApps } = await execApi("get", `/sources/connectionApps`);
  return { connectionApps };
};
