# Grouparoo Data Flow

The Grouparoo Application's main job is to collect data from `Sources` and `Events`, store them to build a robust `Profile`, build `Groups` of `Profiles`, and finally syndicate this data with `Destination`s, your other marketing tools.

This document is place to centrally describe how all of this works!

---

## Core Data Models

### Profiles and Profile Properties

The main object in Grouparoo is a `Profile`. A profile by itself is simply a `guid` and the time it was created and last updated. It is a "join table" to collect many `Profile Properties`, which act as a key-value store for the data about `Profiles`. For example, a common `Profile Property` would be `key='email', value='evan@grouparoo.com', type='string'`. We also store when each `Profile Property` was created and updated.

### Groups

`Groups` are a collection of `Profiles`.

There are 2 types of `Groups`: "Manual" and "Calculated".

- Manual `Groups` contain profiles that a Grouparoo user has added to the group. The membership of Manual `Group`s does not change.
- Calculated `Groups` are constantly recalculated against `Profile Properties`. These dynamic lists of `Profiles` are how you build up cohorts that change over time. You may have a group of `Abandoned Carts Last Week` that checks a `Profile Property` of "last_abandoned_card_date" and makes sure it was within the last 7 days. You might also choose to segment your customers by the language they speak with a "Locale" `Profile Property`.

Profiles can be in many groups at once.

### Apps

Apps are how you define connections to your tools like your databases, email vendors, CRMs, etc. With each `App` you tell Grouparoo how to connect so we can import and export your data.

### Profile Property Rules

`Profile Property Rules` describe each `Profile Property` and how they work. It's a bit like a "Schema" for the `Profiles`:

- What `Profile Properties` exist? You cannot just add _any_ `Profile Property` to a `Profile`. You need to define it first.
- Is this `Profile Property` unique? If it is, Grouparoo will make sure that no other Profile can have the same value for that `Profile Property`. Common examples would be `email` or `user_id`.
- What is the type of this `Profile Property`? A number, a string? We actually stringify all of our Profile Property data for searching, but wen we render it back out again, we convert it. This also helps us know how to build search queries for Calculated `Groups`.
- How is this `Profile Property` to be retrieved? By which App? We talk more about this below.

Every `Profile Property` also includes a reference to an app (perhaps "MySQL-Datawarehouse") and a statement/query/option of how to get it for each Profile. Grouparoo will always be keeping your data in sync so we always need to know how to retrieve a `Profile`'s `Profile Properties`.

- For an `App` "MySQL-Datawarehouse" which is linked to the `Profile Property Rule` for "First Name(string)" you might provide a SQL statement like `select first_name from users where users.id={{profile.user_id}}`.
- You can also have more complex queries, like you could connect the `App` "MySQL-Datawarehouse" to the `Profile Property Rule` for "ltv(number)" which might do `select (sum(purchases.total) - sum(refunds.total)) as ltv from users join purchases on purchases.user_id = users.id join refunds.user_id = users.id where users.id={{profile.user_id}}`
- For a an app `CSV` responsible for "VIP(boolean)" you might choose "column" from a dropdown indicating that any column labeled "VIP" should be allowed to set this `Profile Property`

---

## Data into Grouparoo

### Import Schedules and Runs

When you add an `App` to Grouparoo, you can also configure if you want Grouparoo to periodically check that app for new data. This might be accomplished by checking a database table for new/updated rows or asking an API for recent changes. This is called an `Import Schedules`. You can create many `Import Schedules` from a single `App`.

Perhaps the `App` "MySQL-Datawarehouse" has 4 `Import Schedules`:

1. "MySQL-Datawarehouse:users". This Rule checks the "users" table every 10 minutes for new or updated records
2. "MySQL-Datawarehouse:carts". This Rule checks the "carts" table every hour for only new carts
3. "MySQL-Datawarehouse:purchase". This Rule checks the "purchase" table every hour for only new purchases.
4. "MySQL-Datawarehouse:refunds". This Rule checks the "refunds" table every hour for only new refunds

Each `App` works a little differently, but you will be asked what to check for and how often. Each instance of a periodic check is called a `Run`. When new data is found, the `Run` will produce `Events`.

Some `Apps` are not able to be used as a recurring `Import Schedules`, and need to be triggered manually, such as uploading a CSV with profile data.

### Inbound Events

Events are either sent directly to Grouparoo (via webhook or API), or created when a `Import Schedules'` `Run` finds new or updated data. Either way, an `Event` tells Grouparoo that something has changed that we should take note of.

