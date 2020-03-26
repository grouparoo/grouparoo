import Mailchimp from "mailchimp-api-v3";

export async function connect(options) {
  const client = new Mailchimp(options.apiKey);
  return client;
}
