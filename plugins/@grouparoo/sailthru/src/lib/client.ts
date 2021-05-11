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
    if (!newProperties.email) {
      throw `findSid: email expected`;
    }
    sid = await this.getSidBy("email", newProperties.email);
    if (
      !sid &&
      oldProperties.email &&
      oldProperties.email !== newProperties.email
    ) {
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
      return response.keys.sid;
    } catch (err) {
      if (err.statusCode === 400 && err.error === 99) {
        // really not found
        return null;
      }
      throw err;
    }
  }

  async deleteEmail(email: string) {
    const payload = {
      id: email,
      key: "email",
    };
    const response: any = await this.delete("user", payload);
    return response;
  }

  async deleteSid(sid: string) {
    const payload = {
      id: sid,
      key: "sid",
    };
    const response: any = await this.delete("user", payload);
    return response;
  }

  async updateUser(payload: any) {
    // request fields on response.key like email, sid, extid
    payload.fields = payload.fields || {};
    payload.fields.keys = 1;

    const response: any = await this.post("user", payload);
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

  async getList(name: string) {
    try {
      const response: any = await this.get("list", { list: name });
      return response;
    } catch (err) {
      if (err.error === 15) {
        // just not made yet
        return null;
      }
      throw err;
    }
  }

  async createList(name: string) {
    const response: any = await this.post("list", { list: name });
    return response;
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
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }
}
