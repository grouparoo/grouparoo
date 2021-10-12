import fs from "fs-extra";
import { downloadAndRefreshFile } from "../../src/lib/downloadAndRefreshFile";

describe("downloadAndRefreshFile", () => {
  const url =
    "https://raw.githubusercontent.com/grouparoo/grouparoo/main/core/__tests__/data/records-10.csv";
  const fileAgeHours = 1;
  const sourceOptions = { url, fileAgeHours };
  const sourceId = "test";
  let localPath: string;

  test("a file will be downloaded", async () => {
    localPath = await downloadAndRefreshFile(sourceId, sourceOptions);
    const contents = fs.readFileSync(localPath).toString();
    expect(contents).toContain("1,Erie,Jervois,ejervois0@example.com");
  });

  test("a file will not be downloaded if the local copy is new enough", async () => {
    // append something to the file to show that it wasn't re-downloaded
    localPath = await downloadAndRefreshFile(sourceId, sourceOptions);
    let contents = fs.readFileSync(localPath).toString();
    contents += "\r\n MODIFIED!";
    fs.writeFileSync(localPath, contents);

    // call again
    localPath = await downloadAndRefreshFile(sourceId, sourceOptions);
    contents = fs.readFileSync(localPath).toString();
    expect(contents).toContain("1,Erie,Jervois,ejervois0@example.com");
    expect(contents).toContain("MODIFIED!");
  });
});
