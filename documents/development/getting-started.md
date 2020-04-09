# Developing Grouparoo

## Getting Started (OSX):

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

## Getting Started (Windows):

```bash
#TODO
```

## Getting Started (Linux):

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

## Deploying the Example Server

On your servers:

1. Ensure you have the proper environment variables set
2. Run `npm install` at the root of this project, which will also run `lerna bootstrap --hoist` (and the build steps too)
3. Run `cd apps/staging-public && npm run start`

See the `Procfile` for an example of how to run a web and worker process independently.
If you are deploying to Heroku or a similar PaaS, they might prune node_modules that aren't explicitly in "dependencies". However, due to the way lerna works, this might delete all of your modules. Check with your provider for how to disable this (ex: https://devcenter.heroku.com/articles/nodejs-support#build-behavior)
