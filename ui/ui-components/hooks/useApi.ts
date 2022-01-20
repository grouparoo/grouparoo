import { AxiosRequestConfig, Method } from "axios";
import { GetServerSidePropsContext, NextPageContext } from "next";
import { Client } from "../client/client";
import { ErrorHandler } from "../eventHandlers/errorHandler";
import { UploadHandler } from "../eventHandlers/uploadHandler";

export const client = new Client();

export interface ApiHook {
  execApi: <T extends {} = any>(
    verb: Method,
    path: string,
    data?: AxiosRequestConfig["data"],
    useCache?: boolean
  ) => Promise<T>;
}

export function UseApi(
  ctx?: GetServerSidePropsContext | NextPageContext,
  errorHandler?: ErrorHandler,
  uploadHandler?: UploadHandler
): ApiHook {
  async function execApi<T extends {} = any>(
    verb: Method,
    path: string,
    data: AxiosRequestConfig["data"] = {},
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

      // if (setter) {
      //   if (setterKey) {
      //     setter(apiResponse[setterKey]);
      //   } else {
      //     setter(apiResponse);
      //   }
      // }

      return apiResponse;
    } catch (error) {
      if (errorHandler) {
        errorHandler.set({ message: error });
        return {} as any;
      } else {
        throw error;
      }
    }
  }

  return { execApi };
}
