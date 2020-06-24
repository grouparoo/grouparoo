# Running Grouparoo

## Getting Started

This guide will help you run the Grouparoo application on your local machine. At the end of this guide there are links to instructions on how to run Grouparoo on various production-ready platforms.

Grouparoo is a [node.js](https://nodejs.org/) application written in [TypeScript](https://www.typescriptlang.org/). Grouparoo relies on a [Postgres](https://www.postgresql.org) database and [Redis](https://redis.io) cache. Grouparoo is distributed though [NPM](https://www.npmjs.com).

## Deploy to Heroku

The simplest way to see Grouparoo in action is to deploy it to Heroku for free:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/grouparoo/app-example)

### Run locally with Docker

Assuming you have Docker installed:

```bash
# in a new directory
curl https://raw.githubusercontent.com/grouparoo/app-example/master/docker-compose.published.yml --output docker-compose.yml
docker-compose up
```

## Install Locally

### Step 1: Install Runtime and Databases

Grouparoo is a [node.js](https://nodejs.org/) application and requires Node.js version 12 or higher. You can download Node.js from their [website](https://nodejs.org/) or through the package manager for your operating system. The same is true for Postgres and Redis.

We also need to create a database within Postgres for Grouparoo to use. Let's use one called `grouparoo_development`.

**On OSX**:

```bash
# Install Homebrew (https://brew.sh) if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

brew install node # Install Node.JS

brew install redis # Install Redis
brew services start redis # Start Redis

brew install postgresql # Install Postgres
brew services start postgresql # Start Postgres
createdb grouparoo_development # Create a database for Grouparoo
```

**On Linux/Ubuntu**:

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install v12 # install v12 of node.js
nvm use v12 # use v12 of node.js

sudo apt install redis-server # Install Redis

sudo apt install postgresql postgresql-contrib # Install Postgres
createdb grouparoo_development # Create a database for Grouparoo

```

### Step 2: Create your `package.json` file

In a new directory, create a new project with a `package.json` file like the one below.

```json:readme_deploy
{
  "name": "my-grouparoo-project",
  "version": "0.1.0",
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

This makes an "app" for Grouparoo to run. There is an example in the [local-public](https://github.com/grouparoo/grouparoo/tree/master/apps/local-public) directory.

### Step 3: Create your `.env` file

There are some environment variables needed by Grouparoo that need to be set by your host/docker image. These variables tell Grouparoo how to connect to your database, which URL to use, etc. In development, we can also load these variables from a `.env` file that lives alongside your `package.json`.

Create a copy of our [example](https://github.com/grouparoo/grouparoo/blob/master/apps/local-public/.env.example) `.env` file to manage your environment variables locally. You can modify the options as needed. Make this as a peer to your `package.json` file. Note: the `.env` file only works when running in `NODE_ENV=development`. On your server, you should set up these same environment variables. At minimum, you will need to set the following variables:

```bash
PORT=3000
WEB_URL=http://localhost:3000
WEB_SERVER=true
SCHEDULER=true
WORKERS=1
REDIS_URL="redis://localhost:6379/0"
DATABASE_URL="postgresql://localhost:5432/grouparoo_development"
SERVER_TOKEN="a-random-string"
```

> A note on `SERVER_TOKEN`: This should be a random string that will be used to identify Grouparoo servers to each-other in the same cluster. It will not be used to authenticate users, but rather authorize servers to make requests against each other. SERVER_TOKEN is not a replacement for setting unique, per-application database credentials and isolated runtime environments.

`npm install` will not succeed without these environment variables being set.

### Step 4: Install Dependencies

Run `npm install` to install dependencies. This will also run `npm prepare` which will compile the typescript application and build the web components.

### Step 5: Start the Server

Run `npm start` to start the server and visit `http://localhost:3000` to get started. Follow the on-screen instructions to create your account and first team.

Starting the Grouparoo application will also migrate your database and generally configure things as-needed.

## Deploying to Production Environments

Now that you've tried Grouparoo locally, it's time to deploy it! An example application which can be copied and deployed via Docker or Heroku is available at [grouparoo/app-example](https://github.com/grouparoo/app-example).

First, learn more about [Grouparoo's Deployment Topology](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/topology.md).

Then find the deployment Guide for your environment:

- [Deploying with Heroku](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/heroku.md)
- [Deploying with Docker](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/docker.md)
- [Deploying with Kubernetes and AWS](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/aws-and-k8s.md)
