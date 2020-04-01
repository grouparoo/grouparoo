# Grouparoo

Achieve Marketing Autonomy

Want to move faster? Take control of your data and your destiny with the open source customer data platform that puts marketers in charge.

[![CircleCI](https://circleci.com/gh/grouparoo/grouparoo.svg?style=svg&circle-token=a4f679082831ce46eed37388f130709119e29207)](https://circleci.com/gh/grouparoo/grouparoo)

---

## Deploying a Grouparoo Server

1. Create a new project with a `package.json` file like the one below. Grouparoo is a [node.js](https://nodejs.org/) project, and we use NPM to manage our dependencies.

```json
{
  "author": "Grouparoo Inc <hello@grouparoo.com>",
  "name": "my-grouparoo-project",
  "description": "A Grouparoo Deployment",
  "version": "0.1.0",
  "license": "UNLICENSED",
  "private": true,
  "engines": {
    "node": "12.x.x"
  },
  "dependencies": {
    "@grouparoo/core": "0.1.0",
    "@grouparoo/mysql": "0.1.0",
    "@grouparoo/postgres": "0.1.0",
    "@grouparoo/mailchimp": "0.1.0",
    "@grouparoo/csv": "0.1.0"
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

There are some environment variables needed by Grouparoo that need to be set by your host/docker image. In development, we can also lod these variables from a `.env` file that lives alongside your `package.json`. Sensible defaults are:

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

---

## Developing Grouparoo

### Getting Started (OSX):

```bash
# Install NVM to manage node versions
# From: https://github.com/nvm-sh/nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

# Install the homebrew package manager
# From: https://brew.sh/
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install node.js v12
nvm install v12

# Depending on your shell (bash, zsh, etc) you may need to ensure that nvm is loaded into your environment via .bashrc, .bash_profile, etc
# On OSX/ZSH, we recommend installing Oh My ZSH (https://github.com/ohmyzsh/ohmyzsh) and enabling the nvm plugin

# Install & run postgresql (v9.x)
brew install postgresql
brew services start postgresql

# Install & run Redis
brew install redis
brew services start redis

# Clone this repository
git clone git@github.com:grouparoo/grouparoo.git
cd grouparoo

# Install dependencies
npm install

# Configure your local environment variables in .env
cp apps/staging-public/.env.example apps/staging-public/.env
open apps/staging-public/.env

# Create your local development database (Postgres)
createdb "grouparoo_development"

# or in `psql`
CREATE DATABASE grouparoo_development;
GRANT ALL PRIVILEGES ON DATABASE grouparoo_development TO postgres;

# Run the staging "app" example project
cd apps/staging-public
npm run prepare
npm run dev
```

### Getting Started (Windows):

```bash
#TODO
```

### Getting Started (Linux):

```bash
#TODO
```

## Environment Variables and API Keys

Grouparoo needs to connect to a few services to run. When developing locally (`NODE_ENV=development` or not set), we will load in any variables you have defined in a `.env` file in your "app" directory. Otherwise, these variables are to be set by your runtime environment/host.

**General Settings**

- `PORT` is the port the application will run on. When developing, set this to something static like `3000`. Many PaaS providers (like Heroku) will provide you a port dynamically at runtime via this environment variable.
- `WEB_URL` is the URL to access the Grouparoo web application, ie "http://localhost:3000" when developing. This is used to set access headers among other things.

The following options configure if Actionhero should enable the server and workers for this instance of Grouparoo. When deploying, you will likely want some "api" servers and some "worker" servers, which can all be configured with these environment variables. You can also customize how these are used in `/src/config`

- `WEB_SERVER`=true
- `SCHEDULER`=true
- `WORKERS`=1

**Redis**

Grouparoo uses Redis as both a cache and as a background job queue via node-resque. You can also customize how this are used in `/src/config/redis.ts`

- `REDIS_URL`="redis://localhost:6379/0"

**Database**

Grouparoo stores all of your data in a database. We use Sequelize to connect, so you can use a Postgres, MySQL, or MSSQL database. You can also customize how this are used in `/src/config/sequelize.ts`

- `DATABASE_URL`="postgresql://localhost:5432/grouparoo_development"

**Amazon**

Grouparoo can be configured to store files via S3 (or compatible service, such as Google Cloud Storage).

The Environment Variables are:

- `S3_ACCESS_KEY`
- `S3_SECRET_ACCESS_KEY`
- `S3_REGION`
- `S3_BUCKET`

`S3_ACCESS_KEY` and `S3_SECRET_ACCESS_KEY` are for an [IAM](https://console.aws.amazon.com/iam/home) user to access the api. This user will need a policy granting it read & write access to the S3 Bucket in question:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1571257330000",
      "Effect": "Allow",
      "Action": ["s3:*"],
      "Resource": ["arn:aws:s3:::your-bucket-name/*"]
    }
  ]
}
```

`S3_REGION` is an AWS region, like "us-east-1" and `S3_BUCKET` is the name of your bucket, which should match the one used in the policy for the IAM user.

### Testing:

You will need `chromedriver` installed to run the automated browser tests:

- OSX: `brew cask install chromedriver`
- Windows: TODO
- Linux: TODO

```shell
# Create and populate test databases
./core/api/bin/create-test-databases
npm test # I will also run the build and lint commands
```

### Deploying the Example Server

On your servers:

1. Ensure you have the proper environment variables set
2. Run `npm install` at the root of this project, which will also run `lerna bootstrap --hoist` (and the build steps too)
3. Run `cd apps/staging-public && npm run start`

See the `Procfile` for an example of how to run a web and worker process independently.
If you are deploying to Heroku or a similar PaaS, they might prune node_modules that aren't explicitly in "dependencies". However, due to the way lerna works, this might delete all of your modules. Check with your provider for how to disable this (ex: https://devcenter.heroku.com/articles/nodejs-support#build-behavior)

### Publishing

We use `lerna` to help publish and migrate the versions of all our packages in lock-step. Lerna will handle versioning and deployment to NPM in one command.

```bash
npm run publish
```

## Attribution

The Pencil/Manual icon used in this plugin is from https://www.iconfinder.com/icons/1608787/pencil_icon

🦘
