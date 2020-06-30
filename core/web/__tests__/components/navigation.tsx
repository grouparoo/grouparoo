import { mount } from "enzyme";
import mockAxios from "jest-mock-axios";
import Component from "../../components/navigation";
import "../../components/icons"; // this is needed to load the library
import commonProps from "../utils/commonProps";

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
    expect(html).toContain('href="/dashboard">Dashboard</a>');
    expect(html).toContain('href="/something/cool">Something Cool</a>');
    expect(html).toContain('href="/session/sign-out">Sign Out</a>');
  });
});
