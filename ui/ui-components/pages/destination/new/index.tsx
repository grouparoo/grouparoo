import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form } from "react-bootstrap";
import AppSelectorList from "../../../components/appSelectorList";
import Link from "next/link";
import { useRouter } from "next/router";
import { Actions } from "../../../utils/apiData";

export default function Page(props) {
  const {
    connectionApps,
  }: {
    connectionApps: Actions.DestinationConnectionApps["connectionApps"];
  } = props;
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
    router.push(`/destination/new/[appId]`, `/destination/new/${id}`);
  }

  if (apps.length === 0) {
    return (
      <p>
        There are no Apps in the <code>ready</code> state which can be used to
        create a Destination. Please create an{" "}
        <Link href="/apps">
          <a>App</a>
        </Link>{" "}
        first.
      </p>
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
  const { execApi } = useApi(ctx);
  const { connectionApps } = await execApi(
    "get",
    `/destinations/connectionApps`
  );
  return { connectionApps };
};