Most events trigger the update of a profile. An event can be as simple as `{user_id: 3}`. This tells us that we should update the `Profile` we have for user #3, and if we don't have a `Profile` for User #3, we should create one. More advanced events can contain data to be saved on the profile directly like `{user_id: 3, first_name: 'Evan'}` or transient data to be exported to `Apps` that care about it, like `{user_id: 3, action: 'item_added_to_cart', items: ['red shirt']}`.

We know that the event data we get should be saved to the related profile if:

1. The event's payload contains a unique `Profile Property` as defined by the `Profile Property Rules`
2. The other data key-value pairs are also defined by the `Profile Property Rules`.

Events are stored in Grouparoo for later use. You can choose to delete old events after a period of time.

### Profile Hydration

Any time an event is recorded by Grouparoo, and that event can be linked to a `Profile`, Grouparoo will fully update that profile, checking all the `Apps` that are connected to it via `Profile Property Rules` and asking for new data. In this way, you can be sure that your `Profiles` are always up to date, and we can recover quickly from any new or missed data/events. We call this step "Profile Hydration".

This means that if an event comes in from the "MySQL-Datawarehouse:purchase" `Import Schedules`, Grouparoo will automatically check all `Profile Properties`, including "ltv", "first_name" and everything else.

---

## Data out of Grouparoo

### Export Schedules and Runs

Similar to `Import Schedules` running on a schedule, `Export Schedules` also run on a schedule, sending data out to a connected `App`, like your CRM tool. When configuring your `Export Schedules`, you'll be asked which `Groups` and `Profile Properties` you want to send (or all of them). You may want to sync "email" and "first_name" to your email tool for everyone in the `Groups` "lapsed customers" and "USA Customers" so you can send them a coupon as part of your re-engagement campaign. Oh, and the `Group` "lapsed customers" is Dynamic, based on LTV>0, and last_purchase at least 2 months ago, while "USA Customers" is Dynamic where locale=en-us... all of which Grouparoo is keeping up-to-date for you.

To accomplish this you, would create an `Export Schedules` for the `App` "Mailchimp", toggle on the "lapsed-customers" and "USA Customers" groups, and finally the requested `Profile Properties` of "email" and "first_name".

When Grouparoo sends data via an `Export Schedules`, this is also called a `Run`, in the "export" direction.

### Outbound Events

When configuring an `App`, you can also forward on Grouparoo events in addition to syncing profiles. This is useful if you have tools that need to respond to customer behavior in real time, or you want to integrate with other parts of your application that already send and process events. Grouparoo will forward on the event, but we will add all the data we know about the profile in question so your CRM tools can create more meaningful messages.

How you configure outbound events will be different for each `App`, but the following is a common example:

For example, perhaps you have a `Import Schedules` called "MySQL-Datawarehouse:carts" that detects that user #3 created a cart last week, but still has an LTV of 0, meaning they haven't made a purchase yet.

1. The `Import Schedules` creates a `Run` that creates an `Event` that looks like `{user_id: 3, cart_abandoned_at "Jan 5, 2019", cart_items: ['red shirt']}`
2. The `Profile` for user #3 now has the `Profile Property` cart_abandoned_at set. cart_items is not saved onto the "Profile", as there is no "Profile Property Rule" for cart_items.
3. Grouparoo Hydrates the `Profile`, ensuring that we know the customer's name, email address, and indeed that their LTV is still 0.
4. The `App` "Mailchimp" is looking for all events that match "cart_abandoned_at" because it wants to send an email reminding the customer about the items in the cart.
   - The `App` is subscribed to events that look like ""cart_abandoned_at".
   - The `App` Mailchimp is already configured (above) to only ask for the "first_name" and "email" `Profile Properties` for folks in the `Groups` "lapsed-customers" and "USA Customers". User #3 happens to be in the "Customers USA" group, so we can continue sending this data to Mailchimp
   - This means Grouparoo will pass the event onto Mailchimp, but we will add extra data about the `Profile`, and Grouparoo will wait until the Hydration step is complete. That means the final event Grouparoo sends to Mailchimp might look like:

```json
{
  "cart_abandoned_at": "Jan 5, 2019",
  "cart_items": ["red shirt"],
  "profile": {
    "user_id": 3,
    "first_name": "Evan",
    "email": "evan@grouparoo.com"
  }
}
```

The Grouparoo `App` for Mailchimp will handle using the Mailchimp API to send the event for you.

---

## Plugins and the Grouparoo Marketplace

Plugins are Grouparoo's way of providing more Apps to Grouparoo, allowing you to import and export data from more and more sources and destinations. Plugins can provide an `App`, which in turn can be used for `Schedules`, and able to handle `events` and `runs`, as well as testing the connection and providing sample data.
