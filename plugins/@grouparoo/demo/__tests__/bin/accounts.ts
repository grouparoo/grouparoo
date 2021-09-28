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
    const toStop = await command.run({ params: { _arguments: ["accounts"] } });
    expect(toStop).toBe(true);
  });

  test("makes objects", async () => {
    const teams = (await Team.findAll()).map((o) => o.id).sort();
    expect(teams).toEqual(["admin_team"]);

    const members = (await TeamMember.findAll()).map((o) => o.id).sort();
    expect(members).toEqual(["demo"]);

    const sources = (await Source.findAll()).map((o) => o.id).sort();
    expect(sources).toEqual(["demo_accounts", "demo_payments", "demo_users"]);

    const properties = (await Property.findAll()).map((o) => o.id).sort();
    expect(properties).toEqual([
      "account_id",
      "account_name",
      "account_value",
      "deactivated",
      "email",
      "first_name",
      "language",
      "last_name",
      "user_id",
    ]);

    const schedules = (await Schedule.findAll()).map((o) => o.id).sort();
    expect(schedules).toEqual(["demo_users_schedule"]);

    const groups = (await Group.findAll()).map((o) => o.id).sort();
    expect(groups).toEqual([
      "all_emails",
      "have_accounts",
      "high_value",
      "nobody",
      "spanish_speakers",
    ]);

    const destinations = (await Destination.findAll()).map((o) => o.id).sort();
    expect(destinations).toEqual([]);
  });
});
