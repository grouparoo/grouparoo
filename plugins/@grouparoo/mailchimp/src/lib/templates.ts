import path from "path";
import { ConfigTemplate, PropertyTypes } from "@grouparoo/core";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");

export class MailchimpAppTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `mailchimp:app`;
    this.description = `Config for a Mailchimp App`;
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new App`,
        formatter: (p) => this.formatId(p),
      },
    };
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
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Source`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of the App to use for this Source, e.g: \`--parent mailchimp_app\``,
      },
    };
    this.files = [path.join(templateRoot, "source", "*.template")];
    this.destinationDir = "sources";
    this.parentId = "appId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    params["schedule_id"] = this.extendId("schedule");
    return this.mustacheAllFiles(params);
  }
}

export class MailchimpPropertyTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.name = `mailchimp:property`;
    this.description = `Config for a Mailchimp Property`;
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Property`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of the Source to use for this Property, e.g: \`--parent mailchimp_source\``,
      },
    };
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
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Destination`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of App to use for this Destination, e.g: \`--parent mailchimp_app\``,
      },
    };
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
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Destination`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of App to use for this Destination, e.g: \`--parent mailchimp_app\``,
      },
    };
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
