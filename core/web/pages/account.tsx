import Head from "next/head";
import AccountForm from "../components/forms/account";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Account</title>
      </Head>

      <h1>Account</h1>
      <AccountForm {...props} />
    </>
  );
}
