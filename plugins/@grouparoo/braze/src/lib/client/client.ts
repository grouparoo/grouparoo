import axios, { AxiosRequestConfig } from "axios";
import User from "./user";
import Template from "./template";

export class BrazeClient {
  apiKey: any;
  restEndpoint: any;
  users: User;
  templates: Template;

  constructor(apiKey: string, restEndpoint: string) {
    this.apiKey = apiKey;
    this.restEndpoint = restEndpoint;
    this.users = new User(this);
    this.templates = new Template(this);
  }

  async _request(opts: AxiosRequestConfig): Promise<any> {
    const params = opts;
    params["baseURL"] = this.restEndpoint.startsWith("http")
      ? this.restEndpoint
      : `https://${this.restEndpoint}`;

    params["headers"] = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };

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
