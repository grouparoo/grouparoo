# Grouparoo

**Sync, Segment, and Send your Product Data Everywhere**

Focus on building your core product, not integrating with 3rd-party tools. Learn more at [www.grouparoo.com](https://www.grouparoo.com)

![Grouparoo Data Bowtie](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/grouparoo-bowtie.png)

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

> This is the Grouparoo Monorepo, containing the source code for `@grouparoo/core` and many plugins. If you are looking for an example about how to run or deploy Grouparoo, please visit https://github.com/grouparoo/app-example

# Documentation and Guides

- 🦘 **Ready to Try Grouparoo?**
  - Grouparoo is Open Source, and easy to run on your laptop or in the cloud.
  - → View the [Deployment Docs](https://www.grouparoo.com/docs/deployment).
- 📚 **Want to learn more about how to configure and use Grouparoo?**
  - Grouparoo is can be configured without needing to write any code. Learn how to connect to your Sources and Destinations to begin syncing your data.
  - → View the [User Guides](https://www.grouparoo.com/docs/guides).
- ⚙️ **Want to learn more about how Grouparoo works?**
  - Grouparoo is Open Source, and we welcome community contributions. You can add your own plugins to connect to new Sources and Destinations.
  - → View the [Development Guide](https://www.grouparoo.com/docs/development).
- 👨‍👩‍👧‍👧 **Want to collaborate with the Community to enhance Grouparoo?**
  - Join other Grouparoo Community members to share best practices and tackle problems.
  - → View the [Community Guidelines](https://www.grouparoo.com/docs/community).

# Running a Grouparoo Application

> This is an abbreviated version of the "Grouparoo Deployment Guide". [The full version can be found here](https://www.grouparoo.com/docs/deployment).

## Deploy to Heroku

The simplest way to see Grouparoo in action is to deploy it to Heroku for free:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/grouparoo/app-example)

## Run locally with Docker & Docker Compose

Assuming you have Docker installed:

```bash
# in a new directory
curl -L https://www.grouparoo.com/docker-compose --output docker-compose.yml
docker-compose up
```

## Run Locally with Node.js

Use the Grouparoo Generator to bootstrap a new Grouparoo Project:

```bash
npx grouparoo generate
# configure postgres and redis, you can modify `.env` as needed
npm start
```

This will generate a `package.json` and `.env` file for configuration.

## Populating Demo Data

Use the `staging-public` app to try things out.

```bash
cd apps/staging-public
# populate the system with some events
npm run actionhero -- grouparoo demo events
```

🦘
