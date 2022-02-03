import { render, screen } from "@testing-library/react";
import mockAxios from "jest-mock-axios";
import { Client } from "../../client/client";
import { ApiContext } from "../../contexts/api";
import Page from "../../pages/about";
import commonProps from "../__utils__/commonProps";

describe("pages/about", () => {
  beforeEach(() => {
    render(
      <ApiContext.Provider value={{ client: new Client() }}>
        <Page {...commonProps} plugins={[]} />
      </ApiContext.Provider>
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test("should display the current api version", async () => {
    const testVersion = screen.getByTestId("apiVersion");
    expect(testVersion).not.toHaveTextContent("...");
    expect(testVersion).toHaveTextContent("v1");
  });
});
