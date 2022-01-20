import Head from "next/head";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { useState, useEffect } from "react";
import { Form, Modal, Spinner, Alert } from "react-bootstrap";
import { useRouter } from "next/router";
import AppSelectorList from "@grouparoo/ui-components/components/AppSelectorList";
import { errorHandler } from "@grouparoo/ui-components/eventHandlers";
import { EventDispatcher } from "@grouparoo/ui-components/utils/eventDispatcher";
import { Actions } from "@grouparoo/ui-components/utils/apiData";

class CustomErrorHandler extends EventDispatcher<{ message: string }> {
  message: Error | string | any = null;

  constructor() {
    super();

    this.subscribe("_internal", ({ message }) => {
      this.message = message;

      if (this.message?.config?.url === "/api/v1/status/public") {
        console.info(`could not reach API: ${message}`);
      } else {
        errorHandler.set({ message: this.message });
      }
    });
  }
}

export default function Page(props) {
  const {
    plugins,
  }: {
    plugins: Actions.PluginsList["plugins"];
  } = props;

  const router = useRouter();
  const { execApi } = UseApi(props, new CustomErrorHandler());
  const [plugin, setPlugin] = useState<
    Partial<Actions.PluginsList["plugins"][number]>
  >({ name: "" });
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const [installingMessage, setInstallingMessage]: [
    string | boolean,
    Function
  ] = useState(false);

  async function resetPluginsAndApps() {
    const { plugins: _plugins }: Actions.PluginsList = await execApi(
      "get",
      `/plugins`
    );
    prepareCards(_plugins);
  }

  function prepareCards(_plugins: Actions.PluginsList["plugins"]) {
    setCards(
      _plugins
        .filter((p) => p.source || p.destination)
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .sort((a, b) => {
          if (a.installed === b.installed) return 0;
          if (a.installed) return -1;
          return 1;
        })
    );
  }

  useEffect(() => {
    prepareCards(plugins);
  }, [plugins]);

  async function handleClick(plugin: Actions.PluginsList["plugins"][number]) {
    if (loading) return;
    // @ts-ignore
    if (!plugin.installed) return installPlugin(plugin);

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

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function installPlugin(plugin: Actions.PluginsList["plugins"][number]) {
    setLoading(true);
    setInstallingMessage(`Installing plugin ${plugin.name} ...`);
    const response: Actions.PluginInstall = await execApi(
      "post",
      `/plugin/install`,
      {
        plugin: plugin.name,
        restart: true,
      }
    );
    if (response?.checkIn) {
      setInstallingMessage("Restarting application ...");

      const failTime = new Date().getTime() + response.checkIn * 38; // ~15 seconds
      await sleep(response.checkIn);
      await waitForServer(failTime);

      //we only want the plugin type, not the '@grouparoo/'
      const pluginName = plugin.name.substring(11);
      const newApp: Actions.AppCreate = await execApi("post", `/app`, {
        type: pluginName,
      });
      if (newApp?.app) {
        return router.push("/app/[id]/edit", `/app/${newApp.app.id}/edit`);
      }
      await resetPluginsAndApps();
      setLoading(false);
      setInstallingMessage(false);
    } else {
      setLoading(false);
      setInstallingMessage(false);
    }
  }

  async function waitForServer(failTime: number) {
    const now = new Date().getTime();
    if (failTime < now) {
      setShowSpinner(false);
      setInstallingMessage(
        <Alert variant="warning">
          There was a problem restarting Grouparoo. <br />
          <br />
          Please restart the application via the command line.
        </Alert>
      );
      return;
    }

    let response: Actions.PublicStatus = await execApi(
      "get",
      "/status/public",
      undefined,
      false
    );

    if (response["status"] !== "ok") {
      console.log("Server down. Trying again in 0.25 seconds ...");
      await sleep(250);
      response = await waitForServer(failTime);
    }

    return response;
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
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { plugins }: Actions.PluginsList = await execApi("get", `/plugins`, {
    includeInstalled: true,
    includeAvailable: true,
    includeVersions: false,
  });
  return { plugins };
};
