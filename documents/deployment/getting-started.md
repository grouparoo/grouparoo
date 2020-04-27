# Deploying a Grouparoo Server

## Getting Started

1. Create a new project with a `package.json` file like the one below. Grouparoo is a [node.js](https://nodejs.org/) project, and we use NPM to manage our dependencies.

```json:readme_deploy
{
  "author": "Grouparoo Inc <hello@grouparoo.com>",
  "name": "my-grouparoo-project",
  "description": "A Grouparoo Deployment",
  "version": "0.1.1-alpha.12",
  "license": "UNLICENSED",
  "private": true,
  "engines": {
    "node": "12.x.x"
  },
  "dependencies": {
    "@grouparoo/core": "0.1.1-alpha.12",
    "@grouparoo/mysql": "0.1.1-alpha.12",
    "@grouparoo/postgres": "0.1.1-alpha.12",
    "@grouparoo/mailchimp": "0.1.1-alpha.12",
    "@grouparoo/csv": "0.1.1-alpha.12"
  },
  "scripts": {
    "prepare": "cd node_modules/@grouparoo/core && npm run prepare",
    "start": "cd node_modules/@grouparoo/core && ./api/bin/start",
    "dev": "cd node_modules/@grouparoo/core && ./api/bin/dev"
  },
  "grouparoo": {
    "plugins": [
      "@grouparoo/mysql",
      "@grouparoo/postgres",
      "@grouparoo/mailchimp",
      "@grouparoo/csv"
    ]
  }
}
```

This makes an "app" for Grouparoo to run. There is an example in the [staging-public](https://github.com/grouparoo/grouparoo/tree/master/apps/staging-public) directory.

There are some environment variables needed by Grouparoo that need to be set by your host/docker image. In development, we can also lod these variables from a `.env` file that lives alongside your `package.json`.

2. Create a copy of our [example](https://github.com/grouparoo/grouparoo/blob/master/apps/staging-public/.env.example) `.env` file to manage your environment variables locally. You can modify the options as needed. Make this as a peer to your `package.json` file. Note: the `.env` file only works when running in `NODE_ENV=development`. On your server, you should set up these same environment variables. At minimum, you will need to set the following variables:

```shell
PORT=3000
WEB_URL=http://localhost:3000
WEB_SERVER=true
SCHEDULER=true
WORKERS=1
REDIS_URL="redis://localhost:6379/0"
DATABASE_URL="postgresql://localhost:5432/grouparoo_development"
```

3. Run `npm install` to install dependencies. This will also run `npm prepare` which will compile the typescript application and build the web page components.
4. Run `npm start` to start the server and visit `http://localhost:3000` to get started. Follow the on-screen instructions to create your account and first team.
