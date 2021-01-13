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
        description: "The ID of this App, used to determine the guid",
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

export class PostgresSourceTable extends ConfigTemplate {
  constructor() {
    super();
    this.class = "app";
    this.name = "postgres:source:table";
    this.description = "Config for a Postgres Table Source";
    this.rootPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "templates",
      "table-source"
    );
    this.files = [path.join("*.template")];
    this.inputs = {
      id: {
        required: true,
        description: "The ID of this Source, used to determine the guid",
      },
      name: {
        required: true,
        copyDefaultFrom: "id",
        description: "The name of the App",
      },
      "app-id": {
        required: true,
        description: "The ID of the App to use",
      },
      table: {
        required: true,
        description: "The table to use from the Postgres database",
      },
      "identifying-column": {
        required: true,
        description: "The unique column to map to a Grouparoo Property",
      },
      "mapped-property-id": {
        required: true,
        description:
          "The unique Grouparoo property to map to the identifying-column",
      },
      "bootstrapped-property-id": {
        required: false,
        description:
          "The ID for a Property which is bootstrapped against this source",
      },
      "bootstrapped-property-name": {
        required: false,
        copyDefaultFrom: "bootstrapped-property-name",
        description:
          "The name for a Property which is bootstrapped against this source",
      },
      "bootstrapped-property-type": {
        required: false,
        description:
          "The type for a Property which is bootstrapped against this source",
      },
      "bootstrapped-property-column": {
        required: false,
        description:
          "The column in this table to build bootstrapped-property-id against",
      },
    };
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
