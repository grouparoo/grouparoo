import { render, screen } from "@testing-library/react";
import Page from "../../pages/index";
import commonProps from "../__utils__/commonProps";

describe("pages/index", () => {
  describe("Enterprise Edition", () => {
    test("it shows the Create Team CTA when signed out with teams", async () => {
      render(
        <Page
          {...commonProps}
          navigationMode="unauthenticated"
          navigation={{
            bottomMenuItems: [
              { title: "create first team", href: "/team/initialize" },
            ],
          }}
          setupSteps={[
            { complete: false, skipped: false },
            { complete: true, skipped: false },
          ]}
        />
      );

      const cta = screen.getByTestId("cta");
      expect(cta).toHaveTextContent("Create Team");
      expect(cta).not.toHaveTextContent("Sign In");
      expect(cta).not.toHaveTextContent("View Dashboard");
    });
  });

  test("it shows the Sign In CTA when signed out with existing teams", async () => {
    render(
      <Page
        {...commonProps}
        navigationMode="unauthenticated"
        navigation={{ bottomMenuItems: [] }}
        setupSteps={[
          { complete: false, skipped: false },
          { complete: true, skipped: false },
        ]}
      />
    );

    const cta = screen.getByTestId("cta");
    expect(cta).not.toHaveTextContent("Create Team");
    expect(cta).toHaveTextContent("Sign In");
    expect(cta).not.toHaveTextContent("View Dashboard");
  });

  test("it shows the View Dashboard CTA when signed in", async () => {
    render(
      <Page
        {...commonProps}
        navigationMode="authenticated"
        navigation={{ bottomMenuItems: [] }}
        setupSteps={[
          { complete: false, skipped: false },
          { complete: true, skipped: false },
        ]}
      />
    );

    const cta = screen.getByTestId("cta");
    expect(cta).not.toHaveTextContent("Create Team");
    expect(cta).not.toHaveTextContent("Sign In");
    expect(cta).toHaveTextContent("View Dashboard");
  });
});
