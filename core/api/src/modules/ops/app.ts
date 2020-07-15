import { api, log } from "actionhero";
import { App, SimpleAppOptions } from "../../models/App";
import { OptionHelper } from "../optionHelper";

export namespace AppOps {
  /**
   * Connect to an App
   */
  export async function connect(app: App, options?: SimpleAppOptions) {
    const appOptions = await app.getOptions();
    const { pluginApp } = await app.getPlugin();
    const connection = api.plugins.persistentConnections[app.guid];
    if (connection) {
      await app.disconnect();
    }
    if (pluginApp.methods.connect) {
      log(`connecting to app ${app.name} - ${pluginApp.name} (${app.guid})`);
      const connection = await pluginApp.methods.connect({
        app,
        appOptions: options ? options : appOptions,
      });
      app.setConnection(connection);
      return connection;
    }
  }

  /**
   * Disconnect from an App
   */
  export async function disconnect(app: App) {
    const appOptions = await app.getOptions();
    const { pluginApp } = await app.getPlugin();
    const connection = api.plugins.persistentConnections[app.guid];
    if (pluginApp.methods.disconnect && connection) {
      log(
        `disconnecting from app ${app.name} - ${pluginApp.name} (${app.guid})`
      );
      await pluginApp.methods.disconnect({
        app,
        appOptions,
        connection,
      });
      app.setConnection(undefined);
    }
  }

  /**
   * Test an App's Connection
   */
  export async function test(app: App, options?: SimpleAppOptions) {
    let result = false;
    let error;

    const { pluginApp } = await app.getPlugin();
    if (!pluginApp) {
      throw new Error(`cannot find a pluginApp type of ${app.type}`);
    }

    if (!options) {
      options = await app.getOptions();
    } else {
      options = OptionHelper.sourceEnvironmentVariableOptions(app, options);
    }

    try {
      let connection;
      if (pluginApp.methods.connect) {
        connection = await pluginApp.methods.connect({
          app,
          appOptions: options,
        });
      }

      result = await pluginApp.methods.test({
        app,
        appOptions: options,
        connection,
      });

      if (pluginApp.methods.disconnect) {
        await pluginApp.methods.disconnect({
          connection,
          app,
          appOptions: options,
        });
      }
    } catch (err) {
      error = err;
      result = false;
      log(`[ app ] testing app threw error: ${error}`);
    }

    return { result, error };
  }
}
