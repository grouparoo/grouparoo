import { log } from "actionhero";
import fs from "fs-extra";
import path from "path";
import { tmpdir } from "os";
import { SimpleSourceOptions } from "@grouparoo/core";
import Spreadsheet from "../shared/Spreadsheet";
import csvWriter from "csv-write-stream";
import * as uuid from "uuid";

const CSV_CACHE_MILLISECONDS = 1000 * 60;
const GOOGLE_SHEETS_ROWS_LIMIT = 10000;

export async function downloadAndRefreshFile(
  sourceId: string,
  appOptions: SimpleSourceOptions,
  sourceOptions: SimpleSourceOptions
) {
  const sheet = new Spreadsheet(
    appOptions,
    sourceOptions.sheet_url?.toString()
  );

  const sheetDir = `${sheet.docId}-${sheet.sheetId || "default"}`;
  const localDir = path.join(
    tmpdir(),
    "google-sheets-cache",
    sourceId,
    sheetDir
  );
  const lastFile = await getLastValidFile(localDir);
  let localPath = lastFile
    ? path.join(localDir, lastFile)
    : path.join(localDir, `${uuid.v4()}.csv`);

  let toDownload = false;
  if (!fs.existsSync(localPath)) {
    toDownload = true;
    fs.mkdirpSync(localDir);
  }
  if (toDownload) {
    log(`Saving Google Sheet to \`${localPath}\``, "debug");
    await writeSheetToFile(localPath, sheet);
  }
  return localPath;
}

async function getLastValidFile(localDir: string) {
  if (!fs.existsSync(localDir)) {
    return null;
  }
  const files = await fs.readdir(localDir);
  files.sort((a, b) => {
    const statsA = fs.statSync(path.join(localDir, a));
    const statsB = fs.statSync(path.join(localDir, b));
    return statsB.birthtime.getTime() - statsA.birthtime.getTime();
  });
  if (files[0]) {
    const stats = fs.statSync(path.join(localDir, files[0]));
    const now = new Date();
    if (now.getTime() - stats.birthtime.getTime() <= CSV_CACHE_MILLISECONDS) {
      return files[0];
    }
  }
  return null;
}

async function writeSheetToFile(localPath: string, sheet: Spreadsheet) {
  const writer = csvWriter({
    sendHeaders: true,
    headers: await sheet.getHeaders(),
  });
  return new Promise<void>(async (resolve, reject) => {
    if (fs.existsSync(localPath)) fs.rmSync(localPath, { force: true });
    const writeStream = fs.createWriteStream(localPath);
    writer.pipe(writeStream);
    let offset = 0;
    let rows = await sheet.read({ limit: GOOGLE_SHEETS_ROWS_LIMIT, offset });

    while (rows.length > 0) {
      for (const row of rows) {
        await writer.write(row);
      }
      offset += GOOGLE_SHEETS_ROWS_LIMIT;
      rows = await sheet.read({ limit: GOOGLE_SHEETS_ROWS_LIMIT, offset });
    }
    await writer.end();
    writeStream.on("finish", resolve);
    writeStream.on("error", reject);
  });
}
