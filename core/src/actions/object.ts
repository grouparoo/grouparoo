import { QueryTypes } from "sequelize";
import { api } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";

export class ObjectFind extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "object:find";
    this.description = "find an object by id";
    this.outputExample = {};
    this.permission = { topic: "*", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const tables = [
      "apiKeys",
      "apps",
      "destinations",
      "exports",
      "files",
      "groups",
      "imports",
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

    let { id }: { id: string } = params;
    id = id.replace(/[^a-zA-Z0-9-_\/.]/g, "");

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
