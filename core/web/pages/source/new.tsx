import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Form } from "react-bootstrap";
import SelectorList from "../../components/selectorList";
import LoadingButton from "../../components/loadingButton";
import Link from "next/link";
import Router from "next/router";

export default function Page(props) {
  const { errorHandler, connectionApps } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState({
    appGuid: "",
    type: "",
  });

  const create = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await execApi("post", `/source`, source);
    if (response?.source) {
      Router.push(
        "/source/[guid]/edit",
        `/source/${response.source.guid}/edit`
      );
    } else {
      setLoading(false);
    }
  };

  function updateSource(clickedOnButton) {
    setSource({
      type: clickedOnButton.connection.name,
      appGuid: clickedOnButton.app.guid,
    });
  }

  if (connectionApps.length === 0) {
    return (
      <p>
        There are no Apps in the <code>ready</code> state which can be used to
        create a Source. Please create an{" "}
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
        <title>Grouparoo: New Source</title>
      </Head>

      <h1>Choose App and Connection</h1>

      <Form id="form" onSubmit={create}>
        <SelectorList
          onClick={updateSource}
          selectedItem={source}
          items={connectionApps}
          displayAddAppButton={true}
        />

        <br />
        <LoadingButton type="submit" disabled={loading}>
          Create Source
        </LoadingButton>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { connectionApps } = await execApi("get", `/sources/connectionApps`);
  return { connectionApps };
};
