import Head from "next/head";
import DestinationsList from "../components/lists/destinations";
import DestinationAddModal from "../components/modals/destinationAdd";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Destinations</title>
      </Head>

      <h1>Destinations</h1>
      <DestinationsList {...props} />
      <DestinationAddModal {...props} />
    </>
  );
}
