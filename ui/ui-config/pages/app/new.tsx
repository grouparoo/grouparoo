import Head from "next/head";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import { useState, useEffect } from "react";
import { Form, Modal, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";

import AppSelectorList from "@grouparoo/ui-components/components/appSelectorList";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";

import { Actions, Models } from "@grouparoo/ui-components/utils/apiData";

/**
 * TODO:
 *
 * 1. ✅  Add section below the list of apps as "Or install a new plugin" that
 *    renders a card for each plugin.
 * 2. ✅  Apps coming from plugins that have been installed are not shown in the
 *    plugin list.
 * 3. ✅  Clicking on a plugin installs it on the fly.
 * 4. ✅  Add feedback to the installation process -- i.e. figure out what
 *    loading does and/or set noticeable loading feedback.
 * 5. ✅  Make this behavior specific to config mode. Enterprise mode should work
 *    the same as this page does today.
 * 6. Reload the app to load in the new plugin.
 * 7. ✅  [SPIKE] Combining all these elements together and adding a badge for apps
 *    that have been installed (those that are actually apps).
 * 8. Move GROUPAROO_PLUGIN_MANIFEST_URL to config.
 */

/**
 *
 * BROWSER - install plugin
 *
 * MODAL - waiting for install (wait for api response)
 *       SERVER - install
 * MODAL - waiting for reboot (polling)
 *       SERVER - reboot
 *
 * BROWSER - reload page
 *
 */

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
  const { execApi } = useApi(props, errorHandler);
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
      }
    );
    if (response?.checkIn) {
      // await resetPluginsAndApps();
      // setLoading(false);
      // setInstallingMessage(false);

      setInstallingMessage("Restarting application ...");

      // await timeout(1000 * 10);
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
      await timeout(response.checkIn);
      await waitForServer();
    } else {
      setLoading(false);
      setInstallingMessage(false);
    }
  }

  function waitForServer() {
    // try {
    console.log("Checking server ...");

    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      //   // resolve("TIMEOUT");
      //   waitForServer();
      // }, 1000);

      execApi(
        "get",
        "/status/public",
        undefined,
        undefined,
        undefined,
        false,
        1000
      )
        .then((response) => {
          console.log("RELOADING ...");
          // console.log(globalThis);

          // globalThis.window.location.reload();
          console.log(response);

          resolve(response);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });

    // return response;
    // } catch (err) {
    //   console.error(err);
    //   const response = await waitForServer();
    //   return response;
    // }
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
