import { SimpleAppOptions } from "@grouparoo/core";
const bizSdk = require("facebook-nodejs-business-sdk");
const { FacebookAdsApi, AdAccount, CustomAudience } = bizSdk;

export async function connect(appOptions: SimpleAppOptions): Promise<Client> {
  return new Client(appOptions);
}

export class Client {
  sdk: typeof bizSdk;
  accessToken: string;
  adAccountId: string;
  _api: typeof FacebookAdsApi;

  constructor(appOptions: SimpleAppOptions) {
    const { accessToken, adAccountId } = appOptions;
    this.accessToken = accessToken;
    this.adAccountId = `act_${adAccountId}`;
    this.sdk = bizSdk;
  }

  getApi() {
    if (this._api) {
      return this._api;
    }
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
    return new AdAccount(this.adAccountId, {}, null, this.getApi());
  }

  audience(id: string) {
    return new CustomAudience(id, {}, null, this.getApi());
  }
}
