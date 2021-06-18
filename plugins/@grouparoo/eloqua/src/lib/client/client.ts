import axios, { AxiosRequestConfig } from "axios";
import Bulk from "./bulk";
import Contact from "./contact";
import ContactList from "./contactList";

export default class EloquaClient {
  auth: {
    username: string;
    password: string;
  };
  loginUrl: string;
  baseUrl: string;
  bulk: Bulk;
  contacts: Contact;
  lists: ContactList;

  constructor(options: any) {
    this.auth = { username: undefined, password: undefined };
    this.setAuth(options);
    this.loginUrl = options.loginUrl || "https://login.eloqua.com/id";
    this.contacts = new Contact(this);
    this.lists = new ContactList(this);
    this.bulk = new Bulk(this, "contacts");
  }

  setAuth(options: any) {
    if (!options.siteName) {
      throw new Error("A siteName needs to be provided");
    } else if (!options.userName) {
      throw new Error("A userName needs to be provided");
    } else if (!options.password) {
      throw new Error("A password needs to be provided");
    }
    this.auth = {
      username: `${options.siteName}\\${options.userName}`,
      password: `${options.password}`,
    };
  }

  // tslint:disable-next-line: function-name
  async _init() {
    if (this.baseUrl) {
      return this.baseUrl;
    }
    this.baseUrl = await this.getBaseUrl();
  }

  async getBaseUrl() {
    // disable certificate checks - was getting inconsistent certificate results with this call
    // const agent = new https.Agent({ rejectUnauthorized: false })

    const params: AxiosRequestConfig = {
      url: this.loginUrl,
      auth: this.auth,
      // httpsAgent: agent,
    };
    const response = await axios(params);
    const { data = {} } = response;
    const { urls = {} } = data;

    if (urls["base"]) {
      return urls["base"];
    }
    throw new Error("Error obtaining baseUrl");
  }

  async _request(opts: AxiosRequestConfig): Promise<any> {
    const params = opts;
    if (this.auth) {
      params["auth"] = this.auth;
    }
    if (!this.baseUrl) {
      // if a baseUrl is provided or we're calling the login url, skip this
      await this._init();
    }
    params["baseURL"] = this.baseUrl;

    try {
      const response = await axios(params);
      const { data = {} } = response;
      return data;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}
