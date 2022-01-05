# @grouparoo/customerio

A [Grouparoo](https://www.grouparoo.com) plugin for connecting to [customer.io](https://customer.io/).

Learn more about Grouparoo Plugins at [www.grouparoo.com/docs/integrations](https://www.grouparoo.com/docs/integrations).

## Installation

In your Grouparoo project, run `grouparoo install @grouparoo/customerio`.

## Groups

Groups are sent to customer.io as attributes on customers.
`In ` will be prepended to the configured group name to represent group membership.

**Example:** If the customer is in the group `High Value Customers`, the attribute `In High Value Customers` will be set to `true` in customer.io.

For customers that are not in the group, the attribute will not be set.

## Attribution

The customer.io icon used in this plugin is from https://app.livestorm.co/customer-io
