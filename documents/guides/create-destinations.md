# Sending to Destinations

Now that you've defined Profiles, Profile Properties, and Groups, you can now send your Customer Data to [Destinations](https://github.com/grouparoo/grouparoo/blob/master/documents/product/concepts.md#destinations). Destinations are tools where you want to send your Customer Data so you can take action on your workflows. These Destinations can be Email Marketing tools like Marketo, Sendgrid, or Braze. Destinations can also be data tools like Redshift or Snowflake.

Here's how to send Profiles, Groups, and Profile Properties to Destinations:

## 1. Add an App

See our [guide](https://github.com/grouparoo/grouparoo/blob/master/documents/guides/add-apps.md#destinations) on how to add your Destination App.

## 2. Create a Destination

Once you've added the App, you can create a Destination. Click on `Destinations` in the left-nav and then click `Add new Destination`.  
![New Destination List](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-new-destination-list.png)

Select the type of App where you want to send Customer Data.  
![New Destination Type](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-new-destination-type.png)

Once you've selected the type of App, the specific questions and settings will vary. Here is Mailchimp, as an example. Mailchimp has Audiences that each have a `listId`. You can choose the specific `listId` you'll want to set for this Destination.  
![New Destination Mailchimp](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-new-destination-mailchimp.png)

Now you can define what Groups and what Profile Properties you want to send to your Destination. You can choose to send `All Groups` or a specific Group to send. This mapping defines which Profiles, or **Who** gets sent to the Destination.  
![New Destination Group Choice](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-new-destination-choose-groups.png)

Next you can choose which Profile Properties you want to send to your Destination. Usually a Unique Profile Property such as `email` or `user id` will be required so the Destination knows how to identify Profiles and to keep Profiles separate.  
![New Destination Properties](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-new-destination-properties-mapping.png)

Lastly, you can choose how Group membership shows up in your destination. This mapping lets you decide how Groups are represented in your Destination. Often Groups are shown as Lists, Audiences, or Tags in these Destinations.
![New Destination Group Membership](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-new-destination-group-membership.png)

You're all set! 🎉 Your Profiles, Profile Properties, and Groups are all synchronized in real-time across your Sources and Destinations. As your customers take actions, Grouparoo will automatically detect changes in your Sources, update Profiles and Groups, and send them to your Destinations.

If you have any additional questions, please let us know through our [support form](https://github.com/grouparoo/grouparoo/issues/new/choose).
