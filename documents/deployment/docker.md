# Deploying Grouparoo with Docker & Docker Compose

## Example

An example project can be found at https://github.com/grouparoo/app-example

## Getting Started

1. Create a new git repository
   - Do not include an environment file, `.env`. Your environment variables will be managed by Docker
   - Include a `package.json` file which contains your dependencies and commands per the [getting started guide](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/getting-started.md)
   - Include a `.dockerignore` file which excludes `node_modules` and any local config you might have (ie: `.env`)
   - Include a `Dockerfile` which is similar the to the below. We are building a `Dockerfile` which can be used in multiple modes, as a background task worker or web server, which are controlled by Environment Variables.

```bash
FROM node:12

WORKDIR /grouparoo

ENV NODE_ENV='production'
ENV PORT=3000
ENV WEB_URL=http://localhost:$PORT
ENV WEB_SERVER=true
ENV SERVER_TOKEN="change-me"
ENV SCHEDULER=true
ENV WORKERS=1
ENV REDIS_URL="redis://localhost:6379/0"
ENV DATABASE_URL="postgresql://localhost:5432/grouparoo_development"
ENV S3_ACCESS_KEY=""
ENV S3_SECRET_ACCESS_KEY=""
ENV S3_REGION=""
ENV S3_BUCKET=""

COPY . .
RUN npm install
RUN npm run prepare
RUN npm prune

WORKDIR /grouparoo/node_modules/@grouparoo/core
CMD ["./api/bin/start"]

EXPOSE $PORT/tcp
```

2. Build your docker image with `docker build .`
3. Push and run your docker image!

## Docker Compose

As an example of how to orchestrate a more complex deployment, the following example `docker-compose` file is provided. This will create our needed networks (frontend and backend), our needed storage servers (Postgres and Redis), 2 types of grouparoo instances (`web` and `backend`).

This example requires a `docker swarm` cluster (or local instance). You can create one on your local machine with `docker swarm init`.

```yml
version: "3.1"
services:
  redis:
    image: redis
    restart: always
    networks:
      - grouparoo_backend

  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: grouparoo_docker
    networks:
      - grouparoo_backend

  grouparoo-web:
    build: ./
    ports:
      - 3000:3000
    environment:
      PORT: 3000
      REDIS_URL: redis://redis:6379/0
      DATABASE_URL: postgresql://postgres:password@db:5432/grouparoo_docker
      WEB_SERVER: "true"
      SCHEDULER: "false"
      WORKERS: 0
    depends_on:
      - db
      - redis
    networks:
      - grouparoo_frontend
      - grouparoo_backend

  grouparoo-worker:
    build: ./
    environment:
      REDIS_URL: redis://redis:6379/0
      DATABASE_URL: postgresql://postgres:password@db:5432/grouparoo_docker
      WEB_SERVER: "false"
      SCHEDULER: "true"
      WORKERS: 10
    depends_on:
      - db
      - redis
    networks:
      - grouparoo_frontend
      - grouparoo_backend

networks:
  grouparoo_frontend:
    driver: overlay
  grouparoo_backend:
    driver: overlay
```

## Notes

Remember, all Environment Variables can be changed from their defaults, including database information, PORT, etc.

Docker will regularly restart/rebuild your images. You may at times see "stuck" background task in the `resque` dashboard. Grouparoo will automatically rescue these jobs and retry them after an hour.

All the Environment Variables have defaults, but you are expected to customize them. You likely will want to create multiple runtime clusters, some workers and some web servers. This way you can scale each runtime mode separately as needed.

The example `docker-compose.yml` has no data persistence - DO NOT USE IN PRODUCTION!

The example `docker-compose.yml` has no load balancing between `grouparoo-web` instances - DO NOT USE IN PRODUCTION!

You can scale the number of `web` and `worker` processes independently. Depending on your workload, you may need more of one type of process than another.
