import Head from "next/head";
import DestinationAdd from "../../components/forms/destination/add";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: New Destination</title>
      </Head>

      <DestinationAdd {...props} />
    </>
  );
}
