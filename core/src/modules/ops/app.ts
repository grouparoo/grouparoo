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

    let connection;
    const appOptions = await app.getOptions(true);
    const { releaseLock } = await getConnectionLock(app);

    try {
      connection = api.plugins.persistentConnections[app.id];
      if (connection) {
        if (forceReconnect) {
          await disconnect(app, true);
        } else {
          return connection;
        }
      }

      log(
        `connecting to app ${app.name} - ${pluginApp.name} (${app.id})`,
        "debug"
      );

      connection = await pluginApp.methods.connect({
        app,
        appId: app.id,
        appOptions: options ? options : appOptions,
      });

      app.setConnection(connection);
    } finally {
      await releaseLock();
    }

    return connection;
  }

  /**
   * Disconnect from an App
   */
  export async function disconnect(app: App, alreadyLocked = false) {
    const appOptions = await app.getOptions(true);
    const { pluginApp } = await app.getPlugin();

    if (!pluginApp.methods.disconnect) return;

    let releaseLock: Function;
    try {
      if (!alreadyLocked) {
        const lockResponse = await getConnectionLock(app);
        releaseLock = lockResponse.releaseLock;
      }

      const connection = api.plugins.persistentConnections[app.id];

      if (connection) {
        log(
          `disconnecting from app ${app.name} - ${pluginApp.name} (${app.id})`,
          "debug"
        );
        await pluginApp.methods.disconnect({
          app,
          appId: app.id,
          appOptions,
          connection,
        });
        app.setConnection(undefined);
      }
    } finally {
      if (releaseLock) await releaseLock();
    }
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

    let sanitizedOptions = await OptionHelper.replaceObfuscatedOptions(
      app,
      options
    );
    sanitizedOptions = OptionHelper.sourceEnvironmentVariableOptions(
      app,
      sanitizedOptions
    );

    let connection;
    try {
      if (pluginApp.methods.connect) {
        connection = await pluginApp.methods.connect({
          app,
          appId: app.id,
          appOptions: sanitizedOptions,
        });
      }

      const result = await pluginApp.methods.test({
        app,
        appId: app.id,
        appOptions: sanitizedOptions,
        connection,
      });
      message = result.message;
      success = result.success;
    } catch (err) {
      error = err.message || err.toString();
      success = false;
      log(
        `[ app ] testing app ${app.name} (${app.id}) threw error: ${error}`,
        "notice"
      );
    } finally {
      if (connection && pluginApp.methods.disconnect) {
        await pluginApp.methods.disconnect({
          connection,
          app,
          appId: app.id,
          appOptions: sanitizedOptions,
        });
      }
    }

    return { success, message, error };
  }

  async function getConnectionLock(app: App) {
    const key = `app:${app.id}:connection:${id}`;
    return waitForLock(key);
  }
}
