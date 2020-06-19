# Grouparoo

**Achieve Marketing Autonomy**

Take control of your data and your destiny with the open source customer data platform that puts marketers in charge.

![Grouparoo Data Bowtie](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/grouparoo-bowtie.png)

Learn more at [www.grouparoo.com](https://www.grouparoo.com)

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@grouparoo/core">
    <img alt="" src="https://img.shields.io/npm/v/@grouparoo/core.svg?style=for-the-badge&labelColor=242436">
  </a>
  <a aria-label="Node version" href="https://www.npmjs.com/package/@grouparoo/core">
    <img alt="" src="https://img.shields.io/node/v/@grouparoo/core.svg?style=for-the-badge&labelColor=242436">
  </a>
  <a aria-label="License" href="https://github.com/grouparoo/grouparoo/blob/master/LICENSE.txt">
    <img alt="" src="https://img.shields.io/npm/l/@grouparoo/core.svg?style=for-the-badge&labelColor=242436">
  </a>
</p>

# Table of Contents

### For Grouparoo Users

- [ 🎉 Getting Started with Grouparoo](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/getting-started.md)
- 🦾 Deploying Grouparoo
  - [Deploying with Heroku](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/heroku.md)
  - [Deploying with Docker](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/docker.md)
  - [Deploying with Kubernetes and AWS](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/aws-and-k8s.md)
- [🩺 Support](https://github.com/grouparoo/grouparoo/blob/master/.github/SUPPORT.md)

### For Grouparoo Developers

- [👩‍💻 Getting Started](https://github.com/grouparoo/grouparoo/blob/master/documents/development/getting-started.md)
- [📊 Databases](https://github.com/grouparoo/grouparoo/blob/master/documents/development/databases.md)
- [🛠 Tools](https://github.com/grouparoo/grouparoo/blob/master/documents/development/tools.md)
- [🌊 Data Flow](https://github.com/grouparoo/grouparoo/blob/master/documents/development/dataflow.md)
- [🏹 Events](https://github.com/grouparoo/grouparoo/blob/master/documents/development/events.md)
- [🤝 Plugins](https://github.com/grouparoo/grouparoo/blob/master/documents/development/plugins.md)
- [📑 Typescript Docs](https://docs.grouparoo.com)
- [📚 Publishing](https://github.com/grouparoo/grouparoo/blob/master/documents/development/publishing.md)
- [👻 Security](https://github.com/grouparoo/grouparoo/blob/master/.github/SECURITY.md)

### Community

Looking for help or to connect with other Grouparoo users? **[👩‍💻👨‍💻Learn more at www.grouparoo.com/community ➡️](https://www.grouparoo.com/community)**

- [👷‍♀️ Contributing Guide](https://www.grouparoo.com/community)
- [👨‍👩‍👧‍👦 Code of Conduct](https://github.com/grouparoo/grouparoo/blob/master/CODE_OF_CONDUCT.md)

### Other Documents

- [👩‍⚖️ The Grouparoo License](https://github.com/grouparoo/grouparoo/blob/master/LICENSE.txt)
- [🙏 Attribution](https://github.com/grouparoo/grouparoo/blob/master/documents/legal/attribution.md)

# Running a Grouparoo Application

> This is an abbreviated version of the Grouparoo Deployment Getting Started guide. [The full version can be found here](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/getting-started.md).

1. Create a new project with a `package.json` file like the one below. Grouparoo is a [node.js](https://nodejs.org/) project, and we use NPM to manage our dependencies. Grouparoo required the **Postgres** and **Redis** databases. On OSX, these can be installed via [Homebrew](https://brew.sh/).

```json
{
  "author": "Grouparoo Inc <hello@grouparoo.com>",
  "name": "my-grouparoo-project",
  "description": "A Grouparoo Deployment",
  "version": "0.1.0",
  "license": "UNLICENSED",
  "private": true,
  "dependencies": {
    "@grouparoo/core": "latest",
    "@grouparoo/mysql": "latest",
    "@grouparoo/postgres": "latest",
    "@grouparoo/mailchimp": "latest",
    "@grouparoo/csv": "latest"
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

This makes an "app" for Grouparoo to run. A full example can be found [here](https://github.com/grouparoo/app-example).

2. There are some environment variables needed by Grouparoo that need to be set by your host/docker image. In development, we can also lod these variables from a `.env` file that lives alongside your `package.json`. Create a copy of our [example](https://github.com/grouparoo/app-example/blob/master/.env.example) `.env` file to manage your environment variables locally. You can modify the options as needed. Make this as a peer to your `package.json` file. Note: the `.env` file only works when running in `NODE_ENV=development`. On your server, you should set up these same environment variables. At minimum, you will need to set the following variables:

```shell
PORT=3000
WEB_URL=http://localhost:3000
WEB_SERVER=true
SCHEDULER=true
WORKERS=1
REDIS_URL="redis://localhost:6379/0"
DATABASE_URL="postgresql://localhost:5432/grouparoo_development"
SERVER_TOKEN="a-random-string"
```

3. Run `npm install` to install dependencies. This will also run `npm prepare` which will compile the typescript application and build the web page components.

4. Run `npm start` to start the server and visit `http://localhost:3000` to get started. Follow the on-screen instructions to create your account and first team.

🦘
