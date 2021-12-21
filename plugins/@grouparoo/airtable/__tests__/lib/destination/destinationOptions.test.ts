import { mock, mockReset } from "jest-mock-extended";
import { IClient } from "../../../src/lib/client/interfaces/iClient";
import {
  successfulGetTableFields,
  successfulGetTableResponses,
  successfulListTableResponses,
  tableId,
} from "./fixtures.test";
import {
  DestinationOptionsHandler,
  tableFieldIsWritable,
} from "../../../src/lib/destination/destinationOptions";

describe("Destination Options Tests", () => {
  const client = mock<IClient>();
  beforeEach(() => {
    mockReset(client);
  });
  test("Get Destination Options: New Options", async () => {
    client.listTables.mockResolvedValue(successfulListTableResponses);
    const handler = new DestinationOptionsHandler(client);
    const options = await handler.getDestinationOptions({
      primaryKey: "",
      tableId: "",
    });
    expect(options.tableId.type).toEqual("list");
    expect(options.primaryKey.type).toEqual("pending");
    expect(options.tableId.options.length).toEqual(
      successfulListTableResponses.length
    );
  });
  test("Get Destination Options: Table Selected Options", async () => {
    client.listTables.mockResolvedValue(successfulListTableResponses);
    client.getTable.mockResolvedValue(successfulGetTableResponses);
    const handler = new DestinationOptionsHandler(client);
    const options = await handler.getDestinationOptions({
      primaryKey: "",
      tableId: tableId,
    });
    const expectedOptionLength = successfulGetTableFields.filter((value) =>
      tableFieldIsWritable(value)
    ).length;
    expect(options.tableId.type).toEqual("list");
    expect(options.primaryKey.type).toEqual("typeahead");
    expect(options.tableId.options.length).toEqual(
      successfulListTableResponses.length
    );
    expect(options.primaryKey.options.length).toEqual(expectedOptionLength);
  });
});
