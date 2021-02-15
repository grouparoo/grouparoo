import path from "path";
import { ConfigTemplate, PropertyTypes } from "@grouparoo/core";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");

export class MailchimpAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `mailchimp:app`;
    this.description = `Config for a Mailchimp App`;
    this.files = [path.join(templateRoot, "app", "*.template")];
    this.destinationDir = "apps";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class MailchimpSourceTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `mailchimp:source`;
    this.description = `Config for a Mailchimp Source`;
    this.files = [path.join(templateRoot, "source", "*.template")];
    this.destinationDir = "sources";
    this.parentId = "appId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class MailchimpScheduleTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `mailchimp:schedule`;
    this.description = `Config for a Mailchimp Schedule`;
    this.files = [path.join(templateRoot, "schedule", "*.template")];
    this.destinationDir = "schedules";
    this.parentId = "sourceId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class MailchimpPropertyTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `mailchimp:property`;
    this.description = `Config for a Mailchimp Property`;
    this.files = [path.join(templateRoot, "property", "*.template")];
    this.destinationDir = "properties";
    this.parentId = "sourceId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    params["__typeOptions"] = PropertyTypes.map((v) => `"${v}"`).join(", ");
    return this.mustacheAllFiles(params);
  }
}

export class MailchimpIdDestinationTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `mailchimp:id:destination`;
    this.description = `Config for a Mailchimp ID Destination. Note: Use the email destination unless you know you need this.`;
    this.files = [path.join(templateRoot, "destination", "id", "*.template")];
    this.destinationDir = "destinations";
    this.parentId = "appId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}

export class MailchimpEmailDestinationTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `mailchimp:email:destination`;
    this.description = `Config for a Mailchimp Email Destination`;
    this.files = [
      path.join(templateRoot, "destination", "email", "*.template"),
    ];
    this.destinationDir = "destinations";
    this.parentId = "appId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    return this.mustacheAllFiles(params);
  }
}
