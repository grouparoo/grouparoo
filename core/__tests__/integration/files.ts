import path from "path";
import fs from "fs-extra";
import os from "os";
import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { File } from "../../src";

describe("integration/files", () => {
  let file: File;
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("a file can be set", async () => {
    const source = makeCopy(
      path.join(__dirname, "..", "data", "records-10.csv")
    );

    const type = "csv";
    const remotePath = "source.csv";
    const localFile = source;
    file = await api.files.set(type, remotePath, localFile);

    expect(file.id).toMatch(/^fil_/);
    expect(file.mime).toBe("text/csv");
    expect(file.path).toMatch("csv/source.csv");
    expect(file.extension).toBe(".csv");
    expect(file.sizeBytes).toBeGreaterThan(800);

    // the temp file is removed
    expect(fs.existsSync(source)).toBe(false);
  });

  test("the file will be downloaded only if needed", async () => {
    const { localPath } = await api.files.downloadToServer(file);
    let contents = fs.readFileSync(localPath).toString();
    expect(contents).toContain("1,Erie,Jervois,ejervois0@example.com");

    // modify the file
    contents += "\r\nMODIFIED!";
    fs.writeFileSync(localPath, contents);

    // try again
    await api.files.downloadToServer(file);
    const contentsAgain = fs.readFileSync(localPath).toString();
    expect(contentsAgain).toContain("MODIFIED"); // was not re-downloaded
  });

  test("a file can be destroyed and remove the remote file", async () => {
    const storagePath = path.join(file.bucket, file.path);
    expect(fs.existsSync(storagePath)).toBe(true);

    await api.files.destroy(file);

    expect(fs.existsSync(storagePath)).toBe(false);
  });
});

const makeCopy = function (source: string) {
  const basename = path.basename(source);
  const newDir = path.join(
    `${os.tmpdir()}`,
    "grouparoo",
    `test-${process.env.JEST_WORKER_ID}`
  );
  const newPath = path.join(`${newDir}`, basename);
  fs.mkdirpSync(newDir);
  fs.copyFileSync(source, newPath);
  return newPath;
};
