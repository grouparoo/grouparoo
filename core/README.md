# Grouparoo

**Sync, Segment, and Send your Product Data Everywhere**

Grouparoo is an open source framework that helps you move data between your data warehouse and all of your cloud-based tools. Learn more at [www.grouparoo.com](https://www.grouparoo.com)

![Grouparoo Data Bowtie](https://raw.githubusercontent.com/grouparoo/grouparoo/main/documents/images/grouparoo-diagram.png)

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@grouparoo/core">
    <img alt="" src="https://img.shields.io/npm/v/@grouparoo/core.svg?style=for-the-badge&labelColor=242436">
  </a>
  <a aria-label="Node version" href="https://www.npmjs.com/package/@grouparoo/core">
    <img alt="" src="https://img.shields.io/node/v/@grouparoo/core.svg?style=for-the-badge&labelColor=242436">
  </a>
  <a aria-label="License" href="https://github.com/grouparoo/grouparoo/blob/main/LICENSE.txt">
    <img alt="" src="https://img.shields.io/npm/l/@grouparoo/core.svg?style=for-the-badge&labelColor=242436">
  </a>
</p>

> This is the Grouparoo Monorepo, containing the source code for `@grouparoo/core` and many plugins. If you are looking for an example about how to run or deploy Grouparoo, please visit https://github.com/grouparoo/app-example

# Documentation and Guides

- 🦘 **Ready to Try Grouparoo?**
  - Grouparoo is Open Source, and easy to run on your laptop or in the cloud.
  - → View the [Getting Started Docs](https://www.grouparoo.com/docs/getting-started).
- 📚 **Want to learn more about how to configure and use Grouparoo?**
  - Grouparoo can be configured without needing to write any code. Learn how to connect to your Sources and Destinations to begin syncing your data.
  - → View the [Configuration Guides](https://www.grouparoo.com/docs/config).
  - → View the [Runtime Guides](https://www.grouparoo.com/docs/running).
  - → View the [Deployment Examples](https://www.grouparoo.com/docs/deployment).
- 👨‍👩‍👧‍👧 **Want to collaborate with the Community to enhance Grouparoo?**
  - Join other Grouparoo Community members to share best practices and tackle problems.
  - → Join the [Community](https://www.grouparoo.com/docs/community).
- ⚙️ **Want to learn more about how Grouparoo works?**
  - Grouparoo is Open Source, and we welcome community contributions. You can add your own plugins to connect to new Sources and Destinations.
  - → View the [Development Guide](https://www.grouparoo.com/docs/development).

# Running a Grouparoo Application

> This is an abbreviated version of the "Grouparoo Installation Guide". [The full version can be found here](https://www.grouparoo.com/docs/installation).

## Run Locally with Node.js

Use the Grouparoo CLI to initialize a new Grouparoo Project:

```bash
# Assuming you have node.js (https://nodejs.org) v12+ installed
npm install -g grouparoo
grouparoo init .
grouparoo config
```

This will generate a `package.json` and `.env` file and launch our Config UI for you to begin configuring your Grouparoo instance.

🦘
