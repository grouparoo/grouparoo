import os from "os";
import fs from "fs";
import CsvStringify from "csv-stringify";
import { log } from "actionhero";
import { Profile } from "../models/Profile";
import { Group } from "../models/Group";
import { Run } from "../models/Run";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";

/**
 * Build a CSV file on this host which contains all profiles, properties, and groups
 */
export async function groupExportToCSV(group: Group, limit = 1000) {
  // get the headers
  const numberedProfilePropertyRuleKeys = (await ProfilePropertyRule.findAll())
    .map((rule) => rule.key)
    .sort();
  const columns = ["guid", "createdAt", "updatedAt"].concat(
    numberedProfilePropertyRuleKeys
  );

  // add the profiles
  let offset = 0;
  async function getProfiles() {
    return group.$get("profiles", {
      limit,
      offset,
      order: [
        ["createdAt", "asc"],
        ["guid", "asc"],
      ],
    });
  }

  async function buildCsvRowFromProperty(profile: Profile) {
    const properties = await profile.properties();
    const simpleProperties = {};
    for (const key in properties) {
      simpleProperties[key] =
        properties[key].values.length > 1
          ? properties[key].values.join(", ")
          : properties[key].values[0];
    }

    const row = Object.assign(
      {
        guid: profile.guid,
        createdAt: profile.createdAt,
        updatedAt: profile.updatedAt,
      },
      simpleProperties
    );

    return row;
  }

  let profiles = await getProfiles();
  if (profiles.length === 0) {
    return;
  }

  const run = await Run.create({
    state: "running",
    creatorGuid: group.guid,
    creatorType: "group",
  });

  const cleanName =
    group.name
      .replace(/\s+/g, "_")
      .replace(/\//g, "_")
      .replace(/\\/g, "_")
      .toLocaleLowerCase() +
    "-" +
    new Date().getTime();
  const filename = `${os.tmpdir()}/group-export-${cleanName}.csv`;
  if (fs.existsSync(filename)) fs.unlinkSync(filename);
  const fileStream = fs.createWriteStream(filename);
  const csvStream = CsvStringify({
    header: true,
    columns,
    cast: {
      date: function (v) {
        return Math.round(v.getTime() / 1000).toString();
      },
    },
  });

  csvStream.pipe(fileStream);

  while (profiles.length > 0) {
    log(
      `adding ${profiles.length} profiles to csv export file ${filename} for group ${group.name} (${group.guid})`
    );

    for (let i in profiles) {
      const profile = profiles[i];
      const row = await buildCsvRowFromProperty(profile);
      csvStream.write(row);
      await run.increment(["profilesExported"]);
    }

    offset = limit + offset;
    profiles = await getProfiles();
  }

  // wait for the file handle to close
  await new Promise((resolve) => {
    fileStream.once("close", resolve);
    csvStream.end();
  });

  await run.update({ completedAt: new Date(), state: "complete" });

  return { runGuid: run.guid, filename, cleanName };
}
