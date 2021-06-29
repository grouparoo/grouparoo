import Head from "next/head";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import { useState, useEffect } from "react";
import { Form, Modal, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";

import AppSelectorList from "@grouparoo/ui-components/components/appSelectorList";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { EventDispatcher } from "@grouparoo/ui-components/utils/eventDispatcher";

import { Actions, Models } from "@grouparoo/ui-components/utils/apiData";

class CustomErrorHandler extends EventDispatcher {
  error: Error | string | any;
  parentErrorHandler: EventDispatcher;

  constructor(parentErrorHandler: EventDispatcher) {
    super();

    this.error = null;
    this.parentErrorHandler = parentErrorHandler;

    this.subscribe("_internal", ({ error }) => {
      this.error = error;

      if (this.error?.config?.url === "/api/v1/status/public") {
        console.info(`could not reach API: ${error}`);
      } else {
        parentErrorHandler.set({ error: this.error });
      }
    });
  }
}

export default function Page(props) {
  const {
    errorHandler,
    apps,
    plugins,
  }: {
    errorHandler: ErrorHandler;
    apps: Actions.AppOptions["types"];
    plugins: Actions.PluginsAvailableList["plugins"];
  } = props;

  const router = useRouter();
  const { execApi } = useApi(props, new CustomErrorHandler(errorHandler));
  const [app, setApp] = useState<Models.AppType>({ type: "" });
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [installingMessage, setInstallingMessage]: [
    string | boolean,
    Function
  ] = useState(false);

  async function resetPluginsAndApps() {
    const { types }: Actions.AppOptions = await execApi("get", `/appOptions`);
    const { plugins } = await execApi("get", `/plugins/available`);
    const apps = types.filter((app) => app.addible !== false);
    prepareCards(apps, plugins);
  }

  function prepareCards(apps, plugins) {
    const pluginList = plugins
      .filter((plugin) => !plugin.installed)
      .map((plugin) => {
        return {
          name: plugin.name,
          plugin: {
            icon: plugin.imageUrl,
            name: plugin.packageName,
            installed: plugin.installed,
          },
          provides: {
            source: plugin.source,
            destination: plugin.destination,
          },
        };
      });
    const appList = apps
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .map((app) => ({
        ...app,
        plugin: { ...app.plugin, installed: true },
      }));
    setCards(appList.concat(pluginList));
  }

  useEffect(() => {
    prepareCards(apps, plugins);
  }, []);

  async function handleClick(card) {
    if (loading) return;

    const { name: type } = card;

    if (!card.plugin.installed) return installPlugin(card);

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

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function installPlugin(plugin) {
    setLoading(true);
    setInstallingMessage(`Installing plugin ${plugin.plugin.name} ...`);
    const response: Actions.PluginInstall = await execApi(
      "post",
      `/plugin/install`,
      {
        plugin: plugin.plugin.name,
        restart: true,
      }
    );
    if (response?.checkIn) {
      setInstallingMessage("Restarting application ...");

      await timeout(response.checkIn);
      await waitForServer();

      //we only want the plugin type, not the '@grouparoo/'
      const pluginName = plugin.plugin.name.substring(11);
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

  async function waitForServer() {
    let response: Actions.PublicStatus = await execApi(
      "get",
      "/status/public",
      undefined,
      undefined,
      undefined,
      false
    );

    if (response["status"] !== "ok") {
      console.log("Server down. Trying again in 0.25 seconds ...");
      await timeout(250);
      response = await waitForServer();
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
            <Spinner
              animation="border"
              role="status"
              size="sm"
              className="mr-2"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
            <span>{installingMessage}</span>
          </Modal.Body>
        </Modal>
      )}

      <h1>Add App</h1>

      <Form id="form">
        <AppSelectorList
          onClick={handleClick}
          selectedItem={app}
          items={cards}
        />
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { types }: Actions.AppOptions = await execApi("get", `/appOptions`);
  const { plugins } = await execApi("get", `/plugins/available`);
  return { plugins, apps: types.filter((app) => app.addible !== false) };
};
