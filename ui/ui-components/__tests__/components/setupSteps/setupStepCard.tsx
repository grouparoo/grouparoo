import { act, render, screen } from "@testing-library/react";
import SetupStepCard from "../../../components/setupSteps/SetupStepCard";
import { ApiContext } from "../../../contexts/api";
import { Models } from "../../../utils/apiData";
import { TestContextProvider } from "../../__utils__/TestContextProvider";
import { asyncRenderWithContext } from "../../__utils__/renderWithContext";

describe("<setupStepCard />", () => {
  const setupStep: Models.SetupStepType = {
    complete: false,
    position: 1,
    title: "this is a setup step",
    description: "this is a setup description",
    href: "http://example.com",
    cta: "you should do the thing",
    outcome: "You did the thing!",
  };

  describe("Enterprise Edition", () => {
    beforeAll(async () => {
      process.env.GROUPAROO_UI_EDITION = "enterprise";

      const client = {
        request: async () => ({}),
      } as any;

      await asyncRenderWithContext(
        <SetupStepCard setupStep={setupStep} reload={() => {}} />,
        { client }
      );
    });

    it("renders a call to action", async () => {
      const card = await screen.findByTestId("setupStepCard");
      expect(card).toHaveTextContent("you should do the thing");
    });
  });

  describe("Community Edition", () => {
    beforeAll(async () => {
      process.env.GROUPAROO_UI_EDITION = "community";

      const client = {
        request: async () => ({}),
      } as any;

      await asyncRenderWithContext(
        <SetupStepCard setupStep={setupStep} reload={() => {}} />,
        { client }
      );
    });

    it("does not render a call to action", async () => {
      const card = await screen.findByTestId("setupStepCard");
      expect(card).not.toHaveTextContent("you should do the thing");
    });
  });
});
