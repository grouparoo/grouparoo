import { helper } from "@grouparoo/spec-helper";
import { getParentPath } from "../../src/modules/pluginDetails";
import { specHelper } from "actionhero";
import fs from "fs-extra";
import path from "path";
import { SessionCreate } from "../../src/actions/session";
import {
  FileCreate,
  FileDestroy,
  FileDetails,
  FileOptions,
  FilesList,
} from "../../src/actions/files";

describe("actions/files", () => {
  helper.grouparooTestServer({ truncate: true });
  let id: string;

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
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    beforeAll(async () => {
      const file = "/tmp/roo.png";
      if (await fs.pathExists(file)) fs.unlinkSync(file);

      await fs.copy(
        path.join(
          __dirname,
          "..",
          "..",
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
      const { error, options } = await specHelper.runAction<FileOptions>(
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
        _file: { name: "logo.svg", path: "/tmp/logo.svg" },
      };
      const { error, file } = await specHelper.runAction<FileCreate>(
        "file:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(file.id).toBeTruthy();
      expect(file.transport).toBe("local");
      expect(file.type).toBe("image");
      expect(file.bucket).toBe(
        path.join(
          getParentPath(),
          "files",
          `test-${process.env.JEST_WORKER_ID}`
        )
      );
      expect(file.path).toBe("image/logo.svg");
      expect(file.extension).toBe(".svg");
      expect(file.mime).toBe("image/svg+xml");
      expect(file.sizeBytes).toBe(1645);

      id = file.id;
    });

    test("a reader can list the files of type", async () => {
      connection.params = {
        csrfToken,
        type: "image",
      };
      const { error, files, total } = await specHelper.runAction<FilesList>(
        "files:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(files.length).toBe(1);
      expect(total).toBe(1);
      expect(files[0].path).toBe("image/logo.svg");
    });

    test("a reader can get the details for a file", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, file } = await specHelper.runAction<FileDetails>(
        "file:details",
        connection
      );
      expect(error).toBeUndefined();
      expect(file.path).toBe("image/logo.svg");
      expect(file.extension).toBe(".svg");
      expect(file.mime).toBe("image/svg+xml");
    });

    // TODO: a better hack
    // test('a reader can view an uploaded file', async () => {
    //   let stream = ''
    //   connection.pipe = (chunk) => { stream += chunk }

    //   connection.params = {
    //     csrfToken,
    //     id
    //   }
    //   const response = await specHelper.runAction('file:view', connection)
    // })

    test("a writer can destroy a file", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error } = await specHelper.runAction<FileDestroy>(
        "file:destroy",
        connection
      );
      expect(error).toBeUndefined();

      connection.params = {
        csrfToken,
        type: "image",
      };
      const { files } = await specHelper.runAction<FilesList>(
        "files:list",
        connection
      );
      expect(files.length).toBe(0);
    });
  });
});
