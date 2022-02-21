import { hooks } from "../utils/helper";
import { Demo } from "../../src/bin/grouparoo/demo/demo";
import {
  Source,
  Property,
  Schedule,
  Group,
  Destination,
  Team,
  TeamMember,
} from "@grouparoo/core";

describe("demo accounts", () => {
  hooks();
  test("runs without crash", async () => {
    const command = new Demo();
    const toStop = await command.run({ params: { accounts: true } });
    expect(toStop).toBe(true);
  });

  test("makes objects", async () => {
    const teams = (await Team.findAll()).map((o) => o.id).sort();
    expect(teams).toEqual(["admin_team"]);

    const members = (await TeamMember.findAll()).map((o) => o.id).sort();
    expect(members).toEqual(["demo"]);

    const sources = (await Source.findAll()).map((o) => o.id).sort();
    expect(sources).toEqual([
      "account_users",
      "demo_accounts",
      "demo_accounts_queries",
      "demo_payments",
    ]);

    const properties = (await Property.findAll()).map((o) => o.id).sort();
    expect(properties).toEqual([
      "account_id",
      "account_name",
      "account_value",
      "contact_email",
      "domain",
      "plan_name",
    ]);

    const schedules = (await Schedule.findAll()).map((o) => o.id).sort();
    expect(schedules).toEqual(["demo_accounts_schedule"]);

    const groups = (await Group.findAll()).map((o) => o.id).sort();
    expect(groups).toEqual(["all_accounts", "high_value_accounts"]);

    const destinations = (await Destination.findAll()).map((o) => o.id).sort();
    expect(destinations).toEqual([]);
  });
});
