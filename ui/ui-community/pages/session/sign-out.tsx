import Head from "next/head";
import SignOutForm from "@grouparoo/ui-components/components/session/SignOut";

export default function SignOutPage(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Sign Out</title>
      </Head>

      <h1>Sign Out</h1>
      <SignOutForm {...props} />
    </>
  );
}
