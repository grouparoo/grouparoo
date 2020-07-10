# Grouparoo Telemetry

Grouparoo collects _**default-anonymous**_ telemetry data about general usage. Participation in this anonymous program is optional, and you may opt-out if you'd not like to share any information.

## Why Is Telemetry Collected?

Grouparoo is an open-source application that we distribute for free, which runs within your firewall. Because of this, we have no direct insight into how the application is being used, nor are we able to determine if it is performing well. To remedy this, we've included a Telemetry System within Grouparoo.

We use Telemetry data:

- As a way to gain some insight into how you are using Grouparoo so that we may identify bugs or slow areas of the application.
- To learn more about which plugins popular and how they are performing.
- To gain insight into the types of workloads our customers are running.
- To learn which operating systems and other methods of deployment are most popular for Grouparoo.
- To determine baseline and median performance for the majority of our users.

Telemetry is a supplement to more direct ways of communicating with our community, and it not meant to replace tools like forums, issues, and chat.

## What is Being Collected?

The information we collect may change over time. In general we collect:

- A randomly generated UUID to identify your Grouparoo Cluster, and if you have set one, the name of your Grouparoo Cluster.
- Basic information about your Grouparoo environment, including the operating system you are running and how many workers you have enabled.
- Total counts of various Models within your cluster - i.e: the number of Profiles, Groups, Apps, etc. your cluster has created.
- The number of Imports and Exports created by each type of Source and Destination.
- The number of Runs created by each type of Source and Destination, and information about their run time and error rates.

An example Telemetry Payload looks like:

```ts
// prettier-ignore
const payload = {
  guid: "tcs_67f000f7-1468-4141-93cc-eacac42708a9", // randomly generated per cluster, stored in Settings
  name: "Evan-Development-Cluster", // optional, set in Settings.
  license: "", // TODO
  metrics: [
    // information about how Grouparoo is being operated
    { collection: "cluster", topic: "workers", aggregation: "count", count: 10, },
    { collection: "cluster", topic: "os", aggregation: "exact", value: "darwin/19.5.0", }, // `${process.platform}/${os.release()}`

    // versions of the plugins installed
    { collection: "cluster", topic: "plugin", aggregation: "exact", key: "@grouparoo/core", value: "1.2.3", },
    { collection: "cluster", topic: "plugin", aggregation: "exact", key: "@grouparoo/postgres", value: "1.2.3", },

    // usage counts
    { collection: "totals", topic: "profiles", aggregation: "count", count: 100, },
    { collection: "totals", topic: "groups", aggregation: "count", count: 10 },
    { collection: "totals", topic: "sources", aggregation: "count", count: 5 },

    // usage by source & destination
    { collection: "sourceTotals", topic: "@grouparoo/postgres", aggregation: "count", imports: 10000, exports: 0, runs: 100, },
    { collection: "destinationTotals", topic: "@grouparoo/mailchimp", aggregation: "count", imports: 0, exports: 10000, runs: 50, },


// Where the data is sent
fetch("https://telemetry.grouparoo.com/api/v1/telemetry", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});
```

You can see the full details of which data we are collecting and how we collect it [here](https://github.com/grouparoo/grouparoo/blob/master/core/api/src/modules/telemetryReporters.ts).

## What about Sensitive or Customer Data?

We do not collect any metrics which may contain sensitive data.

This includes, but is not limited to: environment variables, file paths, contents of files, logs, or serialized JavaScript errors. We will only collect and store information in aggregate.

We take your privacy and our security very seriously. If you find that information is being sent to our Telemetry servers, or that our Telemetry tooling can be exploited, please [let us know in accordance with our Security Policy](https://github.com/grouparoo/grouparoo/security/policy)

## Will This Data Be Shared?

The data we collect is default-anonymous, not traceable to the source, and only meaningful in aggregate form. No data we collect is personally identifiable.

In the future, we plan to share relevant data with the community through public dashboards (or similar data representation formats).

## How do I Opt-Out?

You can disable Grouparoo's Telemetry collection by setting the `GROUPAROO_TELEMETRY_ENABLED` environment variable to `false` or `0`. The `telemetry` task will still run periodically in your cluster, but no data will be sent.

## Third Party Telemetry

Grouparoo relies on a number of other packages, some of which may include their own telemetry. The following list includes packages known to collect their own telemetry and links to documentation about it, including how to disable it.

- **`next.js`**: The front-end framework in use by Grouparoo. Learn more at https://nextjs.org/telemetry
