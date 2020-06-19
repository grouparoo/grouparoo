import { TeamMember } from "../models/TeamMember";
import { log } from "actionhero";
import fetch from "isomorphic-fetch";
import path from "path";
const packageJSON = require(path.join(
  __dirname,
  "..",
  "..",
  "..",
  "package.json"
));

const url = "https://www.grouparoo.com/api/v1/subscribers";
const route = "/api/v1/session";
const method = "POST";
const source = `${packageJSON.name}`;
const medium = "app";
const campaign = `v${packageJSON.version}`;

/**
 * We want this run "in-thread" but not to be blocking.  We cannot rely on tasks, as the user may not be running them.
 * We also want to allow for this method to fail, and not block anything else in the server.
 */
export async function GrouparooSubscription(teamMember: TeamMember) {
  try {
    await fetch(`${url}${route}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: teamMember.email,
        firstName: teamMember.firstName,
        lastName: teamMember.lastName,
        source,
        medium,
        campaign,
      }),
    });
    log(`Registered ${teamMember.email} from Grouparoo subscription`);
  } catch (error) {
    log(`Error subscribing to Grouparoo Subscription: ${error}`, "error");
  }
}
