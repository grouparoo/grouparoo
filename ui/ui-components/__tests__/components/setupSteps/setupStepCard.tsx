import { mount } from "enzyme";
import SetupStepCard from "../../../components/setupSteps/setupStepCard";
import { Models } from "../../../utils/apiData";

describe("<setupStepCard />", () => {
  let component;

  beforeAll(() => {
    const setupStep: Models.SetupStepType = {
      complete: false,
      position: 1,
      title: "this is a setup step",
      description: "this is a setup description",
      href: "http://example.com",
      cta: "you should do the thing",
      outcome: "You did the thing!",
    };

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
