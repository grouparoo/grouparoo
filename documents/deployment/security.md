# Grouparoo Application Security

Grouparoo provides a number of tools to help keep your data secure.

## Deployment

First and foremost, you should deploy Grouparoo only within an environment you trust.

- Ensure that all user and API access to Grouparoo is done via HTTPS.
- Only open the ports you need on your grouparoo web servers for HTTP(s) access.
- Encrypt the Grouparoo database at rest.

## Destination Configuration

- When sending customer data to third-parties, only send the data you absolutely need communicate with them.
- Use Group Membership as a proxy for customer data. For example, rather than sending a Customer's address to your CRM tool, send that they are in the group "California Customers".

## Permissions

Grouparoo has a robust permission system you can use to limit access to your employees and applications. The Grouparoo permission model operates on Teams (for individual users) and API Keys (for applications). Consider making multiple Teams and API Keys for each use case.

![Grouparoo Permissions](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/api-key-permissions.png)

## Environment Variables for Secrets

To communicate with Sources and Destinations, Grouparoo will need to be provided with a number of API Keys and passwords, otherwise known as "Secrets". While Grouparoo can store this information in its application database, you may prefer to store this information in the Environment. This will ensure that these Secrets are not readable by Grouparoo users, and that they will also not be compromised if the Grouparoo database is accessed improperly.

When setting an Environment Variable to use with Grouparoo, you'll be using the pattern: `GROUPAROO_OPTION__{topic}__{name}={value}`. Note the double-underscores before the topic and name.

- Valid topics are "APP", "SOURCE", and "DESTINATION".
- "name" is the name you want to appear in the Grouparoo interface.

For example, if you wanted to provide an API Key for Hubspot to your Grouparoo Apps named `production-hubspot-api-key` to the value of `abc123`, you would set the environment variable `GROUPAROO_OPTION__APP__production-hubspot-api-key=abc123`. Grouparoo will then store the string "production-hubspot-api-key" in the database, rather than the value "abc123", and always source this value from the environment runtime.

![Grouparoo Environment App Options](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/environment-app-options.png)

When configuring your App, you'll see the names of available environment variable options. You will need to copy in the "name" as presented.
