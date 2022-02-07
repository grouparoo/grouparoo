import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method } from "axios";
import type { IncomingMessage, ServerResponse } from "http";
import PackageJSON from "../package.json";
import { getRequestContext } from "../utils/appContext";
import type { NextContext, NextContextName } from "../utils/appContext";
import { errorHandler } from "../eventHandlers";
import { getRedirectFromErrorCode } from "../utils/getRedirectFromErrorCode";
import { isBrowser } from "../utils/isBrowser";

import { ClientCache, ClientCacheGetObject } from "./clientCache";

interface ClientRequestOptions {
  useCache: boolean;
}

const API_VERSION = process.env.API_VERSION || "v1";
const WEB_URL = process.env.WEB_URL ?? "";
const SERVER_TOKEN = process.env.SERVER_TOKEN;

const getCsrfToken = () =>
  globalThis?.localStorage
    ? window.localStorage.getItem("session:csrfToken")
    : undefined;

const apiInstance = axios.create({
  baseURL: `${WEB_URL}/api/${API_VERSION}`,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Grouparoo-Client": `${PackageJSON.name}-v${PackageJSON.version}`,
  },
});

apiInstance.interceptors.response.use(
  (response) => {
    if (response.data && response.data.error) {
      const error = response.data.error.message
        ? response.data.error.message
        : response.data.error;

      throw error;
    }
    return response;
  },
  (error) => {
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
);

if (isBrowser()) {
  apiInstance.interceptors.response.use(undefined, (error) => {
    errorHandler.set({ message: error });

    const redirect = getRedirectFromErrorCode(
      error.code,
      window.location.pathname
    );

    if (redirect) {
      window.location.href = redirect.destination;
      return new Promise(() => {});
    }

    return {};
  });
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
    const headers: AxiosRequestHeaders = {};

    const { req } = this.getRequestContext();
    if (req?.headers?.cookie) {
      headers["X-GROUPAROO-SERVER-TOKEN"] = SERVER_TOKEN;
      headers["cookie"] = req?.headers?.cookie;
      options.useCache = false; // do not ever cache responses on the server
    }

    const config: AxiosRequestConfig = {
      url: path,
      method: verb.toLowerCase() as Method,
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
      const response = await apiInstance.request<Response>(config);
      unlock?.(response.data);
      return response.data;
    } catch (error) {
      unlock?.();
      throw error;
    }
  }
}

export const generateClient = (ctx: NextContext) =>
  new Client(getRequestContext(ctx));
