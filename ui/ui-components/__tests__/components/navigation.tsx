import { mount } from "enzyme";
import mockAxios from "jest-mock-axios";
import Component from "../../components/navigation";
import "../../components/icons"; // this is needed to load the library
import commonProps from "../__utils__/commonProps";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("navigation", () => {
  let wrapper;

  beforeEach(() => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/",
      asPath: "/",
    }));

    wrapper = mount(
      <Component
        {...commonProps}
        currentTeamMember={{
          firstName: "mario",
          id: "abc123",
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
    expect(html).toContain("<span>Dashboard</span>");
    expect(html).toContain("Something Cool</a>");
    expect(html).toContain("Sign Out</a>");
  });
});
