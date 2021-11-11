import Head from "next/head";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { useState, useEffect } from "react";
import { Form, Modal, Spinner, Alert } from "react-bootstrap";
import { useRouter } from "next/router";
import AppSelectorList from "@grouparoo/ui-components/components/AppSelectorList";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { EventDispatcher } from "@grouparoo/ui-components/utils/eventDispatcher";
import { Actions } from "@grouparoo/ui-components/utils/apiData";

class CustomErrorHandler extends EventDispatcher<{ error: string }> {
  error: Error | string | any;
  parentErrorHandler: ErrorHandler;

  constructor(parentErrorHandler: ErrorHandler) {
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
    availablePlugins,
    installedPlugins,
  }: {
    errorHandler: ErrorHandler;
    installedPlugins: Actions.AppOptions["plugins"];
    availablePlugins: Actions.PluginsAvailableList["plugins"];
  } = props;

  const router = useRouter();
  const { execApi } = UseApi(props, new CustomErrorHandler(errorHandler));
  const [plugin, setPlugin] = useState<
    Partial<Actions.AppOptions["plugins"][number]>
  >({ name: "" });
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const [installingMessage, setInstallingMessage]: [
    string | boolean,
    Function
  ] = useState(false);

  async function resetPluginsAndApps() {
    const { plugins: _installedPlugins }: Actions.AppOptions = await execApi(
      "get",
      `/appOptions`
    );
    const { plugins: _availablePlugins }: Actions.PluginsAvailableList =
      await execApi("get", `/plugins/available`);
    prepareCards(_installedPlugins, _availablePlugins);
  }

  function prepareCards(
    _installedPlugins: Actions.AppOptions["plugins"],
    _availablePlugins: Actions.PluginsAvailableList["plugins"]
  ) {
    // const availableList = _availablePlugins
    //   .filter((plugin) => !plugin.installed)
    //   .map((plugin) => {
    //     return {
    //       name: plugin.name,
    //       plugin: {
    //         icon: plugin.imageUrl,
    //         name: plugin.packageName,
    //         installed: plugin.installed,
    //       },
    //       provides: {
    //         source: plugin.source,
    //         destination: plugin.destination,
    //       },
    //     };
    //   });
    // const installedList = _installedPlugins
    //   .sort((a, b) => (a.name > b.name ? 1 : -1))
    //   .map((plugin) => ({
    //     ...app,
    //     plugin: { ...plugin, installed: true },
    //   }));
    setCards(
      []
        .concat(
          _installedPlugins.map((p) => {
            return { ...p, installed: true };
          }),
          _availablePlugins.filter((plugin) => !plugin.installed)
        )
        .sort((a, b) => (a.name > b.name ? 1 : -1))
    );
  }

  useEffect(() => {
    prepareCards(installedPlugins, availablePlugins);
  }, [installedPlugins, availablePlugins]);

  async function handleClick(plugin: Actions.AppOptions["plugins"][number]) {
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

    // router.push(`/app/new/${app.pluginApp.name}`);

    // setApp({ type });
    // setLoading(true);
    // const response: Actions.AppCreate = await execApi("post", `/app`, {
    //   type,
    // });
    // if (response?.app) {
    //   return router.push("/app/[id]/edit", `/app/${response.app.id}/edit`);
    // } else {
    //   setLoading(false);
    // }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function installPlugin(
    plugin: Actions.PluginsAvailableList["plugins"][number]
  ) {
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
      undefined,
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

      <h1>Add App</h1>

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
  const { plugins: installedPlugins }: Actions.AppOptions = await execApi(
    "get",
    `/appOptions`
  );
  const { plugins: availablePlugins } = await execApi(
    "get",
    `/plugins/available`
  );
  return { installedPlugins, availablePlugins };
};
