const nock = require("nock");

nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .get("/crm/v3/schemas")
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      results: [
        {
          labels: { singular: "Grouparoo object", plural: "Grouparoo objects" },
          requiredProperties: ["grouparoo_object_property"],
          searchableProperties: ["grouparoo_object_property"],
          primaryDisplayProperty: "grouparoo_object_property",
          secondaryDisplayProperties: [],
          archived: false,
          restorable: true,
          metaType: "PORTAL_SPECIFIC",
          id: "3604285",
          fullyQualifiedName: "p20858235_grouparoo_object",
          createdAt: "2021-10-13T22:50:04.581Z",
          updatedAt: "2021-10-13T22:50:04.581Z",
          objectTypeId: "2-3604285",
          properties: [
            {
              updatedAt: "2021-10-13T22:50:04.671Z",
              createdAt: "2021-10-13T22:50:04.671Z",
              name: "grouparoo_object_property",
              label: "Grouparoo object property",
              type: "string",
              fieldType: "text",
              description: "",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              archived: false,
              hasUniqueValue: false,
              hidden: false,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: false,
                readOnlyValue: false,
              },
              formField: true,
            },
            {
              name: "hs_all_accessible_team_ids",
              label: "All accessible team IDs",
              type: "enumeration",
              fieldType: "checkbox",
              description:
                "The team IDs, including up the team hierarchy, corresponding to all owner referencing properties for this object, both default and custom",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              hasUniqueValue: false,
              hidden: true,
              hubspotDefined: true,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: true,
                readOnlyValue: true,
              },
              formField: false,
            },
            {
              name: "hs_all_assigned_business_unit_ids",
              label: "Business units",
              type: "enumeration",
              fieldType: "checkbox",
              description: "The business units this record is assigned to.",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              hasUniqueValue: false,
              hidden: true,
              hubspotDefined: true,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: true,
                readOnlyValue: false,
              },
              formField: false,
            },
            {
              name: "hs_created_by_user_id",
              label: "Created by user ID",
              type: "number",
              fieldType: "number",
              description:
                "The user that created this object. This value is automatically set by HubSpot and may not be modified.",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              hasUniqueValue: false,
              hidden: false,
              hubspotDefined: true,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: true,
                readOnlyValue: true,
              },
              formField: false,
            },
            {
              name: "hs_createdate",
              label: "Object create date/time",
              type: "datetime",
              fieldType: "date",
              description:
                "The date and time at which this object was created. This value is automatically set by HubSpot and may not be modified.",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              hasUniqueValue: false,
              hidden: false,
              hubspotDefined: true,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: true,
                readOnlyValue: true,
              },
              formField: false,
            },
            {
              name: "hs_lastmodifieddate",
              label: "Object last modified date/time",
              type: "datetime",
              fieldType: "date",
              description:
                "Most recent timestamp of any property update for this object. This includes HubSpot internal properties, which can be visible or hidden. This property is updated automatically.",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              hasUniqueValue: false,
              hidden: false,
              hubspotDefined: true,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: true,
                readOnlyValue: true,
              },
              formField: false,
            },
            {
              name: "hs_merged_object_ids",
              label: "Merged object IDs",
              type: "enumeration",
              fieldType: "checkbox",
              description:
                "The list of object IDs that have been merged into this object. This value is automatically set by HubSpot and may not be modified.",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              hasUniqueValue: false,
              hidden: true,
              hubspotDefined: true,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: true,
                readOnlyValue: true,
              },
              formField: false,
            },
            {
              name: "hs_object_id",
              label: "Object ID",
              type: "number",
              fieldType: "number",
              description:
                "The unique ID for this object. This value is automatically set by HubSpot and may not be modified.",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              hasUniqueValue: false,
              hidden: false,
              hubspotDefined: true,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: true,
                readOnlyValue: true,
              },
              formField: false,
            },
            {
              name: "hs_unique_creation_key",
              label: "Unique creation key",
              type: "string",
              fieldType: "text",
              description: "Unique property used for idempotent creates",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              hasUniqueValue: true,
              hidden: true,
              hubspotDefined: true,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: true,
                readOnlyValue: true,
              },
              formField: false,
            },
            {
              name: "hs_updated_by_user_id",
              label: "Updated by user ID",
              type: "number",
              fieldType: "number",
              description:
                "The user that last updated this object. This value is automatically set by HubSpot and may not be modified.",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              hasUniqueValue: false,
              hidden: false,
              hubspotDefined: true,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: true,
                readOnlyValue: true,
              },
              formField: false,
            },
            {
              name: "hs_user_ids_of_all_notification_followers",
              label: "User IDs of all notification followers",
              type: "enumeration",
              fieldType: "checkbox",
              description:
                "The user IDs of all users that have clicked follow within the object to opt-in to getting follow notifications",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              hasUniqueValue: false,
              hidden: true,
              hubspotDefined: true,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: true,
                readOnlyValue: true,
              },
              formField: false,
            },
            {
              name: "hs_user_ids_of_all_notification_unfollowers",
              label: "User IDs of all notification unfollowers",
              type: "enumeration",
              fieldType: "checkbox",
              description:
                "The user IDs of all object owners that have clicked unfollow within the object to opt-out of getting follow notifications",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              hasUniqueValue: false,
              hidden: true,
              hubspotDefined: true,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: true,
                readOnlyValue: true,
              },
              formField: false,
            },
            {
              name: "hs_user_ids_of_all_owners",
              label: "User IDs of all owners",
              type: "enumeration",
              fieldType: "checkbox",
              description: "The user IDs of all owners of this object",
              groupName: "grouparoo_object_information",
              options: [],
              displayOrder: -1,
              calculated: false,
              externalOptions: false,
              hasUniqueValue: false,
              hidden: true,
              hubspotDefined: true,
              modificationMetadata: {
                archivable: true,
                readOnlyDefinition: true,
                readOnlyValue: true,
              },
              formField: false,
            },
          ],
          associations: [
            {
              fromObjectTypeId: "2-3604285",
              toObjectTypeId: "0-47",
              name: "grouparoo_object_to_meeting",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "13",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "0-47",
              toObjectTypeId: "2-3604285",
              name: "grouparoo_object_to_meeting",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "14",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "2-3604285",
              toObjectTypeId: "0-1",
              name: "grouparoo_object_to_contact",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "1",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "0-1",
              toObjectTypeId: "2-3604285",
              name: "grouparoo_object_to_contact",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "2",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "2-3604285",
              toObjectTypeId: "0-48",
              name: "grouparoo_object_to_call",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "5",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "0-48",
              toObjectTypeId: "2-3604285",
              name: "grouparoo_object_to_call",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "6",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "2-3604285",
              toObjectTypeId: "0-46",
              name: "grouparoo_object_to_note",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "7",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "0-46",
              toObjectTypeId: "2-3604285",
              name: "grouparoo_object_to_note",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "8",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "2-3604285",
              toObjectTypeId: "0-49",
              name: "grouparoo_object_to_email",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "11",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "0-49",
              toObjectTypeId: "2-3604285",
              name: "grouparoo_object_to_email",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "12",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "2-3604285",
              toObjectTypeId: "0-51",
              name: "grouparoo_object_to_conversation_session",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "9",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "0-51",
              toObjectTypeId: "2-3604285",
              name: "grouparoo_object_to_conversation_session",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "10",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "2-3604285",
              toObjectTypeId: "0-27",
              name: "grouparoo_object_to_task",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "3",
              createdAt: null,
              updatedAt: null,
            },
            {
              fromObjectTypeId: "0-27",
              toObjectTypeId: "2-3604285",
              name: "grouparoo_object_to_task",
              cardinality: "ONE_TO_MANY",
              inverseCardinality: "ONE_TO_MANY",
              id: "4",
              createdAt: null,
              updatedAt: null,
            },
          ],
          name: "grouparoo_object",
        },
      ],
    },
    [
      "Date",
      "Fri, 15 Oct 2021 15:05:43 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "69e9f2803d9ae07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3308c601-7c95-4b41-866a-98277bb0e97c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249995",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "99",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oNkM3w1t8jbOmKEDGNTYeu0jVEdDMSQOjzNfl%2FZvEGjM8tdUcKNZtDNj%2Fn10FWmN%2BoqzYlK9z1AtJA7rcR%2Fp5G0f0gEjAbikVdl6X5eUqsiGkwbAu9SUaTPyoskRuZbe"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
