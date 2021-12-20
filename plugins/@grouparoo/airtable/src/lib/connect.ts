import { Client } from './client/client';
import { AirtableAppOptions } from './appOptions';
import { ConnectPluginAppMethod, SimpleAppOptions } from '@grouparoo/core';
import { IClient } from './client/interfaces/iClient';

export async function extractClient(
  appOptions: SimpleAppOptions,
): Promise<IClient> {
  const airtableOptions = new AirtableAppOptions(appOptions);
  return new Client(airtableOptions);
}
export const connect: ConnectPluginAppMethod<IClient> = async ({
  appOptions,
}) => {
  return extractClient(appOptions);
};
