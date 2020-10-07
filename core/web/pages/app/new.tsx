import Head from "next/head";
import { useApi } from "../../hooks/useApi";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import AppSelectorList from "../../components/appSelectorList";

import { AppAPIData } from "../../utils/apiData";

export default function Page(props) {
  const { errorHandler, types } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [app, setApp] = useState<AppAPIData>({ type: "" });
  const [loading, setLoading] = useState(false);

  async function submit({ name: type }) {
    if (loading) return;

    setApp({ type });
    setLoading(true);
    const response = await execApi("post", `/app`, { type });
    if (response?.app) {
      return router.push("/app/[guid]/edit", `/app/${response.app.guid}/edit`);
    } else {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New App</title>
      </Head>

      <h1>Add App</h1>

      <Form id="form">
        <AppSelectorList onClick={submit} selectedItem={app} items={types} />
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { types } = await execApi("get", `/appOptions`);
  return { types: types.filter((app) => app.addible !== false) };
};
