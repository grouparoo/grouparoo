import Head from "next/head";
import { useApi } from "../../hooks/useApi";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import SelectorList from "../../components/selectorList";
import LoadingButton from "../../components/loadingButton";

import { AppAPIData } from "../../utils/apiData";

export default function Page(props) {
  const { errorHandler, types } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [app, setApp] = useState<AppAPIData>({ type: "" });
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await execApi("post", `/app`, app);
    if (response?.app) {
      return router.push("/app/[guid]/edit", `/app/${response.app.guid}/edit`);
    } else {
      setLoading(false);
    }
  }

  function updateApp(clickedOnButton) {
    setApp({ type: clickedOnButton.name });
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New App</title>
      </Head>

      <h1>Add App</h1>

      <Form id="form" onSubmit={submit}>
        <SelectorList onClick={updateApp} selectedItem={app} items={types} />
        <br />
        <LoadingButton variant="primary" type="submit" disabled={loading}>
          Continue
        </LoadingButton>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { types } = await execApi("get", `/appOptions`);
  return { types: types.filter((app) => app.addible !== false) };
};
