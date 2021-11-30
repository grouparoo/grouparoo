import { EntityCalls, PipedriveClient } from "../client";

interface EntityConfig {
  getEntityCalls: (client: PipedriveClient) => EntityCalls;
  cacheKey: string;
  requiredFields: string[];
  allowedFields: string[];
}

export const configMapping = {
  person: <EntityConfig>{
    getEntityCalls(client) {
      return client.persons;
    },
    cacheKey: "getKnownPersonFields",
    requiredFields: ["name", "email"],
    allowedFields: ["name", "email", "phone", "label"],
  },
  organization: <EntityConfig>{
    getEntityCalls(client) {
      return client.organizations;
    },
    cacheKey: "getKnownOrganizationFields",
    requiredFields: ["name"],
    allowedFields: ["name", "label"],
  },
} as const;

export type EntityType = keyof typeof configMapping;
