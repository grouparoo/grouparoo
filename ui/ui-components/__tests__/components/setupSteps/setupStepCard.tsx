import { render, screen } from "@testing-library/react";
import SetupStepCard from "../../../components/setupSteps/SetupStepCard";
import { Models } from "../../../utils/apiData";

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
    beforeAll(() => {
      process.env.GROUPAROO_UI_EDITION = "enterprise";

      render(
        <SetupStepCard
          setupStep={setupStep}
          execApi={() => {}}
          reload={() => {}}
        />
      );
    });

    it("renders a call to action", async () => {
      const card = await screen.findByTestId("setupStepCard");
      expect(card).toHaveTextContent("you should do the thing");
    });
  });

  describe("Community Edition", () => {
    beforeAll(() => {
      process.env.GROUPAROO_UI_EDITION = "community";

      render(
        <SetupStepCard
          setupStep={setupStep}
          execApi={() => {}}
          reload={() => {}}
        />
      );
    });

    it("does not render a call to action", async () => {
      const card = await screen.findByTestId("setupStepCard");
      expect(card).not.toHaveTextContent("you should do the thing");
    });
  });
});
