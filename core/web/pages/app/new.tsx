import Head from "next/head";
import { useApi } from "../../hooks/useApi";
import AppAdd from "../../components/forms/app/add";

export default function Page(props) {
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

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(null, ctx?.req?.headers?.cookie);
  const { types } = await execApi("get", `/appOptions`);
  return { types: types.filter((app) => app.addible !== false) };
};
