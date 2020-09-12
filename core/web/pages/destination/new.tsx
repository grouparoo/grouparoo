import Head from "next/head";
import { useApi } from "../../hooks/useApi";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SelectorList from "../../components/selectorList";
import Link from "next/link";
import Router from "next/router";

export default function Page(props) {
  const { errorHandler, successHandler, connectionApps } = props;
  const { execApi } = useApi(props, errorHandler);
  const [destination, setDestination] = useState({
    appGuid: "",
    type: "",
  });

  const create = async (event) => {
    event.preventDefault();
    const response = await execApi("post", `/destination`, destination);
    if (response?.destination) {
      Router.push(
        "/destination/[guid]/edit",
        `/destination/${response.destination.guid}/edit`
      );
    }
  };

  function updateDestination(clickedOnButton) {
    setDestination({
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
        <title>Grouparoo: New Destination</title>
      </Head>

      <h1>Choose App and Connection</h1>

      <Form id="form" onSubmit={create}>
        <SelectorList
          onClick={updateDestination}
          selectedItem={destination}
          items={connectionApps}
          displayAddAppButton={true}
        />
        <br />
        <Button type="submit">Create Destination</Button>
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
