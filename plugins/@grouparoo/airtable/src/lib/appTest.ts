import { TestPluginMethod } from '@grouparoo/core';
import { IClient } from './client/interfaces/iClient';

export const appTest: TestPluginMethod<IClient> = async ({ connection }) => {
  try {
    const { statusCode, body } = await connection.health();
    return { success: statusCode === 200, body };
  } catch (exception) {
    return { success: false, message: exception.toString() };
  }
};
