# Deploying Grouparoo to Heroku

## Example

An example project can be found at https://github.com/grouparoo/app-example

## Getting Started

1. Create a new git repository
   - Do not include an environment file, `.env`. Your environment variables will be manged by Heroku
   - Include a `package.json` file which contains your dependencies and commands per the [main Grouparoo Readme](https://github.com/grouparoo/grouparoo/blob/master/README.md)
   - Include a `Procfile` which is similar the to the below. Heroku uses `Procfile`s to define the multiple processes which run for the same application. In the `Procfile` we use Environment variables to differentiate between our web and worker processes. we also skip using `npm` as our process runner, and call the grouparoo start command directly.

```bash
# in Procfile
web:    WEB_SERVER=true  SCHEDULER=false WORKERS=0  cd node_modules/@grouparoo/core && ./api/bin/start
worker: WEB_SERVER=false SCHEDULER=true  WORKERS=10 cd node_modules/@grouparoo/core && ./api/bin/start
```

5. Add the heroku add-on `heroku-postgres` via `heroku addons:create heroku-postgresql:<PLAN_NAME>`. Learn more about the plan options here: https://devcenter.heroku.com/articles/heroku-postgresql. This add-on will set the Environment Variable `DATABASE_URL` which Grouparoo will automatically use.
6. Add the heroku add-on `heroku-redis` via `heroku addons:create heroku-redis:<PLAN_NAME>`. Learn more about the plan options here: https://devcenter.heroku.com/articles/heroku-redis. This add-on will set the Environment Variable `REDIS_URL` which Grouparoo will automatically use.
7. Push your git project to Heroku, or configure Heroku to monitor your github repo for changes automatically

Visit your new Heroku URL and create your first Grouparoo Team member!

## Notes

Grouparoo will source Heroku's `PORT` variable automatically to bind to the proper variable port.

Grouparoo will automatically build your project (compiling typescript and including your plugins) after any `npm install`, which Heroku will automatically run, as there is a `package.json` checked into your git repository.

You can scale the number of `web` and `worker` processes with the `heroku ps` command. Depending on your workload, you may need more of one type of process than another.

You can start with Heroku's free tier and increase your plan sizes as needed.

Heroku will regularly restart/rebuild your dynos. You may at times see "stuck" background task in the `resque` dashboard. Grouparoo will automatically rescue these jobs and retry them after an hour.
