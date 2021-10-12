import { render, screen } from "@testing-library/react";
import PropertyTab from "../../components/tabs/property";
import AppTab from "../../components/tabs/app";

describe("<PropertyTab />", () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  const property = { key: "Email" };
  const source = { name: "User Table" };

  beforeEach(async () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/model/[modelId]/property/[propertyId]/edit",
      asPath: "/model/xyz321/property/abc123/edit",
    }));

    render(<PropertyTab property={property} source={source} />);
  });

  it("renders the plural word properly", async () => {
    const link = screen.getByRole("link", { name: "Properties" });
    expect(link).toHaveAttribute("href", "/model/xyz321/properties");
  });

  it("shows the property key", () => {
    const link = screen.getByRole("link", { name: "Email" });
    expect(link).toHaveAttribute("href", "/model/xyz321/property/abc123/edit");
  });
});

describe("<AppTab />", () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  const app = { name: "Data Warehouse", type: "postgres" };

  beforeEach(() => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/app/[id]/edit",
      asPath: "/app/abc123/edit",
    }));

    render(<AppTab app={app} />);
  });

  it("renders the plural word properly", () => {
    const link = screen.getByRole("link", { name: "Apps" });
    expect(link).toHaveAttribute("href", "/apps");
  });

  it("shows the name of the app", () => {
    const link = screen.getByRole("link", { name: "Data Warehouse" });
    expect(link).toHaveAttribute("href", "/app/abc123/edit");
  });
});
