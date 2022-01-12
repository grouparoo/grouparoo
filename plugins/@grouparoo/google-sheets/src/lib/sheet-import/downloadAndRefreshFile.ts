import { log } from "actionhero";
import fs from "fs-extra";
import path from "path";
import { tmpdir } from "os";
import { SimpleSourceOptions } from "@grouparoo/core";
import Spreadsheet from "./Spreadsheet";
import csvWriter from "csv-write-stream";

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

  const localDir = path.join(tmpdir(), "google-sheets-cache", sourceId);
  const fileSuffix = `${sheet.docId}-${sheet.sheetId || "default"}.csv`;
  const lastFile = await getLastFile(localDir, fileSuffix);
  const currentCount = getCurrentCount(localDir, fileSuffix);
  let localPath = lastFile
    ? path.join(localDir, lastFile)
    : path.join(localDir, `${currentCount}-${fileSuffix}`);

  let toDownload = false;
  if (!fs.existsSync(localPath)) {
    toDownload = true;
    fs.mkdirpSync(localDir);
  } else {
    const stats = fs.statSync(localPath);
    const now = new Date();
    if (now.getTime() - stats.birthtime.getTime() > CSV_CACHE_MILLISECONDS) {
      toDownload = true;
    }
  }

  if (toDownload) {
    log(`Saving Google Sheet to \`${localPath}\``, "debug");
    await writeSheetToFile(localPath, sheet);
  }
  return localPath;
}

function getCurrentCount(lastFile, fileSuffix) {
  const currentCount = lastFile.replace(`-${fileSuffix}`, "");
  return currentCount.trim() === "" ? 0 : parseInt(currentCount);
}

async function getLastFile(localDir: string, suffix: string) {
  if (!fs.existsSync(localDir)) {
    return null;
  }
  const files = await fs.readdir(localDir);
  const filesWithSuffix = files.filter((file) => file.includes(suffix));
  filesWithSuffix.sort();
  filesWithSuffix.reverse();
  return filesWithSuffix[0];
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
