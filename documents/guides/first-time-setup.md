# Setting up Grouparoo for the first time

If you need help installing Grouparoo, please go to our [Getting Started](https://github.com/grouparoo/grouparoo/blob/master/documents/deployment/getting-started.md) guide.

Once you've installed Grouparoo, the first step is to get your customer data into Grouparoo. There are a few steps to get started:

## 1. Add an App

The first thing you need to do is to add an App. Apps are how Grouparoo can connect to any number of different tools such as your databases, data warehouses, and other 3rd party tools.

You can add an app either from the dashboard or from the left-navigation.  
![Add App](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-app.png)  
![Add App Left Nav](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-app-nav.png)

We recommend starting with the App that has the majority of your customer data such as a data warehouse or production database replica. Once you've chosen an App, add the connection details you'll need to connect to this App.

![Add App Left Nav](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-app-postgres.png)

## 2. Create a Source

Now that you've added an App, your first step is to create a [Source](https://github.com/grouparoo/grouparoo/blob/master/documents/product/concepts.md#sources). A Source is a definition for how you pull data from an App into Grouparoo.

To start, you'll click on the Sources navigation in the left-nav and click `Add new Source`.  
![Add new source](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-new-source.png)

Then you'll choose the kind of Source you'd like to create. The choices shown will be based on which Apps you've already connected. If you don't see the App you want to use, you can add a new App.
![Add new postgres source](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/add-new-source-choose-app.png)

Once you've chosen the App, you will name your Source and identify the table with user data that you want to pull into Grouparoo.  
![New postgres source](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/new-source-postgres.png)

After you've chosen the database table that contains your user data, you will need to indicate what makes your users unique. Often a unique identifier is a `user id`, `uid`, `guid`, or `email`.

### Create your first Profile Property

You will also create your first Profile Property rule. A Profile Property rule is how you pull data from your Source and add it directly onto a Profile in Grouparoo. In this first case, you will map it directly to the unique identifier for your users.
![First Profile Property](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/new-source-bootstrap.png)

### Add a Schedule to your Source

A Schedule defines how often Grouparoo will check your Source for new data. When there are additions or changes in your data Source, Grouparoo will pull that data in based on your Schedule settings.

You can choose how often Grouparoo will check your Source for new data. You will also point Grouparoo to the column that indicates when a row in your users table has been updated, such as an `updated_at` timestamp column.  
![Schedule](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/new-source-schedule.png)

Now your first Source is all set up! 🎉  
Grouparoo is now regularly pulling in data from your Source.

### Adding more Profile Properties

You can have multiple Profile Properties defined from the same Source. You can create new Profile Properties from the Profile Properties list:  
![New Profile Properties](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/new-profile-properties.png)

You can also create new Profile Properties by going to a Source's detail page.  
![New Profile Properties Source Details](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/guides/new-profile-properties-source-detail.png)

# Next steps

- Repeat the steps above to create more Sources and/or Profile Properties
- [Create Groups](https://github.com/grouparoo/grouparoo/blob/master/documents/guides/create-groups.md) of Profiles (cohorts or segments)
