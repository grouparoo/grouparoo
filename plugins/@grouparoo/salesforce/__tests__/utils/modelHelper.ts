import { SimpleAppOptions, SimpleDestinationOptions } from "@grouparoo/core";
import { SalesforceModel } from "../../src/lib/export/model";
import { connect } from "../../src/lib/connect";

export interface ModelHelperFunctions {
  getClient: { (): Promise<any> };
  findId: { (value: string | number): Promise<any> };
  getUser: { (id: string): Promise<any> };
  cleanUp: { (suppressErrors: boolean): Promise<void> };
  findGroupId: { (value: string): Promise<string> };
  getGroupMemberIds: { (id: string): Promise<string[]> };
  findReferenceId: { (value: string): Promise<string> };
  getReference: { (id: string): Promise<any> };
  getReferencedUserIds: { (id: string): Promise<string[]> };
}
export interface ModelHelperMethod {
  (argument: {
    appOptions: SimpleAppOptions;
    model: SalesforceModel;
    deleteRecordValues: any[];
    deleteGroupValues: any[];
    deleteReferenceValues: any[];
  }): ModelHelperFunctions;
}

const idType = "Id";

export const getModelHelpers: ModelHelperMethod = function ({
  appOptions,
  model,
  deleteRecordValues,
  deleteGroupValues,
  deleteReferenceValues,
}) {
  const {
    recordObject,
    recordMatchField,
    groupObject,
    groupNameField,
    membershipObject,
    membershipRecordField,
    membershipGroupField,
    recordReferenceField,
    recordReferenceObject,
    recordReferenceMatchField,
  } = model;

  let savedClient = null;
  const getClient = async function () {
    if (savedClient) {
      return savedClient;
    }
    savedClient = await connect(appOptions);
    return savedClient;
  };

  const findId: ModelHelperFunctions["findId"] = async function (value) {
    const client = await getClient();
    const query = { [recordMatchField]: value };
    const fields = [idType];
    const results = await client.sobject(recordObject).find(query, fields);
    if (results.length === 0) {
      return null;
    } else if (results.length > 1) {
      throw new Error(`more than one result! ${recordMatchField} == ${value}`);
    }
    return results[0][idType];
  };
  const getUser: ModelHelperFunctions["getUser"] = async function (id) {
    const client = await getClient();
    try {
      const row = await client.sobject(recordObject).retrieve(id);
      return row;
    } catch (err) {
      if (err.errorCode === "NOT_FOUND") {
        return null;
      }
      throw err;
    }
  };

  const findGroupId: ModelHelperFunctions["findGroupId"] = async function (
    value
  ) {
    const client = await getClient();
    const query = { [groupNameField]: value };
    const fields = [idType];
    const results = await client.sobject(groupObject).find(query, fields);
    if (results.length === 0) {
      return null;
    } else if (results.length > 1) {
      throw new Error(`more than one result! ${groupNameField} == ${value}`);
    }
    return results[0][idType];
  };
  const getGroupMemberIds: ModelHelperFunctions["getGroupMemberIds"] =
    async function (groupId) {
      const client = await getClient();
      const query = { [membershipGroupField]: groupId };
      const fields = [membershipRecordField];
      const results = await client
        .sobject(membershipObject)
        .find(query, fields);
      return results.map((result) => result[membershipRecordField]);
    };

  const findReferenceId: ModelHelperFunctions["findReferenceId"] =
    async function (value) {
      const client = await getClient();
      const query = { [recordReferenceMatchField]: value };
      const fields = [idType];
      const results = await client
        .sobject(recordReferenceObject)
        .find(query, fields);
      if (results.length === 0) {
        return null;
      } else if (results.length > 1) {
        throw new Error(
          `more than one result! ${recordReferenceMatchField} == ${value}`
        );
      }
      return results[0][idType];
    };
  const getReference: ModelHelperFunctions["getReference"] = async function (
    id
  ) {
    const client = await getClient();
    try {
      const row = await client.sobject(recordReferenceObject).retrieve(id);
      return row;
    } catch (err) {
      if (err.errorCode === "NOT_FOUND") {
        return null;
      }
      throw err;
    }
  };
  const getReferencedUserIds: ModelHelperFunctions["getReferencedUserIds"] =
    async function (referenceId) {
      const client = await getClient();
      const query = { [recordReferenceField]: referenceId };
      const fields = [idType];
      const results = await client.sobject(recordObject).find(query, fields);
      return results.map((result) => result[idType]);
    };

  const deleteGroups = async function (suppressErrors) {
    const client = await getClient();
    const names = deleteGroupValues;
    const ids = [];
    for (const name of names) {
      const id = await findGroupId(name);
      if (id) {
        ids.push(id);
      }
    }
    if (ids.length === 0) {
      return;
    }
    try {
      const allOrNone = true;
      await client.sobject(groupObject).del(ids, { allOrNone });
    } catch (error) {
      if (!suppressErrors) {
        throw error;
      }
    }
  };
  const deleteUsers = async function (suppressErrors) {
    const client = await getClient();
    const values = deleteRecordValues;
    const ids = [];
    for (const value of values) {
      const id = await findId(value);
      if (id) {
        ids.push(id);
      }
    }
    if (ids.length === 0) {
      return;
    }
    try {
      const allOrNone = true;
      await client.sobject(recordObject).del(ids, { allOrNone });
    } catch (error) {
      if (!suppressErrors) {
        throw error;
      }
    }
  };
  const deleteReferences = async function (suppressErrors) {
    const client = await getClient();
    const names = deleteReferenceValues;
    const ids = [];
    for (const name of names) {
      const id = await findReferenceId(name);
      if (id) {
        ids.push(id);
      }
    }
    if (ids.length === 0) {
      return;
    }
    try {
      const allOrNone = true;
      await client.sobject(recordReferenceObject).del(ids, { allOrNone });
    } catch (error) {
      if (!suppressErrors) {
        throw error;
      }
    }
  };

  const cleanUp: ModelHelperFunctions["cleanUp"] = async function (
    suppressErrors
  ) {
    await deleteUsers(suppressErrors);
    await deleteGroups(suppressErrors);
    await deleteReferences(suppressErrors);
  };

  return {
    findId,
    getClient,
    getUser,
    cleanUp,
    getGroupMemberIds,
    findGroupId,
    findReferenceId,
    getReference,
    getReferencedUserIds,
  };
};
