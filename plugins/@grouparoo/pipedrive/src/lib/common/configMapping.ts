import { EntityCalls, PipedriveClient } from "../client";

interface EntityConfig {
  getEntityCalls: (client: PipedriveClient) => EntityCalls;
  requiredFields: string[];
  allowedFields: string[];
}

export const configMapping = {
  person: <EntityConfig>{
    getEntityCalls(client) {
      return client.persons;
    },
    requiredFields: ["name", "email"],
    allowedFields: ["name", "email", "phone", "label"],
  },
  organization: <EntityConfig>{
    getEntityCalls(client) {
      return client.organizations;
    },
    requiredFields: ["name"],
    allowedFields: ["name", "label"],
  },
} as const;

export type EntityType = keyof typeof configMapping;
