import { helper } from "@grouparoo/spec-helper";
import {
  plugin,
  App,
  Destination,
  GrouparooRecord,
  Group,
  DestinationMappingOptionsResponseType,
  GrouparooModel,
  GroupMember,
} from "../../../../src";
import { DestinationOps } from "../../../../src/modules/ops/destination";
import { api } from "actionhero";

describe("models/destination", () => {
  let model: GrouparooModel;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => {
    ({ model } = await helper.factories.properties());
  });

  describe("destination typecasting", () => {
    function testValues(
      input: any,
      output: any,
      grouparooType: string,
      destinationType: DestinationMappingOptionsResponseType
    ) {
      if (output !== null) {
        expect(
          DestinationOps.formatOutgoingRecordProperties(
            input,
            grouparooType,
            destinationType
          )
        ).toEqual(output);
      } else {
        expect(() =>
          DestinationOps.formatOutgoingRecordProperties(
            input,
            grouparooType,
            destinationType
          )
        ).toThrow(
          `cannot export grouparoo type ${grouparooType} to destination type ${destinationType}`
        );
      }
    }

    describe("any", () => {
      const mapping = [
        [false, "boolean"],
        [3, "integer"],
        [3.12, "float"],
        ["hello", "string"],
        [new Date(123), "date"],
        ["person@example.com", "email"],
        ["+1 412 897 0001", "phoneNumber"],
        ["https://www.grouparoo.com", "url"],
      ];

      mapping.map(([input, type]) => {
        test(`exporting type ${type} to any`, () => {
          expect(
            DestinationOps.formatOutgoingRecordProperties(
              input,
              type as string,
              "any"
            )
          ).toEqual(input);
        });
      });
    });

    describe("null types", () => {
      const types: DestinationMappingOptionsResponseType[] = [
        "boolean",
        "integer",
        "float",
        "string",
        "date",
        "email",
        "phoneNumber",
        "url",
      ];

      types.map((inputType) => {
        types.map((outputType) => {
          test(`exporting null type ${inputType} to ${outputType}`, () => {
            expect(
              DestinationOps.formatOutgoingRecordProperties(
                null,
                inputType,
                outputType
              )
            ).toEqual(null);
          });
        });
      });
    });

    describe("float", () => {
      const grouparooType = "float";
      const input = 3.14159;
      const mapping = [
        ["float", input],
        ["integer", null],
        ["string", input.toString()],
        ["email", null],
        ["phoneNumber", null],
        ["boolean", null],
        ["url", null],
        ["number", input],
        ["date", null],
      ];

      mapping.map(([destinationType, output]) =>
        test(`exporting ${grouparooType} to ${destinationType}`, () => {
          testValues(
            input,
            output,
            grouparooType,
            destinationType as DestinationMappingOptionsResponseType
          );
        })
      );
    });

    describe("integer", () => {
      const grouparooType = "integer";
      const input = 3;
      const mapping = [
        ["float", input],
        ["integer", 3],
        ["string", input.toString()],
        ["email", null],
        ["phoneNumber", null],
        ["boolean", null],
        ["url", null],
        ["number", input],
        ["date", null],
      ];

      mapping.map(([destinationType, output]) =>
        test(`exporting ${grouparooType} to ${destinationType}`, () => {
          testValues(
            input,
            output,
            grouparooType,
            destinationType as DestinationMappingOptionsResponseType
          );
        })
      );
    });

    describe("string", () => {
      const grouparooType = "string";
      const input = "hello";
      const mapping = [
        ["float", input],
        ["integer", input],
        ["string", input],
        ["email", input],
        ["phoneNumber", input],
        ["boolean", input],
        ["url", input],
        ["number", input],
        ["date", input],
      ];

      mapping.map(([destinationType, output]) =>
        test(`exporting ${grouparooType} to ${destinationType}`, () => {
          testValues(
            input,
            output,
            grouparooType,
            destinationType as DestinationMappingOptionsResponseType
          );
        })
      );
    });

    describe("url", () => {
      const grouparooType = "url";
      const input = "https://www.grouparoo.com";
      const mapping = [
        ["float", null],
        ["integer", null],
        ["string", input],
        ["email", null],
        ["phoneNumber", null],
        ["boolean", null],
        ["url", input],
        ["number", null],
        ["date", null],
      ];

      mapping.map(([destinationType, output]) =>
        test(`exporting ${grouparooType} to ${destinationType}`, () => {
          testValues(
            input,
            output,
            grouparooType,
            destinationType as DestinationMappingOptionsResponseType
          );
        })
      );
    });

    describe("email", () => {
      const grouparooType = "email";
      const input = "person@example.com";
      const mapping = [
        ["float", null],
        ["integer", null],
        ["string", input],
        ["email", input],
        ["phoneNumber", null],
        ["boolean", null],
        ["url", null],
        ["number", null],
        ["date", null],
      ];

      mapping.map(([destinationType, output]) =>
        test(`exporting ${grouparooType} to ${destinationType}`, () => {
          testValues(
            input,
            output,
            grouparooType,
            destinationType as DestinationMappingOptionsResponseType
          );
        })
      );
    });

    describe("phoneNumber", () => {
      const grouparooType = "phoneNumber";
      const input = "+1 412 897 6001";
      const mapping = [
        ["float", null],
        ["integer", null],
        ["string", input],
        ["email", null],
        ["phoneNumber", input],
        ["boolean", null],
        ["url", null],
        ["number", null],
        ["date", null],
      ];

      mapping.map(([destinationType, output]) =>
        test(`exporting ${grouparooType} to ${destinationType}`, () => {
          testValues(
            input,
            output,
            grouparooType,
            destinationType as DestinationMappingOptionsResponseType
          );
        })
      );
    });

    describe("boolean (true)", () => {
      const grouparooType = "boolean";
      const input = true;
      const mapping = [
        ["float", null],
        ["integer", null],
        ["string", "true"],
        ["email", null],
        ["phoneNumber", null],
        ["boolean", input],
        ["url", null],
        ["number", 1],
        ["date", null],
      ];

      mapping.map(([destinationType, output]) =>
        test(`exporting ${grouparooType} to ${destinationType}`, () => {
          testValues(
            input,
            output,
            grouparooType,
            destinationType as DestinationMappingOptionsResponseType
          );
        })
      );
    });

    describe("boolean (false)", () => {
      const grouparooType = "boolean";
      const input = false;
      const mapping = [
        ["float", null],
        ["integer", null],
        ["string", "false"],
        ["email", null],
        ["phoneNumber", null],
        ["boolean", input],
        ["url", null],
        ["number", 0],
        ["date", null],
      ];

      mapping.map(([destinationType, output]) =>
        test(`exporting ${grouparooType} to ${destinationType}`, () => {
          testValues(
            input,
            output,
            grouparooType,
            destinationType as DestinationMappingOptionsResponseType
          );
        })
      );
    });

    describe("date", () => {
      const grouparooType = "date";
      const input = new Date(123);
      const mapping = [
        ["float", 123],
        ["integer", 123],
        ["string", "1970-01-01T00:00:00.123Z"],
        ["email", null],
        ["phoneNumber", null],
        ["boolean", null],
        ["url", null],
        ["number", 123],
        ["date", new Date(123)],
      ];

      mapping.map(([destinationType, output]) =>
        test(`exporting ${grouparooType} to ${destinationType}`, () => {
          testValues(
            input,
            output,
            grouparooType,
            destinationType as DestinationMappingOptionsResponseType
          );
        })
      );
    });

    test("missing source types", () => {
      testValues("something...", null, "unknown", "string");
    });

    test("missing destination types", () => {
      //@ts-ignore
      testValues("something...", null, "string", "random-type");
    });
  });

  describe("with custom plugin with destinationMappingOptions", () => {
    let app: App;
    let destination: Destination;
    let known = [];
    let required = [];
    let newRecordProperties = {};
    let oldRecordProperties = {};

    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-export-plugin-with-destinationMapping",
        apps: [
          {
            name: "test-destinationMapping-app",
            displayName: "test-destinationMapping-app",
            options: [],
            methods: {
              test: async () => {
                return { success: true };
              },
            },
          },
        ],
        connections: [
          {
            name: "destinationMapping-test-connection",
            displayName: "destinationMapping-test-connection",
            description: "a test app connection",
            apps: ["test-destinationMapping-app"],
            direction: "export",
            syncModes: ["sync", "additive", "enrich"],
            options: [],
            methods: {
              destinationMappingOptions: async () => {
                return {
                  labels: {
                    group: {
                      singular: "list",
                      plural: "lists",
                    },
                    property: {
                      singular: "var",
                      plural: "vars",
                    },
                  },
                  properties: {
                    required,
                    known,
                    allowOptionalFromProperties: true,
                  },
                };
              },
              exportArrayProperties: async () => [],
              exportRecord: async (args) => {
                oldRecordProperties = args.export.oldRecordProperties;
                newRecordProperties = args.export.newRecordProperties;
                return { success: true };
              },
            },
          },
        ],
      });

      app = await App.create({
        name: "test with destinationMapping",
        type: "test-destinationMapping-app",
      });
      await app.update({ state: "ready" });
    });

    beforeEach(async () => {
      destination = await Destination.create({
        name: "test plugin destination",
        type: "destinationMapping-test-connection",
        syncMode: "sync",
        appId: app.id,
        modelId: model.id,
      });
      await destination.update({ state: "ready" });
      await api.resque.queue.connection.redis.flushdb();
    });

    afterEach(async () => {
      await destination.destroy();
    });

    test.each(["deleted", "ready"])(
      "can get destinationMappingOptions with a %p app",
      async (appState) => {
        await app.update({ state: appState });

        const opts = await destination.destinationMappingOptions();
        expect(opts).toEqual({
          labels: {
            group: {
              singular: "list",
              plural: "lists",
            },
            property: {
              singular: "var",
              plural: "vars",
            },
          },
          properties: {
            required,
            known,
            allowOptionalFromProperties: true,
          },
        });

        await app.update({ state: "ready" });
      }
    );

    test("mappings can be of the same type", async () => {
      required = [{ key: "remote-id", type: "integer" }];
      await destination.setMapping({ "remote-id": "userId" });
    });

    test("mappings can be set for a different type if the grouparoo type is included", async () => {
      required = [{ key: "remote-id", type: "number" }];
      // int -> number OK
      await destination.setMapping({ "remote-id": "userId" });

      required = [{ key: "remote-id", type: "string" }];
      // int -> string OK
      await destination.setMapping({ "remote-id": "userId" });
    });

    test("if not all required mappings are provided an error is thrown", async () => {
      required = [
        { key: "remote-id", type: "integer" },
        { key: "email", type: "email" },
      ];

      await expect(
        destination.setMapping({ "remote-id": "userId" })
      ).rejects.toThrow(/email is a required destination mapping option/);
    });

    test("if a grouparoo type cannot be mapped to a matching destination type, an error is thrown", async () => {
      required = [{ key: "remote-id", type: "integer" }];

      await expect(
        destination.setMapping({ "remote-id": "email" })
      ).rejects.toThrow(
        "remote-id requires a property of type integer, but a email (email) was mapped"
      );
    });

    describe("with tracked group", () => {
      let mario: GrouparooRecord;
      let group: Group;

      beforeAll(async () => {
        mario = await helper.factories.record();
        await mario.addOrUpdateProperties({
          email: ["mario@example.com"],
          userId: [1],
          firstName: ["mario"],
          lastName: ["mario"],
        });

        group = await helper.factories.group();
        await GroupMember.create({ recordId: mario.id, groupId: group.id });
      });

      afterAll(async () => {
        await GroupMember.destroy({ where: { recordId: mario.id } });
        await group.destroy();
        await mario.destroy();
      });

      beforeEach(async () => {
        await destination.updateTracking("group", group.id);
      });

      afterEach(async () => {
        await destination.updateTracking("none");
      });

      test("record properties will be converted to the type requested by the plugin", async () => {
        // int -> number OK
        required = [{ key: "remote-id", type: "number" }];
        await destination.setMapping({ "remote-id": "userId", email: "email" });
        await mario.export(true);
        expect(oldRecordProperties).toEqual({});
        expect(newRecordProperties).toEqual({
          "remote-id": 1,
          email: "mario@example.com",
        });

        // int -> string OK
        required = [{ key: "remote-id", type: "string" }];
        await destination.setMapping({ "remote-id": "userId", email: "email" });
        await mario.export(true);
        expect(oldRecordProperties).toEqual({
          "remote-id": "1",
          email: "mario@example.com",
        });
        expect(newRecordProperties).toEqual({
          "remote-id": "1",
          email: "mario@example.com",
        });
      });
    });
  });
});
