import Axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  Method,
} from "axios";
import type { IncomingMessage, ServerResponse } from "http";

import { isBrowser } from "../utils/isBrowser";
import PackageJSON from "../package.json";
import { errorHandler } from "../eventHandlers";
import type { AppContext } from "next/app";
import type { GetServerSidePropsContext, NextPageContext } from "next";
import { getRequestContext } from "../utils/appContext";
import type { ErrorHandler } from "../eventHandlers/errorHandler";

interface ClientCacheObject {
  locked: boolean;
  data: any;
  createdAt: number;
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

  async get(key: string) {
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

    const unlock = (data) => {
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

  private static readonly optionDefaults: ClientRequestOptions = {
    useCache: true,
    errorHandler,
  };

  constructor(
    private getRequestContext: () => {
      req?: IncomingMessage;
      res?: ServerResponse;
    } = () => ({})
  ) {}

  private checkForLoggedIn = ({ code }) => {
    if (code === "AUTHENTICATION_ERROR") {
      if (isBrowser()) {
        if (window.location.pathname !== "/session/sign-in") {
          window.location.href = `/session/sign-in?nextPage=${window.location.pathname}`;
        }
      } else {
        const { req, res } = this.getRequestContext();
        if (req && res) {
          const requestPath = req.url.match("^[^?]*")[0];
          res.writeHead(302, {
            Location: `/session/sign-in?nextPage=${requestPath}`,
          });
          res.end();
        }
      }
    } else if (code === "NO_TEAMS_ERROR") {
      if (isBrowser()) {
        window.location.href = `/`;
      } else {
        const { req, res } = this.getRequestContext();
        if (req && res) {
          res.writeHead(302, { Location: `/` });
          res.end();
        }
      }
    } else if (code === "AUTHORIZATION_ERROR") {
      // ok, it will be rendered on the page
    }
  };

  private csrfToken = () => {
    if (globalThis?.localStorage) {
      return window.localStorage.getItem("session:csrfToken");
    }
  };

  public request = async <Response = any>(
    verb: Method = "get",
    path: string,
    data: AxiosRequestConfig["data"] = {},
    options: Partial<ClientRequestOptions> = {}
  ): Promise<Response> => {
    options = { ...Client.optionDefaults, ...options };

    const headers: AxiosRequestHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Grouparoo-Client": `${PackageJSON.name}-v${PackageJSON.version}`,
    };

    const { req } = this.getRequestContext();
    if (req?.headers?.cookie) {
      headers["X-GROUPAROO-SERVER-TOKEN"] = this.serverToken;
      headers["cookie"] = req?.headers?.cookie;
      options.useCache = false; // do not ever cache responses on the server
    }

    const config: AxiosRequestConfig = {
      params: null,
      data: null,
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

    let unlock: Function;
    if (config.method === "get" && options.useCache) {
      const { cacheData, unlock: _unlock } = await this.cache.get(
        config.url + JSON.stringify(data)
      );
      unlock = _unlock;
      if (cacheData) {
        return cacheData;
      }
    } else {
      this.cache.clear();
    }

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
        this.checkForLoggedIn(error.response.data.error);

        const err =
          error.response?.data?.error?.message ??
          error.response?.data?.error ??
          error;

        options.errorHandler.set({ message: err });
        throw new Error(err);
      } else {
        options.errorHandler.set({ message: error });
        throw error;
      }
    }
  };
}

export const generateClient = (
  ctx: AppContext | NextPageContext | GetServerSidePropsContext
) => new Client(getRequestContext(ctx));
