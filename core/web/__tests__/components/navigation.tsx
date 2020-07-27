import { mount } from "enzyme";
import mockAxios from "jest-mock-axios";
import Component from "../../components/navigation";
import "../../components/icons"; // this is needed to load the library
import commonProps from "../utils/commonProps";

describe("navigation", () => {
  let wrapper;

  // TODO: it seems that with next v9.5.0 you cannot test a component which uses <Link> outside of a page...

  // beforeEach(() => {
  //   wrapper = mount(
  //     <Component
  //       {...commonProps}
  //       pathname="/some/page"
  //       currentTeamMember={{
  //         firstName: "mario",
  //         guid: "abc123",
  //       }}
  //       navigationMode="authenticated"
  //       navigation={{
  //         navigationItems: [
  //           { type: "link", title: "Dashboard", href: "/dashboard" },
  //         ],
  //         platformItems: [],
  //         bottomMenuItems: [
  //           {
  //             type: "link",
  //             title: "Something Cool",
  //             href: "/something/cool",
  //           },
  //           { type: "link", title: "Sign Out", href: "/session/sign-out" },
  //         ],
  //       }}
  //     />
  //   );
  // });

  // afterEach(() => {
  //   wrapper.unmount();
  //   mockAxios.reset();
  // });

  // test("shows the nav returned from the server", async () => {
  //   const html = wrapper.html();
  //   expect(html).toContain('href="/dashboard">Dashboard</a>');
  //   expect(html).toContain('href="/something/cool">Something Cool</a>');
  //   expect(html).toContain('href="/session/sign-out">Sign Out</a>');
  // });

  it("should work", () => {
    expect(1).toBe(1);
  });
});
