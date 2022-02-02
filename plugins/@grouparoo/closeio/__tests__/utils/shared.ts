import { helper } from "@grouparoo/spec-helper";

export async function indexUsers(isNewNock: boolean) {
  // wait for search index
  if (isNewNock) {
    await helper.sleep(helper.shortTime);
  }
}

export const customFields = [
  {
    name: "test_date",
    type: "date",
    choices: null,
  },
  {
    name: "test_date_time",
    type: "datetime",
    choices: null,
  },
  {
    name: "test_hidden",
    type: "hidden",
    choices: null,
  },
  {
    name: "test_multiple_choices",
    type: "choices",
    choices: ["A", "B", "C"],
  },
  {
    name: "test_multiple_contacts",
    type: "contact",
    choices: null,
  },
  {
    name: "test_multiple_users",
    type: "user",
    choices: null,
  },
  {
    name: "test_numeric",
    type: "number",
    choices: null,
  },
  {
    name: "test_single_choice",
    type: "choices",
    choices: ["A", "B", "C"],
  },
  {
    name: "test_single_contact",
    type: "contact",
    choices: null,
  },
  {
    name: "test_single_user",
    type: "user",
    choices: null,
  },
  {
    name: "test_text",
    type: "text",
    choices: null,
  },
];
