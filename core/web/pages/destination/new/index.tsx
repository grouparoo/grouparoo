import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form } from "react-bootstrap";
import AppSelectorList from "../../../components/appSelectorList";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page(props) {
  const { connectionApps } = props;
  const router = useRouter();
  const [app, setApp] = useState({ guid: null });

  const apps = [];
  connectionApps.forEach((connectionApp) => {
    if (!apps.map((a) => a.guid).includes(connectionApp.app.guid)) {
      apps.push(connectionApp.app);
    }
  });

  function updateApp({ guid }) {
    setApp({ guid });
    router.push(`/destination/new/[appGuid]`, `/destination/new/${guid}`);
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
