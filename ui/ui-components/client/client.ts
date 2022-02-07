import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  Method,
} from "axios";
import type { IncomingMessage, ServerResponse } from "http";
import PackageJSON from "../package.json";
import { getRequestContext } from "../utils/appContext";
import type { NextContext, NextContextName } from "../utils/appContext";

import { ClientCache, ClientCacheGetObject } from "./clientCache";
import "./clientBrowserErrorHandling";

export const API_VERSION = process.env.API_VERSION || "v1";
const WEB_URL = process.env.WEB_URL ?? "";
const SERVER_TOKEN = process.env.SERVER_TOKEN;
const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Grouparoo-Client": `${PackageJSON.name}-v${PackageJSON.version}`,
};
const BASE_URL = `${WEB_URL}/api/${API_VERSION}`;

const getCsrfToken = () =>
  globalThis?.localStorage
    ? window.localStorage.getItem("session:csrfToken")
    : undefined;

interface ClientRequestOptions {
  useCache: boolean;
}

export class Client {
  private cache = new ClientCache();

  constructor(
    private getRequestContext: () => {
      type?: NextContextName;
      req?: IncomingMessage;
      res?: ServerResponse;
    } = () => ({})
  ) {}

  public async request<Response = any>(
    verb: Method = "get",
    path: string,
    data: AxiosRequestConfig["data"] = {},
    options: Partial<ClientRequestOptions> = {}
  ): Promise<Response> {
    options = { useCache: true, ...options };
    const headers: AxiosRequestHeaders = { ...DEFAULT_HEADERS };

    const { req } = this.getRequestContext();
    if (req?.headers?.cookie) {
      headers["X-GROUPAROO-SERVER-TOKEN"] = SERVER_TOKEN;
      headers["cookie"] = req?.headers?.cookie;
      options.useCache = false; // do not ever cache responses on the server
    }

    const config: AxiosRequestConfig = {
      url: BASE_URL + path,
      method: verb.toLowerCase() as Method,
      withCredentials: true,
      headers,
    };

    data.csrfToken = getCsrfToken();

    if (data) {
      for (const i in data) {
        if (data[i] === null || data[i] === undefined) {
          delete data[i];
        }
      }

      if (config.method === "get") {
        config.params = data;
      } else {
        config.data = data;
      }
    }

    let unlock: ClientCacheGetObject["unlock"];
    if (config.method === "get" && options.useCache) {
      const { cacheData, unlock: _unlock } = await this.cache.get<Response>(
        config.url + JSON.stringify(data)
      );
      if (cacheData) {
        return cacheData;
      }
      unlock = _unlock;
    } else {
      this.cache.clear();
    }

    try {
      const response: AxiosResponse<Response & { error?: Error }> = await axios(
        config
      );
      unlock?.(response.data);

      if (response.data && response.data.error) {
        const error = response.data.error.message
          ? response.data.error.message
          : response.data.error;

        throw error;
      }

      return response.data;
    } catch (error) {
      unlock?.();

      if (error.response && error.response.data && error.response.data.error) {
        const err =
          error.response?.data?.error?.message ??
          error.response?.data?.error ??
          error;

        const newError = new Error(err);
        newError["code"] = error.response?.data?.error?.code;
        throw newError;
      } else {
        throw error;
      }
    }
  }
}

export const generateClient = (ctx: NextContext) =>
  new Client(getRequestContext(ctx));
