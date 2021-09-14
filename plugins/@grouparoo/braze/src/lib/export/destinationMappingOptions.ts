import { DestinationMappingOptionsMethod } from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async () => {
    return {
      labels: {
        property: {
          singular: "Braze User Profile Field",
          plural: "Braze User Profile Fields",
        },
        group: {
          singular: "Braze Subscription Group",
          plural: "Braze Subscription Groups",
        },
      },
      properties: {
        required: [{ key: "external_id", type: "string" }],
        known: [
          { key: "email", type: "email", important: true },
          { key: "first_name", type: "string", important: true },
          { key: "last_name", type: "string", important: true },
          { key: "phone", type: "phoneNumber", important: false },
          { key: "gender", type: "string", important: false },
          { key: "country", type: "string", important: false },
          { key: "date_of_first_session", type: "string", important: true },
          { key: "date_of_last_session", type: "string", important: true },
          { key: "dob", type: "string", important: true },
          { key: "email_subscribe", type: "string", important: false },
          {
            key: "email_open_tracking_disabled",
            type: "boolean",
            important: false,
          },
          {
            key: "email_click_tracking_disabled",
            type: "boolean",
            important: false,
          },
          { key: "facebook", type: "string", important: false },

          { key: "home_city", type: "string", important: false },
          { key: "image_url", type: "string", important: false },
          { key: "language", type: "string", important: false },
          { key: "marked_email_as_spam_at", type: "string", important: false },
          { key: "push_subscribe", type: "string", important: false },
          { key: "time_zone", type: "string", important: false },
          { key: "twitter", type: "string", important: false },
        ],
        allowOptionalFromProperties: true,
      },
    };
  };
