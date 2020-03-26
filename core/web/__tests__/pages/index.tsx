import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import mockAxios from "jest-mock-axios";
import Page from "../../pages/index";
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

  test("assumes the proper CTA is to Sign In by default", () => {
    expect(wrapper.html()).toContain("Sign In");
  });

  test("it changed the CTA to View Dashboard if you are signed in", async () => {
    const request = mockAxios.lastReqGet();
    expect(request.url).toMatch("/api/1/navigation");

    await act(async () => {
      await request.promise.resolve({
        data: { navigationMode: "authenticated" },
      });
    });

    expect(wrapper.html()).not.toContain("Sign In");
    expect(wrapper.html()).toContain("View Dashboard");
  });

  test("it changes the CTA to Create Team if there are no teams", async () => {
    const request = mockAxios.lastReqGet();
    expect(request.url).toMatch("/api/1/navigation");

    await act(async () => {
      await request.promise.resolve({
        data: {
          navigationMode: "unauthenticated",
          navigation: {
            bottomMenuItems: [
              { title: "create first team", href: "/team/initialize" },
            ],
          },
        },
      });
    });

    expect(wrapper.html()).not.toContain("Sign In");
    expect(wrapper.html()).toContain("Create Team");
  });
});
