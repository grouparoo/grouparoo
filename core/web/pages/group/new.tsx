import Head from "next/head";
import GroupAdd from "../../components/forms/group/add";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: New Group</title>
      </Head>

      <h1>Add Group</h1>
      <GroupAdd {...props} />
    </>
  );
}
