# Working with Grouparoo Databases & Models

## Grouparoo Migration Guidelines

- No sequential IDs. We use app-generated unique IDs for primary keys (UUIDs). We are working with large datasets and database that sometimes can't count.
- Every table gets`guid`, `createdAt` and `updatedAt`, even if it seems silly now... we will need it eventually!
- No `enums`, use `VARCHAR(191)`. Migrating an enum is too hard and database-specific. We can use the ENUM type in the model for validations
- No default values for strings. Define defaults in the model. Do mark columns as non-null.
- No foreign key constraints in the database... do these checks in the model. But, it's probably a good idea to add a search index to these
- All guids/uuids are 40 characters long - a real V4 UUID (36 characters) + 3 letter prefix + underscore, ie: `app_168c4564-e389-4fbd-8338-db04d62022ba`

## Grouparoo Model Guidelines

- No private methods. This breaks compatibility between Typescript-exported model definitions (to JS) and the TS files themselves. We require this compatibility as plugins both source and export to core... so a single runtime's require path may be `core/dist -> plugin/src` or even `core/dist -> plugin/dist -> core/src`
  - Instead, Pretend it's 1999 and prefix methods you want to be private with `_`, i.e. `async _privateMethod()`
- New models need to be enumerated a few places:
  - `Index.ts`
  - `SpecHelper.ts`
  - `modules/plugin.ts`
- In order to keep models _smaller_, we make the distinction between the Model itself and ModelOps
  - Table/Column definitions, Class methods, Setters, Getters, and Validations belong on the Model
  - Methods that mutate the Model (or more than one Model), or interact with a Plugin, belong in a ModelOp

## Other Notes

- If you are loading a model in an initializer in the `@grouparoo/core` project, you need to load it from Core's main export, not the Model file itself. ie: `import {Profile} from '../index'` not `import {Profile} from '../models/Profile'`.
