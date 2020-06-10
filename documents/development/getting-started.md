# Developing Grouparoo

First, 🎉THANK YOU🎉.

Grouparoo relies on the contributions of many people just like you to create the best marketing infrastructure & automation tools. Thank you for taking the time to join this open source community, and create something we can all use! By contributing to Grouparoo, you agree to our [Community Guidelines](https://github.com/grouparoo/grouparoo/blob/master/.github/CONTRIBUTING.md) and [Code of Conduct](https://github.com/grouparoo/grouparoo/blob/master/CODE_OF_CONDUCT.md)

## Getting Started

When developing Grouparoo, you'll be running code within the `monorepo`. This git repository is the Grouparoo Monorepo, and contains a number of related bu separate projects. There are `Apps`, `Core`, `Plugins`, along with a number of tools and utilities. We use [`lerna`](https://github.com/lerna/lerna) to allow us to run and test all of these packages together without needing to publish them to NPM.

- Apps: These are example applications like a Grouparoo customer would run - they require `@grouparoo/core` and any number of plugins and may have toggled certain settings
- Core: The `@grouparoo/core` project is the main part of any Grouparoo application and includes the API (both web and workers), along with the Grouparoo administration website
- Plugins: There are opt-in add-ons for Grouparoo customers, and contain the logic to connect to new sources & destinations, or otherwise add new functionality to Grouparoo.

### Running the Monorepo (OSX):

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
cp .env.example .env
# optional: (npm install && ../../node_modules/.bin/lerna link) # we do not automatically build/prepare all the example apps.  If you are having trouble, try this step
npm run prepare
npm run dev
```

### Running the Monorepo (Windows):

```bash
#TODO
```

### Running the Monorepo (Linux):

```bash
#TODO
```

## Typescript

Grouparoo is written in [Typescript](https://www.typescriptlang.org/), which means that we need to compile our Typescript to Javascript before we can run it. This is true for Grouparoo plugins, but not necessarily true for Grouparoo Apps or Core, if you are using `npm run dev` (development mode), which will handle the compilation on the fly. Every sub-project in the Grouparoo Monorepo has an `npm run prepare` command which handles the compilation process. `npm run prepare` is also an [NPM lifecycle hook](https://docs.npmjs.com/misc/scripts#prepublish-and-prepare), which will automatically run after every `npm install` as well.

If you are developing a plugin, you will need to `npm run prepare` it before seeing your changes. In many cases, the `prepare` step only calls out to `tsc`, and in these cases, you may be able to `tsc --watch` to automatically source changes and rebuild your plugin.

Grouparoo self-documents its Typescript interface to [docs.grouparoo.com](https://docs.grouparoo.com) via [Typedoc](https://typedoc.org/). The docs from the `master` branch are automatically published to this site. If you want to read the docs for an older version of Grouparoo or a different branch, you can generate the docs locally by running `cd core && npm run docs` in this repository.

## Environment Variables and API Keys

Grouparoo needs to connect to a few services to run. When developing locally (`NODE_ENV=development` or not set), we will load in any variables you have defined in a `.env` file in your "app" directory. Otherwise, these variables are to be set by your runtime environment/host.

**General Settings**

- `PORT` is the port the application will run on. When developing, set this to something static like `3000`. Many PaaS providers (like Heroku) will provide you a port dynamically at runtime via this environment variable.
- `WEB_URL` is the URL to access the Grouparoo web application, ie "http://localhost:3000" when developing. This is used to set access headers among other things.
- `SERVER_TOKEN` is a random string that will be used to identify Grouparoo servers to each-other in the same cluster. It will not be used to authenticate users, but rather authorize servers to make requests against each other. SERVER_TOKEN is not a replacement for setting unique, per-application database credentials and isolated runtime environments.

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

## Dependencies

Grouparoo is built on top of many wonderful open source technologies. An exhaustive list of our dependencies can be found within our [package.json](https://github.com/grouparoo/grouparoo/blob/master/core/package.json) files. This below list provides links to the core packages we rely on.

Grouparoo Core:

- General
  - [Lerna](https://github.com/lerna/lerna)
  - [Jest](https://jestjs.io/)
- API
  - [Actionhero](https://www.actionherojs.com/)
  - [Sequelzie-Typescript](https://github.com/RobinBuschmann/sequelize-typescript)
  - [Sequelzie](https://sequelize.org/)
  - [Node Resque](https://github.com/actionhero/node-resque)
- Web
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [React-Bootstrap](https://react-bootstrap.github.io/)
  - [fontawesome](https://fontawesome.com/)

All dependencies Grouparoo uses must be licensed under a non-viral open-source licence that allows for commercial use. We audit every dependency in every sub-project of this monorepo via [license-checker](https://www.npmjs.com/package/license-checker). The list of licenses we accept can be found [here](https://github.com/grouparoo/grouparoo/blob/master/tools/license-checker/check).

## Testing:

You will need `chromedriver` installed to run the automated browser tests:

- OSX: `brew cask install chromedriver`
- Windows: TODO
- Linux: TODO

```shell
# Create and populate test databases
./core/api/bin/create-test-databases
npm test # I will also run the build and lint commands
```

Running `npm test` from the top-level of this monorepo will run the `npm test` command in every sub-package of the monorepo. via lerna. You can also test an individual package by entering that directory and running `npm test`.

Jest will automatically test the latest version of your typescript files, and you do not need to compile your code to test. However, the test suite should test the compile step as well. We usually run `npm run prepare` as a `pretest` NPM hook.

A note on chromedriver for OSX Users: As Chrome updates, you may need to `brew cask reinstall chromedriver` to keep up to date as well. Every time you update chromedriver, you will need to re-authorize the application to run in system preferences, as it is unsigned.

## Deploying the Example Server

On your servers:

1. Ensure you have the proper environment variables set
2. Run `npm install` at the root of this project, which will also run `lerna bootstrap --hoist` (and the build steps too)
3. Run `cd apps/staging-public && npm run start`

See the [`Procfile`](https://github.com/grouparoo/grouparoo/blob/master/Procfile) for an example of how to run a web and worker process independently.
If you are deploying to Heroku or a similar PaaS, they might prune node_modules that aren't explicitly in "dependencies". However, due to the way lerna works, this might delete all of your modules. Check with your provider for how to disable this (ex: https://devcenter.heroku.com/articles/nodejs-support#build-behavior)
