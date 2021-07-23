# Grouparoo Devcontainer Readme

When running on Github Codespaces, the following updates to your application's `.env` files will be needed to connect to the database containers:

```sh
REDIS_URL="redis://redis:6379/0"
DATABASE_URL="postgresql://postgres@postgres:5432/grouparoo_development"
```

Everything else should be the same!
