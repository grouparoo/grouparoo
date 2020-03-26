import Head from "next/head";
import AppsList from "../components/lists/apps";
import AppAddModal from "../components/modals/appAdd";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Apps</title>
      </Head>

      <h1>Apps</h1>
      <AppsList {...props} />
      <AppAddModal {...props} />
    </>
  );
}
