import { mount } from "enzyme";
import mockAxios from "jest-mock-axios";
import Component from "../../components/navigation";
import "../../components/icons"; // this is needed to load the library
import commonProps from "../utils/commonProps";

// TODO: it seems that with next v9.5.0 you cannot test a component which uses <Link> outside of a page...
// https://github.com/vercel/next.js/issues/15543
jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

describe("navigation", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Component
        {...commonProps}
        pathname="/some/page"
        currentTeamMember={{
          firstName: "mario",
          guid: "abc123",
        }}
        navigationMode="authenticated"
        navigation={{
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
        }}
      />
    );
  });

  afterEach(() => {
    wrapper.unmount();
    mockAxios.reset();
  });

  test("shows the nav returned from the server", async () => {
    const html = wrapper.html();
    expect(html).toContain("Dashboard</a>");
    expect(html).toContain("Something Cool</a>");
    expect(html).toContain("Sign Out</a>");
  });
});
