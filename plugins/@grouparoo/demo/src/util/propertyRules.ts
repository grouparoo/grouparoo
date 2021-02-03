import { Source, Property } from "@grouparoo/core";
import { runAction } from "./runAction";

const RULE_DEFAULT = {
  isArray: false,
  unique: false,
  identifying: false,
  filters: [],
};

export interface RuleDefinition {
  key: string;
  type: string;
  isArray?: boolean;
  unique?: boolean;
  identifying?: boolean;
  options: any;
  filters?: Array<any>;
}

export async function findPropertyRule(source: Source, propertyKey: string) {
  const where = {
    sourceId: source.id,
    key: propertyKey,
  };
  return Property.scope(null).findOne({ where });
}

export async function createPropertyRule(source: Source, rule: RuleDefinition) {
  const found = await findPropertyRule(source, rule.key);

  const params = Object.assign({}, RULE_DEFAULT, rule, {
    state: "ready",
    sourceId: source.id,
    id: found?.id,
  });
  if (found) {
    await runAction("property:edit", params);
  } else {
    await runAction("property:create", params);
  }
  const made = await findPropertyRule(source, rule.key);
  if (!made) {
    throw new Error(`rule not made: ${rule.key}`);
  }
  return made;
}

export async function makePropertyRuleIdentifying(
  source: Source,
  propertyKey: string
) {
  // remove current one
  const current = await Property.scope(null).findAll({
    where: { identifying: true },
  });
  for (const propertyRule of current) {
    const params = { identifying: false, id: propertyRule.id };
    await runAction("property:edit", params);
  }

  // set on new one
  const found = await findPropertyRule(source, propertyKey);
  if (!found) {
    throw new Error(`Identifying rule not found (${propertyKey})`);
  }

  const params = { identifying: false, id: found.id };
  await runAction("property:edit", params);
}

export async function ensureBootstrapPropertyRule(
  source: Source,
  rule: RuleDefinition
) {
  const found = await findPropertyRule(source, rule.key);
  if (found) {
    const params = Object.assign({}, RULE_DEFAULT, rule, {
      state: "ready",
      sourceId: source.id,
      id: found?.id,
    });
    await runAction("property:edit", params);
  } else {
    // need to bootstrap it
    const params = {
      id: source.id,
      key: rule.key,
      type: rule.type,
      mappedColumn: rule.options.column,
    };
    await runAction("source:bootstrapUniqueProperty", params);
  }

  const made = await findPropertyRule(source, rule.key);
  if (!made) {
    throw new Error("unique userId not made app not created!");
  }
  return made;
}
