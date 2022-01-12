import { render, screen } from "@testing-library/react";
import mockAxios from "jest-mock-axios";
import Component from "../../components/Navigation";
import "../../components/Icons"; // this is needed to load the library
import commonProps from "../__utils__/commonProps";
import { PageContext } from "../../contexts/page";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("navigation", () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: "/",
      asPath: "/",
    }));

    const pageContext: PageContext = {
      currentTeamMember: {
        firstName: "mario",
        id: "abc123",
      },
      navigationMode: "authenticated",
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
      clusterName: { default: false, value: "" },
    };

    render(
      <PageContext.Provider value={pageContext}>
        <Component {...commonProps} />
      </PageContext.Provider>
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test("shows the nav returned from the server", async () => {
    const navigation = screen.getByTestId("navigation");
    expect(navigation.outerHTML).toContain("<span>Dashboard</span>");
    expect(navigation.outerHTML).toContain("Something Cool</a>");
    expect(navigation.outerHTML).toContain("Sign Out</a>");
  });
});
