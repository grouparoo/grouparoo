import { QueryTypes } from "sequelize";
import { api, ParamsFrom } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { ActionPermission } from "../models/Permission";

export class ObjectFind extends AuthenticatedAction {
  name = "object:find";
  description = "find an object by id";
  outputExample = {};
  permission: ActionPermission = { topic: "*", mode: "read" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<ObjectFind> }) {
    const tables = [
      "apiKeys",
      "apps",
      "destinations",
      "exports",
      "files",
      "groups",
      "imports",
      "models",
      "notifications",
      "records",
      "properties",
      "runs",
      "schedules",
      "settings",
      "sources",
      "teams",
      "teamMembers",
    ];

    const id = params.id.replace(/[^a-zA-Z0-9-_\/.]/g, "");

    const query =
      `SELECT id, "tableName" FROM (` +
      tables
        .map((t) => `SELECT id, '${t}' AS "tableName" FROM "${t}"`)
        .join(" UNION ALL ") +
      `) AS UNIONS WHERE id = '${id}'`;

    const records: {
      id: string;
      tableName: string;
    }[] = await api.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });

    return { id, records };
  }
}
