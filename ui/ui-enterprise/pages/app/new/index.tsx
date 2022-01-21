import { useApi } from "../../../../ui-components/contexts/api";
import Head from "next/head";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import AppSelectorList from "@grouparoo/ui-components/components/AppSelectorList";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import { generateClient } from "@grouparoo/ui-components/client/client";
import { NextPageContext } from "next";

export default function Page(props) {
  const { plugins }: { plugins: Actions.PluginsList["plugins"] } = props;
  const router = useRouter();
  const { client } = useApi();
  const [plugin, setPlugin] = useState<
    Partial<Actions.PluginsList["plugins"][number]>
  >({ name: "" });
  const [loading, setLoading] = useState(false);

  async function submit(plugin: Actions.PluginsList["plugins"][number]) {
    if (loading) return;
    setPlugin(plugin);

    if (plugin.apps?.length === 1) {
      setLoading(true);
      const response: Actions.AppCreate = await client.request("post", `/app`, {
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

Page.getInitialProps = async (ctx: NextPageContext) => {
  const client = generateClient(ctx);
  const { plugins }: Actions.PluginsList = await client.request(
    "get",
    `/plugins`,
    {
      includeInstalled: true,
      includeAvailable: false,
      includeVersions: false,
    }
  );
  return {
    plugins: plugins
      .filter((p) => p.apps?.length > 0)
      .sort((a, b) => (a.name > b.name ? 1 : -1)),
  };
};
