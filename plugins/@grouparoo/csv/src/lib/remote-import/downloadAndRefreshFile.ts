import { log } from "actionhero";
import fs from "fs-extra";
import { tmpdir } from "os";
import Axios from "axios";
import { URL } from "url";
import { SimpleSourceOptions } from "@grouparoo/core";

export async function downloadAndRefreshFile(
  sourceId: string,
  sourceOptions: SimpleSourceOptions
) {
  const url = sourceOptions.url.toString();
  const ageMs =
    parseInt(sourceOptions.fileAgeHours.toString()) * 60 * 60 * 1000;

  const parsedUrl = new URL(url);
  const pathnameParts = parsedUrl.pathname.split("/");
  let localDir = `${tmpdir()}/csv-cache/${sourceId}`;
  let localPath = `${localDir}/${pathnameParts[pathnameParts.length - 1]}`;

  let toDownload = false;
  if (!fs.existsSync(localPath)) {
    toDownload = true;
    fs.mkdirpSync(localDir);
  } else {
    const stats = fs.statSync(localPath);
    const now = new Date();
    if (now.getTime() - stats.birthtime.getTime() > ageMs) toDownload = true;
  }

  if (toDownload) {
    log(`downloading csv from \`${url}\` to \`${localPath}\``);
    fs.rmSync(localPath, { force: true });
    const writer = fs.createWriteStream(localPath);
    const response = await Axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  }

  return localPath;
}
