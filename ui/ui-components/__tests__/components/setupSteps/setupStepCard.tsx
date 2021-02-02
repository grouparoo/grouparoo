import { mount } from "enzyme";
import SetupStepCard from "../../../components/setupSteps/setupStepCard";
import { Models } from "../../../utils/apiData";

describe("<setupStepCard />", () => {
  let component;

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
    });

    beforeAll(() => {
      component = mount(
        <SetupStepCard
          setupStep={setupStep}
          execApi={() => {}}
          reload={() => {}}
        />
      );
    });

    afterAll(() => {
      component.unmount();
    });

    it("renders a call to action", () => {
      expect(component.html()).toContain("you should do the thing");
    });
  });

  describe("Community Edition", () => {
    beforeAll(() => {
      process.env.GROUPAROO_UI_EDITION = "community";
    });

    beforeAll(() => {
      component = mount(
        <SetupStepCard
          setupStep={setupStep}
          execApi={() => {}}
          reload={() => {}}
        />
      );
    });

    afterAll(() => {
      component.unmount();
    });

    it("does not render a call to action", () => {
      expect(component.html()).not.toContain("you should do the thing");
    });
  });
});
