# Grouparoo Product Concepts

## Profiles

Profiles represent individual people. For your specific company or organization, that may mean:

- Leads
- Customers
- Users
- Visitors to your site or app

## Profile Properties

Profile Properties are data associated with a profile. You can define Profile Properties based on data that exists in your data Sources.

Profile Properties are given a specific type, letting us know if they are a `number`, `date`, or `string`. Having a type helps Grouparoo know how to display this data and send it to Destinations.

Profile Properties can also be **Unique** or **Not Unique**. Defining Uniqueness is needed in order to create and merge Profiles from various sources without creating duplicate Profiles.

Common examples of **Unique** Profile Properties are:

- `Email Address`
- `User ID`

Common examples of **Not Unique** Profile Properties are:

- `First Name`
- `Last Name`
- `Date of Last Purchase`

## Profile Property Rules

Profile Property Rules define how a property gets pulled from a Source. Every Source might be structured in slightly different ways, so Grouparoo plugins make it easy for you to define Profile Property Rules.

For example, you might define a Profile Property Rule called `first_name` which you are pulling from your product database via the `@grouparoo/postgres` plugin, or you might define `number_of_purchases`, which you are using the Grouparoo Event system to count up.

## Events

Grouparoo also supports Events through our various client-side libraries. Events are best used for tracking user behavior that you usually wouldn't keep in a data warehouse or database such as:

- `Page Viewed`
- `Button Clicked`
- `Session Created`

Grouparoo Events are flexible and allow you to track all kinds of behaviors. Once you start tracking Events, you can then create Profile Property Rules based on Events to associate them with Profiles.

## Groups

Groups are a collection of Profiles that you can define and filter. These filters and rules are built to be easy-to-understand by non-technical users.

Let's say we wanted to make a Group of high-value customers who recently abandoned the checkout process. Here is an example of the rules to define this group:

- `[Total Customer Value] [is greater than] [$50]`
- `[Abandoned Cart] [in the last] [3 days]`

With these rules, you have a Group consisting of every user who has purchased more than \$50 and recently abandoned their cart. You can then synchronize that group in real-time to all of your Destinations to then communicate with them.

There are 2 types of groups: **Calculated** and **Manual**

**Calculated Groups** are always kept up to date for you by Grouparoo. As new Profiles are created, or the Profile Properties of existing Profiles are changed, Group membership will automatically be adjusted.

**Manual Groups** only change when you add or remove Profiles.

## Destinations

Destinations are where you want Grouparoo Profiles and Groups to be sent. Often Destinations are customer marketing tools such as email marketing or push notification services, though databases and data warehouses can also function at Destinations.

When you set up a Destination in Grouparoo, you will choose which Groups as well as which Profile Properties you will send to each Destination. You will have control and visibility over what data gets sent to each Destination.

Grouparoo will keep the Profile and Group data in your Destinations up-to-date in real time.

Some of our current Destinations include:

- Mailchimp
- Hubspot
- Sailthru
- MySQL
- PostgreSQL
- CSV

We are always adding support for more Destinations. If you have a request, please let us know [here](https://www.grouparoo.com/meet)!

## Sources

Sources are the tools that Grouparoo will connect with to pull in customer data. A Source can be anything that contains customer data such as data warehouses, databases, and CRMs.

When you add a new Source, you will define how that Source connects with the Profiles that already exist in Grouparoo through a `Unique` Profile Property.

Some of our current Sources include:

- PostgreSQL
- MySQL
- Google BigQuery
- CSV
- Google Sheets

We are always adding support for more Sources. If you have a request, please let us know [here](https://www.grouparoo.com/meet)!
