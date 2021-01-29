import { mount } from "enzyme";
import Page from "../../pages/index";
import commonProps from "../utils/commonProps";

describe("pages/index", () => {
  let wrapper;

  describe("Enterprise Edition", () => {
    beforeAll(() => {
      process.env.GROUPAROO_UI_EDITION = "enterprise";
    });

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
      expect(html).not.toContain("Configure your Grouparoo Server");
      expect(html).not.toContain("Sign In");
      expect(html).not.toContain("View Dashboard");
    });
  });

  describe("Community Edition", () => {
    beforeAll(() => {
      process.env.GROUPAROO_UI_EDITION = "community";
    });

    test("it shows a note to visit www when there are no teams", async () => {
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
      expect(html).toContain("Configure your Grouparoo Server");
      expect(html).not.toContain("Sign In");
      expect(html).not.toContain("Create Team");
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
