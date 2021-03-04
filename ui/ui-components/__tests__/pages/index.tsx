import { mount } from "enzyme";
import Page from "../../pages/index";
import commonProps from "../__utils__/commonProps";

describe("pages/index", () => {
  let wrapper;

  describe("Enterprise Edition", () => {
    test("it shows the Create Team CTA when signed out with teams", async () => {
      wrapper = mount(
        <Page
          {...commonProps}
          navigationMode="unauthenticated"
          navigation={{
            bottomMenuItems: [
              { title: "create first team", href: "/team/initialize" },
            ],
          }}
        />
      );

      const html = wrapper.html();
      expect(html).toContain("Create Team");
      expect(html).not.toContain("Sign In");
      expect(html).not.toContain("View Dashboard");
    });
  });

  test("it shows the Sign In CTA when signed out with existing teams", async () => {
    wrapper = mount(
      <Page
        {...commonProps}
        navigationMode="unauthenticated"
        navigation={{ bottomMenuItems: [] }}
      />
    );

    const html = wrapper.html();
    expect(html).not.toContain("Create Team");
    expect(html).toContain("Sign In");
    expect(html).not.toContain("View Dashboard");
  });

  test("it shows the View Dashboard CTA when signed in", async () => {
    wrapper = mount(
      <Page
        {...commonProps}
        navigationMode="authenticated"
        navigation={{ bottomMenuItems: [] }}
      />
    );

    const html = wrapper.html();
    expect(html).not.toContain("Create Team");
    expect(html).not.toContain("Sign In");
    expect(html).toContain("View Dashboard");
  });
});
