import { formatInUtcDefault } from "../../src/lib/connect";

describe("formatInUtcDefault", () => {
  it("handles dates without a zone and assumes UTC", async () => {
    const date = formatInUtcDefault(`2020-01-01 12:13:14`);
    expect(date instanceof Date).toBe(true);
    expect(date.toISOString()).toBe("2020-01-01T12:13:14.000Z");
  });

  it("handles dates with a zone (Z)", async () => {
    const date = formatInUtcDefault(`2020-01-01 12:13:14Z`);
    expect(date instanceof Date).toBe(true);
    expect(date.toISOString()).toBe("2020-01-01T12:13:14.000Z"); // implies UTC
  });

  it("handles dates with a zone (+, utc)", async () => {
    const date = formatInUtcDefault(`2020-01-01 12:13:14+00`);
    expect(date instanceof Date).toBe(true);
    expect(date.toISOString()).toBe("2020-01-01T12:13:14.000Z"); // implies UTC
  });

  it("handles dates with a zone (+, other zone)", async () => {
    const date = formatInUtcDefault(`2020-01-01 12:13:14+02`);
    expect(date instanceof Date).toBe(true);
    expect(date.toISOString()).toBe("2020-01-01T10:13:14.000Z"); // - 2 hours for TZ
  });

  it("handles dates with a zone (-, utc)", async () => {
    const date = formatInUtcDefault(`2020-01-01 12:13:14-00`);
    expect(date instanceof Date).toBe(true);
    expect(date.toISOString()).toBe("2020-01-01T12:13:14.000Z"); // implies UTC
  });

  it("handles dates with a zone (-, other zone)", async () => {
    const date = formatInUtcDefault(`2020-01-01 12:13:14-02`);
    expect(date instanceof Date).toBe(true);
    expect(date.toISOString()).toBe("2020-01-01T14:13:14.000Z"); // + 2 hours for TZ
  });

  it("handles dates without ms and no zone, assuming UTC", async () => {
    const date = formatInUtcDefault(`2020-01-01 12:13:14`);
    expect(date instanceof Date).toBe(true);
    expect(date.toISOString()).toBe("2020-01-01T12:13:14.000Z"); // implies UTC
  });

  it("handles dates with ms (0) and no zone, assuming UTC", async () => {
    const date = formatInUtcDefault(`2020-01-01 12:13:14.0`);
    expect(date instanceof Date).toBe(true);
    expect(date.toISOString()).toBe("2020-01-01T12:13:14.000Z"); // implies UTC
  });

  it("handles dates with ms (value) and no zone, assuming UTC", async () => {
    const date = formatInUtcDefault(`2020-01-01 12:13:14.56789`);
    expect(date instanceof Date).toBe(true);
    expect(date.toISOString()).toBe("2020-01-01T12:13:14.567Z"); // implies UTC
  });

  it("handles dates without ms and a zone, assuming UTC", async () => {
    const date = formatInUtcDefault(`2020-01-01 12:13:14+02`);
    expect(date instanceof Date).toBe(true);
    expect(date.toISOString()).toBe("2020-01-01T10:13:14.000Z"); // - 2 hours for TZ
  });

  it("handles dates with ms (0) and a zone, assuming UTC", async () => {
    const date = formatInUtcDefault(`2020-01-01 12:13:14.0+02`);
    expect(date instanceof Date).toBe(true);
    expect(date.toISOString()).toBe("2020-01-01T10:13:14.000Z"); // - 2 hours for TZ
  });

  it("handles dates with ms (value) and a zone, assuming UTC", async () => {
    const date = formatInUtcDefault(`2020-01-01 12:13:14.56789+02`);
    expect(date instanceof Date).toBe(true);
    expect(date.toISOString()).toBe("2020-01-01T10:13:14.567Z"); // - 2 hours for TZ
  });
});
