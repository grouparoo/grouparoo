import { SimpleAppOptions } from "@grouparoo/core";
const bizSdk = require("facebook-nodejs-business-sdk");

export async function connect(appOptions: SimpleAppOptions): Promise<Client> {
  return new Client(appOptions);
}

export class Client {
  sdk: typeof bizSdk;
  accessToken: string;
  adAccountId: string;
  _api: any;

  constructor(appOptions: SimpleAppOptions) {
    const { accessToken, adAccountId } = appOptions;
    this.accessToken = accessToken?.toString();
    this.adAccountId = `act_${adAccountId}`;
    this.sdk = bizSdk;
  }

  getApi() {
    if (this._api) {
      return this._api;
    }
    const { FacebookAdsApi } = this.sdk;
    this._api = FacebookAdsApi.init(this.accessToken);
    // make sure this is not shared
    FacebookAdsApi.setDefaultApi(null);
    return this._api;
  }

  // AbstractCrudObject.constructor(
  //   id: number | ?string = null,
  //   data: Object = {},
  //   parentId: ?string,
  //   api: ?FacebookAdsApi)

  adAccount() {
    const { AdAccount } = this.sdk;
    return new AdAccount(this.adAccountId, {}, null, this.getApi());
  }

  audience(id: string) {
    const { CustomAudience } = this.sdk;
    return new CustomAudience(id, {}, null, this.getApi());
  }
}
