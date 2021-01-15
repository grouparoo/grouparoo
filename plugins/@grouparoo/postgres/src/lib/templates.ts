import path from "path";
import { ConfigTemplate, PropertyTypes } from "@grouparoo/core";
import {
  AggregationMethod,
  FilterOperation,
} from "@grouparoo/app-templates/dist/source/table";

export class AppTemplate extends ConfigTemplate {
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

export class TableSourceTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:table:source";
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

export class TableScheduleTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:table:schedule";
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

export class TablePropertyTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:table:property";
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

export class QuerySourceTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:query:source";
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

export class QueryScheduleTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:query:schedule";
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

export class QueryPropertyTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:query:property";
    this.description = "Config for a Postgres Query Property";
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "query-property",
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

export class DestinationTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = "postgres:destination";
    this.description = "Config for a Postgres Destinatiojn";
    this.files = [
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "templates",
        "destination",
        "*.template"
      ),
    ];
    this.destinationDir = "destinations";
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
