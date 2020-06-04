# @grouparoo/client-web

Grouparoo provides a javascript library for tracking events from browsers and sending them to your Grouparoo server.

## Install

You can include this library in a few ways:

**Javascript / Typescript Module**

For use in environments that will be compiled, ie: React or Webpack.

```ts
import { GrouparooWebClient } from "@grouparoo/client-web";
const client = new GrouparooWebClient({
  host: "https://grouparoo.my-company.com",
  apiKey: "abc123zzz",
});
```

**Script Tag**

```html
<html>
  <head>
    <script
      type="application/javascript"
      href="https://grouparoo.my-company.com/public/javascript/grouparooWebCleint.js"
    />
  </head>

  <script>
    const client = new GrouparooWebClient({
      host: "https://grouparoo.my-company.com",
      apiKey: "abc123zzz",
    });
  </script>
</html>
```

To initialize a client, you'll need to provide:

- **host** (required): The publicly-available URL of your Grouparoo server/cluster.
- **apiKey** (required): An API Key that you have generated in your Grouparoo server, with `write` access to the `events` topic.
- **path** (optional): The route to post events too. Default: `/api/v1/track`
- **anonymousId** (optional): An ID you would like to use for the `anonymousId` for this client. By default, we will generate a unique UUID for this browser and store it in a cookie for future use.
- **errorHandlers** (optional): An array of functions to pass errors too. This is helpful if you want to display tracking errors to the user, or log them with a tool like New Relic.
- **logging** (optional): Should tracking events be logged to browser console? Default: `false`
- **cookie** (optional): What is the name of the cookie to store the `anonymousId`? Default: `grouparoo-anonymous-id`
- **cookieTTL** (optional): How long should the tracking cookie exist for? Default: 90 days.
  - This setting will effect your session duration for `new_session` events triggered the `page` higher-order event.

## Creating Events

**Track**

To create an event, call the `track` method on the client with a `type` and any additional data you want to store about the event:

```ts
// track an arbitrary event
// API: client.track(event-name, data?)
client.track("button-click", { page: "/home", button: "learn-more" });
```

This will send the event, time, and associated user information (`anonymousId` and `userId` if set) to your Grouparoo server.

**Identify**

A special event called `identify` should be called whenever you know a way to de-anonymize this user. This usually corresponds with a `sign-in` event. The `identify` event requires your application's unique id for this user set as the `userId` argument.

```ts
// The user successfully signed in as user #123
// API: client.identify(userId, data?)
client.identify(123, { firstName: "Mario", lastName: "Mario" });
client.track("sign-in", { page: "/sign-in" });
```

From this point onward, all events tracked will be linked to user `#123`. Grouparoo will also associate all previous events from this session (with the same `anonymousId`) to user `#123`.

The second argument to `identify`, `data`, will _not_ override profile data that Grouparoo has obtained from your Sources. However, it may be useful to record related identifying information about the profile at the time of `identify`. This information will be stored as data on the Event, and able to be later utilized within Grouparoo.

**Reset**

The `reset` method will delete all data stored, and reset the `userId` and `anonymousId`. Use this method when a user logs out.

```ts
// The user has logged out
// API: client.reset(newAnonymousId?)
client.reset();
```

## Higher-Order Events

This library also comes with a few higher-order events geared towards making it easy to track the performance of your websites.

**Page**

The `page` method will create a track event pre-filled with some useful data about the page. The `page` event will also create a `new_session` event for the first time that an `anonymousId` has viewed any page.

The `page` method will also append all query string variables. This will ensure that data about your email, social media, and ad campaigns is properly associated to the right visitors.

```ts
// track a page
// API: client.page(category?, title?, data?)
client.page("help-pages");

// which is equivalent to
client.track("page", {
  category: "help-pages", // from "page"
  title: window.document.title, // from "title"
  url: window.location.href,
  path: window.location.pathname,
  referrer: window.document.referrer,
  // ...and data from the URL Query String
  UTM_SOURCE: "adwords",
  UTM_MEDIUM: "cpc",
  UTM_CAMPAIGN: "fall-campaign-mushroom-keywords",
});

client.track("new_session");
```
