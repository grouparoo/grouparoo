import {
  DataResponseRow,
  DataResponse,
  FilterOperation,
  MatchCondition,
} from "@grouparoo/app-templates/dist/source/table";

export enum MongoAggregationMethod {
  Exact = "$eq",
  Average = "$avg",
  Count = "$count",
  Sum = "$sum",
  Min = "$min",
  Max = "$max",
}

export enum MongoFilterOperation {
  Equal = "$eq",
  NotEqual = "$ne",
  GreaterThan = "$gt",
  GreaterThanOrEqual = "$gte",
  LessThan = "$lt",
  LessThanOrEqual = "$lte",
  contains = "$regex",
  NotContain = "$not",
  In = "$in",
}

export function makeFindQuery(matchCondition: MatchCondition) {
  const findQuery: { [key: string]: any } = {};
  const { columnName, filterOperation, value, values } = matchCondition;
  let op;
  let regexOptions;
  let match = values || value;

  switch (filterOperation) {
    case FilterOperation.Equal:
      op = MongoFilterOperation.Equal;
      break;
    case FilterOperation.NotEqual:
      op = MongoFilterOperation.NotEqual;
      break;
    case FilterOperation.GreaterThan:
      op = MongoFilterOperation.GreaterThan;
      break;
    case FilterOperation.GreaterThanOrEqual:
      op = MongoFilterOperation.GreaterThanOrEqual;
      break;
    case FilterOperation.LessThan:
      op = MongoFilterOperation.LessThan;
      break;
    case FilterOperation.LessThanOrEqual:
      op = MongoFilterOperation.LessThanOrEqual;
      break;
    case FilterOperation.Contain:
      op = MongoFilterOperation.contains;
      regexOptions = "i";
      break;
    case FilterOperation.NotContain:
      op = MongoFilterOperation.NotContain;
      regexOptions = "i";
      break;
    case FilterOperation.In:
      op = MongoFilterOperation.In;
      break;
    default:
      throw new Error(`Unknown filterOperation: ${filterOperation}`);
  }

  if (Array.isArray(match)) {
    if (filterOperation === FilterOperation.In) {
      findQuery[columnName] = { [op]: match };
    } else {
      findQuery["$or"] = match.map((val) => ({
        [columnName]: { [op]: val },
      }));
    }
  } else {
    if (regexOptions) {
      findQuery[columnName] = { [op]: new RegExp(String(match), regexOptions) };
    } else {
      findQuery[columnName] = { [op]: match };
    }
  }

  return findQuery;
}

export function castRow(row): DataResponseRow {
  const out = {};
  getNestedResults(row, out);
  return out;
}

export function castValue(value): DataResponse {
  if (value === null || value === undefined) {
    return null;
  }
  // might have to do by type or something here, but some have a "value"
  if (typeof value === "object") {
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (value.hasOwnProperty("value")) {
      return value.value;
    }
  }

  // otherwise, regular value
  return value;
}

function getNestedResults(entries, responseRow, columnName = "") {
  for (const [key, value] of Object.entries(entries)) {
    if (
      value !== null &&
      typeof value === "object" &&
      Object.keys(value).length > 0
    ) {
      getNestedResults(
        value,
        responseRow,
        columnName === "" ? key : `${columnName}.${key}`
      );
    } else {
      responseRow[columnName === "" ? key : `${columnName}.${key}`] =
        castValue(value);
    }
  }
  return responseRow;
}

export async function getFieldSampleTypes(
  connection: any,
  database: string,
  tableName: string,
  fieldName: string
) {
  return connection
    .db(database)
    .collection(tableName)
    .aggregate([
      { $sample: { size: 10 } },
      {
        $match: {
          $and: [
            { [fieldName]: { $exists: true } },
            { [fieldName]: { $ne: null } },
          ],
        },
      },
      {
        $project: {
          [fieldName]: { $type: `$${fieldName}` },
        },
      },
    ])
    .toArray();
}

export async function getMostTrendingType(
  connection: any,
  database: string,
  tableName: string,
  fieldName: string
): Promise<string> {
  const types = await getFieldSampleTypes(
    connection,
    database,
    tableName,
    fieldName
  );
  const trendingTypes = {};
  for (const entry of types) {
    const nestedType = getNestedValue(entry, fieldName);
    const currentCount = trendingTypes[nestedType];
    trendingTypes[nestedType] = currentCount ? currentCount + 1 : 1;
  }
  if (Object.keys(trendingTypes).length > 0) {
    return Object.keys(trendingTypes).reduce((a, b) =>
      trendingTypes[a] > trendingTypes[b] ? a : b
    );
  }
  return null;
}

function getNestedValue(entity, fieldName) {
  const steps = fieldName.split(".");
  for (const step of steps) {
    entity = entity[step];
  }
  return entity;
}

export async function getFields(
  connection: any,
  database: string,
  tableName: string
): Promise<string[]> {
  const firstLevelFieldsResult = await connection
    .db(database)
    .collection(tableName)
    .aggregate([
      { $project: { keyValue: { $objectToArray: "$$ROOT" } } },
      { $unwind: "$keyValue" },
      { $group: { _id: null, keys: { $addToSet: "$keyValue.k" } } },
    ])
    .toArray();

  if (firstLevelFieldsResult.length > 0) {
    const allFields = await getAllFields(
      connection,
      database,
      tableName,
      firstLevelFieldsResult[0].keys
    );
    return Array.from(allFields);
  }
  return [];
}

async function getAllFields(
  connection: any,
  database: string,
  tableName: string,
  firstLevelFields: string[]
): Promise<Set<string>> {
  let allFields = new Set<string>();
  const docs = await connection
    .db(database)
    .collection(tableName)
    .aggregate([{ $sample: { size: 10 } }, { $project: { _id: 0 } }])
    .toArray();
  for (const doc of docs) {
    for (const [key, value] of Object.entries(doc)) {
      if (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value) && // TODO: consider array.
        Object.keys(value).length > 0
      ) {
        if (firstLevelFields.indexOf(key) >= 0) {
          firstLevelFields.splice(firstLevelFields.indexOf(key), 1);
        }
        const nestedFields = getDocumentNestedFields(value, new Set(), key);
        allFields = new Set<string>([...allFields, ...nestedFields]);
      }
    }
  }
  return new Set<string>([...firstLevelFields, ...allFields]);
}

function getDocumentNestedFields(
  document: any,
  fields: Set<string>,
  fieldName: string = ""
): Set<string> {
  for (const [key, value] of Object.entries(document)) {
    if (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value) && // TODO: consider array.
      Object.keys(value).length > 0
    ) {
      getDocumentNestedFields(
        value,
        fields,
        fieldName === "" ? key : `${fieldName}.${key}`
      );
    } else if (!Array.isArray(value)) {
      fields.add(fieldName === "" ? key : `${fieldName}.${key}`);
    }
  }
  return fields;
}
