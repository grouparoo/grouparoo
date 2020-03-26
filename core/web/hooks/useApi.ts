import { useState } from "react";
import { Client } from "../client/client";
import { ErrorHandler } from "../utils/errorHandler";

const client = new Client();

export function useApi(errorHandler: ErrorHandler) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    let apiResponse;
    try {
      apiResponse = await client.action(verb, path, data, useCache);
      setResponse(apiResponse);

      if (setter) {
        if (setterKey) {
          setter(apiResponse[setterKey]);
        } else {
          setter(apiResponse);
        }
      }
    } catch (error) {
      if (errorHandler) {
        errorHandler.set({ error: error });
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
      return apiResponse;
    }
  }

  return { loading, execApi, response };
}
