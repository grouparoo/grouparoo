import { SimpleAppOptions } from "@grouparoo/core";
import Mailchimp from "mailchimp-api-v3";
import axios from "axios";

export async function connect(appOptions: SimpleAppOptions) {
  if (appOptions.apiKey) {
    return new Mailchimp(appOptions.apiKey?.toString());
  } else if (appOptions.oAuthToken) {
    const oAuthToken = appOptions.oAuthToken.toString();

    const metaResponse = await axios.get(
      `https://login.mailchimp.com/oauth2/metadata`,
      {
        headers: {
          Authorization: `OAuth ${oAuthToken}`,
          accept: "application/json",
        },
      }
    );

    if (metaResponse?.data?.error) {
      throw new Error(
        `${metaResponse.data.error}: ${metaResponse.data.error_description}`
      );
    }

    const datacenter = metaResponse?.data?.dc;
    if (!datacenter) throw new Error("Unable to determine datacenter (dc).");

    //@ts-ignore Mailchimp client typings have not been updated for OAuth support (with dc param)
    return new Mailchimp(oAuthToken, datacenter);
  }
}
