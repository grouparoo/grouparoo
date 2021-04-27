import { helper } from "@grouparoo/spec-helper";
import { ApiKey } from "../../src";
import { Op } from "sequelize";

describe("models/misc", () => {
  helper.grouparooTestServer({ truncate: true });
  const apiKeys: ApiKey[] = [];

  beforeAll(async () => {
    apiKeys.push(await helper.factories.apiKey());
    apiKeys.push(await helper.factories.apiKey());
    apiKeys.push(await helper.factories.apiKey());
  });

  test("bulk updates work with an IN clause with values", async () => {
    const [recordsEffected] = await ApiKey.update(
      { createdAt: new Date() },
      { where: { id: { [Op.in]: apiKeys.map((a) => a.id) } } }
    );
    expect(recordsEffected).toBe(3);
  });

  test("bulk updates work with an IN clause of an empty array", async () => {
    const emptyArray: ApiKey[] = [];

    const [recordsEffected] = await ApiKey.update(
      { createdAt: new Date() },
      { where: { id: { [Op.in]: emptyArray.map((a) => a.id) } } }
    );
    expect(recordsEffected).toBe(0);
  });

  test("bulk updates throw with an IN clause of null", async () => {
    await expect(
      ApiKey.update(
        { createdAt: new Date() },
        { where: { id: { [Op.in]: null } } }
      )
    ).rejects.toThrow();
  });

  test("bulk updates throw with an IN clause of undefined", async () => {
    await expect(
      ApiKey.update(
        { createdAt: new Date() },
        { where: { id: { [Op.in]: undefined } } }
      )
    ).rejects.toThrow();
  });

  test("findAll always returns an array", async () => {
    const found = await ApiKey.findAll();
    expect(found.length).toBe(3);

    const foundEmpty = await ApiKey.findAll({ where: { id: "x" } });
    expect(foundEmpty).toEqual([]);
  });
});
