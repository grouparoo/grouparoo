import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": {
    path: path.join(__dirname, "..", "..", "..", "postgres"),
  },
});

import { hooks } from "../utils/shared";
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

describe("demo purchases", () => {
  hooks();

  test("runs without crash", async () => {
    const command = new Demo();
    const toStop = await command.run({ params: { _arguments: ["purchases"] } });
    expect(toStop).toBe(true);
  });

  test("makes objects", async () => {
    const teams = (await Team.findAll()).map((o) => o.id).sort();
    expect(teams).toEqual(["admin_team"]);

    const members = (await TeamMember.findAll()).map((o) => o.id).sort();
    expect(members).toEqual(["demo"]);

    const sources = (await Source.findAll()).map((o) => o.id).sort();
    expect(sources).toEqual(["demo_purchases", "demo_users"]);

    const properties = (await Property.findAll()).map((o) => o.id).sort();
    expect(properties).toEqual([
      "deactivated",
      "email",
      "first_name",
      "language",
      "last_name",
      "last_purchase_category",
      "last_purchase_date",
      "ltv",
      "purchase_count",
      "user_id",
    ]);

    const schedules = (await Schedule.findAll()).map((o) => o.id).sort();
    expect(schedules).toEqual(["demo_users_schedule"]);

    const groups = (await Group.findAll()).map((o) => o.id).sort();
    expect(groups).toEqual([
      "all_emails",
      "high_value",
      "high_value_automotive",
      "nobody",
      "spanish_speakers",
    ]);

    const destinations = (await Destination.findAll()).map((o) => o.id).sort();
    expect(destinations).toEqual([]);
  });
});
