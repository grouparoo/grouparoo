import Axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  Method,
} from "axios";
import type { IncomingMessage, ServerResponse } from "http";
import PackageJSON from "../package.json";
import { errorHandler } from "../eventHandlers";
import type { AppContext } from "next/app";
import type { GetServerSidePropsContext, NextPageContext } from "next";
import { getRequestContext } from "../utils/appContext";
import type { NextContextType } from "../utils/appContext";
import type { ErrorHandler } from "../eventHandlers/errorHandler";
import { isBrowser } from "../utils/isBrowser";

interface ClientCacheObject<T = any> {
  locked: boolean;
  data: T;
  createdAt: number;
}

interface ClientCacheGetObject<T = any> {
  cacheData: T;
  unlock: (data?: T) => void;
}

export class ClientCache {
  cache: { [key: string]: ClientCacheObject };
  ttl: number;

  constructor(ttl = 5000) {
    this.ttl = ttl;
    this.cache = {};
  }

  async sleep(wait = 100) {
    return new Promise((resolve) => {
      setTimeout(resolve, wait);
    });
  }

  async get<T>(key: string): Promise<ClientCacheGetObject<T>> {
    if (!this.cache[key]) {
      this.cache[key] = { locked: false, data: undefined, createdAt: 0 };
    }

    let waitCounter = 0;
    while (this.cache[key]?.locked && waitCounter < 15) {
      await this.sleep(300);
      waitCounter++;
    }

    const now = new Date().getTime();
    if (this.cache[key]?.data) {
      if (this.cache[key].createdAt + this.ttl < now) {
        delete this.cache[key];
        this.cache[key] = { locked: true, data: undefined, createdAt: 0 };
      }
    } else {
      this.cache[key] = { locked: true, data: undefined, createdAt: 0 };
    }

    const unlock = (data?: T) => {
      this.cache[key] = {
        data,
        createdAt: new Date().getTime(),
        locked: false,
      };
    };

    return { cacheData: this.cache[key]?.data, unlock };
  }

  clear() {
    this.cache = {};
  }
}

interface ClientRequestOptions {
  useCache: boolean;
  errorHandler: ErrorHandler;
}

export class Client {
  public apiVersion = process.env.API_VERSION || "v1";

  private webUrl = process.env.WEB_URL || "";
  private serverToken = process.env.SERVER_TOKEN;
  private cache = new ClientCache();

  private static readonly defaultOptions: ClientRequestOptions = {
    useCache: true,
    errorHandler: isBrowser() ? errorHandler : undefined,
  };

  private static readonly defaultHeaders: AxiosRequestHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Grouparoo-Client": `${PackageJSON.name}-v${PackageJSON.version}`,
  };

  constructor(
    private getRequestContext: () => {
      type?: NextContextType;
      req?: IncomingMessage;
      res?: ServerResponse;
    } = () => ({})
  ) {}

  private redirectOnAccessError({ code }: { code: string }): boolean {
    if (isBrowser()) {
      switch (code) {
        case "AUTHENTICATION_ERROR":
          if (window.location.pathname !== "/session/sign-in") {
            window.location.href = `/session/sign-in?nextPage=${window.location.pathname}`;
          }
          return true;

        case "NO_TEAMS_ERROR":
          window.location.href = `/`;
          return true;

        case "AUTHORIZATION_ERROR":
        default:
          // ok, it will be rendered on the page
          break;
      }

      return false;
    }

    const { type, req, res } = this.getRequestContext();
    if (!req || !res || (type !== "AppContext" && type !== "NextPageContext")) {
      return false;
    }

    // Only check requests from `Page.getInitialProps` or `NextApp.getInitialProps`
    // getServerSideProps requests will be handled by `withServerErrorHandler`
    switch (code) {
      case "AUTHENTICATION_ERROR": {
        const requestPath = req.url.match("^[^?]*")[0];
        res.writeHead(302, {
          Location: `/session/sign-in?nextPage=${requestPath}`,
        });
        res.end();
        return true;
      }

      case "NO_TEAMS_ERROR": {
        const requestPath = req.url.match("^[^?]*")[0];
        res.writeHead(302, {
          Location: `/session/sign-in?nextPage=${requestPath}`,
        });
        res.end();
        return true;
      }

      case "AUTHORIZATION_ERROR":
      default:
        // ok, it will be rendered on the page
        return false;
    }
  }

  private csrfToken = () => {
    if (globalThis?.localStorage) {
      return window.localStorage.getItem("session:csrfToken");
    }
  };

  private async sendRequest<Response>(
    config: AxiosRequestConfig,
    options: Partial<ClientRequestOptions>,
    unlock?: ClientCacheGetObject["unlock"]
  ) {
    try {
      const response: AxiosResponse<Response & { error?: Error }> = await Axios(
        config
      );

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

  public request = async <Response = any>(
    verb: Method = "get",
    path: string,
    data: AxiosRequestConfig["data"] = {},
    options: Partial<ClientRequestOptions> = {}
  ): Promise<Response> => {
    options = { ...Client.defaultOptions, ...options };
    const headers: AxiosRequestHeaders = { ...Client.defaultHeaders };

    try {
      const { req } = this.getRequestContext();
      if (req?.headers?.cookie) {
        headers["X-GROUPAROO-SERVER-TOKEN"] = this.serverToken;
        headers["cookie"] = req?.headers?.cookie;
        options.useCache = false; // do not ever cache responses on the server
      }

      const config: AxiosRequestConfig = {
        url: `${this.webUrl}/api/${this.apiVersion}${path}`, // path comes with a leading "/"
        withCredentials: true,
        method: verb.toLowerCase() as Method,
        headers,
      };

      data.csrfToken = this.csrfToken();

      if (data) {
        for (const i in data) {
          if (data[i] === null || data[i] === undefined) {
            delete data[i];
          }
        }

        if (data.file || data._file) {
          delete config.headers;
          let dataForm = new FormData();
          for (const i in data) {
            dataForm.append(i, data[i]);
          }
          data = dataForm;
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
  };
}

export const generateClient = (
  ctx: AppContext | NextPageContext | GetServerSidePropsContext
) => new Client(getRequestContext(ctx));
