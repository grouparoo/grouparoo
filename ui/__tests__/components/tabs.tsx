import { mount } from "enzyme";
import PropertyTab from "../../components/tabs/property";
import AppTab from "../../components/tabs/app";

describe("<PropertyTab />", () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  let component;

  const property = { key: "Email" };
  const source = { name: "User Table" };

  beforeAll(() => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/property/[guid]/edit",
      asPath: "/property/abc123/edit",
    }));

    component = mount(<PropertyTab property={property} source={source} />);
  });

  afterAll(() => {
    component.unmount();
  });

  it("renders the plural word properly", () => {
    expect(component.html()).toContain(`<a href="/properties">Properties</a>`);
  });

  it("shows the property key", () => {
    expect(component.html()).toContain(
      `<a href="/property/abc123/edit">${property.key}</a>`
    );
  });
});

describe("<AppTab />", () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  let component;

  const app = { name: "Data Warehouse", type: "postgres" };

  beforeAll(() => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/app/[guid]/edit",
      asPath: "/app/abc123/edit",
    }));

    component = mount(<AppTab app={app} />);
  });

  afterAll(() => {
    component.unmount();
  });

  it("renders the plural word properly", () => {
    expect(component.html()).toContain(`<a href="/apps">Apps</a>`);
  });

  it("shows the name of the app", () => {
    expect(component.html()).toContain(
      `<a href="/app/abc123/edit">${app.name}</a>`
    );
  });
});
