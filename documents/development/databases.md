# Working with Grouparoo Databases

## Grouparoo Migration Guidelines

- No sequential IDs.  We use app-generated unique IDs for primary keys (UUIDs).  We are working with large datasets and database that sometimes can't count. 
- Every table gets`guid`, `createdAt` and `updatedAt`, even if it seems silly now... we will need it eventually!
- No `enums`, use `VARCHAR(191)`. Migrating an enum is too hard and database-specific. We can use the ENUM type in the model for validations
- No default values for strings. Define defaults in the model. Do mark columns as non-null.
- No foreign key constraints in the database... do these checks in the model. But, it's probably a good idea to add a search index to these
- All guids/uuids are 40 characters long - a real V4 UUID (36 characters) + 3 letter prefix + underscore, ie: `app_168c4564-e389-4fbd-8338-db04d62022ba`
