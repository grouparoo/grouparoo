import Head from "next/head";
import ProfilesList from "../components/lists/profiles";
import ProfilesAddForm from "../components/forms/profile/add";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Profiles</title>
      </Head>

      <h1>Profiles</h1>
      <ProfilesList {...props} />
      <ProfilesAddForm {...props} />
    </>
  );
}
