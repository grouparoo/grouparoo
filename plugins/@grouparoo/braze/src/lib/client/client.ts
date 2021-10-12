import axios, { AxiosRequestConfig } from "axios";
import User from "./user";
import Campaign from "./campaign";
import { Errors } from "@grouparoo/core";

export class BrazeClient {
  apiKey: any;
  restEndpoint: any;
  users: User;
  campaigns: Campaign;

  constructor(apiKey: string, restEndpoint: string) {
    this.apiKey = apiKey;
    this.restEndpoint = restEndpoint;
    this.users = new User(this);
    this.campaigns = new Campaign(this);
  }

  async _request(opts: AxiosRequestConfig): Promise<any> {
    const params = opts;

    params["baseURL"] =
      this.restEndpoint.startsWith("https://") ||
      this.restEndpoint.startsWith("http://")
        ? this.restEndpoint
        : `https://${this.restEndpoint}`;

    params["headers"] = Object.assign({}, params["headers"], {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    });

    try {
      const response = await axios(params);
      const { data = {} } = response;
      return data;
    } catch (err) {
      if (err.response.status === 403) {
        throw new Error("Access Denied, please check your apiKey permissions.");
      } else {
        throw new Error(err);
      }
    }
  }
}
