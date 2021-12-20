import nock from 'nock';
import { Client } from '../../../src/lib/client/client';
import { AirtableAppOptions, DEFAULT_AIRTABLE_API } from '../../../src/lib/appOptions';
import {
  deleteRecordResponse,
  deleteRecordsResponse,
  foreignKeys,
  primaryKey,
  successfulListRecordsResponse,
  tableResponse,
  unauthorizedResponse,
  upsertRecordResponse,
  upsertRecordsResponse,
} from './fixtures.test';
import { AxiosError } from 'axios';
import AirtableError from 'airtable/lib/airtable_error';
import { api } from 'actionhero';
import { FieldSet } from 'airtable';
import { CreateRecord } from '../../../src/lib/client/models';
import Record from 'airtable/lib/record';
const airtableOptions: AirtableAppOptions = new AirtableAppOptions({
  apiKey: 'test',
  baseId: 'test',
  airtableHost: DEFAULT_AIRTABLE_API,
});
describe('Our Client Functions', () => {
  describe('Closing the client', () => {
    test('Close the client', async () => {
      const client = new Client(airtableOptions);
      client.close().then(value => {
        expect(value).toBeUndefined();
      });
    });
  });
  describe('Metadata Calls', () => {
    test('Successful Health', async () => {
      nock(DEFAULT_AIRTABLE_API)
        .get('/v0/meta/bases')
        .reply(200, { message: 'successful call' });
      const client = new Client(airtableOptions);
      client.health().then(value => {
        expect(value.statusCode).toEqual(200);
      });
    });
    test('Unauthorized Health Response', async () => {
      nock(DEFAULT_AIRTABLE_API)
        .get('/v0/meta/bases')
        .reply(401, { message: 'unauthorized call' });
      const client = new Client(airtableOptions);
      const response = await client.health();
      expect(response.statusCode).toEqual(401);
    });
    test('Successfully List Tables', async () => {
      nock(DEFAULT_AIRTABLE_API)
        .get(`/v0/meta/bases/${airtableOptions.baseId}/tables`)
        .reply(200, tableResponse);
      const client = new Client(airtableOptions);
      const response = await client.listTables();
      expect(response.length).toEqual(1);
      expect(response[0].id).toEqual('tbltp8DGLhqbUmjK1');
    });
    test('Successfully List Tables', async () => {
      nock(DEFAULT_AIRTABLE_API)
        .get(`/v0/meta/bases/${airtableOptions.baseId}/tables`)
        .reply(401, unauthorizedResponse);
      const client = new Client(airtableOptions);
      client
        .listTables()
        .catch((error: AxiosError) =>
          expect(error.response.status).toEqual(401),
        );
    });
    test('Successfully Get Table', async () => {
      nock(DEFAULT_AIRTABLE_API)
        .get(`/v0/meta/bases/${airtableOptions.baseId}/tables`)
        .reply(200, tableResponse);
      const client = new Client(airtableOptions);
      const response = await client.getTable('tbltp8DGLhqbUmjK1');
      expect(response).not.toBeNull();
      expect(response.id).toEqual(tableResponse.tables[0].id);
    });
    test('Not Found Get Table', async () => {
      nock(DEFAULT_AIRTABLE_API)
        .get(`/v0/meta/bases/${airtableOptions.baseId}/tables`)
        .reply(200, tableResponse);
      const client = new Client(airtableOptions);
      client
        .getTable('Unknown Table')
        .catch((reason: AirtableError) =>
          expect(reason.statusCode).toEqual(404),
        );
    });
    test('Unauthorized Get Table', async () => {
      nock(DEFAULT_AIRTABLE_API)
        .get(`/v0/meta/bases/${airtableOptions.baseId}/tables`)
        .reply(401, unauthorizedResponse);
      const client = new Client(airtableOptions);
      client
        .getTable('Unknown Table')
        .catch((reason: AxiosError) =>
          expect(reason.response.status).toEqual(401),
        );
    });
  });
  describe('Record CRUD Operations', () => {
    const tableId = 'testTable';
    test('Successful List Records', async () => {
      const scope = nock(DEFAULT_AIRTABLE_API)
        .get(uri => uri.includes(`/v0/${airtableOptions.baseId}/${tableId}`))
        .reply(200, successfulListRecordsResponse);
      const client = new Client(airtableOptions);
      const records = await client.listRecords(tableId);
      expect(records.length).toBeGreaterThan(0);
      expect(scope.isDone()).toBeTruthy();
    });
    test('Unsuccessfully List Records', async () => {
      const scope = nock(DEFAULT_AIRTABLE_API)
        .get(uri => uri.includes(`/v0/${airtableOptions.baseId}/${tableId}`))
        .reply(401, unauthorizedResponse);
      const client = new Client(airtableOptions);
      client.listRecords(tableId).catch((reason: AirtableError) => {
        expect(reason.statusCode).toEqual(401);
      });
    });
    test('Successful List Records by ID', async () => {
      const scope = nock(DEFAULT_AIRTABLE_API)
        .get(uri => uri.includes(`/v0/${airtableOptions.baseId}/${tableId}`))
        .reply(200, successfulListRecordsResponse);
      const client = new Client(airtableOptions);
      const records = await client.listRecordsByField(
        tableId,
        primaryKey,
        foreignKeys,
      );
      expect(records.length).toEqual(foreignKeys.length);
      expect(scope.isDone()).toBeTruthy();
    });
    test('Unsuccessfully List Records by ID', async () => {
      const scope = nock(DEFAULT_AIRTABLE_API)
        .get(uri => uri.includes(`/v0/${airtableOptions.baseId}/${tableId}`))
        .reply(401, unauthorizedResponse);
      const client = new Client(airtableOptions);
      client
        .listRecordsByField(tableId, primaryKey, foreignKeys)
        .catch((reason: AirtableError) => {
          expect(reason.statusCode).toEqual(401);
        });
    });

    test('Successfully Delete Record', async () => {
      const scope = nock(DEFAULT_AIRTABLE_API)
        .delete(uri => uri.includes(`/v0/${airtableOptions.baseId}/${tableId}`))
        .reply(200, deleteRecordResponse);
      const client = new Client(airtableOptions);
      const record = await client.deleteRecord(
        tableId,
        deleteRecordResponse.id,
      );
      expect(record.id).toEqual(deleteRecordResponse.id);
      expect(scope.isDone()).toBeTruthy();
    });
    test('Successfully Delete Records', async () => {
      const scope = nock(DEFAULT_AIRTABLE_API)
        .delete(uri => uri.includes(`/v0/${airtableOptions.baseId}/${tableId}`))
        .reply(200, deleteRecordsResponse);
      const client = new Client(airtableOptions);
      const recordIds = deleteRecordsResponse.records.map(record => record.id);
      const records = await client.deleteRecords(tableId, recordIds);
      records.map(record => {
        expect(recordIds).toContain(record.id);
      });
      expect(scope.isDone()).toBeTruthy();
    });
    test('Successfully Update Record', async () => {
      const scope = nock(DEFAULT_AIRTABLE_API)
        .patch(uri =>
          uri.includes(
            `/v0/${airtableOptions.baseId}/${tableId}/${upsertRecordResponse.id}`,
          ),
        )
        .reply(200, upsertRecordResponse);
      const client = new Client(airtableOptions);
      const record = await client.updateRecord(tableId, upsertRecordResponse);
      expect(record.id).toEqual(upsertRecordResponse.id);
      expect(scope.isDone()).toBeTruthy();
    });
    test('Successfully Update Records', async () => {
      const scope = nock(DEFAULT_AIRTABLE_API)
        .patch(uri => uri.includes(`/v0/${airtableOptions.baseId}/${tableId}`))
        .reply(200, upsertRecordsResponse);
      const client = new Client(airtableOptions);
      const recordIds = upsertRecordsResponse.records.map(record => record.id);
      const records = await client.updateRecords(
        tableId,
        upsertRecordsResponse.records,
      );
      records.map(record => {
        expect(recordIds).toContain(record.id);
      });
      expect(scope.isDone()).toBeTruthy();
    });
    test('Successfully Create Record', async () => {
      const scope = nock(DEFAULT_AIRTABLE_API)
        .post(uri => uri.includes(`/v0/${airtableOptions.baseId}/${tableId}`))
        .reply(200, upsertRecordResponse);
      const client = new Client(airtableOptions);
      const record = await client.createRecord(
        tableId,
        upsertRecordResponse.fields,
      );
      expect(record.id).toEqual(upsertRecordResponse.id);
      expect(scope.isDone()).toBeTruthy();
    });
    test('Successfully Create Records', async () => {
      const scope = nock(DEFAULT_AIRTABLE_API)
        .post(uri => uri.includes(`/v0/${airtableOptions.baseId}/${tableId}`))
        .reply(200, upsertRecordsResponse);
      const client = new Client(airtableOptions);
      const recordIds = upsertRecordsResponse.records.map(record => record.id);
      const createRecords = upsertRecordsResponse.records.map(record => {
        return {
          fields: record.fields,
        };
      });
      const records = await client.createRecords(tableId, createRecords);
      records.map(record => {
        expect(recordIds).toContain(record.id);
      });
      expect(scope.isDone()).toBeTruthy();
    });
  });
});
