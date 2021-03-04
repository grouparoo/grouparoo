import { mount } from "enzyme";
import mockAxios from "jest-mock-axios";
import Page from "../../pages/about";
import commonProps from "../__utils__/commonProps";

describe("pages/about", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Page {...commonProps} plugins={[]} />);
  });

  afterEach(() => {
    wrapper.unmount();
    mockAxios.reset();
  });

  test("should display the current api version", async () => {
    expect(wrapper.html()).not.toContain("...");
    expect(wrapper.html()).toContain("v1");
  });
});
