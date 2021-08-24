import os from "os";
import fs from "fs";
import CsvStringify from "csv-stringify";
import { log } from "actionhero";
import { GrouparooRecord } from "../models/Record";
import { Group } from "../models/Group";
import { Run } from "../models/Run";
import { Property } from "../models/Property";
import { RecordProperty } from "../models/RecordProperty";

/**
 * Build a CSV file on this host which contains all records, properties, and groups
 */
export async function groupExportToCSV(group: Group, limit = 1000) {
  // get the headers
  const numberedPropertyKeys = (await Property.findAllWithCache())
    .map((rule) => rule.key)
    .sort();
  const columns = ["id", "createdAt", "updatedAt"].concat(numberedPropertyKeys);

  // add the records
  let offset = 0;
  async function getRecords() {
    return group.$get("records", {
      limit,
      offset,
      include: [RecordProperty],
      order: [
        ["createdAt", "asc"],
        ["id", "asc"],
      ],
    });
  }

  async function buildCsvRowFromProperty(record: GrouparooRecord) {
    const properties = await record.getProperties();
    const simpleProperties = {};
    for (const key in properties) {
      simpleProperties[key] =
        properties[key].values.length > 1
          ? properties[key].values.join(", ")
          : properties[key].values[0];
    }

    const row = Object.assign(
      {
        id: record.id,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt,
      },
      simpleProperties
    );

    return row;
  }

  let records = await getRecords();
  if (records.length === 0) {
    return;
  }

  const run = await Run.create({
    state: "running",
    creatorId: group.id,
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

  while (records.length > 0) {
    log(
      `adding ${records.length} records to csv export file ${filename} for group ${group.name} (${group.id})`
    );

    for (let i in records) {
      const record = records[i];
      const row = await buildCsvRowFromProperty(record);
      csvStream.write(row);
    }

    offset = limit + offset;
    records = await getRecords();
  }

  // wait for the file handle to close
  await new Promise((resolve) => {
    fileStream.once("close", resolve);
    csvStream.end();
  });

  await run.afterBatch("complete");

  return { runId: run.id, filename, cleanName };
}
