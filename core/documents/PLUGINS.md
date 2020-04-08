## Grouparoo Plugins

The Grouparoo Plugin System is how you can add & extend Grouparoo!

## Installing a Plugin

In your Grouparoo deployment project, simply install the plugin with NPM:

1. `npm install @grouparoo/awesome-plugin`
2. Add the plugin to your `grouparoo/plugins` hash within your package.json. When complete, your `package.json` using `@grouparoo/awesome-plugin` will look like:

```json:plugins_example
{
  "author": "Grouparoo Inc <hello@grouparoo.com>",
  "name": "@grouparoo/example-app",
  "description": "A Grouparoo Example Application",
  "version": "0.1.1-alpha.11",
  "license": "UNLICENSED",
  "private": true,
  "engines": {
    "node": "12.x.x"
  },
  "dependencies": {
    "@grouparoo/core": "0.1.1-alpha.11",
    "@grouparoo/awesome-plugin": "0.1.1-alpha.11"
  },
  "scripts": {
    "prepare": "cd node_modules/@grouparoo/core && npm run prepare",
    "import": "cd node_modules/@grouparoo/core && ./api/bin/import",
    "start": "cd node_modules/@grouparoo/core && ./api/bin/start",
    "dev": "cd node_modules/@grouparoo/core && ./api/bin/dev"
  },
  "grouparoo": {
    "plugins": ["@grouparoo/awesome-plugin"]
  }
}
```

## Developing a Plugin

Plugins can:

- Add new initializers and middleware
- Add API actions
- Add new API tasks/background jobs
- Interact with the database (via `models`)
- Add new CLI commands for the API
- Create new UI pages for the Grouparoo Website

### Setup

