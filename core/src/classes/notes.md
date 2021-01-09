## Example Usage

```bash
➜ grouparoo generate --help
Usage: grouparoo generate [options]

Generate new code config files from templates

Options:
  --template [template]    The template to generate from
  --path [path]            The location of the config directory (default: "/Users/evan/workspace/grouparoo/grouparoo/apps/staging-public/config")
  --list [list]            Display the available config templates to use with config-generate (default: "false")
  --overwrite [overwrite]  Overwrite existing files? (default: "false")
  --id [id]                  - possible template input
  --name [name]              - possible template input
  --rules [rules]            - possible template input
  -h, --help               display help for command


# --------------------------------

➜ grouparoo generate --list

notice: Modified your runtime environment with /Users/evan/workspace/grouparoo/grouparoo/apps/staging-public/.env
info: using SQLite database: /Users/evan/workspace/grouparoo/grouparoo/apps/staging-public/grouparoo_development.sqlite
info: active plugins: @grouparoo/core/manual, @grouparoo/core/events, @grouparoo/bigquery, @grouparoo/csv, @grouparoo/facebook, @grouparoo/files-s3, @grouparoo/google-sheets, @grouparoo/hubspot, @grouparoo/logger, @grouparoo/mailchimp, @grouparoo/marketo, @grouparoo/mysql, @grouparoo/postgres, @grouparoo/redshift, @grouparoo/sailthru, @grouparoo/salesforce, @grouparoo/snowflake, @grouparoo/zendesk

🦘 Grouparoo: generate

Available Templates:

group:calculated
  Config for a calculated Grouparoo Group
  * id (required) - The ID of this group, used to determine it's guid
  * name - The name of the Group (default: "New Group")
  * rules - The rules for the group, JSON-encoded (default: "[]")

group:manual
  Config for a manual Grouparoo Group
  * id (required) - The ID of this group, used to determine it's guid
  * name - The name of the Group (default: "New Group")

# --------------------------------

➜ grouparoo generate --template group:calculated

notice: Modified your runtime environment with /Users/evan/workspace/grouparoo/grouparoo/apps/staging-public/.env
info: using SQLite database: /Users/evan/workspace/grouparoo/grouparoo/apps/staging-public/grouparoo_development.sqlite
info: active plugins: @grouparoo/core/manual, @grouparoo/core/events, @grouparoo/bigquery, @grouparoo/csv, @grouparoo/facebook, @grouparoo/files-s3, @grouparoo/google-sheets, @grouparoo/hubspot, @grouparoo/logger, @grouparoo/mailchimp, @grouparoo/marketo, @grouparoo/mysql, @grouparoo/postgres, @grouparoo/redshift, @grouparoo/sailthru, @grouparoo/salesforce, @grouparoo/snowflake, @grouparoo/zendesk

🦘 Grouparoo: generate

Error: Missing required input "id"

# --------------------------------

➜ grouparoo generate --template group:calculated --id tmp-group --name "New Group" --rules='{"propertyId": "email","operation": { "op": "like" },"match": "%@%"}' --overwrite

notice: Modified your runtime environment with /Users/evan/workspace/grouparoo/grouparoo/apps/staging-public/.env
info: using SQLite database: /Users/evan/workspace/grouparoo/grouparoo/apps/staging-public/grouparoo_development.sqlite
info: active plugins: @grouparoo/core/manual, @grouparoo/core/events, @grouparoo/bigquery, @grouparoo/csv, @grouparoo/facebook, @grouparoo/files-s3, @grouparoo/google-sheets, @grouparoo/hubspot, @grouparoo/logger, @grouparoo/mailchimp, @grouparoo/marketo, @grouparoo/mysql, @grouparoo/postgres, @grouparoo/redshift, @grouparoo/sailthru, @grouparoo/salesforce, @grouparoo/snowflake, @grouparoo/zendesk

🦘 Grouparoo: generate

✅ wrote /Users/evan/workspace/grouparoo/grouparoo/apps/staging-public/config/group/calculated/new_group.js

```

## Making Templates:

1. In core, or in your plugin, place files in `/src/templates` and extend `import {ConfigTemplate} from "@grouparoo/core"`
2. Your run method should return a hash of `{[filename: string]: bodyContent}`.
3. For the nominal case, where a collection of Mustache templates is validated and returned, use the built-in `this.mustacheAllFiles(params)`
4. You can do custom stuff in the `run()` method, like formatting inputs!

```ts
export class CalculatedGroupTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.class = "group";
    this.name = "group:calculated";
    this.description = "Config for a calculated Grouparoo Group";
    this.rootPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "templates",
      "groups"
    );
    this.files = [path.join("calculated", "*.template")]; // <--- could be 1 or many files
    this.inputs = {
      id: {
        required: true,
        default: null,
        description: "The ID of this group, used to determine it's guid",
      },
      name: {
        required: true,
        default: "New Group",
        description: "The name of the Group",
      },
      rules: {
        required: true,
        default: "[]",
        description: "The rules for the group, JSON-encoded",
      },
    };
  }

  async run({ params }) {
    if (params.rules) {
      params.rules = JSON.stringify(JSON.parse(params.rules), null, 2); // <--- custom param formatting
    }

    return this.mustacheAllFiles(params);
  }
}
```

And the template file itself. Note, you an use mustache templates **in** the file name, like `{{name}}.js`
Include lots of comments to help out users!

```js
exports.default = async function buildConfig() {
  return [
    {
      class: "Group",
      id: "{{id}}",
      name: "{{name}}",
      type: "calculated",

      /**
       The Rules for this group.  This is an Array.  Learn more about the options @ www.grouparoo.com/TODO:
        Examples:

        rules: [
          {
            propertyId: "email",
            operation: { op: "exists" },
          },
          {
            propertyId: "ltv",
            operation: { op: "gt" },
            match: 100,
          },
        ]
      */
      rules: {{rules}},
    },
  ];
};
```

## Notes

- We can't store the actual JS templates within `/src` - they aren't valid JS and `tsc` gets mad. That's whey they are kept in public
- To prevent prettier and friends from freaking out on emi-valid template files, all templates should end with `.template` which will be removed when the file is written, ie: `{{name}}.js.template`
- We are formatting the generated output with Prettier, so it needs to be valid JS/JSON
