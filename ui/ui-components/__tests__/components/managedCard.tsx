import { render } from "@testing-library/react";
import ManagedCard from "../../components/lib/ManagedCard";

describe("managedCard", () => {
  it("will render a spinner when in the loading state", async () => {
    let card = render(<ManagedCard title="test" loading={false}></ManagedCard>);
    expect(card).toMatchSnapshot("noLoading");
    card = render(<ManagedCard title="test" loading={true}></ManagedCard>);
    expect(card).toMatchSnapshot("loading");
  });
});
