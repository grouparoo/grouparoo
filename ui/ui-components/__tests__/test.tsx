import { render, screen } from "@testing-library/react";

function Welcome({ firstName }: { firstName: string }) {
  return (
    <>
      <h1>Welcome, {firstName}</h1>
      <p data-testid="p1">We are glad you are here, {firstName}.</p>
    </>
  );
}

test("has correct welcome text", () => {
  render(<Welcome firstName="John" />);
  expect(screen.getByRole("heading")).toHaveTextContent("Welcome, John");
  expect(screen.getByTestId("p1")).toHaveTextContent(
    "We are glad you are here, John."
  );
});
