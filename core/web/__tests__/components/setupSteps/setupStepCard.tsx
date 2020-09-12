import { mount } from "enzyme";
import SetStepCard from "../../../components/setupSteps/setupStepCard";
import { SetupStepAPIData } from "../../../utils/apiData";

describe("<setupStepCard />", () => {
  let component;

  const setupStep: SetupStepAPIData = {
    complete: false,
    position: 1,
    title: "this is a setup step",
    description: "this is a setup description",
    href: "http://example.com",
    cta: "you should do the thing",
    outcome: "You did the thing!",
  };

  beforeAll(() => {
    component = mount(<SetStepCard setupStep={setupStep} />);
  });

  afterAll(() => {
    component.unmount();
  });

  it("renders a call to action", () => {
    expect(component.html()).toContain("you should do the thing");
  });
});
