import { useApi } from "../../../../ui-components/contexts/api";
import Head from "next/head";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import AppSelectorList from "@grouparoo/ui-components/components/AppSelectorList";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import { generateClient } from "@grouparoo/ui-components/client/client";
import { withServerErrorHandler } from "@grouparoo/ui-components/utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "@grouparoo/ui-components/utils/pageHelper";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const client = generateClient(ctx);
  let { plugins } = await client.request<Actions.PluginsList>(
    "get",
    `/plugins`,
    {
      includeInstalled: true,
      includeAvailable: false,
      includeVersions: false,
    }
  );

  plugins = plugins
    .filter((p) => p.apps?.length > 0)
    .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

  return {
    props: {
      plugins,
    },
  };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  plugins,
}) => {
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
};

export default Page;
