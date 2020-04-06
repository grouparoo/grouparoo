import Axios, { AxiosRequestConfig, Method } from "axios";
import Router from "next/router";
import { isBrowser } from "../utils/isBrowser";
import PackageJSON from "../../package.json";

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

export class Client {
  apiEndpoint: string;
  cache: ClientCache;

  constructor() {
    this.cache = new ClientCache();
  }

  checkForLoggedIn({ code }) {
    if (isBrowser()) {
      if (code === "AUTHENTICATION_ERROR") {
        Router.push({
          pathname: "/session/sign-in",
          query: {
            nextPage: window.location.pathname,
          },
        });
      }
    }
  }

  csrfToken() {
    if (window?.localStorage) {
      return window.localStorage.getItem("session:csrfToken");
    }
  }

  async action(
    verb = "get",
    path,
    data: AxiosRequestConfig["data"] = {},
    useCache = true
  ) {
    const options: AxiosRequestConfig = {
      params: null,
      data: null,
      url: "" + path,
      withCredentials: true,
      //@ts-ignore
      agent: `grouparoo-web-${PackageJSON.version}`,
      method: verb.toLowerCase() as Method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    data.csrfToken = this.csrfToken();

    if (data) {
      for (const i in data) {
        if (data[i] === null || data[i] === undefined) {
          delete data[i];
        }
      }

      if (data.file) {
        delete options.headers;
        let dataForm = new FormData();
        for (const i in data) {
          dataForm.append(i, data[i]);
        }
        data = dataForm;
      }

      if (options.method === "get") {
        options.params = data;
      } else {
        options.data = data;
      }
    }

    let unlock: Function;
    if (options.method === "get" && useCache) {
      const { cacheData, unlock: _unlock } = await this.cache.get(
        options.url + JSON.stringify(data)
      );
      unlock = _unlock;
      if (cacheData) {
        return cacheData;
      }
    } else {
      this.cache.clear();
    }

    try {
      const response = await Axios(options);

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

        throw new Error(
          error.response.data.error.message
            ? error.response.data.error.message
            : error.response.data.error
        );
      } else {
        throw error;
      }
    }
  }
}
