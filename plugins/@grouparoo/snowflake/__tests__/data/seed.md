## Snowflake Seed Data

These are the tables that should be loaded into Snowflake. The Snowflake location should be put in this tests `.env` file like the example.

They should have the same names as the files themselves (without the csv and in uppercase).

PROFILES

```
CREATE TABLE "SAMPLE_SOURCES"."PUBLIC"."PROFILES" ("ID" INTEGER NOT NULL, "ACCOUNT_ID" INTEGER NOT NULL, "FIRST_NAME" STRING, "LAST_NAME" STRING, "EMAIL" STRING, "GENDER" STRING, "IP_ADDRESS" STRING, "IOS_APP" BOOLEAN, "ANDROID_APP" BOOLEAN, "VIP" BOOLEAN, "LTV" DOUBLE, "DATE" DATE, "STAMP" TIMESTAMP);
```

PURCHASES

```
CREATE TABLE "SAMPLE_SOURCES"."PUBLIC"."PURCHASES" ("ID" INTEGER NOT NULL, "PROFILE_ID" INTEGER, "PURCHASE" STRING, "AMOUNT" DOUBLE, "DATE" DATE, "STAMP" TIMESTAMP);
```

ACCOUNTS

```
CREATE TABLE "SAMPLE_SOURCES"."PUBLIC"."ACCOUNTS" ("ID" INTEGER NOT NULL, "NAME" STRING, "PLAN" STRING);
```
