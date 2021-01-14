import path from "path";
import { ConfigTemplate, PropertyTypes } from "@grouparoo/core";
import {
  AggregationMethod,
  FilterOperation,
} from "@grouparoo/app-templates/dist/source/table";

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

export class PostgresScheduleTable extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:schedule:table";
    this.description = "Config for a Postgres Table Schedule";
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "table-schedule",
        "*.template"
      ),
    ];
    this.destinationDir = "schedules";
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}

export class PostgresPropertyTable extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:property:table";
    this.description = "Config for a Postgres Table Property";
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "table-property",
        "*.template"
      ),
    ];
    this.destinationDir = "properties";
  }

  async run({ params }) {
    params["__typeOptions"] = PropertyTypes.map((v) => `"${v}"`).join(", ");
    params["__aggregationMethodOptions"] = Object.values(AggregationMethod)
      .map((v) => `"${v}"`)
      .join(", ");
    params["__filterOptions"] = Object.values(FilterOperation).join(", ");
    return this.mustacheAllFiles(params);
  }
}

export class PostgresSourceQuery extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:source:query";
    this.description = "Config for a Postgres Query Source";
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "query-source",
        "*.template"
      ),
    ];
    this.destinationDir = "sources";
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}

export class PostgresScheduleQuery extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:schedule:query";
    this.description = "Config for a Postgres Query Schedule";
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "query-schedule",
        "*.template"
      ),
    ];
    this.destinationDir = "schedules";
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
