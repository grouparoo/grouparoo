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

If you are new to Grouparoo, or you want to deploy Grouparoo to your servers, start here!

- [ 🎉 Getting Started with Grouparoo](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/getting-started.md)
- 🦾 Deploying Grouparoo
  - [Deployment Topology](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/topology.md)
  - [Deploying with Heroku](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/heroku.md)
  - [Deploying with Docker](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/docker.md)
  - [Deploying with Kubernetes and AWS](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/aws-and-k8s.md)
- [🔒 Security](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/security.md)
- [📞 Telemetry](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/telemetry.md)
- [🩺 Support](https://github.com/grouparoo/grouparoo/blob/master/.github/SUPPORT.md)

### Product Information

You can find more details about how the Grouparoo product works here.

- [🧠 Grouparoo Product Concepts](https://github.com/grouparoo/grouparoo/blob/master/documents/product/concepts.md)

### For Grouparoo Developers

If you are interested in extending Grouparoo with your own plugins or contributing to the Open Source project, these documents are for you.

- [👩‍💻 Getting Started as a Grouparoo Developer](https://github.com/grouparoo/grouparoo/blob/master/documents/development/getting-started.md)
- [📊 Databases](https://github.com/grouparoo/grouparoo/blob/master/documents/development/databases.md)
- [🛠 Tools](https://github.com/grouparoo/grouparoo/blob/master/documents/development/tools.md)
- [🌊 Data Flow](https://github.com/grouparoo/grouparoo/blob/master/documents/development/dataflow.md)
- [🏹 Events](https://github.com/grouparoo/grouparoo/blob/master/documents/development/events.md)
- [🤝 Plugins](https://github.com/grouparoo/grouparoo/blob/master/documents/development/plugins.md)
- [📑 Typescript Docs](https://docs.grouparoo.com)
- [📚 Publishing](https://github.com/grouparoo/grouparoo/blob/master/documents/development/publishing.md)
- [👻 Security Disclosures](https://github.com/grouparoo/grouparoo/blob/master/.github/SECURITY.md)

### Community

Looking for help or to connect with other Grouparoo users? **[👩‍💻👨‍💻Learn more at www.grouparoo.com/community ➡️](https://www.grouparoo.com/community)**

- [👷‍♀️ Contributing Guide](https://www.grouparoo.com/community)
- [👨‍👩‍👧‍👦 Code of Conduct](https://github.com/grouparoo/grouparoo/blob/master/CODE_OF_CONDUCT.md)

### Other Documents

- [👩‍⚖️ The Grouparoo License](https://github.com/grouparoo/grouparoo/blob/master/LICENSE.txt)
- [🙏 Attribution](https://github.com/grouparoo/grouparoo/blob/master/documents/legal/attribution.md)

# Running a Grouparoo Application

> This is an abbreviated version of the Grouparoo Deployment Getting Started guide. [The full version can be found here](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/getting-started.md).

## Deploy to Heroku

The simplest way to see Grouparoo in action is to deploy it to Heroku for free:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/grouparoo/app-example)

## Run locally with Docker & Docker Compose

Assuming you have Docker installed:

```bash
# in a new directory
curl https://raw.githubusercontent.com/grouparoo/app-example/master/docker-compose.published.yml --output docker-compose.yml
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

🦘
