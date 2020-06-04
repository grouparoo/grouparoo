import { helper } from "./../utils/specHelper";
import { Profile } from "./../../src/models/Profile";
import { Event } from "./../../src/models/Event";
import { Log } from "./../../src/models/Log";
import { ProfilePropertyRule } from "../../src/models/ProfilePropertyRule";
import * as _Primus from "primus";
import { api, config } from "actionhero";
// import { ActionheroWebsocketClient } from "../../../web/public/javascript/ActionheroWebsocketClient";
// const {
//   ActionheroWebsocketClient,
// } = require("../../../web/public/javascript/ActionheroWebsocketClient");
// require("../../../web/public/javascript/ActionheroWebsocketClient").default(
//   globalThis
// );
eval(require("../../../web/public/javascript/ActionheroWebsocketClient"));

let actionhero;
let clientSocket;
let url;
let ActionheroWebsocketClient;
let identifyingProfilePropertyRuleGuid;

describe("models/event", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    url = "http://localhost:" + config.servers.web.port;
    ActionheroWebsocketClient = eval(
      api.servers.servers.websocket["compileActionheroWebsocketClientJS"]()
    );
    const S = _Primus.createSocket({});
    clientSocket = new S(url);
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
    identifyingProfilePropertyRuleGuid = (
      await ProfilePropertyRule.findOne({ where: { key: "userId" } })
    ).guid;
  });

  test("events broadcast their apiData when created", async () => {
    const client = new ActionheroWebsocketClient({}, clientSocket);
  });
});
