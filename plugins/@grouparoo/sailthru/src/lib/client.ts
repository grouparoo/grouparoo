import { SimpleAppOptions } from "@grouparoo/core";
import Sailthru from "sailthru-client";

export default class SailthruClient {
  sailthru: any;

  constructor(options: SimpleAppOptions) {
    const apiKey = options.apiKey;
    const apiSecret = options.apiSecret;

    this.sailthru = Sailthru.createSailthruClient(apiKey, apiSecret);
    //this.sailthru.enableLogging();
    this.sailthru.disableLogging();
  }

  async findSid(newProperties: any, oldProperties: any = {}) {
    let sid = null;
    // TODO: use extid first
    if (!sid) {
      sid = await this.getSidBy("email", newProperties.email);
    }
    if (!sid && oldProperties.email) {
      sid = await this.getSidBy("email", oldProperties.email);
    }
    return sid;
  }

  async getSidBy(keyName: string, value: string) {
    const payload = {
      id: value,
      key: keyName,
      fields: {
        keys: 1,
      },
    };

    try {
      const response: any = await this.get("user", payload);
      console.log("getSidBy", payload, response);
      return response?.keys?.sid;
    } catch (err) {
      // TODO: check for 404 or something more specific to
      // differentiate between not found and network errors
      return null;
    }
  }

  async deleteSid(sid: string) {
    const payload = {
      id: sid,
      key: "sid",
    };
    const response: any = await this.delete("user", payload);
    console.log("deleteSid", payload, response);
    return response;
  }

  async updateUser(payload: any) {
    // request fields on response.key like email, sid, extid
    payload.fields = payload.fields || {};
    payload.fields.keys = 1;

    const response: any = await this.post("user", payload);
    console.log("updateUser", payload, response);
    if (!response.ok) {
      throw `Sailthru updateUser not ok`;
    }
    if (!response.keys) {
      throw `Sailthru updateUser has no keys`;
    }
    return response;
  }

  async getLists() {
    const response: any = await this.get("list");
    if (!response.lists) {
      throw `no lists parameter`;
    }
    return response.lists;
  }

  async get(apiName: string, options = {}) {
    return this.promiseFetch("apiGet", apiName, options);
  }
  async post(apiName: string, options = {}) {
    return this.promiseFetch("apiPost", apiName, options);
  }
  async delete(apiName: string, options = {}) {
    return this.promiseFetch("apiDelete", apiName, options);
  }

  promiseFetch(method: string, apiName: string, options = {}) {
    return new Promise((resolve, reject) => {
      this.sailthru[method](apiName, options, function (err, response) {
        if (err) {
          console.log("Sailthru Error", err);
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }
}
