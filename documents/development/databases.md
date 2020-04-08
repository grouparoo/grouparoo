# Grouparoo Migration Guidelines

- every table gets`guid`, `createdAt` and `updatedAt`, even if it seems silly now... we will need it eventually
- no `enums`, use `VARCHAR(191)`. Migrating an enum is too hard and database-specific. We can use the ENUM type in the model for validations
- no default values for strings. define defaults in the model. do mark columns as non-null
- no foreign key constraints in the database. do these checks in the model. But, it's probably a good idea to add a search index to these
- all guids/uuids are characters long - a real UUID + 3 letter prefix + underscore
