import Head from "next/head";
import { useApi } from "../../hooks/useApi";
import { useState, useEffect } from "react";
import { Form, Modal, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import AppSelectorList from "../../components/appSelectorList";
import { ErrorHandler } from "../../utils/errorHandler";

import { Actions, Models } from "../../utils/apiData";

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
 * 5. Make this behavior specific to config mode. Enterprise mode should work
 *    the same as this page does today.
 * 6. Reload the app to load in the new plugin.
 * 7. [SPIKE] Combining all these elements together and adding a badge for apps
 *    that have been installed (those that are actually apps).
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
  const [installablePlugins, setInstallablePlugins] = useState([]);
  const [addableApps, setAddableApps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [installing, setInstalling] = useState(false);

  async function resetPluginsAndApps() {
    const { types }: Actions.AppOptions = await execApi("get", `/appOptions`);
    const { plugins } = await execApi("get", `/plugins/available`);
    setAddableApps(types.filter((app) => app.addible !== false));
    preparePluginList(plugins);
  }

  function preparePluginList(plugins) {
    const pluginList = plugins
      .filter((plugin) => !plugin.installed)
      .map((plugin) => {
        return {
          name: plugin.name,
          plugin: {
            icon: plugin.imageUrl,
            name: plugin.packageName,
          },
          provides: {
            source: plugin.source,
            destination: plugin.destination,
          },
        };
      });
    setInstallablePlugins(pluginList);
  }

  useEffect(() => {
    preparePluginList(plugins);
    setAddableApps(apps);
  }, []);

  async function handleSubmit({ name: type }) {
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

  async function installPlugin(plugin) {
    setLoading(true);
    setInstalling(plugin.plugin.name);
    const response: Actions.PluginInstall = await execApi(
      "post",
      `/plugin/install`,
      {
        plugin: plugin.plugin.name,
      }
    );
    if (response) {
      await resetPluginsAndApps();
      setLoading(false);
      setInstalling(false);
    } else {
      setLoading(false);
      setInstalling(false);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New App</title>
      </Head>

      {installing && (
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
            <span>Installing plugin {installing} ...</span>
          </Modal.Body>
        </Modal>
      )}

      <h1>Add App</h1>

      <Form id="form">
        <AppSelectorList
          onClick={handleSubmit}
          selectedItem={app}
          items={addableApps}
        />

        <br />
        <br />
        <h2>Or install a new plugin to add app options</h2>
        <AppSelectorList
          onClick={installPlugin}
          selectedItem={app}
          items={installablePlugins}
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
