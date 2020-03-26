import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import mockAxios from "jest-mock-axios";
import Component from "../../components/navigation";
import commonProps from "../utils/commonProps";

describe("navigation", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Component {...commonProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
    mockAxios.reset();
  });

  test("shows the nav returned from the server", async () => {
    const request = mockAxios.lastReqGet();
    expect(request.url).toMatch("/api/1/navigation");

    await act(async () => {
      await request.promise.resolve({
        data: {
          navigation: {
            navigationItems: [
              { type: "link", title: "Dashboard", href: "/dashboard" },
            ],
            platformItems: [],
            bottomMenuItems: [
              {
                type: "link",
                title: "Something Cool",
                href: "/something/cool",
              },
              { type: "link", title: "Sign Out", href: "/session/sign-out" },
            ],
          },
        },
      });
    });

    const html = wrapper.html();
    expect(html).toContain('href="/dashboard">Dashboard</a>');
    expect(html).toContain('href="/something/cool">Something Cool</a>');
    expect(html).toContain('href="/session/sign-out">Sign Out</a>');
  });
});
