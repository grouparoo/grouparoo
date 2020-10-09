import { helper } from "@grouparoo/spec-helper";
import { Message } from "./../../src/models/Message";

let actionhero;

describe("models/message", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("messages can be created", async () => {
    const message = await Message.create({
      from: "test",
      subject: "test",
      body: "test",
    });

    expect(message.readAt).toBeFalsy();
  });

  test("from, subject, and body are required", async () => {
    await expect(
      Message.create({ from: "test", body: "test" })
    ).rejects.toThrow(/notNull Violation/);
    await expect(
      Message.create({ from: "test", subject: "test" })
    ).rejects.toThrow(/notNull Violation/);
    await expect(
      Message.create({ subject: "test", body: "test" })
    ).rejects.toThrow(/notNull Violation/);
  });
});
