import { helper } from "./../utils/specHelper";
import { File } from "./../../src/models/File";
import { Log } from "./../../src/models/Log";
let actionhero;

describe("models/file", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("a file can be created", async () => {
    const file = new File({
      type: "image",
      path: "/images/test.png",
      transport: "local",
      bucket: "/tmp/test",
      extension: ".png",
      mime: "image/png",
      sizeBytes: 1,
    });

    await file.save();

    expect(file.guid.length).toBe(40);
    expect(file.createdAt).toBeTruthy();
    expect(file.updatedAt).toBeTruthy();
  });

  test("a file needs to have a valid type", async () => {
    await expect(
      File.create({
        type: "_picture",
        path: "/images/test.png",
        transport: "local",
        bucket: "/tmp/test",
        extension: ".png",
        mime: "image/png",
        sizeBytes: 1,
      })
    ).rejects.toThrow(/_picture is not a valid file type/);
  });

  test("creating a file creates a log entry", async () => {
    const latestLog = await Log.findOne({
      where: { verb: "create", topic: "file" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  test("deleting a file creates a log entry", async () => {
    const file = await File.create({
      type: "image",
      path: "/images/test.png",
      transport: "local",
      bucket: "/tmp/test",
      extension: ".png",
      mime: "image/png",
      sizeBytes: 1,
    });
    await file.destroy();

    const latestLog = await Log.findOne({
      where: { verb: "destroy", topic: "file" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });
});
