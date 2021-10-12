import { render, screen } from "@testing-library/react";
import Component from "../../components/navigation/setupStepsNavProgressBar";
import mockAxios from "jest-mock-axios";
import { Actions } from "../../utils/apiData";
import { UseApi } from "../../hooks/useApi";
import { EventDispatcher } from "../../utils/eventDispatcher";
import { NextPageContext } from "next";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const mockSetupStepHandler = new EventDispatcher<any>();

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
            setupStepHandler={mockSetupStepHandler}
          />
        );
        expect(screen.queryByTestId("setupStepsProgressBar")).toBeNull();
      });
    }
  });

  describe("on a logged in page", () => {
    const { execApi } = UseApi({} as NextPageContext);

    beforeEach(() => {
      useRouter.mockImplementation(() => ({
        pathname: "/dashboard",
        asPath: "/dashboard",
        prefetch: async () => {},
      }));
    });

    afterEach(() => {
      mockAxios.reset();
    });

    it("doesn't display without steps", async () => {
      render(
        <Component execApi={execApi} setupStepHandler={mockSetupStepHandler} />
      );

      expect(screen.queryByTestId("setupStepsProgressBar")).toBeNull();
    });

    it("displays with steps", async () => {
      let stepsResponse: Actions.SetupStepsList = {
        setupSteps: [
          {
            id: "1",
            position: 1,
            key: "1",
            title: "do a thing",
            description: "please do this thing",
            href: "/a/b/c",
            cta: "click me",
            helpLink: "https://www.grouparoo.com/help",
            showCtaOnCommunity: true,
            outcome: "yay",
            skipped: false,
            disabled: false,
            complete: false,
            createdAt: 1,
            updatedAt: 1,
          },
        ],
      };

      render(
        <Component execApi={execApi} setupStepHandler={mockSetupStepHandler} />
      );

      expect(mockAxios).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "get",
          url: "/api/v1/setupSteps",
        })
      );
      mockAxios.mockResponse({ data: stepsResponse });

      const element = await screen.findByTestId("setupStepsProgressBar");
      expect(element).toHaveTextContent("Get Started:");
      expect(element).toHaveTextContent("do a thing");
    });

    it("does not appear when all setup steps are complete", async () => {
      let stepsResponse: Actions.SetupStepsList = {
        setupSteps: [
          {
            id: "1",
            position: 1,
            key: "1",
            title: "do a thing",
            description: "please do this thing",
            href: "/a/b/c",
            cta: "click me",
            helpLink: "https://www.grouparoo.com/help",
            showCtaOnCommunity: true,
            outcome: "yay",
            skipped: false,
            disabled: false,
            complete: true,
            createdAt: 1,
            updatedAt: 1,
          },
        ],
      };

      render(
        <Component execApi={execApi} setupStepHandler={mockSetupStepHandler} />
      );

      mockAxios.mockResponse({ data: stepsResponse });
      await expect(
        screen.findByTestId("setupStepsProgressBar")
      ).rejects.toThrow(/Unable to find an element/);
    });
  });
});
