import { render } from "@testing-library/react";
import React from "react";
import {
  TestContextProviderProps,
  TestContextProvider,
} from "./TestContextProvider";
import { renderAndWait } from "./renderAndWait";

export const renderWithContext = (
  jsx: React.ReactNode,
  contextData: TestContextProviderProps = {}
) => render(<TestContextProvider {...contextData}>{jsx}</TestContextProvider>);

export const asyncRenderWithContext = (
  jsx: React.ReactNode,
  contextData: TestContextProviderProps = {},
  timeout?: number
) =>
  renderAndWait(
    <TestContextProvider {...contextData}>{jsx}</TestContextProvider>,
    timeout
  );
