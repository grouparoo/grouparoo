import { render, screen } from "@testing-library/react";
import PropertyTab from "../../components/tabs/Property";
import AppTab from "../../components/tabs/App";
import { renderWithContext } from "../__utils__/renderWithContext";

describe("<PropertyTab />", () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  const property = { key: "Email" };
  const source = { name: "User Table", id: "user_table" };
  const model = { name: "Users", id: "users_123" };
  const propertyId = "abc123";

  beforeEach(async () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/model/[modelId]/source/[sourceId]/property/[propertyId]/edit",
      asPath: `/model/${model.id}/source/${source.id}/property/${propertyId}/edit`,
    }));

    renderWithContext(<PropertyTab property={property} source={source} />, {
      model,
    });
  });

  it("renders the model link properly", async () => {
    const link = screen.getByRole("link", { name: model.name });
    expect(link).toHaveAttribute("href", `/model/${model.id}/overview`);
  });

  it("shows the property key", () => {
    const link = screen.getByRole("link", { name: "Email" });
    expect(link).toHaveAttribute(
      "href",
      `/model/${model.id}/source/${source.id}/property/${propertyId}/edit`
    );
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
