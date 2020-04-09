# Deploying Grouparoo with AWS

## Getting Started

We will be deploying a docker image for our Grouparoo application to AWS. We will Amazon Elastic Container Service (ECS) to manage our deployments. Our Grouparoo instances will be connecting to a Amazon Aurora database (postgres) and a Redis cluster managed by Amazon Elasticashe.

## Creating the Aurora Postgres Database

## Creating Redis Cluster

## VPC / Networking

Will be created by the Fargate cloud driver stack.

## Creating the Application

1. Create a new git repository

   - Do not include an environment file, `.env`. Your environment variables will be manged by Docker & AWS
   - Include a `package.json` file which contains your dependencies and commands per the [main Grouparoo Readme](https://github.com/grouparoo/grouparoo/blob/master/README.md)
   - Include a `.dockerignore` file which excludes `node_modules` and any local config you might have (ie: `.env`)
   - Include a `Dockerfile` which is similar the to the below. See the Docker readme for more information.

1. Docker
1. Deployment
1. Load Balancing
