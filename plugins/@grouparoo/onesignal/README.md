# @grouparoo/onesignal

A [Grouparoo](https://www.grouparoo.com) plugin for connecting to [One Signal](https://onesignal.com/).

Learn more about Grouparoo Plugins at [www.grouparoo.com/docs/integrations](https://www.grouparoo.com/docs/integrations).

## Installation

In your Grouparoo project, run `grouparoo install @grouparoo/onesignal`.

## Tag normalization

All tags are normalized to conform to OneSignal's best practices. More specifically, only lowercase letters, numbers and underscores are allowed. Any special characters and spaces will be converted to an underscore (`_`). This means that the tag `My cool-tag!` will be transformed to `my_cool_tag_`.

## Groups

Groups are sent to OneSignal as tags on players.
`in_` will be prepended to the configured group name to represent group membership. Note that tag normalization still applies here.

**Example:** If the player is in the group `High Value Customers`, the tag `in_high_value_customers` will be set to `true` on OneSignal.

For users that are not in the group, the tag will not be set.

## Attribution

The OneSignal icon used in this plugin is from https://onesignal.com/blog/onesignal-is-hiring-a-distributed-systems-architect/
