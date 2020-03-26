import Head from "next/head";
import GroupsList from "../components/lists/groups";
import GroupAddModal from "../components/modals/groupAdd";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Groups</title>
      </Head>

      <h1>Groups</h1>
      <GroupsList {...props} />
      <GroupAddModal {...props} />
    </>
  );
}
