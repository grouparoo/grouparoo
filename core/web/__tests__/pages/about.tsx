import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import mockAxios from "jest-mock-axios";
import Page from "../../pages/about";
import commonProps from "../utils/commonProps";

describe("pages/about", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Page {...commonProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
    mockAxios.reset();
  });

  test("renders a placeholder before api call", () => {
    expect(wrapper.html()).toContain("...");
  });

  test("should load the current api version", async () => {
    let request = mockAxios.lastReqGet();
    expect(request.url).toMatch("/api/v1/status");

    await act(async () => {
      mockAxios.mockResponseFor("/api/v1/status", {
        data: { version: "1.2.3" },
      });
    });

    expect(wrapper.html()).not.toContain("...");
    expect(wrapper.html()).toContain("v1.2.3");
  });
});
