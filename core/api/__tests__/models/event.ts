import { helper } from "./../utils/specHelper";
import { Event } from "./../../src/models/Event";

let actionhero;

describe("models/event", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("an event can be created", async () => {
    const event = await helper.factories.event();

    expect(event.guid.length).toBe(40);
    expect(event.createdAt).toBeTruthy();
    expect(event.updatedAt).toBeTruthy();
    expect(event.occurredAt).toBeTruthy();
  });
});
