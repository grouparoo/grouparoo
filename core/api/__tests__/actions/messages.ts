import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Message } from "../../src";
let actionhero;

describe("actions/messages", () => {
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

  beforeAll(async () => {
    await helper.factories.message();
    await helper.factories.message();
    await helper.factories.message();
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

    test("a reader can view messages", async () => {
      connection.params = { csrfToken };
      const { error, messages, total } = await specHelper.runAction(
        "messages:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(messages.length).toBe(3);
      expect(total).toBe(3);
    });

    test("a reader can read a message and mark it as read", async () => {
      const messageObject = await Message.findOne();

      connection.params = { csrfToken, guid: messageObject.guid };
      const { error, message } = await specHelper.runAction(
        "message:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(message.from).toBeTruthy();
      expect(message.subject).toBeTruthy();
      expect(message.body).toBeTruthy();
      expect(message.readAt).toBeTruthy();
    });
  });
});
