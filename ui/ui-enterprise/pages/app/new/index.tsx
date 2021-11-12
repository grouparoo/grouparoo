import Head from "next/head";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import AppSelectorList from "@grouparoo/ui-components/components/AppSelectorList";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { Actions } from "@grouparoo/ui-components/utils/apiData";

export default function Page(props) {
  const {
    errorHandler,
    plugins,
  }: { errorHandler: ErrorHandler; plugins: Actions.PluginsList["plugins"] } =
    props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [plugin, setPlugin] = useState<
    Partial<Actions.PluginsList["plugins"][number]>
  >({ name: "" });
  const [loading, setLoading] = useState(false);

  async function submit(plugin: Actions.PluginsList["plugins"][number]) {
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
          items={plugins.map((p) => {
            return { ...p, installed: null };
          })}
        />
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { plugins }: Actions.PluginsList = await execApi("get", `/plugins`, {
    includeInstalled: true,
    includeAvailable: false,
    includeVersions: false,
  });
  return {
    plugins: plugins
      .filter((p) => p.apps?.length > 0)
      .sort((a, b) => (a.name > b.name ? 1 : -1)),
  };
};
