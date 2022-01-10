import { getMergeVars } from "../shared/getMergeVars";
import { connect } from "../connect";

export interface MailchimpFieldMap {
  [key: string]: { type: string; name: string };
}

// TODO: cache?
export async function getFieldTypes(
  client: any,
  listId: string
): Promise<MailchimpFieldMap> {
  const fields = {
    id: { type: "string", name: "Generated member id" },
    email_address: { type: "string", name: "Email" },
    //unique_email_id: { type: "string", name: "?" },
    status: { type: "string", name: "Subscription status" },
    "stats.avg_open_rate": { type: "float", name: "Average open rate" },
    "stats.avg_click_rate": { type: "float", name: "Average click rate" },
    timestamp_signup: { type: "date", name: "Signup at" },
    timestamp_opt: { type: "date", name: "Opt-in at" },
    last_changed: { type: "date", name: "Last changed at" },
    language: { type: "string", name: "Language" },
    vip: { type: "boolean", name: "VIP status" },
    source: { type: "string", name: "Signup source" },
  };

  const mergVars = await getMergeVars(client, listId);
  for (const field of mergVars) {
    // i.e. "merge_fields.FNAME, etc": "string",
    const key = `merge_fields.${field.key}`;
    fields[key] = { type: field.type, name: field.name };
  }
  return fields;
}

export async function getFieldsAndExamples({
  appOptions,
  sourceOptions,
}): Promise<
  {
    key: string;
    description?: string;
    examples?: any[];
  }[]
> {
  const out: {
    key: string;
    description?: string;
    examples?: any[];
  }[] = [];

  const client = await connect(appOptions);
  const { listId } = sourceOptions;
  const fieldMap = await getFieldTypes(client, listId);

  const samples = await fetchSampleRows(client, listId, fieldMap);
  for (const key in fieldMap) {
    const description = fieldMap[key].name;
    // non null samples for examples
    const examples = samples.map((row) => row[key]).filter((x) => !!x);
    out.push({ key, description, examples });
  }

  return out;
}

export async function getSampleRows({
  appOptions,
  sourceOptions,
}): Promise<{ [column: string]: any }[]> {
  const client = await connect(appOptions);
  const { listId } = sourceOptions;
  const fieldMap = await getFieldTypes(client, listId);
  return fetchSampleRows(client, listId, fieldMap);
}

async function fetchSampleRows(
  client: any,
  listId: string,
  fieldMap: MailchimpFieldMap
): Promise<{ [column: string]: any }[]> {
  const out: { [column: string]: any }[] = [];

  const fieldKeys = Object.keys(fieldMap);
  const path = `/lists/${listId}/members`;
  const query: any = {
    //fields: fieldKeys.join(","), // doesn't seem to work
    sort_field: "last_changed",
    sort_dir: "DESC",
    count: 10,
  };
  if (!fieldKeys.includes("email_address")) {
    // leave out PII: would rather have done the above (only include known fields),
    // but it doesn't seem to work.
    query.exclude_fields = "email_address";
  }
  const response = await client.request({ method: "get", path, query });
  const members = response.members;
  if (!members || members.length === 0) {
    // empty Mailchimp!
    const sample = {};
    for (const key of fieldKeys) {
      sample[key] = null;
    }
    out.push(sample);
  } else {
    for (const data of members) {
      const member = new Member(data);
      const sample = member.getAll(fieldKeys);
      out.push(sample);
    }
  }
  return out;
}

export async function getChangedMembers({
  appOptions,
  sourceOptions,
  sourceOffset,
  fieldKeys,
  limit,
  since_last_changed,
}): Promise<Member[]> {
  const out: Member[] = [];

  const client = await connect(appOptions);
  const { listId } = sourceOptions;

  if (!fieldKeys.includes("last_changed")) {
    // need this for highwater mark
    fieldKeys = fieldKeys.concat(["last_changed"]);
  }
  const path = `/lists/${listId}/members`;
  const query: any = {
    //fields: fieldKeys.join(","), // doesn't seem to work
    sort_field: "last_changed",
    sort_dir: "ASC",
    count: limit,
    offset: sourceOffset,
  };
  if (!fieldKeys.includes("email_address")) {
    // leave out PII: would rather have done the above (only include known fields),
    // but it doesn't seem to work.
    query.exclude_fields = "email_address";
  }
  if (since_last_changed) {
    // this looks to be > and not >= so it can miss things
    const date = new Date(since_last_changed);
    const justBefore = new Date(date.getTime() - 1);
    query.since_last_changed = justBefore.toISOString();
  }

  const { members } = await client.request({ method: "get", path, query });
  for (const data of members) {
    out.push(new Member(data));
  }

  return out;
}

