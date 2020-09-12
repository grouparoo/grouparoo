import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Form, Button } from "react-bootstrap";
import SelectorList from "../../components/selectorList";
import Link from "next/link";
import Router from "next/router";

export default function Page(props) {
  const { errorHandler, successHandler, connectionApps } = props;
  const { execApi } = useApi(props, errorHandler);
  const [source, setSource] = useState({
    appGuid: "",
    type: "",
  });

  const create = async (event) => {
    event.preventDefault();
    const response = await execApi("post", `/source`, source);
    if (response?.source) {
      Router.push(
        "/source/[guid]/edit",
        `/source/${response.source.guid}/edit`
      );
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
        Please create an{" "}
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
        <Button type="submit">Create Source</Button>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { connectionApps } = await execApi("get", `/sources/connectionApps`);
  return { connectionApps };
};
