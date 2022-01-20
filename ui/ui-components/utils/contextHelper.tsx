export type ContextValue<T = unknown> = [Context: React.Context<T>, value: T];

// Note: Once strict mode is on, we can more strongly type this
export const renderContextProvider = <T extends any>(
  Context: React.Context<T>,
  value: T,
  children: React.ReactNode
) => <Context.Provider value={value}>{children}</Context.Provider>;

export const renderNestedContextProviders = <
  TContextValues extends ContextValue<T>[],
  T extends object = object
>(
  contextValues: TContextValues,
  children: React.ReactNode
): JSX.Element => {
  {
    if (contextValues.length) {
      const [[Context, value]] = contextValues;
      return renderContextProvider(
        Context,
        value,
        renderNestedContextProviders(contextValues.slice(1), children)
      );
    }

    return <>{children}</>;
  }
};
