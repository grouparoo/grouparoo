import Head from "next/head";
import AppAdd from "../../components/forms/app/add";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: New App</title>
      </Head>

      <h1>Add App</h1>
      <AppAdd {...props} />
    </>
  );
}
