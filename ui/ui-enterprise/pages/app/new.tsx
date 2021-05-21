import Head from "next/head";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import AppSelectorList from "@grouparoo/ui-components/components/appSelectorList";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";

import { Actions, Models } from "@grouparoo/ui-components/utils/apiData";

export default function Page(props) {
  const {
    errorHandler,
    types,
  }: { errorHandler: ErrorHandler; types: Actions.AppOptions["types"] } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [app, setApp] = useState<Models.AppType>({ type: "" });
  const [loading, setLoading] = useState(false);

  async function submit({ name: type }) {
    if (loading) return;

    setApp({ type });
    setLoading(true);
    const response: Actions.AppCreate = await execApi("post", `/app`, {
      type,
    });
    if (response?.app) {
      return router.push("/app/[id]/edit", `/app/${response.app.id}/edit`);
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
  const { types }: Actions.AppOptions = await execApi("get", `/appOptions`);
  return { types: types.filter((app) => app.addible !== false) };
};
