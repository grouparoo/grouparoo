import { mock, mockReset } from 'jest-mock-extended';
import { IClient } from '../../../src/lib/client/interfaces/iClient';
import { App, Destination } from '@grouparoo/core';
import { AirtableDestinationOptions } from '../../../src/lib/destination/destinationOptions';
import {
  primaryKeyName,
  successfulGetTableFields,
  successfulGetTableResponses,
} from './fixtures.test';
import { exportArrayProperties, isArrayType } from '../../../src/lib/destination/exportArrayProperties';
import { isArray } from 'util';
import AirtableError from 'airtable/lib/airtable_error';

describe('Export Array Properties Test', () => {
  const client = mock<IClient>();
  const app = mock<App>();
  const destination = mock<Destination>();
  const tableId = 'Table ID';
  const destinationOptions: AirtableDestinationOptions = {
    tableId: tableId,
    primaryKey: primaryKeyName,
  };
  let args = {
    connection: client,
    appId: '',
    destinationOptions: destinationOptions,
    app: app,
    appOptions: {},
    destination: destination,
    destinationId: '',
  };
  beforeEach(() => {
    mockReset(client);
    mockReset(app);
    mockReset(destination);
    args = {
      connection: client,
      appId: '',
      destinationOptions: destinationOptions,
      app: app,
      appOptions: {},
      destination: destination,
      destinationId: '',
    };
  });

  test('Correctly Assign Properties that can be Array Type', async () => {
    client.getTable
      .calledWith(tableId)
      .mockResolvedValue(successfulGetTableResponses);
    const props = await exportArrayProperties(args);
    expect(props.length).toEqual(
      successfulGetTableFields.filter(isArrayType).length,
    );
    props.forEach(prop => {
      expect(
        successfulGetTableFields.filter(isArrayType).map(field => field.name),
      ).toContain(prop);
    });
  });
  test('Return Empty Array if table not specified', async () => {
    args.destinationOptions = { tableId: '', primaryKey: '' };
    const props = await exportArrayProperties(args);
    expect(props.length).toEqual(0);
  });
});
