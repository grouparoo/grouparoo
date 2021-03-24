# @Grouparoo/Pipedrive

## A note on permissions

By default, non-admin accounts do not have permission to delete Persons as well as creating custom Person Fields. These permissions will need to be granted to be able to delete people and manage group membership, respectively. To learn more about how group memberships are handled, refer to the next section.

You can read more about Permission Sets in Pipedrive [here](https://support.pipedrive.com/en/article/permission-sets).

## Groups

[Filters](https://support.pipedrive.com/en/article/filtering) will automatically be created for configured groups. A custom field will also be created for each group to keep track of group membership. The filter and field will be prefixed by `In Group: `, so the name of the Filter and Person Field that will be created for the group "High Value" would be `In Group: High Value`.

To support this functionality, the account will need to have the required permissions to create new custom fields.

## Attribution

The Pipedrive icon used in this plugin is from https://www.pipedrivedesign.com/#logo
