import fs from "fs-extra";
import { downloadAndRefreshFile } from "../../src/lib/sheet-import/downloadAndRefreshFile";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";

// NOCK=true on cmd line to record new nock file: have to change "assertion" afterwards for google auth
helper.useNock(__filename, updater);

describe("downloadAndRefreshFile", () => {
  const appOptions = loadAppOptions();
  const url =
    "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit#gid=0";
  const sourceOptions = { sheet_url: url };
  const sourceId = "test";
  let localPath: string;

  test("a file will be downloaded", async () => {
    localPath = await downloadAndRefreshFile(
      sourceId,
      appOptions,
      sourceOptions
    );
    const contents = fs.readFileSync(localPath).toString();
    expect(contents).toContain("1,Erie,Jervois,ejervois0@example.com");
  });

  test("a file will not be downloaded if the local copy is new enough", async () => {
    // append something to the file to show that it wasn't re-downloaded
    localPath = await downloadAndRefreshFile(
      sourceId,
      appOptions,
      sourceOptions
    );
    let contents = fs.readFileSync(localPath).toString();
    contents += "\r\n MODIFIED!";
    fs.writeFileSync(localPath, contents);

    // call again
    localPath = await downloadAndRefreshFile(
      sourceId,
      appOptions,
      sourceOptions
    );
    contents = fs.readFileSync(localPath).toString();
    expect(contents).toContain("1,Erie,Jervois,ejervois0@example.com");
    expect(contents).toContain("MODIFIED!");
  });
});
