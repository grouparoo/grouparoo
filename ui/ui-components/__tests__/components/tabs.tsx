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
      pathname: "/property/[id]/edit",
      asPath: "/property/abc123/edit",
    }));

    component = mount(<PropertyTab property={property} source={source} />);
  });

  afterAll(() => {
    component.unmount();
  });

  it("renders the plural word properly", () => {
    const links = component.find(".breadcrumb a");
    const link = links.at(0);
    const domNode = link.getDOMNode();

    expect(link.text()).toBe("Properties");
    expect(domNode.constructor.name).toBe("HTMLAnchorElement");
    expect(domNode.getAttribute("href")).toBe("/properties");
  });

  it("shows the property key", () => {
    const links = component.find(".breadcrumb a");
    const link = links.at(1);
    const domNode = link.getDOMNode();

    expect(link.text()).toBe(property.key);
    expect(domNode.constructor.name).toBe("HTMLAnchorElement");
    expect(domNode.getAttribute("href")).toBe("/property/abc123/edit");
  });
});

describe("<AppTab />", () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  let component;

  const app = { name: "Data Warehouse", type: "postgres" };

  beforeAll(() => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/app/[id]/edit",
      asPath: "/app/abc123/edit",
    }));

    component = mount(<AppTab app={app} />);
  });

  afterAll(() => {
    component.unmount();
  });

  it("renders the plural word properly", () => {
    const links = component.find(".breadcrumb a");
    const link = links.at(0);
    const domNode = link.getDOMNode();

    expect(link.text()).toBe("Apps");
    expect(domNode.constructor.name).toBe("HTMLAnchorElement");
    expect(domNode.getAttribute("href")).toBe("/apps");
  });

  it("shows the name of the app", () => {
    const links = component.find(".breadcrumb a");
    const link = links.at(1);
    const domNode = link.getDOMNode();

    expect(link.text()).toBe(app.name);
    expect(domNode.constructor.name).toBe("HTMLAnchorElement");
    expect(domNode.getAttribute("href")).toBe("/app/abc123/edit");
  });
});
