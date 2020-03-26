import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import env from "./env";

configure({ adapter: new Adapter() });

for (const key in env) {
  if (!process.env[key]) {
    process.env[key] = env[key];
  }
}
