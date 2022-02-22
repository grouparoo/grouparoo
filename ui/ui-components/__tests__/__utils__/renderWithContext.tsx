import { render } from "@testing-library/react";
import React from "react";
import {
  ContextProviderProps,
  TestContextProvider,
} from "./TestContextProvider";
import { renderAndWait } from "./renderAndWait";

export const renderWithContext = (
  jsx: React.ReactNode,
  contextData: ContextProviderProps = {}
) => render(<TestContextProvider {...contextData}>{jsx}</TestContextProvider>);

export const asyncRenderWithContext = (
  jsx: React.ReactNode,
  contextData: ContextProviderProps = {},
  timeout?: number
) =>
  renderAndWait(
    <TestContextProvider {...contextData}>{jsx}</TestContextProvider>,
    timeout
  );
