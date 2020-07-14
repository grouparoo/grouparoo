import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

if (!process.env.SERVER_TOKEN) {
  process.env.SERVER_TOKEN = "test-server-token";
}

require("./plugins");