A Grouparoo Plugin is based on the Actionhero Plugin model (https://docs.actionherojs.com/tutorial-plugins.html), and we have many hooks provided via `package.json` elements which you can use in your plugin.

Your directory structure for your plugin should look like:

```
/
| / src
  | - actions
  | - tasks
  | - initializers
  | - cli
  | - components
|
| - package.json
| - ts.config.json
```

The best way to develop you plugin is to create a parent Grouparoo project's `package.json` (see "Installing a Plugin" above) which requires both grouparoo-core and your new plugin. From there, you can either mount your local plugin as you develop it with tools like (`npm link`](https://docs.npmjs.com/cli/link.html) or [`lerna`](https://github.com/lerna/lerna) for more complex projects.

Below, we will enumerate the types of things your plugins can do:

- `package.json` options
- Initializers
- Grouparoo Apps & Connections
- Actions & Routes
- Define and use Settings
- Tasks
- UI Elements

### `package.json` options

In your plugin's `package.json`, we use a `grouparoo` section to list certain options:

```json:plugins_package
{
  "name": "@grouparoo/awesome-plugin",
  "description": "a Grouparoo plugin",
  "version": "0.1.1-alpha.11",
  "license": "UNLICENSED",
  "private": true,
  "engines": {
    "node": "12.x.x"
  },
  "scripts": {
    "prepare": "rm -rf dist && tsc --declaration",
    "test": "jest",
    "pretest": "npm run lint && npm run prepare",
    "lint": "prettier --check src/**/*.ts __tests__/**/*.ts"
  },
  "dependencies": {
    "something": "^5.10.0"
  },
  "peerDependencies": {
    "@grouparoo/core": "0.1.1-alpha.11",
    "actionhero": "^22.0.5"
  },
  "devDependencies": {
    "@grouparoo/core": "0.1.1-alpha.11",
    "actionhero": "^22.0.5",
    "@types/jest": "^25.1.4",
    "@types/node": "^13.9.0",
    "jest": "^25.1.0",
    "prettier": "^1.19.1",
    "ts-jest": "^25.2.1",
    "typescript": "^3.8.3"
  },
  "grouparoo": {
    "webComponents": {
      "session/sign-in": ["newSignIn"]
    },
    "env": {
      "api": ["APP_API_KEY"],
      "web": ["APP_CLIENT_ID"]
    }
  }
}
```

**`grouparoo/webComponents`**

- This object lists react components you are providing to the Grouparoo web UI.
- These files must end with `.plugin.js|jsx|ts|tsx`.
- This example is referencing a file path which would match `src/components/newSignIn.plugin.tsx` in the plugin directory
  - The `tsconfig.json` configuration for your plugin should not compile components into `dist`. Grouparoo Core will handle this for you.

**`grouparoo/env`**

- This section contains 2 sub-keys, `api` and `web`. The items you add to these arrays define required environment variables that your application needs to launch.
  - If these environment variables are not present, the Grouparoo Core application will display an error, but will still launch
- Environment variables uses in `grouparoo/env/api` will only be used on the api server, however `grouparoo/env/web` will be sent to the client website. Do not include secrets that should not be shared with all users in `grouparoo/env/web`.
- This example means that `process.env.APP_API_KEY` will be used by the server and `process.env.APP_CLIENT_ID` will be consumed by the web UI, and available to browsers.

**`grouparoo/serverInjection`**

- This array of files will be required very early on in the server boot process (before actionhero and config).
- This is a great place to load a bog tracker or process monitor early on in the server's life cycle
- This file needs to export a default (non-async) function which will then be run at boot.

Notes:

- Ensure that the version of Grouparoo you are targeting is in _both_ `peerDependencies` and `devDependencies`. It should not be in `dependencies`.
- If you are creating initializers, actions, or tasks, `actionhero` should be in _both_ `peerDependencies` and `devDependencies`. It should not be in `dependencies`.

### Initializers

An initializer is an Actionhero file which lives in `/src/initializers`. There are 3 lifecycle parts of an initializer: initialize, start, and stop in which you can run code.

Learn more about Actionhero initializers here https://www.actionherojs.com/tutorials/initializers

### Grouparoo Apps & Connections

Within initializers, you can register routes and create apps and connections for Grouparoo.
If your Plugin is providing apps or connections you can use the `plugin.registerPlugin` method. See the example below.

```ts
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { columns } from "./../lib/columns";
import {
  profilePropertyRuleQueryOptions,
  buildProfilePropertyRuleQuery,
} from "./../lib/buildProfileQuery";
import { profiles } from "./../lib/profiles";
import { profileProperty } from "./../lib/profileProperty";
import { exportProfile } from "./../lib/exportProfile";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: "@grouparoo/postgres",
      icon: "/public/@grouparoo/postgres/postgres.svg",
      apps: [
        {
          name: "postgres",
          options: [
            { key: "host", required: false, description: "the postgres host" },
            { key: "port", required: false, description: "the postgres port" },
          ],
          test: test,
          profilePropertyRuleQueryOptions,
          buildProfilePropertyRuleQuery,
        },
      ],
      connections: [
        {
          name: "postgres-import",
          direction: "import",
          description: "import or update profiles from a postgres database",
          app: ["postgres"],
          options: [
            { key: "table", required: true, description: "the table to scan" },
          ],
          methods: {
            profiles,
            profileProperty,
            columns,
          },
        },
        {
          name: "postgres-export",
          direction: "export",
          description: "export profiles to a postgres table",
          app: ["postgres"],
          options: [
            {
              key: "table",
              required: true,
              description: "the table to write profiles to",
            },
          ],
          methods: {
            exportProfile,
            columns,
          },
        },
      ],
    });
  }
}
```

### Apps

Your plugin can provide multiple types of `Apps` for use within grouparoo. Grouparoo users can create multiple instances of each type of app.

The properties of an `App` are:

- **name**: The user-facing name of the app, like `csv` or `mysql`
- **options**: Required options needed to configure and connect to your app. This might commonly be an `apiKey` or `username` and `password`. Options have `name` (string), `description` (string) and `required` (boolean) attributes.
- **icon**: The path to the app's icon file (SVG or PNG). Icons should be stored in the `/public` directory of your plugin.
- Methods:
  - `async test()` This method will be called when an app is created to ensure that the app can be reached. the `app` object will be passed to it, and the test method should return true or false.
  - `async profilePropertyRuleQueryOptions()`: This method returns all the options available in table/columns object to the query builder.
  - `async buildProfilePropertyRuleQuery()` This method takes the choices selected from **profilePropertyRuleQueryOptions** and builds the string query for the app.

### Connections

Your plugin can provide multiple types of `connections` for use within grouparoo. Connections use Apps to import or export data. Connections are used by `sources` and `destinations`.

To learn more about each method's signatures, please see the Typedoc.

The properties of a `Connection` are:

- **name**: The user-facing name of the connection, like `import-csv` or `import-mysql-table`
- **direction**: Only `import` or `export`
- **description**: The user-facing description of the connection
- **app**: An array of `app`s that can use this connection. For example, your `import-mysql-table` connection might require the `mysql` app, also defined by your plugin
- **options**: Required options needed to configure this connection. This differs from the options of an `app`, and is likely dependent on the `app` options. For example, an `import-mysql-table` connection requires a `table` option to be set by the Grouparoo user, and will use the `name`, `host`, `password` and `database` options from the mysql `app` that it is linked too.
- **Import Methods**
  - `async profiles()`: This methods is called during a run, with a high-water mark and set options to return a collection of profiles to import. This options might also return properties to set on the profiles.
    - The main goal of this method is to call `await plugin.createImport(schedule, run, row)` for each row of data, where row is an object like `{email: "person@example.com", first_name: "person"}`
  - `async profileProperty()`: This method is called for one profile, and returns the data this connection can get for the profile.
  - `async columns()`: This method is used by the UI to configure the mapping from your data source to Grouparoo. It should return `{ columns, rows }` where rows is an array that explains how your data is structured (column names from mysql or headers from a csv file) and rows, which contains a flattened object that shows a 10-row sample of your data.
- **Export Methods**
  - `async exportProfile()`: This method is called for one profile, and sends the profile data off to the destination.
  - `async columns()`: This method is used by the UI to configure the mapping from your data destination to Grouparoo. It should return `{ columns, rows }` where rows is an array that explains how your data is structured (column names from mysql or headers from a csv file) and rows, which contains a flattened object that shows a 10-row sample of your data.

When defining `methods`, link to the method directly, do not use a string name.

### Actions

Actions are how you can add API endpoints to grouparoo!

To learn more about actions, visit https://www.actionherojs.com/tutorials/actions

You likely want to authenticate your actions. You can use Grouparoo's middleware for this:

```js
const { Action } = require("actionhero");

exports.action = class AwesomeStatus extends Action {
  constructor() {
    super();
    this.name = "awesome:getStatus";
    this.description = "I let you know how awesome you are";
    this.inputs = {};
    this.middleware = ["authenticated-team-member", "role-admin"]; // <-- here
  }

  async run({ response }) {
    response.awesome = true;
  }
};
```

If you want your action to require a logged-in web user, use the `authenticated-team-member` middleware.
Team members are assigned to teams with the "read", "write", and "administer" privileges. There's a middleware for each:

- role-admin
- role-write
- role-read

Unlike actions directly provided by Grouparoo Core, Actions created by plugins will need to be manually added to the roues file. You do this in an initializer within your plugin:

```ts
import { Initializer, route } from "actionhero";

export class MySignIn extends Initializer {
  constructor() {
    super();
    this.name = "myPlugin:authentication";
  }

  async initialize() {
    route.registerRoute(
      "post", // The HTTP Verb
      "/:apiVersion/session/myApp", // The Route (with variables)
      "session:myApp:create" // the name of the action
    );
  }
}
```

### Tasks

Actions are how you can add background jobs to Grouparoo!

To learn more about tasks, visit https://www.actionherojs.com/tutorials/tasks

### Settings

You can define user-configurable settings for your plugins. These will be exposed to the Grouparoo Administrators in the "settings" menu. Settings are defined within an initializer.

```js
// Define a setting for your plugin
await api.plugins.registerSetting(pluginName, key, defaultValue, description);

// Read a setting
const { key, value, description, defaultValue } = await api.plugins.readSetting(
  pluginName,
  key
);

// Update a setting
await api.plugins.updateSetting(pluginName, key, value);
```

Settings are all of type `string`, so coerce them if needed. Setting keys and values are limited to 191 characters in length.

### UI Elements

When creating a new react component to be used within the Grouparoo application, your component will be passed a few props:

- `apiVersion`: number, the version of the API we are using),
- `errorHandler`: object, how to display error messages in the ui. `errorHandler.set({error: "oh no!"})`,
- `successHandler`: object, how to display success messages in the ui. `errorHandler.set({message: "yay!"})`,,
- `...Handler`: object. There are many other "handler" helpers by which you can subscribe to state changes of the various top-level objects, like Session, App, etc.
- `query`: object: The Next query object. You can determine the page you are on, etc
- `useApi`: The hook to build the connection to use the Grouparoo API. Should be instantiated like so: `const { execApi } = useApi(errorHandler);`
