import Head from "next/head";
import ProfilePropertyRuleAdd from "../../components/forms/profilePropertyRule/add";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: New Profile Property Rule</title>
      </Head>

      <h1>Add Profile Property Rule</h1>
      <ProfilePropertyRuleAdd {...props} />
    </>
  );
}
