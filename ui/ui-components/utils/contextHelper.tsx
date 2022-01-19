export type ContextValue = [Context: React.Context<any>, value: any];

export const renderContextProvider = <T extends object>(
  Context: React.Context<T>,
  value: T,
  children: React.ReactNode
) => <Context.Provider value={value}>{children}</Context.Provider>;

export const renderNestedContextProviders = (
  contextValues: ContextValue[],
  children: React.ReactNode
): JSX.Element => {
  {
    if (contextValues?.length > 0) {
      const [Context, value] = contextValues[0];
      return renderContextProvider(
        Context,
        value,
        renderNestedContextProviders(contextValues.slice(1), children)
      );
    }

    return <>{children}</>;
  }
};
