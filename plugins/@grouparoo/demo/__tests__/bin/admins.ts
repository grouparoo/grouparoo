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

describe("demo admins", () => {
  hooks();

  test("runs without crash", async () => {
    const command = new Demo();
    const toStop = await command.run({ params: { _arguments: ["admins"] } });
    expect(toStop).toBe(true);
  });

  test("makes objects", async () => {
    const teams = (await Team.findAll()).map((o) => o.id).sort();
    expect(teams).toEqual(["admin_team"]);

    const members = (await TeamMember.findAll()).map((o) => o.id).sort();
    expect(members).toEqual(["demo"]);

    const sources = (await Source.findAll()).map((o) => o.id).sort();
    expect(sources).toEqual(["demo_admins"]);

    const properties = (await Property.findAll()).map((o) => o.id).sort();
    expect(properties).toEqual([
      "admin_email",
      "admin_first_name",
      "admin_id",
      "admin_last_name",
      "admin_permission",
    ]);

    const schedules = (await Schedule.findAll()).map((o) => o.id).sort();
    expect(schedules).toEqual(["demo_admins_schedule"]);

    const groups = (await Group.findAll()).map((o) => o.id).sort();
    expect(groups).toEqual(["all_admins", "owners"]);

    const destinations = (await Destination.findAll()).map((o) => o.id).sort();
    expect(destinations).toEqual([]);
  });
});
