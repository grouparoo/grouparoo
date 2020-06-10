import { UUID } from "../src/uuid";

describe("UUID", () => {
  it("can generate a uuid", () => {
    expect(UUID.v4()).toMatch(
      /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/
    );
  });

  it("will generate unique UUIDs", () => {
    const uuids = [];
    let i = 0;
    while (i < 100) {
      const uuid = UUID.v4();
      expect(uuids.includes(uuid)).toBe(false);
      uuids.push(uuid);
      i++;
    }
  });
});
