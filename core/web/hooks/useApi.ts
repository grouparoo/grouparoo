// import { useState } from "react";
import { Client } from "../client/client";
import { ErrorHandler } from "../utils/errorHandler";

const client = new Client();
const apiVersion = process.env.API_VERSION;
const webUrl = process.env.WEB_URL;

export function useApi(errorHandler?: ErrorHandler, cookieString?: string) {
  // const [response, setResponse] = useState(null);
  // const [loading, setLoading] = useState(false);

  async function execApi(
    verb = "get",
    path: string,
    data = {},
    setter?: Function,
    setterKey?: string,
    useCache = process.env.NODE_ENV === "test" ? false : true
  ) {
    if (data === null || data === undefined) {
      data = {};
    }

    // setLoading(true);

    let apiResponse;
    try {
      apiResponse = await client.action(
        verb,
        `${webUrl}/api/${apiVersion}${path}`,
        data,
        useCache,
        cookieString
      );
      // setResponse(apiResponse);

      if (setter) {
        if (setterKey) {
          setter(apiResponse[setterKey]);
        } else {
          setter(apiResponse);
        }
      }
      // setLoading(false);
      return apiResponse;
    } catch (error) {
      if (errorHandler) {
        errorHandler.set({ error: error });
      } else {
        throw error;
      }
    }
  }

  // return { loading, execApi, response };
  return { execApi };
}
