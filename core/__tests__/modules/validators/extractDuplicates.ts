import extractDuplicates from "../../../src/modules/validators/extractDuplicates";

describe("extractDuplicates()", () => {
  test("Returns an empty array when no duplicates", () => {
    const input = [1, 2, 3];
    const res = extractDuplicates(input);
    expect(res).toEqual([]);
  });
  test("Returns duplicate strings", () => {
    const input = ["hello", "world", "hello"];
    const res = extractDuplicates(input);
    expect(res).toEqual(["hello"]);
  });
  test("Returns duplicate numbers", () => {
    const input = [1, 2, 3, 2];
    const res = extractDuplicates(input);
    expect(res).toEqual([2]);
  });
  test("Returns the duplicate only once", () => {
    const input = [1, 2, 3, 2, 2];
    const res = extractDuplicates(input);
    expect(res).toEqual([2]);
  });
  test("Won't find duplicates of objects without a valid key", () => {
    const input = [{ name: "hello" }, { name: "world" }, { name: "hello" }];
    const res = extractDuplicates(input);
    expect(res).toEqual([]);
  });
  test("Returns duplicate objects by ID", () => {
    const input = [{ name: "hello" }, { name: "world" }, { name: "hello" }];
    const res = extractDuplicates(input, "name");
    expect(res).toEqual(["hello"]);
  });
});
