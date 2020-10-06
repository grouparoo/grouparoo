import Head from "next/head";
import { useApi } from "../../hooks/useApi";
import { useState } from "react";
import { Form } from "react-bootstrap";
import SelectorList from "../../components/selectorList";
import LoadingButton from "../../components/loadingButton";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page(props) {
  const { errorHandler, successHandler, connectionApps } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState({
    appGuid: "",
    type: "",
  });

  const create = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await execApi("post", `/destination`, destination);
    if (response?.destination) {
      router.push(
        "/destination/[guid]/edit",
        `/destination/${response.destination.guid}/edit`
      );
    } else {
      setLoading(false);
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

      <h1>Choose App and Connection</h1>

      <Form id="form" onSubmit={create}>
        <SelectorList
          onClick={updateDestination}
          selectedItem={destination}
          items={connectionApps}
          displayAddAppButton={true}
        />
        <br />
        <LoadingButton disabled={loading} type="submit">
          Create Destination
        </LoadingButton>
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
