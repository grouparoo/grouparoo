import { getEncodeKey, getFieldType } from "./options";

const { ServerSideUtils } = require("facebook-nodejs-business-sdk");

export function userData(schema: string[], properties: { [key: string]: any }) {
  const out: any[] = [];

  for (const field of schema) {
    const value = properties[field];
    const hashed = formatVar(field, value);
    out.push(hashed);
  }
  return out;
}

function formatVar(field, value) {
  const encodeKey = getEncodeKey(field);
  const type = getFieldType(field);
  if (encodeKey) {
    value = ServerSideUtils.normalizeAndHash(value, encodeKey);
  }

  switch (type) {
    case "integer":
    case "number":
      return value;
    default:
      return value || "";
  }
}

export function sha(input) {
  return ServerSideUtils.toSHA256(input);
}