export class Member {
  data: any;
  constructor(json: any) {
    this.data = json;
  }

  getAll(keys: string[]): { [key: string]: Date | string | boolean | number } {
    const map: any = {};
    for (const key of keys) {
      map[key] = this.get(key);
    }
    return map;
  }

  get(key: string): any {
    const pieces = key.split(".");
    let value = this.data;
    for (const piece of pieces) {
      if (!value.hasOwnProperty(piece)) {
        throw new Error(`invalid mailchimp field key: ${key}`);
      }
      value = value[piece];
    }
    return value;
  }
}

// TODO: use "status" to have boolean for subscribed or unsubscribed

//https://mailchimp.com/developer/api/marketing/list-members/list-members-info/
// curl -X GET \
//   'https://server.api.mailchimp.com/3.0/lists/{list_id}/members?fields=<SOME_ARRAY_VALUE>&exclude_fields=<SOME_ARRAY_VALUE>&count=10&offset=0&email_type=<SOME_STRING_VALUE>&status=<SOME_STRING_VALUE>&since_timestamp_opt=<SOME_STRING_VALUE>&before_timestamp_opt=<SOME_STRING_VALUE>&since_last_changed=<SOME_STRING_VALUE>&before_last_changed=<SOME_STRING_VALUE>&unique_email_id=<SOME_STRING_VALUE>&vip_only=<SOME_BOOLEAN_VALUE>&interest_category_id=<SOME_STRING_VALUE>&interest_ids=<SOME_STRING_VALUE>&interest_match=<SOME_STRING_VALUE>&sort_field=<SOME_STRING_VALUE>&sort_dir=<SOME_STRING_VALUE>&since_last_campaign=<SOME_BOOLEAN_VALUE>&unsubscribed_since=<SOME_STRING_VALUE>' \
//   -H 'authorization: Basic <USERNAME:PASSWORD>'
// {
//   members: [
//     {
//       id: "string",
//       email_address: "string",
//       unique_email_id: "string",
//       web_id: 0,
//       email_type: "string",
//       status: "subscribed",
//       unsubscribe_reason: "string",
//       merge_fields: {
//         property1: "string",
//         property2: "string",
//       },
//       interests: {
//         property1: true,
//         property2: true,
//       },
//       stats: {
//         avg_open_rate: 0,
//         avg_click_rate: 0,
//         ecommerce_data: {
//           total_revenue: 0,
//           number_of_orders: 0,
//           currency_code: "USD",
//         },
//       },
//       ip_signup: "string",
//       timestamp_signup: "2019-08-24T14:15:22Z",
//       ip_opt: "string",
//       timestamp_opt: "2019-08-24T14:15:22Z",
//       member_rating: 0,
//       last_changed: "2019-08-24T14:15:22Z",
//       language: "string",
//       vip: true,
//       email_client: "string",
//       location: {
//         latitude: 0,
//         longitude: 0,
//         gmtoff: 0,
//         dstoff: 0,
//         country_code: "string",
//         timezone: "string",
//       },
//       marketing_permissions: [
//         {
//           marketing_permission_id: "string",
//           text: "string",
//           enabled: true,
//         },
//       ],
//       last_note: {
//         note_id: 0,
//         created_at: "2019-08-24T14:15:22Z",
//         created_by: "string",
//         note: "string",
//       },
//       source: "string",
//       tags_count: 0,
//       tags: [
//         {
//           id: 0,
//           name: "string",
//         },
//       ],
//       list_id: "string",
//       _links: [
//         {
//           rel: "string",
//           href: "string",
//           method: "GET",
//           targetSchema: "string",
//           schema: "string",
//         },
//       ],
//     },
//   ],
//   list_id: "string",
//   total_items: 0,
//   _links: [
//     {
//       rel: "string",
//       href: "string",
//       method: "GET",
//       targetSchema: "string",
//       schema: "string",
//     },
//   ],
// };
