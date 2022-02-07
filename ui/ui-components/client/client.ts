import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  Method,
} from "axios";
import type { IncomingMessage, ServerResponse } from "http";
import PackageJSON from "../package.json";
import { errorHandler } from "../eventHandlers";
import { getRequestContext } from "../utils/appContext";
import type { NextContext, NextContextName } from "../utils/appContext";
import type { ErrorHandler } from "../eventHandlers/errorHandler";
import { isBrowser } from "../utils/isBrowser";
import { getRedirectFromErrorCode } from "../utils/getRedirectFromErrorCode";
import { ClientCache, ClientCacheGetObject } from "./clientCache";

interface ClientRequestOptions {
  useCache: boolean;
  errorHandler: ErrorHandler;
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

export class Client {
  private cache = new ClientCache();

  private static readonly defaultOptions: ClientRequestOptions = {
    useCache: true,
    errorHandler: isBrowser() ? errorHandler : undefined,
  };

  constructor(
    private getRequestContext: () => {
      type?: NextContextName;
      req?: IncomingMessage;
      res?: ServerResponse;
    } = () => ({})
  ) {}

  private redirectOnAccessError({ code }: { code: string }): boolean {
    const { type, req, res } = this.getRequestContext();
    if (
      !isBrowser() &&
      (!req || !res || type === "GetServerSidePropsContext")
    ) {
      return false;
    }

    const redirect = getRedirectFromErrorCode(
      code,
      isBrowser() ? window.location.pathname : req.url.match("^[^?]*")[0]
    );

    if (redirect) {
      if (isBrowser()) {
        window.location.href = redirect.destination;
      } else {
        res.writeHead(302, {
          Location: redirect.destination,
        });
        res.end();
      }
    }

    return !!redirect;
  }

  private async sendRequest<Response>(
    config: AxiosRequestConfig,
    options: Partial<ClientRequestOptions>,
    unlock?: ClientCacheGetObject["unlock"]
  ) {
    try {
      const response: AxiosResponse<Response & { error?: Error }> =
        await apiInstance.request<Response>(config);

      if (unlock) {
        unlock(response.data);
      }

      if (response.data && response.data.error) {
        throw response.data.error.message
          ? response.data.error.message
          : response.data.error;
      }
      return response.data;
    } catch (error) {
      if (unlock) {
        unlock();
      }

      if (error.response && error.response.data && error.response.data.error) {
        if (this.redirectOnAccessError(error.response.data.error)) {
          if (options.errorHandler && error.response.data.error.message) {
            options.errorHandler.set({
              message: error.response.data.error.message,
            });
          }
          return new Promise<Response>(() => {});
        }

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

  public async request<Response = any>(
    verb: Method = "get",
    path: string,
    data: AxiosRequestConfig["data"] = {},
    options: Partial<ClientRequestOptions> = {}
  ): Promise<Response> {
    options = { ...Client.defaultOptions, ...options };
    const headers: AxiosRequestHeaders = {};

    try {
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

      return await this.sendRequest(config, options, unlock);
    } catch (error) {
      if (options.errorHandler) {
        options.errorHandler.set({ message: error });
        return {} as Response;
      }
      throw error;
    }
  }
}

export const generateClient = (ctx: NextContext) =>
  new Client(getRequestContext(ctx));
