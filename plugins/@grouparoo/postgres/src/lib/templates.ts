import path from "path";
import { ConfigTemplate } from "@grouparoo/core";

export class PostgresAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.class = "app";
    this.name = "postgres:app";
    this.description = "Config for a Grouparoo Postgres App";
    this.rootPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "templates",
      "app"
    );
    this.files = [path.join("*.template")];
    this.inputs = {
      id: {
        required: true,
        description: "The ID of this App, used to determine it's guid",
      },
      name: {
        required: true,
        copyDefaultFrom: "id",
        description: "The name of the App",
      },
      host: {
        required: false,
        description: "The Postgres host",
        default: "localhost",
      },
      port: {
        required: false,
        description: "The Postgres port",
        default: 5432,
      },
      database: {
        required: true,
        description: "The Postgres database",
      },
      schema: {
        required: false,
        description: "The Postgres schema",
        default: "public",
      },
      user: {
        required: false,
        description: "The Postgres user",
        default: null,
      },
      password: {
        required: false,
        description: "The Postgres user's password",
        default: null,
      },
    };
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
