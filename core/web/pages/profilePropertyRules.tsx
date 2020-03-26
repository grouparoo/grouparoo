import Head from "next/head";
import ProfilePropertyRulesList from "../components/lists/profilePropertyRules";
import ProfilePropertyRuleAddModal from "../components/modals/profilePropertyRuleAdd";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Profile Property Rules</title>
      </Head>

      <h1>Profile Property Rules</h1>
      <ProfilePropertyRulesList {...props} />
      <ProfilePropertyRuleAddModal {...props} />
    </>
  );
}
