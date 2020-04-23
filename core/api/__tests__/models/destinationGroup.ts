import { helper } from "../utils/specHelper";
import { specHelper } from "actionhero";
import { DestinationGroup } from "../../src/models/DestinationGroup";
import { Destination } from "../../src/models/Destination";
import { Group } from "../../src/models/Group";
let actionhero;
let api;

describe("models/destinationGroup", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("with group and destination", () => {
    let group: Group;
    let destination: Destination;
    let destinationGroup: DestinationGroup;

    beforeAll(async () => {
      group = await helper.factories.group();
      destination = await helper.factories.destination();
    });

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
    });

    afterAll(async () => {
      await group.destroy();
      await destination.destroy();
    });

    test("creating a destination group will enqueue a group:run task", async () => {
      destinationGroup = await DestinationGroup.create({
        groupGuid: group.guid,
        destinationGuid: destination.guid,
      });

      const foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({
        force: true,
        groupGuid: group.guid,
        destinationGuid: destination.guid,
      });
    });

    test("deleting a destination group will enqueue a group:run task", async () => {
      await destinationGroup.destroy();

      const foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({
        force: true,
        groupGuid: group.guid,
        destinationGuid: destination.guid,
      });
    });
  });
});
