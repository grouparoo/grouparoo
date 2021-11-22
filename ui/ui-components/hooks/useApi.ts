import { AxiosRequestConfig, Method } from "axios";
import { GetServerSidePropsContext, NextPageContext } from "next";
import { Client } from "../client/client";
import { ErrorHandler } from "../utils/errorHandler";
import { UploadHandler } from "../utils/uploadHandler";

export const client = new Client();

export function UseApi(
  ctx: GetServerSidePropsContext | NextPageContext,
  errorHandler?: ErrorHandler,
  uploadHandler?: UploadHandler
) {
  async function execApi<T extends {} = any>(
    verb: Method = "get",
    path: string,
    data: AxiosRequestConfig["data"] = {},
    setter?: (response: T) => void,
    setterKey?: string,
    useCache = process.env.NODE_ENV === "test" ? false : true
  ): Promise<T> {
    if (data === null || data === undefined) data = {};

    let apiResponse: T;
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
        return {} as any;
      } else {
        throw error;
      }
    }
  }

  return { execApi };
}
