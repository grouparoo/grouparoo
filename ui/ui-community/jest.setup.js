import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

if (!process.env.SERVER_TOKEN) {
  process.env.SERVER_TOKEN = "test-server-token";
}
