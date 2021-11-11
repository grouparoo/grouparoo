import Head from "next/head";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import AppSelectorList from "@grouparoo/ui-components/components/AppSelectorList";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { Actions, Models } from "@grouparoo/ui-components/utils/apiData";

export default function Page(props) {
  const {
    errorHandler,
    plugins,
  }: { errorHandler: ErrorHandler; plugins: Actions.AppOptions["plugins"] } =
    props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [plugin, setPlugin] = useState<
    Partial<Actions.AppOptions["plugins"][number]>
  >({ name: "" });
  const [loading, setLoading] = useState(false);

  async function submit(plugin: Actions.AppOptions["plugins"][number]) {
    if (loading) return;
    setPlugin(plugin);

    if (plugin.apps?.length === 1) {
      setLoading(true);
      const response: Actions.AppCreate = await execApi("post", `/app`, {
        type: plugin.apps[0].name,
      });
      if (response?.app) {
        return router.push("/app/[id]/edit", `/app/${response.app.id}/edit`);
      } else {
        setLoading(false);
      }
    } else {
      router.push(`/app/new/${plugin.name}`);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New App</title>
      </Head>

      <h1>Add New App</h1>

      <Form id="form">
        <AppSelectorList
          onClick={submit}
          selectedItem={plugin}
          items={plugins}
        />
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { plugins }: Actions.AppOptions = await execApi("get", `/appOptions`);
  return { plugins };
};
