import { api, log, id } from "actionhero";
import { App, SimpleAppOptions } from "../../models/App";
import { waitForLock } from "../locks";
import { OptionHelper } from "../optionHelper";

export namespace AppOps {
  /**
   * Connect to an App
   */
  export async function connect(
    app: App,
    options?: SimpleAppOptions,
    forceReconnect = false
  ) {
    const { pluginApp } = await app.getPlugin();
    if (!pluginApp.methods.connect) return;

    const appOptions = await app.getOptions();
    const { releaseLock } = await getConnectionLock(app);

    const existingConnection = api.plugins.persistentConnections[app.guid];
    if (existingConnection) {
      if (forceReconnect) {
        await disconnect(app, true);
      } else {
        await releaseLock();
        return existingConnection;
      }
    }

    log(`connecting to app ${app.name} - ${pluginApp.name} (${app.guid})`);

    const connection = await pluginApp.methods.connect({
      app,
      appGuid: app.guid,
      appOptions: options ? options : appOptions,
    });

    app.setConnection(connection);

    await releaseLock();
    return connection;
  }

  /**
   * Disconnect from an App
   */
  export async function disconnect(app: App, alreadyLocked = false) {
    const appOptions = await app.getOptions();
    const { pluginApp } = await app.getPlugin();

    if (!pluginApp.methods.disconnect) return;

    let releaseLock: Function;
    if (!alreadyLocked) {
      const lockResponse = await getConnectionLock(app);
      releaseLock = lockResponse.releaseLock;
    }

    const connection = api.plugins.persistentConnections[app.guid];

    if (connection) {
      log(
        `disconnecting from app ${app.name} - ${pluginApp.name} (${app.guid})`
      );
      await pluginApp.methods.disconnect({
        app,
        appGuid: app.guid,
        appOptions,
        connection,
      });
      app.setConnection(undefined);
    }

    if (releaseLock) await releaseLock();
  }

  /**
   * Test an App's Connection
   */
  export async function test(app: App, options?: SimpleAppOptions) {
    let success = false;
    let message: string;
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
          appGuid: app.guid,
          appOptions: options,
        });
      }

      const result = await pluginApp.methods.test({
        app,
        appGuid: app.guid,
        appOptions: options,
        connection,
      });
      message = result.message;
      success = result.success;

      if (pluginApp.methods.disconnect) {
        await pluginApp.methods.disconnect({
          connection,
          app,
          appGuid: app.guid,
          appOptions: options,
        });
      }
    } catch (err) {
      error = err.message || err.toString();
      success = false;
      log(
        `[ app ] testing app ${app.name} (${app.guid}) threw error: ${error}`,
        "notice"
      );
    }

    return { success, message, error };
  }

  async function getConnectionLock(app: App) {
    const key = `app:${app.guid}:connection:${id}:`;
    return waitForLock(key);
  }
}
