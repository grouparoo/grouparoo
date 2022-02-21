import { render, screen } from "@testing-library/react";
import mockAxios from "jest-mock-axios";
import Component from "../../components/Navigation";
import "../../components/Icons"; // this is needed to load the library
import commonProps from "../__utils__/commonProps";
import { WebAppContext } from "../../contexts/webApp";
import { TestContextProvider } from "../__utils__/ContextProvider";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("navigation", () => {
  const webAppContext: WebAppContext = {
    currentTeamMember: {
      firstName: "mario",
      id: "abc123",
    },
    navigationMode: "authenticated",
    navigation: {
      navigationItems: [
        {
          type: "link",
          title: "Dashboard",
          href: "/dashboard",
          mainPathSectionIdx: 1,
        },
        {
          type: "link",
          title: "Accounts",
          href: "/model/accounts/overview",
          mainPathSectionIdx: 2,
          subNavItems: [
            {
              type: "link",
              title: "Model Data",
              href: "/model/accounts/overview#model-data",
              small: true,
              mainPathSectionIdx: 3,
            },
            {
              type: "link",
              title: "Destinations",
              href: "/model/accounts/overview#destinations",
              small: true,
              mainPathSectionIdx: 3,
            },
          ],
        },
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
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: "/",
      asPath: "/",
    }));
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test("shows the nav returned from the server", async () => {
    render(
      <TestContextProvider webAppContext={webAppContext}>
        <Component {...commonProps} />
      </TestContextProvider>
    );
    const navigation = screen.getByTestId("navigation");
    expect(navigation.outerHTML).toContain("<span>Dashboard</span>");
    expect(navigation.outerHTML).toContain("Something Cool</span>");
    expect(navigation.outerHTML).toContain("Sign Out</span>");
  });

  test("renders children correctly", async () => {
    useRouter.mockImplementation(() => ({
      pathname: "/",
      asPath: "/model/accounts/overview",
    }));
    const component = render(
      <TestContextProvider webAppContext={webAppContext}>
        <Component {...commonProps} />
      </TestContextProvider>
    );
    expect(component.container).toMatchSnapshot();
  });

  test("recognizes that we are in #destinations", async () => {
    useRouter.mockImplementation(() => ({
      pathname: "/",
      asPath: "/model/accounts/overview#destinations",
    }));
    const component = render(
      <TestContextProvider webAppContext={webAppContext}>
        <Component {...commonProps} />
      </TestContextProvider>
    );
    expect(component.container).toMatchSnapshot();
  });
});
