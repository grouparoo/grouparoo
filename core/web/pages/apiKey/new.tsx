import Head from "next/head";
import ApiKeyAdd from "../../components/forms/apiKey/add";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: New API Key</title>
      </Head>

      <h1>Add API Key</h1>
      <ApiKeyAdd {...props} />
    </>
  );
}
