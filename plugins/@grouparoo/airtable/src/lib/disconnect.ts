import { DisconnectPluginAppMethod } from '@grouparoo/core';
import { IClient } from './client/interfaces/iClient';

export const disconnect: DisconnectPluginAppMethod<IClient> = async ({
  connection,
}) => {
  await connection.close();
};
