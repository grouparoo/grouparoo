import { runAction } from "./util/runAction";
import { Group, Property } from "@grouparoo/core";
import { log } from "./util/shared";

export interface GroupDefinition {
  name: string;
  rules: any[];
  type?: string;
  matchType?: string;
  state?: string;
}

const DEFINITION_DEFAULT = {
  type: "calculated",
  matchType: "all",
  state: "ready",
};

const GROUP_DEFINITIONS: GroupDefinition[] = [
  {
    name: "Recent Automotive Visits",
    rules: [
      {
        key: "lastPurchaseCategory",
        match: "Automotive",
        operation: { op: "eq" },
      },
      {
        key: "recentVisitDate",
        operation: { op: "relative_gt" },
        relativeMatchNumber: "14",
        relativeMatchUnit: "days",
      },
    ],
  },
  {
    name: "Recent Automotive Shoppers",
    rules: [
      {
        key: "categoriesViewed",
        match: "Automotive",
        operation: { op: "eq" },
      },
      {
        key: "recentVisitDate",
        operation: { op: "relative_gt" },
        relativeMatchNumber: "14",
        relativeMatchUnit: "days",
      },
    ],
  },
];

export async function groups() {
  for (const definition of GROUP_DEFINITIONS) {
    await createGroup(definition);
  }
  const groups = await Group.findAll();
  for (const i in groups) groups[i].update({ state: "ready" });
}

async function createGroup(definition: GroupDefinition) {
  if (!(await hasProperties(definition))) {
    return null;
  }
  const name = definition.name;
  const found = await findGroup(name);
  const params = Object.assign({}, DEFINITION_DEFAULT, definition, {
    state: "ready",
    guid: found?.guid,
  });

  if (found) {
    await runAction("group:edit", params);
  } else {
    await runAction("group:create", params);
  }

  const made = await findGroup(name);
  if (!made) {
    throw new Error(`Group not created (${name})`);
  }
  return made;
}

async function hasProperties(definition: GroupDefinition): Promise<boolean> {
  for (const rule of definition.rules) {
    const where = { key: rule.key, state: "ready" };
    const found = await Property.scope(null).findOne({ where });
    if (!found) {
      log(1, `${rule.key} not found for group: ${definition.name}`);
      return false;
    }
  }
  return true;
}

async function findGroup(name: string) {
  const where = {
    name: name,
  };
  return Group.scope(null).findOne({ where });
}
