# Create a Source

Now that you've added an App ([how to add Apps](https://github.com/grouparoo/grouparoo/blob/master/documents/guides/add-apps.md)), your first step is to create a [Source](https://github.com/grouparoo/grouparoo/blob/master/documents/product/concepts.md#sources). A Source is a definition for how you pull data from an App into Grouparoo.

To start, you'll click on the Sources navigation in the left-nav and click `Add new Source`.  
![Add new source](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-new-source.png)

Then you'll choose the kind of Source you'd like to create. The choices shown will be based on which Apps you've already connected. If you don't see the App you want to use, you can add a new App.
![Add new postgres source](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-new-source-choose-app.png)

Once you've chosen the App, you will name your Source and identify the table with user data that you want to pull into Grouparoo.  
![New postgres source](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/new-source-postgres.png)

### Connect this Source to Grouparoo Profiles

After you've chosen the database table that contains your user data, you will need to indicate what makes your users unique. Often a unique identifier is a `user id`, `uid`, `guid`, or `email`. If you already have a unique Profile Property defined in Grouparoo, you can map your Source to that Profile Property. If your Source has a new way of identifying profiles uniquely, you can create a new unique Profile Property.  
![First Profile Property](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/new-source-bootstrap.png)

### Add a Schedule

A Schedule defines how often Grouparoo will check your Source for new data. When there are additions or changes in your data Source, Grouparoo will pull that data in based on your Schedule settings.

You can choose how often Grouparoo will check your Source for new data. You will also point Grouparoo to the column that indicates when a row in your users table has been updated, such as an `updated_at` timestamp column.  
![Schedule](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/new-source-schedule.png)

# Next Steps

- [Creating Profile Properties](https://github.com/grouparoo/grouparoo/blob/master/documents/guides/create-profile-properties.md)
- [Creating Groups](https://github.com/grouparoo/grouparoo/blob/master/documents/guides/create-groups.md)
- [Creating a Destination](https://github.com/grouparoo/grouparoo/blob/master/documents/guides/create-destinations.md)
