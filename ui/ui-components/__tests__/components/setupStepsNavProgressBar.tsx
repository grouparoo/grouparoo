import { render, screen } from "@testing-library/react";
import Component from "../../components/navigation/setupStepsNavProgressBar";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("setupStepsNavProgressBar", () => {
  describe("hidden", () => {
    beforeEach(() => {
      useRouter.mockImplementation(() => ({
        pathname: "/",
        asPath: "/",
      }));
    });

    for (const page of ["/", "/session/sign-in"]) {
      it(`does not render on ${page}`, () => {
        useRouter.mockImplementation(() => ({ pathname: page, asPath: page }));
        render(
          <Component
            execApi={() => {}}
            setupStepHandler={{ subscribe: () => {}, unsubscribe: () => {} }}
          />
        );
        expect(screen.queryByTestId("setupStepsProgressBar")).toBeNull();
      });
    }
  });

  describe("on a logged in page", () => {
    beforeEach(() => {
      useRouter.mockImplementation(() => ({
        pathname: "/dashboard",
        asPath: "/dashboard",
      }));
    });

    it("displays", async () => {
      render(
        <Component
          execApi={() => {}}
          setupStepHandler={{ subscribe: () => {}, unsubscribe: () => {} }}
        />
      );

      const element = screen.getByTestId("setupStepsProgressBar");
    });
  });
});
