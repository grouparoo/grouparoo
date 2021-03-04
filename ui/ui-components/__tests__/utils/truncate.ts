import { truncate } from "../../utils/truncate";

describe("truncate", () => {
  test("Returns string when less than given max characters", () => {
    const response = truncate("Hello World", 12);
    expect(response).toBe("Hello World");
  });
  test("Returns string when the same number of max characters", () => {
    const response = truncate("Hello World", 11);
    expect(response).toBe("Hello World");
  });
  test("Returns truncated string with ellipses when greater than number of max characters", () => {
    const response = truncate("Hello World", 10);
    expect(response).toBe("Hello Worl...");
  });
});
