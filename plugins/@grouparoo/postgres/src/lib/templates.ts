import path from "path";
import { ConfigTemplate } from "@grouparoo/core";

export class PostgresAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:app";
    this.description = "Config for a Grouparoo Postgres App";
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "app",
        "*.template"
      ),
    ];
    this.destinationDir = "apps";
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}

export class PostgresSourceTable extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:source:table";
    this.description = "Config for a Postgres Table Source";
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "table-source",
        "*.template"
      ),
    ];
    this.destinationDir = "sources";
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
