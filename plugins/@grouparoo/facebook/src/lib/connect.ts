import { SimpleAppOptions } from "@grouparoo/core";
const adsSdk = require("facebook-nodejs-business-sdk");

export async function connect(appOptions: SimpleAppOptions) {
  const { accessToken, adAccountId } = appOptions;
  const actId = `act_${adAccountId}`;
  const AdAccount = adsSdk.AdAccount;

  const api = adsSdk.FacebookAdsApi.init(accessToken);
  api.setDebug(true);
  const account = new AdAccount(actId);
  account.sdk = adsSdk;
  return account;
}
