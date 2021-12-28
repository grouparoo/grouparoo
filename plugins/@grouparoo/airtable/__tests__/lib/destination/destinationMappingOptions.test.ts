import { mock, mockReset } from "jest-mock-extended";
import { IClient } from "../../../src/lib/client/interfaces/iClient";
import {
  badField,
  primaryKeyName,
  successfulGetTableResponses,
} from "./fixtures.test";
import { destinationMappingOptions } from "../../../src/lib/destination/destinationMappingOptions";
import { App, Destination } from "@grouparoo/core";
import { AirtableDestinationOptions } from "../../../src/lib/destination/destinationOptions";
import { AirtablePropertyTypes } from "../../../src/lib/client/models";
import AirtableError from "airtable/lib/airtable_error";

describe("Test Destination Mapping Options Method", () => {
  const client = mock<IClient>();
  const app = mock<App>();
  const destination = mock<Destination>();
  const tableId = "Table ID";
  const destinationOptions: AirtableDestinationOptions = {
    tableId: tableId,
    primaryKey: primaryKeyName,
  };
  const args = {
    connection: client,
    app: app,
    appId: "",
    appOptions: {},
    destination: destination,
    destinationId: "",
    destinationOptions: destinationOptions,
  };
  beforeEach(() => {
    mockReset(client);
    mockReset(app);
    mockReset(destination);
  });
  test("Fail to Get Table", async () => {
    client.getTable
      .calledWith(tableId)
      .mockRejectedValue(new AirtableError("NOTFOUND", "Forced Failure", 404));
    destinationMappingOptions(args).catch((reason) =>
      expect(reason).not.toBeNull()
    );
  });
  test("Successfully Get Destination Mapping Options", async () => {
    client.getTable
      .calledWith(tableId)
      .mockResolvedValue(successfulGetTableResponses);
    const value = await destinationMappingOptions(args);
    const expectedFieldCount =
      successfulGetTableResponses.fields.length -
      successfulGetTableResponses.fields.filter(
        (value) => value.name == badField
      ).length -
      value.properties.required.length;
    expect(value.properties.required.map((value) => value.key)).toContain(
      primaryKeyName
    );
    expect(value.properties.known.length).toEqual(expectedFieldCount);
    expect(value.properties.allowOptionalFromProperties).toBeFalsy();
    expect(
      value.properties.known.find(
        (prop) => prop.key == AirtablePropertyTypes.multipleSelects
      )?.type
    ).toEqual("string");
    expect(
      value.properties.known.find(
        (prop) => prop.key == AirtablePropertyTypes.checkbox
      )?.type
    ).toEqual("boolean");
    expect(
      value.properties.known.find(
        (prop) => prop.key == AirtablePropertyTypes.date
      )?.type
    ).toEqual("date");
    expect(
      value.properties.known.find(
        (prop) => prop.key == AirtablePropertyTypes.email
      )?.type
    ).toEqual("email");
    expect(
      value.properties.known.find(
        (prop) => prop.key == AirtablePropertyTypes.singleLineText
      )?.type
    ).toEqual("string");
    expect(
      value.properties.known.find(
        (prop) => prop.key == AirtablePropertyTypes.multilineText
      )?.type
    ).toEqual("string");
    expect(
      value.properties.known.find((prop) => prop.key == "UNKNOWN")
    ).toBeUndefined();
  });
});
