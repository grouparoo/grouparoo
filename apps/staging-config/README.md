# Config UI Example App

This example exists as a starting point for new Grouparoo applications. It includes only a limited number of plugins necessary to get started.

It is also configured to make it a little easier to work with the CLI within this monorepo, making the process of installing plugins on the fly easier (although there are still problems).

## Config Mode

To get started running config mode:

    $ npm run config

This command will delete and recreate your SQLite config database. But it will leave user authentication in place. If you want a completely fresh start, you can manually delete your `.local` directory.

    $ rm -rf .local
    $ npm run config

## Seeding Configuration

You can pre-populate a set of configuration files using our demo command. First, ensure the `DEMO_DATABASE_URL` environment variable is set in your `.env` file in this project and points to a local Postgres database. Here's an example:

```bash
DEMO_DATABASE_URL="postgresql://username:password@localhost:5432/grouparoo_development"
```

Assuming this database exists, you can then run the `demo` script to populate the database with some examples.

    $ npm run demo

This will generate a series of config files in your local `config` directory, which will be loaded in when booting in config mode.
