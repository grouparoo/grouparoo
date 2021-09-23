import axios, { AxiosRequestConfig } from "axios";
import Query from "./query";
import Ingestion from "./ingestion";

export default class MixpanelClient {
  token: string;
  projectId: string;
  username: string;
  secret: string;
  ingestion: Ingestion;
  query: Query;

  constructor({ token, projectId, username, secret }) {
    this.token = token;
    this.projectId = projectId;
    this.username = username;
    this.secret = secret;
    this.token = token;
    this.token = token;
    this.ingestion = new Ingestion(this);
    this.query = new Query(this);
  }

  async _request(opts: AxiosRequestConfig): Promise<any> {
    const params = opts;
    params["auth"] = {
      username: this.username,
      password: this.secret,
    };
    params["headers"] = Object.assign({}, params["headers"], {
      "X-Mixpanel-Integration-ID": "grouparoo",
    });
    try {
      const response = await axios(params);
      const { data = {} } = response;
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
}
