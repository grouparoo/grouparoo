process.env.NEXT_DISABLED = "false";
import "@grouparoo/spec-helper/dist/lib/environment";

import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });
