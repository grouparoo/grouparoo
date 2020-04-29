import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import fs from "fs-extra";
import path from "path";

let actionhero;
let guid;

describe("actions/files", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("reader signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    beforeAll(async () => {
      const file = "/tmp/roo.png";
      if (await fs.pathExists(file)) {
        fs.unlinkSync(file);
      }

      await fs.copy(
        path.join(
          __dirname,
          "..",
          "..",
          "..",
          "web",
          "public",
          "images",
          "logo",
          "logo.svg"
        ),
        "/tmp/logo.svg"
      );

      await fs.emptyDir(`/tmp/grouparoo-test-${process.env.JEST_WORKER_ID}`);
    });

    test("file type can be retrieved", async () => {
      connection.params = { csrfToken };
      const { error, options } = await specHelper.runAction(
        "files:options",
        connection
      );

      expect(error).toBeUndefined();
      expect(options.types).toEqual([
        "csv",
        "json",
        "image",
        "video",
        "audio",
        "other",
      ]);
    });

    test("a writer can upload a file", async () => {
      connection.params = {
        csrfToken,
        type: "image",
        // Note: This object emulates formidible's parsing response after an upload to the web server
        file: { name: "logo.svg", path: "/tmp/logo.svg" },
      };
      const { error, file } = await specHelper.runAction(
        "file:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(file.guid).toBeTruthy();
      expect(file.transport).toBe("local");
      expect(file.type).toBe("image");
      expect(file.bucket).toBe(
        path.join(process.cwd(), `files-test-${process.env.JEST_WORKER_ID}`)
      );
      expect(file.path).toBe("image/logo.svg");
      expect(file.extension).toBe(".svg");
      expect(file.mime).toBe("image/svg+xml");
      expect(file.sizeBytes).toBe(1645);

      guid = file.guid;
    });

    test("a reader can list the files of type", async () => {
      connection.params = {
        csrfToken,
        type: "image",
      };
      const { error, files, total } = await specHelper.runAction(
        "files:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(files.length).toBe(1);
      expect(total).toBe(1);
      expect(files[0].path).toBe("image/logo.svg");
    });

    // TODO: a better hack
    // test('a reader can view an uploaded file', async () => {
    //   let stream = ''
    //   connection.pipe = (chunk) => { stream += chunk }

    //   connection.params = {
    //     csrfToken,
    //     guid
    //   }
    //   const response = await specHelper.runAction('file:view', connection)
    // })

    test("a writer can destroy a file", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error } = await specHelper.runAction("file:destroy", connection);
      expect(error).toBeUndefined();

      connection.params = {
        csrfToken,
        type: "image",
      };
      const { files } = await specHelper.runAction("files:list", connection);
      expect(files.length).toBe(0);
    });
  });
});
