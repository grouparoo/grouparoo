import { SimpleAppOptions } from "@grouparoo/core";
import Mixpanel from "./client/mixpanel";

export async function connect(appOptions: SimpleAppOptions) {
  return new Mixpanel({
    token: appOptions.token,
    projectId: appOptions.projectId,
    username: appOptions.username,
    secret: appOptions.secret,
  });
}
