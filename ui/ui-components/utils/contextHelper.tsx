import React from "react";

export type ContextValue<T> = [Provider: React.FC<{ value: T }>, value: T];

export const renderContextProvider = <T extends object>(
  Provider: React.FC<{ value: T }>,
  value: T,
  children: React.ReactNode
) => <Provider value={value}>{children}</Provider>;

export const renderNestedContextProviders = <
  TContextValues extends ContextValue<T>[],
  T extends object = object
>(
  contextValues: TContextValues,
  children: React.ReactNode
): JSX.Element =>
  contextValues?.length > 0 ? (
    renderContextProvider(
      ...contextValues[0],
      renderNestedContextProviders(contextValues.slice(1), children)
    )
  ) : (
    <>{children}</>
  );
