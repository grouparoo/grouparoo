import { helper } from "@grouparoo/spec-helper";
import { Property } from "../../../src/models/Property";
import { Source } from "../../../src/models/Source";
import { PropertyOps } from "../../../src/modules/ops/property";

let actionhero;

describe("models/property", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("dependsOn", () => {
    /**
     * Source: Users Table (userId -> id)
     *   userID
     *   email
     *
     * Source: Purchases Table (userId -> user_id)
     *   purchasesCount
     *
     * Source: SupportTickets Table (email -> email
     *   supportTicketsCount
     *
     * Source: Queries
     *   emailDomain (requires email)
     */

    let usersTableSource: Source;
    let purchasesTableSource: Source;
    let supportTicketsTableSource: Source;
    let querySource: Source;

    let userIdRule: Property;
    let emailRule: Property;
    let purchasesCountRule: Property;
    let supportTicketsCountRule: Property;
    let emailDomainRule: Property;

    beforeAll(async () => {
      usersTableSource = await helper.factories.source();
      await usersTableSource.setOptions({ table: "users" });
      await usersTableSource.bootstrapUniqueProperty("userId", "integer", "id");
      await usersTableSource.setMapping({ id: "userId" });
      await usersTableSource.update({ state: "ready" });

      // bootstrapped
      userIdRule = await Property.findOne({
        where: { key: "userId" },
      });

      emailRule = await Property.create({
        key: "email",
        type: "string",
        unique: true,
        sourceGuid: usersTableSource.guid,
      });
      await emailRule.setOptions({ column: "email" });
      await emailRule.update({ state: "ready" });

      purchasesTableSource = await helper.factories.source();
      await purchasesTableSource.setOptions({ table: "purchases" });
      await purchasesTableSource.setMapping({ user_id: "userId" });
      await purchasesTableSource.update({ state: "ready" });

      purchasesCountRule = await Property.create({
        key: "purchases",
        type: "integer",
        unique: false,
        sourceGuid: purchasesTableSource.guid,
      });
      await purchasesCountRule.setOptions({ column: "purchases" });
      await purchasesCountRule.update({ state: "ready" });

      supportTicketsTableSource = await helper.factories.source();
      await supportTicketsTableSource.setOptions({ table: "support_tickets" });
      await supportTicketsTableSource.setMapping({ customer_email: "email" });
      await supportTicketsTableSource.update({ state: "ready" });

      supportTicketsCountRule = await Property.create({
        key: "supportTickets",
        type: "integer",
        unique: false,
        sourceGuid: supportTicketsTableSource.guid,
      });
      await supportTicketsCountRule.setOptions({ column: "support_tickets" });
      await supportTicketsCountRule.update({ state: "ready" });

      querySource = await helper.factories.source();
      await querySource.setOptions({ table: "x" }); // we don't have a test quey source...
      await querySource.setMapping({ x: "userId" });
      await querySource.update({ state: "ready" });

      emailDomainRule = await Property.create({
        key: "emailDomain",
        type: "string",
        unique: false,
        sourceGuid: querySource.guid,
      });
      await emailDomainRule.setOptions({
        column:
          "select split_part(email, '@', 2) AS domain from users where email = {{ email }}",
      });
      await emailDomainRule.update({ state: "ready" });
    });

    test("direct mapping rules do not depend on themselves", async () => {
      const dependencies = await PropertyOps.dependencies(userIdRule);
      expect(dependencies.map((rule) => rule.guid)).toEqual([]);
    });

    test("dependent rules of this source", async () => {
      const dependencies = await PropertyOps.dependencies(emailRule);
      expect(dependencies.map((rule) => rule.guid)).toEqual([userIdRule.guid]);
    });

    test("dependent rules for another source", async () => {
      const dependencies = await PropertyOps.dependencies(purchasesCountRule);
      expect(dependencies.map((rule) => rule.guid)).toEqual([userIdRule.guid]);
    });

    test("chained dependent rules for another source", async () => {
      const dependencies = await PropertyOps.dependencies(
        supportTicketsCountRule
      );
      expect(dependencies.map((rule) => rule.guid)).toEqual([emailRule.guid]);
    });

    test("mustache variables reference another rule", async () => {
      const dependencies = await PropertyOps.dependencies(emailDomainRule);
      expect(dependencies.map((rule) => rule.guid)).toEqual([
        userIdRule.guid, // from the mapping
        emailRule.guid, // from the mustache rule
      ]);
    });
  });
});
