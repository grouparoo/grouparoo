import "isomorphic-fetch";
import { TeamMember } from "../models/TeamMember";
import { CLS } from "../modules/cls";
import { plugin } from "../modules/plugin";
import { config, log } from "actionhero";
import path from "path";

const packageJSON = require(path.join(__dirname, "..", "..", "package.json"));

const host = "https://telemetry.grouparoo.com";
const route = "/api/v1/subscribers";
const method = "POST";
const source = `${packageJSON.name}`;
const medium = "app";
const campaign = `v${packageJSON.version}`;

/**
 * We want this run "in-thread" but not to be blocking.  We cannot rely on tasks, as the user may not be running them.
 * We also want to allow for this method to fail, and not block anything else in the server.
 * Therefore, we don't await the top-level CLS.afterCommit method
 */
export async function GrouparooSubscription(
  teamMember: TeamMember,
  subscribed = true
) {
  if (process.env.NODE_ENV === "test") return;
  if (!config.telemetry.enabled) return;

  CLS.afterCommit(async () => {
    const setting = await plugin.readSetting("telemetry", "customer-id");
    const customerId = setting.value;

    try {
      const response = await fetch(`${host}${route}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: teamMember.email,
          firstName: teamMember.firstName,
          lastName: teamMember.lastName,
          source,
          medium,
          campaign,
          customerId,
          subscribed,
        }),
      }).then((r) => r.json());

      if (response.error) throw response.error;
      log(
        `Registered ${teamMember.email} for Grouparoo subscription to ${customerId}`
      );
    } catch (error) {
      log(`Error subscribing to Grouparoo Subscription: ${error}`, "error");
    }
  });
}
