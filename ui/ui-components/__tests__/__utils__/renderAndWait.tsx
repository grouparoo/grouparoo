import { render, act } from "@testing-library/react";

export const renderAndWait = async (component: JSX.Element, timeout = 2000) => {
  let renderedComponent: ReturnType<typeof render>;
  await act(async () => {
    renderedComponent = render(component);
    await new Promise((res) => setTimeout(res, timeout));
  });
  return renderedComponent;
};
