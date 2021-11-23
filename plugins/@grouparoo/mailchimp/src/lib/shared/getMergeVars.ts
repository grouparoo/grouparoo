export type MailchimpMergeField = {
  merge_id: number;
  tag: string;
  name: string;
  type: string;
  required: boolean;
  default_value: string | number | boolean;
};

export type GrouparooMergeVar = {
  key: string;
  name: string;
  type: string;
  important: boolean;
};

export async function getMergeVars(
  client: any,
  listId: string
): Promise<GrouparooMergeVar[]> {
  const {
    merge_fields,
  }: {
    merge_fields: Array<MailchimpMergeField>;
  } = await client.get(`/lists/${listId}/merge-fields`);

  const out: GrouparooMergeVar[] = [];
  for (const field of merge_fields) {
    const { type, important } = toGrouparooDestinationType(field);
    if (type) {
      out.push({
        key: field.tag,
        name: field.name,
        type,
        important,
      });
    }
  }
  return out;
}

function toGrouparooDestinationType(field: MailchimpMergeField) {
  // currently unsupported: radio, drop down

  switch (field.type) {
    case "email":
      return { type: "email", important: true };
    case "text":
      return { type: "string", important: true };
    case "address":
      return { type: "string", important: true };
    case "date":
      return { type: "string", important: true };
    case "birthday":
      return { type: "date", important: true };
    case "number":
      return { type: "number", important: true };
    case "phone":
      return { type: "phoneNumber", important: true };
    case "zip":
      return { type: "string", important: true };
    case "imageurl":
      return { type: "url", important: true };
    case "url":
      return { type: "url", important: true };
    case "website":
      return { type: "url", important: true };
    default:
      return { type: null, important: false };
  }
}
