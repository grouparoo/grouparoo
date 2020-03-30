import Head from "next/head";
import DestinationsList from "../components/lists/destinations";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Destinations</title>
      </Head>

      <h1>Destination</h1>
      <DestinationsList {...props} />
      <br />
      <Button
        variant="warning"
        onClick={() => {
          Router.push("/destination/new");
        }}
      >
        Add new Destination
      </Button>
    </>
  );
}
