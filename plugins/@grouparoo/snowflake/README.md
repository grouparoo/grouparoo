# grouparoo/snowflake

A [Grouparoo](https://www.grouparoo.com) plugin for connecting to [Snowflake](https://www.snowflake.com).

Learn more about Grouparoo Plugins at [www.grouparoo.com/docs/plugins](https://www.grouparoo.com/docs/plugins).

## Installation

In your Grouparoo project, run `grouparoo install @grouparoo/snowflake`.

## Notes on formatting your .p8 private key when using a `snowflake-keypair` app:

You will need to convert your `*.p8` into a single string so that Grouparoo can store it and parse it. You can do this with the `awk` command:

```bash
# If rsa_key.p8 is the private key you generated for snowflake auth, per https://docs.snowflake.com/en/user-guide/key-pair-auth.html#configuring-key-pair-authentication
# The following command will output a string Grouparoo can use for the `Private Key` connection option

awk 'NF {sub(/\n/, ""); printf "%s\\n",$0;}' rsa_key.p8

# note: some operating systems will include a final `%` at the end of the line.  Do not not include it
```

## Attribution

The Snowflake icon used in this plugin is from https://commons.wikimedia.org/wiki/File:Snowflake_Logo.svg
