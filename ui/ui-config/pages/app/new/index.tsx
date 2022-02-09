import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import { Form, Modal, Spinner, Alert } from "react-bootstrap";
import { useRouter } from "next/router";
import AppSelectorList from "@grouparoo/ui-components/components/AppSelectorList";
import { useApi } from "@grouparoo/ui-components/contexts/api";
import { errorHandler } from "@grouparoo/ui-components/eventHandlers";
import { EventDispatcher } from "@grouparoo/ui-components/utils/eventDispatcher";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import { generateClient } from "@grouparoo/ui-components/client/client";
import { NextPageWithInferredProps } from "@grouparoo/ui-components/utils/pageHelper";
import React from "react";

type PluginWithVersion = Actions.PluginsList["plugins"][number];

class CustomErrorHandler extends EventDispatcher<{ message: string }> {
  message: Error | string | any = null;

  constructor() {
    super();

    this.subscribe("_internal", ({ message }) => {
      this.message = message;

      if (this.message?.config?.url === "/api/v1/status/public") {
        console.info(`Could not reach API: ${message}`);
      } else {
        errorHandler.set({ message: this.message });
      }
    });
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const client = generateClient(ctx);
  const { plugins } = await client.request<Actions.PluginsList>(
    "get",
    `/plugins`,
    {
      includeInstalled: true,
      includeAvailable: true,
      includeVersions: false,
    }
  );
  return { props: { plugins } };
};

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  plugins,
}) => {
  const router = useRouter();
  const { client } = useApi();
  const customErrorHandler = useMemo(() => new CustomErrorHandler(), []);
  const [plugin, setPlugin] = useState<Partial<PluginWithVersion>>(() => ({
    name: "",
  }));
  const [cards, setCards] = useState<PluginWithVersion[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const [installingMessage, setInstallingMessage] = useState<React.ReactNode>();

  async function resetPluginsAndApps() {
    const { plugins: _plugins }: Actions.PluginsList = await client.request(
      "get",
      `/plugins`
    );
    return prepareCards(_plugins);
  }

  function prepareCards(_plugins: Actions.PluginsList["plugins"]) {
    const nextCards = _plugins
      .filter((p) => p.source || p.destination)
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .sort((a, b) => {
        if (a.installed === b.installed) return 0;
        if (a.installed) return -1;
        return 1;
      });
    setCards(nextCards);

    return nextCards;
  }

  useEffect(() => {
    prepareCards(plugins);
  }, [plugins]);

  const newAppFromPlugin = async (plugin: PluginWithVersion) => {
    setPlugin(plugin);

    if (plugin.apps.length > 1) {
      return router.push(`/app/new/${plugin.name}`);
    }

    setLoading(true);
    const response = await client.request<Actions.AppCreate>("post", `/app`, {
      type: plugin.apps[0].name,
    });
    if (response?.app) {
      return router.push("/app/[id]/edit", `/app/${response.app.id}/edit`);
    }
    setLoading(false);
  };

  async function handleClick(plugin: PluginWithVersion) {
    if (loading) return;
    if (!plugin.installed) return installPlugin(plugin);
    await newAppFromPlugin(plugin);
  }

  async function installPlugin(plugin: PluginWithVersion) {
    setLoading(true);
    setInstallingMessage(`Installing plugin ${plugin.name}...`);

    const response: Actions.PluginInstall = await client.request(
      "post",
      `/plugin/install`,
      {
        plugin: plugin.name,
        restart: true,
      }
    );

    if (response?.checkIn) {
      setInstallingMessage("Restarting Grouparoo config app...");

      const failTime = new Date().getTime() + response.checkIn * 38; // ~15 seconds
      await sleep(response.checkIn);
      await waitForServer(failTime);
      const updatedPlugins = await resetPluginsAndApps();

      setInstallingMessage(undefined);
      setLoading(false);

      const updatedPlugin = updatedPlugins.find(
        ({ name }) => name === plugin.name
      );
      await newAppFromPlugin(updatedPlugin);
    } else if (!response?.success) {
      errorHandler.set({
        message: `Could not install plugin ${plugin.name}!`,
      });
    }

    setInstallingMessage(undefined);
    setLoading(false);
  }

  async function waitForServer(failTime: number) {
    const now = new Date().getTime();
    if (failTime < now) {
      setShowSpinner(false);
      setInstallingMessage(
        <Alert variant="warning">
          There was a problem restarting.
          <br />
          <br />
          Please restart the Grouparoo config app via the CLI.
        </Alert>
      );
      return;
    }

    const retry = async () => {
      console.log("Server down. Trying again in 1s...");
      await sleep(1000);
      return await waitForServer(failTime);
    };

    try {
      const response: Actions.PublicStatus = await client.request(
        "get",
        "/status/public",
        undefined,
        { useCache: false, errorHandler: customErrorHandler }
      );

      if (response["status"] !== "ok") {
        return await retry();
      }

      return response;
    } catch (e) {
      if (e?.message?.match(/Network Error/)) {
        return await retry();
      }
      throw e;
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New App</title>
      </Head>

      {installingMessage && (
        <Modal
          show={true}
          backdrop="static"
          keyboard={false}
          centered
          animation={false}
        >
          <Modal.Body>
            {showSpinner ? (
              <Spinner
                animation="border"
                role="status"
                size="sm"
                className="mr-2"
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : null}
            <span>{installingMessage}</span>
          </Modal.Body>
        </Modal>
      )}

      <h1>Add New App</h1>

      <Form id="form">
        <AppSelectorList
          onClick={handleClick}
          items={cards}
          selectedItem={plugin}
        />
      </Form>
    </>
  );
};

export default Page;
