import { Client } from "../client/client";
import { ErrorHandler } from "../utils/errorHandler";
import { UploadHandler } from "../utils/uploadHandler";

export const client = new Client();

export function useApi(
  ctx: {
    req?: { headers?: { cookie: string } };
    res?: any;
  },
  errorHandler?: ErrorHandler,
  uploadHandler?: UploadHandler
) {
  async function execApi(
    verb = "get",
    path: string,
    data = {},
    setter?: Function,
    setterKey?: string,
    useCache = process.env.NODE_ENV === "test" ? false : true
  ) {
    if (data === null || data === undefined) data = {};

    let apiResponse;
    try {
      apiResponse = await client.action(
        verb,
        path,
        data,
        useCache,
        uploadHandler,
        ctx?.req,
        ctx?.res
      );

      if (setter) {
        if (setterKey) {
          setter(apiResponse[setterKey]);
        } else {
          setter(apiResponse);
        }
      }

      return apiResponse;
    } catch (error) {
      if (errorHandler) {
        errorHandler.set({ error: error });
        return {};
      } else {
        throw error;
      }
    }
  }

  return { execApi };
}
