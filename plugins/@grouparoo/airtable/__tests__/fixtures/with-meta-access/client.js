const nock = require("nock");

nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(
    200,
    {
      bases: [
        {
          id: "app21Qak1T4cGoiP7",
          name: "[CI Test] Marketing Campaign Tracking",
          permissionLevel: "create",
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1015",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:39 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwBPpNKjUo98tMdZ; path=/; expires=Sun, 08 Jan 2023 00:09:39 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1015",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/app21Qak1T4cGoiP7/tables")
  .once()
  .reply(
    200,
    {
      tables: [
        {
          id: "tbllaopqRMNISUAiH",
          name: "📣 Campaigns",
          primaryFieldId: "fldXl5MmXYEVxSdkP",
          fields: [
            {
              type: "singleLineText",
              id: "fldXl5MmXYEVxSdkP",
              name: "Campaign",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selGbc51zW9NNXioe",
                    name: "Development",
                    color: "cyanLight1",
                  },
                  {
                    id: "selcH0bR5RphHERXC",
                    name: "Planning",
                    color: "yellowLight1",
                  },
                  {
                    id: "self9uR9Ich39AMxc",
                    name: "Reviews",
                    color: "tealLight1",
                  },
                  {
                    id: "selDqi0T6dJ9Ei6I5",
                    name: "Published",
                    color: "greenLight1",
                  },
                  {
                    id: "selnxBXz0ZNqhJ4tI",
                    name: "On hold",
                    color: "grayBright",
                  },
                ],
              },
              id: "fldBVM4RoPpelu5ij",
              name: "Status",
            },
            { type: "multilineText", id: "fldnCtIwo2Mx1vUvv", name: "Goal" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selm9n1xW4BfTd2oJ",
                    name: "Awareness",
                    color: "blueBright",
                  },
                  {
                    id: "selcVFCFhg5WGJmFe",
                    name: "Consideration",
                    color: "cyanBright",
                  },
                  {
                    id: "selO9W3htGj6sD52O",
                    name: "Conversion",
                    color: "greenBright",
                  },
                ],
              },
              id: "fldaW3JeMwweQbWAr",
              name: "Funnel stage",
            },
            { type: "date", id: "fldyaPNESozF6ORmt", name: "Start date" },
            { type: "date", id: "fldieSrbU1PLmz4dm", name: "End date" },
            {
              type: "multipleLookupValues",
              id: "fldlkTL8a7A2dQqVj",
              name: "Next steps (from 📈 Results 2)",
            },
            {
              type: "multipleLookupValues",
              id: "flddnZ3LBa0SgVEmv",
              name: "Platform (from 💼 Ad sets table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2z61REOeVsBT50",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldFSRqEmj3PSjIzQ",
              },
              id: "fld1EoChduqR62TBG",
              name: "💼 Ad sets",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld40kIuGumksMtWL",
              },
              id: "fldyeOPwrLYBpg2Wf",
              name: "📈 Results (from 📈 Results table)",
            },
            { type: "singleLineText", id: "fldztbNH0WRvgGvbz", name: "All" },
          ],
          views: [
            { id: "viwgcdA7Qjq3WxpfO", name: "All campaigns", type: "grid" },
            {
              id: "viwfGRAKNvreWolEB",
              name: "👀 Campaign gantt view",
              type: "block",
            },
            {
              id: "viwqOY5fz4fFDEyW4",
              name: "Campaign status dashboard",
              type: "kanban",
            },
          ],
        },
        {
          id: "tbl2z61REOeVsBT50",
          name: "💼 Ad sets",
          primaryFieldId: "fldPcImpB9Lpi6pat",
          fields: [
            { type: "singleLineText", id: "fldPcImpB9Lpi6pat", name: "Ad set" },
            {
              type: "multipleAttachments",
              id: "fldLQH6t63Uhr2xr1",
              name: "Creative",
            },
            { type: "multilineText", id: "fldl8ubf25DCzQg1N", name: "Copy" },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selvoanFS5hzLKwF6",
                    name: "Facebook",
                    color: "blueLight2",
                  },
                  {
                    id: "selytfWYaGDDZWbDa",
                    name: "Google",
                    color: "cyanLight2",
                  },
                  {
                    id: "sellVrut6U0AzuA8k",
                    name: "LinkedIn",
                    color: "tealLight2",
                  },
                  {
                    id: "selv7nX8gxvaXxzfl",
                    name: "Twitter",
                    color: "greenLight2",
                  },
                  {
                    id: "selBn4R9apewbI6aF",
                    name: "Instagram",
                    color: "yellowLight2",
                  },
                  {
                    id: "selv9aI9AuUX7iGyJ",
                    name: "Print",
                    color: "orangeLight2",
                  },
                  {
                    id: "sel4J6O4favGEqXvd",
                    name: "Out of home",
                    color: "redLight2",
                  },
                ],
              },
              id: "fldPZY9GEYSXkdHhR",
              name: "Platform",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld1EoChduqR62TBG",
              },
              id: "fldFSRqEmj3PSjIzQ",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
          ],
          views: [
            {
              id: "viwGmtJrx4uVpEBSl",
              name: "👋 Ads and creative",
              type: "gallery",
            },
            { id: "viw6lvMRKfFpsI7FX", name: "All ad sets", type: "grid" },
            { id: "viwimOL0uAMSsHlEA", name: "Ad set platforms", type: "grid" },
          ],
        },
        {
          id: "tblyM3d3KYX1fBXpA",
          name: "📈 Results",
          primaryFieldId: "fldBVBhBGvpKisMXL",
          fields: [
            { type: "singleLineText", id: "fldBVBhBGvpKisMXL", name: "Name" },
            { type: "singleLineText", id: "fldj7GLWklUwld5VL", name: "Goals" },
            { type: "currency", id: "fldj2asLrPL9EBjrE", name: "Spend" },
            { type: "number", id: "fldGiTdXaCzx8AJiU", name: "Impressions" },
            { type: "formula", id: "flddZefEDkKO2p8DV", name: "CPM" },
            { type: "number", id: "fldHZVikg7Yb0zinz", name: "Clicks" },
            { type: "formula", id: "flddguD1i35j8EOet", name: "CPC" },
            { type: "number", id: "fldhjo5vgOioU4tbb", name: "Conversions" },
            { type: "formula", id: "fldwhATmMKwk2TmpA", name: "CPA" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selogRwMmpKScEQmO",
                    name: "Continue",
                    color: "greenBright",
                  },
                  {
                    id: "selyo5W8Gnj7vD5c0",
                    name: "Analysis",
                    color: "greenLight2",
                  },
                  {
                    id: "selYO2Ibe3uIZcoiC",
                    name: "Pause",
                    color: "yellowLight1",
                  },
                  { id: "sel7HfJDGHFRDOwMn", name: "Stop", color: "redLight1" },
                ],
              },
              id: "fldF1QM4qsQt89PXL",
              name: "Next steps",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldyeOPwrLYBpg2Wf",
              },
              id: "fld40kIuGumksMtWL",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2dYOTFAzBLHXTr",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldXuueviR4zEIxoL",
              },
              id: "fldDkCD5VNAtn3whs",
              name: "All",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl273pmkdKl4Khj1",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldJdckC0kUdBqFyS",
              },
              id: "fldp3kJcDgq7kLErz",
              name: "All copy",
            },
          ],
          views: [
            { id: "viw64acuQKHmLiVcM", name: "All campaigns", type: "grid" },
            { id: "viwIxDB1BzfeH6uc5", name: "✔️ Next steps", type: "grid" },
            {
              id: "viwAgQTVMjnQRBNjk",
              name: "Results at a glance",
              type: "gallery",
            },
          ],
        },
        {
          id: "tbl2dYOTFAzBLHXTr",
          name: "All",
          primaryFieldId: "fldY8dL1WwDtypOSc",
          fields: [
            { type: "singleLineText", id: "fldY8dL1WwDtypOSc", name: "Name" },
            {
              type: "autoNumber",
              id: "fldHfQDE4nbio5fMX",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldunITjAhRzl9FPS", name: "f_barcode" },
            { type: "button", id: "fldWlg8wweREbVsLW", name: "f_button" },
            { type: "checkbox", id: "fldv1t1tCm0igYOjo", name: "f_checkbox" },
            { type: "count", id: "fldeIrvY3msU4gLP2", name: "f_count" },
            { type: "createdBy", id: "fldUwCJ07pLvsysS8", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldSaG9q1h3urY18M",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldOGVHVThpiJDHtZ", name: "f_currency" },
            { type: "date", id: "fldKdj6tYh195UdwV", name: "f_date" },
            { type: "dateTime", id: "fldtppyB5tEZIMNuY", name: "f_dateTime" },
            { type: "duration", id: "fldCx1qp5VRuXrFCm", name: "f_duration" },
            { type: "email", id: "fldE7HaB2vir3yxCY", name: "f_email" },
            { type: "formula", id: "fldT8nRxPBOAYcJD7", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldKqa3OlDrjwQo36",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldsNCKa6kZWCsfnD",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fld10IVONir3kl9of",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldLz7K2GWznfGAxw",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldpeqVDxd4M1GlqM",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "fldr0uTGf9CulZWCs",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldDkCD5VNAtn3whs",
              },
              id: "fldXuueviR4zEIxoL",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldHe7e1nqsloTnEu",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldZ4SbJOAOKtBfQx", name: "f_number" },
            { type: "percent", id: "fldOQn8gmsdSPRbCA", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fld0MawcExfWmxzVv",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "flduXcitSIELy995e", name: "f_rating" },
            { type: "richText", id: "fldQweOqvhP08d0FQ", name: "f_richText" },
            { type: "rollup", id: "fldat1EdBLwAESHt6", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldoegdec5k5vax6Z",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldyQjptvPYQLuC3O",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldJD38QMDEPoumuM",
              name: "f_singleSelect",
            },
            { type: "url", id: "fld27b0jemF1gb9jk", name: "f_url" },
          ],
          views: [{ id: "viw0JWZy6z8zT7XAw", name: "Grid view", type: "grid" }],
        },
        {
          id: "tbl273pmkdKl4Khj1",
          name: "Empty",
          primaryFieldId: "fldKRVR8EZt7v7W2j",
          fields: [
            { type: "singleLineText", id: "fldKRVR8EZt7v7W2j", name: "Name" },
            {
              type: "autoNumber",
              id: "fldtYyJLMQ1WlNnW4",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldg6qZqiKHdiRNZZ", name: "f_barcode" },
            { type: "button", id: "fldI4YeDeHHi8DAV3", name: "f_button" },
            { type: "checkbox", id: "fldhKb7AkPQWdGWtv", name: "f_checkbox" },
            { type: "count", id: "fld0r9B5LPiy1YTZ9", name: "f_count" },
            { type: "createdBy", id: "fldGfkP7PSB9pgA2f", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldETofxJKT8oG9iT",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldApDN2BKfWGlPD6", name: "f_currency" },
            { type: "date", id: "fldwW1cAGKRN2ClG2", name: "f_date" },
            { type: "dateTime", id: "fldf87EINWuDFuVE5", name: "f_dateTime" },
            { type: "duration", id: "fldogJwwNoH8U9NMt", name: "f_duration" },
            { type: "email", id: "fldqQpgIKY850gFM5", name: "f_email" },
            { type: "formula", id: "fldFR5XEx4EeVURNe", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldw9S9V36hXtywdd",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldewkQhONPAzanxK",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fldNJq1VvLhHh3hym",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldxiPQ9opp1coIHD",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldbX81KfGUqYotAT",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "flddJcZNXCs8iH4Mz",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldp3kJcDgq7kLErz",
              },
              id: "fldJdckC0kUdBqFyS",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldtXPk85TiZlBvOB",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldLNAhQw3Eoqjn0E", name: "f_number" },
            { type: "percent", id: "fldAz5en4V3wMzjMH", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fldMvSCjm05AjfH5C",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "fldgGUoAAbupvRhfl", name: "f_rating" },
            { type: "richText", id: "fldCfWUxdKFE5V8PX", name: "f_richText" },
            { type: "rollup", id: "fldWcJKkjemeBAPDd", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldaXYjlUyaJsSFg6",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldkz1vAdiOuIcKdV",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldvmLeXu6utlcuET",
              name: "f_singleSelect",
            },
            { type: "url", id: "fldOQT6qWPvFdThtr", name: "f_url" },
          ],
          views: [{ id: "viwMsE5FO2YdQP5KD", name: "Grid view", type: "grid" }],
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "11153",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:40 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwmVYW1ecnjDxtNv; path=/; expires=Sun, 08 Jan 2023 00:09:40 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "11153",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(
    401,
    {
      error: {
        type: "AUTHENTICATION_REQUIRED",
        message: "Authentication required",
      },
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:40 GMT",
      "ETag",
      'W/"50-8xYAvLBWleFLl/buYhG+M42uVZo"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwekFuhugOIYW16c; path=/; expires=Sun, 08 Jan 2023 00:09:40 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "80",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(
    200,
    {
      bases: [
        {
          id: "app21Qak1T4cGoiP7",
          name: "[CI Test] Marketing Campaign Tracking",
          permissionLevel: "create",
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1015",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTL2LPMoGu8EtJG; path=/; expires=Sun, 08 Jan 2023 00:09:40 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1015",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/app21Qak1T4cGoiP7/tables")
  .once()
  .reply(
    200,
    {
      tables: [
        {
          id: "tbllaopqRMNISUAiH",
          name: "📣 Campaigns",
          primaryFieldId: "fldXl5MmXYEVxSdkP",
          fields: [
            {
              type: "singleLineText",
              id: "fldXl5MmXYEVxSdkP",
              name: "Campaign",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selGbc51zW9NNXioe",
                    name: "Development",
                    color: "cyanLight1",
                  },
                  {
                    id: "selcH0bR5RphHERXC",
                    name: "Planning",
                    color: "yellowLight1",
                  },
                  {
                    id: "self9uR9Ich39AMxc",
                    name: "Reviews",
                    color: "tealLight1",
                  },
                  {
                    id: "selDqi0T6dJ9Ei6I5",
                    name: "Published",
                    color: "greenLight1",
                  },
                  {
                    id: "selnxBXz0ZNqhJ4tI",
                    name: "On hold",
                    color: "grayBright",
                  },
                ],
              },
              id: "fldBVM4RoPpelu5ij",
              name: "Status",
            },
            { type: "multilineText", id: "fldnCtIwo2Mx1vUvv", name: "Goal" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selm9n1xW4BfTd2oJ",
                    name: "Awareness",
                    color: "blueBright",
                  },
                  {
                    id: "selcVFCFhg5WGJmFe",
                    name: "Consideration",
                    color: "cyanBright",
                  },
                  {
                    id: "selO9W3htGj6sD52O",
                    name: "Conversion",
                    color: "greenBright",
                  },
                ],
              },
              id: "fldaW3JeMwweQbWAr",
              name: "Funnel stage",
            },
            { type: "date", id: "fldyaPNESozF6ORmt", name: "Start date" },
            { type: "date", id: "fldieSrbU1PLmz4dm", name: "End date" },
            {
              type: "multipleLookupValues",
              id: "fldlkTL8a7A2dQqVj",
              name: "Next steps (from 📈 Results 2)",
            },
            {
              type: "multipleLookupValues",
              id: "flddnZ3LBa0SgVEmv",
              name: "Platform (from 💼 Ad sets table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2z61REOeVsBT50",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldFSRqEmj3PSjIzQ",
              },
              id: "fld1EoChduqR62TBG",
              name: "💼 Ad sets",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld40kIuGumksMtWL",
              },
              id: "fldyeOPwrLYBpg2Wf",
              name: "📈 Results (from 📈 Results table)",
            },
            { type: "singleLineText", id: "fldztbNH0WRvgGvbz", name: "All" },
          ],
          views: [
            { id: "viwgcdA7Qjq3WxpfO", name: "All campaigns", type: "grid" },
            {
              id: "viwfGRAKNvreWolEB",
              name: "👀 Campaign gantt view",
              type: "block",
            },
            {
              id: "viwqOY5fz4fFDEyW4",
              name: "Campaign status dashboard",
              type: "kanban",
            },
          ],
        },
        {
          id: "tbl2z61REOeVsBT50",
          name: "💼 Ad sets",
          primaryFieldId: "fldPcImpB9Lpi6pat",
          fields: [
            { type: "singleLineText", id: "fldPcImpB9Lpi6pat", name: "Ad set" },
            {
              type: "multipleAttachments",
              id: "fldLQH6t63Uhr2xr1",
              name: "Creative",
            },
            { type: "multilineText", id: "fldl8ubf25DCzQg1N", name: "Copy" },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selvoanFS5hzLKwF6",
                    name: "Facebook",
                    color: "blueLight2",
                  },
                  {
                    id: "selytfWYaGDDZWbDa",
                    name: "Google",
                    color: "cyanLight2",
                  },
                  {
                    id: "sellVrut6U0AzuA8k",
                    name: "LinkedIn",
                    color: "tealLight2",
                  },
                  {
                    id: "selv7nX8gxvaXxzfl",
                    name: "Twitter",
                    color: "greenLight2",
                  },
                  {
                    id: "selBn4R9apewbI6aF",
                    name: "Instagram",
                    color: "yellowLight2",
                  },
                  {
                    id: "selv9aI9AuUX7iGyJ",
                    name: "Print",
                    color: "orangeLight2",
                  },
                  {
                    id: "sel4J6O4favGEqXvd",
                    name: "Out of home",
                    color: "redLight2",
                  },
                ],
              },
              id: "fldPZY9GEYSXkdHhR",
              name: "Platform",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld1EoChduqR62TBG",
              },
              id: "fldFSRqEmj3PSjIzQ",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
          ],
          views: [
            {
              id: "viwGmtJrx4uVpEBSl",
              name: "👋 Ads and creative",
              type: "gallery",
            },
            { id: "viw6lvMRKfFpsI7FX", name: "All ad sets", type: "grid" },
            { id: "viwimOL0uAMSsHlEA", name: "Ad set platforms", type: "grid" },
          ],
        },
        {
          id: "tblyM3d3KYX1fBXpA",
          name: "📈 Results",
          primaryFieldId: "fldBVBhBGvpKisMXL",
          fields: [
            { type: "singleLineText", id: "fldBVBhBGvpKisMXL", name: "Name" },
            { type: "singleLineText", id: "fldj7GLWklUwld5VL", name: "Goals" },
            { type: "currency", id: "fldj2asLrPL9EBjrE", name: "Spend" },
            { type: "number", id: "fldGiTdXaCzx8AJiU", name: "Impressions" },
            { type: "formula", id: "flddZefEDkKO2p8DV", name: "CPM" },
            { type: "number", id: "fldHZVikg7Yb0zinz", name: "Clicks" },
            { type: "formula", id: "flddguD1i35j8EOet", name: "CPC" },
            { type: "number", id: "fldhjo5vgOioU4tbb", name: "Conversions" },
            { type: "formula", id: "fldwhATmMKwk2TmpA", name: "CPA" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selogRwMmpKScEQmO",
                    name: "Continue",
                    color: "greenBright",
                  },
                  {
                    id: "selyo5W8Gnj7vD5c0",
                    name: "Analysis",
                    color: "greenLight2",
                  },
                  {
                    id: "selYO2Ibe3uIZcoiC",
                    name: "Pause",
                    color: "yellowLight1",
                  },
                  { id: "sel7HfJDGHFRDOwMn", name: "Stop", color: "redLight1" },
                ],
              },
              id: "fldF1QM4qsQt89PXL",
              name: "Next steps",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldyeOPwrLYBpg2Wf",
              },
              id: "fld40kIuGumksMtWL",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2dYOTFAzBLHXTr",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldXuueviR4zEIxoL",
              },
              id: "fldDkCD5VNAtn3whs",
              name: "All",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl273pmkdKl4Khj1",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldJdckC0kUdBqFyS",
              },
              id: "fldp3kJcDgq7kLErz",
              name: "All copy",
            },
          ],
          views: [
            { id: "viw64acuQKHmLiVcM", name: "All campaigns", type: "grid" },
            { id: "viwIxDB1BzfeH6uc5", name: "✔️ Next steps", type: "grid" },
            {
              id: "viwAgQTVMjnQRBNjk",
              name: "Results at a glance",
              type: "gallery",
            },
          ],
        },
        {
          id: "tbl2dYOTFAzBLHXTr",
          name: "All",
          primaryFieldId: "fldY8dL1WwDtypOSc",
          fields: [
            { type: "singleLineText", id: "fldY8dL1WwDtypOSc", name: "Name" },
            {
              type: "autoNumber",
              id: "fldHfQDE4nbio5fMX",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldunITjAhRzl9FPS", name: "f_barcode" },
            { type: "button", id: "fldWlg8wweREbVsLW", name: "f_button" },
            { type: "checkbox", id: "fldv1t1tCm0igYOjo", name: "f_checkbox" },
            { type: "count", id: "fldeIrvY3msU4gLP2", name: "f_count" },
            { type: "createdBy", id: "fldUwCJ07pLvsysS8", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldSaG9q1h3urY18M",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldOGVHVThpiJDHtZ", name: "f_currency" },
            { type: "date", id: "fldKdj6tYh195UdwV", name: "f_date" },
            { type: "dateTime", id: "fldtppyB5tEZIMNuY", name: "f_dateTime" },
            { type: "duration", id: "fldCx1qp5VRuXrFCm", name: "f_duration" },
            { type: "email", id: "fldE7HaB2vir3yxCY", name: "f_email" },
            { type: "formula", id: "fldT8nRxPBOAYcJD7", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldKqa3OlDrjwQo36",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldsNCKa6kZWCsfnD",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fld10IVONir3kl9of",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldLz7K2GWznfGAxw",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldpeqVDxd4M1GlqM",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "fldr0uTGf9CulZWCs",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldDkCD5VNAtn3whs",
              },
              id: "fldXuueviR4zEIxoL",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldHe7e1nqsloTnEu",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldZ4SbJOAOKtBfQx", name: "f_number" },
            { type: "percent", id: "fldOQn8gmsdSPRbCA", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fld0MawcExfWmxzVv",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "flduXcitSIELy995e", name: "f_rating" },
            { type: "richText", id: "fldQweOqvhP08d0FQ", name: "f_richText" },
            { type: "rollup", id: "fldat1EdBLwAESHt6", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldoegdec5k5vax6Z",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldyQjptvPYQLuC3O",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldJD38QMDEPoumuM",
              name: "f_singleSelect",
            },
            { type: "url", id: "fld27b0jemF1gb9jk", name: "f_url" },
          ],
          views: [{ id: "viw0JWZy6z8zT7XAw", name: "Grid view", type: "grid" }],
        },
        {
          id: "tbl273pmkdKl4Khj1",
          name: "Empty",
          primaryFieldId: "fldKRVR8EZt7v7W2j",
          fields: [
            { type: "singleLineText", id: "fldKRVR8EZt7v7W2j", name: "Name" },
            {
              type: "autoNumber",
              id: "fldtYyJLMQ1WlNnW4",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldg6qZqiKHdiRNZZ", name: "f_barcode" },
            { type: "button", id: "fldI4YeDeHHi8DAV3", name: "f_button" },
            { type: "checkbox", id: "fldhKb7AkPQWdGWtv", name: "f_checkbox" },
            { type: "count", id: "fld0r9B5LPiy1YTZ9", name: "f_count" },
            { type: "createdBy", id: "fldGfkP7PSB9pgA2f", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldETofxJKT8oG9iT",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldApDN2BKfWGlPD6", name: "f_currency" },
            { type: "date", id: "fldwW1cAGKRN2ClG2", name: "f_date" },
            { type: "dateTime", id: "fldf87EINWuDFuVE5", name: "f_dateTime" },
            { type: "duration", id: "fldogJwwNoH8U9NMt", name: "f_duration" },
            { type: "email", id: "fldqQpgIKY850gFM5", name: "f_email" },
            { type: "formula", id: "fldFR5XEx4EeVURNe", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldw9S9V36hXtywdd",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldewkQhONPAzanxK",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fldNJq1VvLhHh3hym",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldxiPQ9opp1coIHD",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldbX81KfGUqYotAT",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "flddJcZNXCs8iH4Mz",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldp3kJcDgq7kLErz",
              },
              id: "fldJdckC0kUdBqFyS",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldtXPk85TiZlBvOB",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldLNAhQw3Eoqjn0E", name: "f_number" },
            { type: "percent", id: "fldAz5en4V3wMzjMH", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fldMvSCjm05AjfH5C",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "fldgGUoAAbupvRhfl", name: "f_rating" },
            { type: "richText", id: "fldCfWUxdKFE5V8PX", name: "f_richText" },
            { type: "rollup", id: "fldWcJKkjemeBAPDd", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldaXYjlUyaJsSFg6",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldkz1vAdiOuIcKdV",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldvmLeXu6utlcuET",
              name: "f_singleSelect",
            },
            { type: "url", id: "fldOQT6qWPvFdThtr", name: "f_url" },
          ],
          views: [{ id: "viwMsE5FO2YdQP5KD", name: "Grid view", type: "grid" }],
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "11153",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwhCU8MwvMnRdJD1; path=/; expires=Sun, 08 Jan 2023 00:09:41 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "11153",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/app21Qak1T4cGoiP7/tables")
  .once()
  .reply(
    200,
    {
      tables: [
        {
          id: "tbllaopqRMNISUAiH",
          name: "📣 Campaigns",
          primaryFieldId: "fldXl5MmXYEVxSdkP",
          fields: [
            {
              type: "singleLineText",
              id: "fldXl5MmXYEVxSdkP",
              name: "Campaign",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selGbc51zW9NNXioe",
                    name: "Development",
                    color: "cyanLight1",
                  },
                  {
                    id: "selcH0bR5RphHERXC",
                    name: "Planning",
                    color: "yellowLight1",
                  },
                  {
                    id: "self9uR9Ich39AMxc",
                    name: "Reviews",
                    color: "tealLight1",
                  },
                  {
                    id: "selDqi0T6dJ9Ei6I5",
                    name: "Published",
                    color: "greenLight1",
                  },
                  {
                    id: "selnxBXz0ZNqhJ4tI",
                    name: "On hold",
                    color: "grayBright",
                  },
                ],
              },
              id: "fldBVM4RoPpelu5ij",
              name: "Status",
            },
            { type: "multilineText", id: "fldnCtIwo2Mx1vUvv", name: "Goal" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selm9n1xW4BfTd2oJ",
                    name: "Awareness",
                    color: "blueBright",
                  },
                  {
                    id: "selcVFCFhg5WGJmFe",
                    name: "Consideration",
                    color: "cyanBright",
                  },
                  {
                    id: "selO9W3htGj6sD52O",
                    name: "Conversion",
                    color: "greenBright",
                  },
                ],
              },
              id: "fldaW3JeMwweQbWAr",
              name: "Funnel stage",
            },
            { type: "date", id: "fldyaPNESozF6ORmt", name: "Start date" },
            { type: "date", id: "fldieSrbU1PLmz4dm", name: "End date" },
            {
              type: "multipleLookupValues",
              id: "fldlkTL8a7A2dQqVj",
              name: "Next steps (from 📈 Results 2)",
            },
            {
              type: "multipleLookupValues",
              id: "flddnZ3LBa0SgVEmv",
              name: "Platform (from 💼 Ad sets table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2z61REOeVsBT50",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldFSRqEmj3PSjIzQ",
              },
              id: "fld1EoChduqR62TBG",
              name: "💼 Ad sets",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld40kIuGumksMtWL",
              },
              id: "fldyeOPwrLYBpg2Wf",
              name: "📈 Results (from 📈 Results table)",
            },
            { type: "singleLineText", id: "fldztbNH0WRvgGvbz", name: "All" },
          ],
          views: [
            { id: "viwgcdA7Qjq3WxpfO", name: "All campaigns", type: "grid" },
            {
              id: "viwfGRAKNvreWolEB",
              name: "👀 Campaign gantt view",
              type: "block",
            },
            {
              id: "viwqOY5fz4fFDEyW4",
              name: "Campaign status dashboard",
              type: "kanban",
            },
          ],
        },
        {
          id: "tbl2z61REOeVsBT50",
          name: "💼 Ad sets",
          primaryFieldId: "fldPcImpB9Lpi6pat",
          fields: [
            { type: "singleLineText", id: "fldPcImpB9Lpi6pat", name: "Ad set" },
            {
              type: "multipleAttachments",
              id: "fldLQH6t63Uhr2xr1",
              name: "Creative",
            },
            { type: "multilineText", id: "fldl8ubf25DCzQg1N", name: "Copy" },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selvoanFS5hzLKwF6",
                    name: "Facebook",
                    color: "blueLight2",
                  },
                  {
                    id: "selytfWYaGDDZWbDa",
                    name: "Google",
                    color: "cyanLight2",
                  },
                  {
                    id: "sellVrut6U0AzuA8k",
                    name: "LinkedIn",
                    color: "tealLight2",
                  },
                  {
                    id: "selv7nX8gxvaXxzfl",
                    name: "Twitter",
                    color: "greenLight2",
                  },
                  {
                    id: "selBn4R9apewbI6aF",
                    name: "Instagram",
                    color: "yellowLight2",
                  },
                  {
                    id: "selv9aI9AuUX7iGyJ",
                    name: "Print",
                    color: "orangeLight2",
                  },
                  {
                    id: "sel4J6O4favGEqXvd",
                    name: "Out of home",
                    color: "redLight2",
                  },
                ],
              },
              id: "fldPZY9GEYSXkdHhR",
              name: "Platform",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld1EoChduqR62TBG",
              },
              id: "fldFSRqEmj3PSjIzQ",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
          ],
          views: [
            {
              id: "viwGmtJrx4uVpEBSl",
              name: "👋 Ads and creative",
              type: "gallery",
            },
            { id: "viw6lvMRKfFpsI7FX", name: "All ad sets", type: "grid" },
            { id: "viwimOL0uAMSsHlEA", name: "Ad set platforms", type: "grid" },
          ],
        },
        {
          id: "tblyM3d3KYX1fBXpA",
          name: "📈 Results",
          primaryFieldId: "fldBVBhBGvpKisMXL",
          fields: [
            { type: "singleLineText", id: "fldBVBhBGvpKisMXL", name: "Name" },
            { type: "singleLineText", id: "fldj7GLWklUwld5VL", name: "Goals" },
            { type: "currency", id: "fldj2asLrPL9EBjrE", name: "Spend" },
            { type: "number", id: "fldGiTdXaCzx8AJiU", name: "Impressions" },
            { type: "formula", id: "flddZefEDkKO2p8DV", name: "CPM" },
            { type: "number", id: "fldHZVikg7Yb0zinz", name: "Clicks" },
            { type: "formula", id: "flddguD1i35j8EOet", name: "CPC" },
            { type: "number", id: "fldhjo5vgOioU4tbb", name: "Conversions" },
            { type: "formula", id: "fldwhATmMKwk2TmpA", name: "CPA" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selogRwMmpKScEQmO",
                    name: "Continue",
                    color: "greenBright",
                  },
                  {
                    id: "selyo5W8Gnj7vD5c0",
                    name: "Analysis",
                    color: "greenLight2",
                  },
                  {
                    id: "selYO2Ibe3uIZcoiC",
                    name: "Pause",
                    color: "yellowLight1",
                  },
                  { id: "sel7HfJDGHFRDOwMn", name: "Stop", color: "redLight1" },
                ],
              },
              id: "fldF1QM4qsQt89PXL",
              name: "Next steps",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldyeOPwrLYBpg2Wf",
              },
              id: "fld40kIuGumksMtWL",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2dYOTFAzBLHXTr",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldXuueviR4zEIxoL",
              },
              id: "fldDkCD5VNAtn3whs",
              name: "All",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl273pmkdKl4Khj1",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldJdckC0kUdBqFyS",
              },
              id: "fldp3kJcDgq7kLErz",
              name: "All copy",
            },
          ],
          views: [
            { id: "viw64acuQKHmLiVcM", name: "All campaigns", type: "grid" },
            { id: "viwIxDB1BzfeH6uc5", name: "✔️ Next steps", type: "grid" },
            {
              id: "viwAgQTVMjnQRBNjk",
              name: "Results at a glance",
              type: "gallery",
            },
          ],
        },
        {
          id: "tbl2dYOTFAzBLHXTr",
          name: "All",
          primaryFieldId: "fldY8dL1WwDtypOSc",
          fields: [
            { type: "singleLineText", id: "fldY8dL1WwDtypOSc", name: "Name" },
            {
              type: "autoNumber",
              id: "fldHfQDE4nbio5fMX",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldunITjAhRzl9FPS", name: "f_barcode" },
            { type: "button", id: "fldWlg8wweREbVsLW", name: "f_button" },
            { type: "checkbox", id: "fldv1t1tCm0igYOjo", name: "f_checkbox" },
            { type: "count", id: "fldeIrvY3msU4gLP2", name: "f_count" },
            { type: "createdBy", id: "fldUwCJ07pLvsysS8", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldSaG9q1h3urY18M",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldOGVHVThpiJDHtZ", name: "f_currency" },
            { type: "date", id: "fldKdj6tYh195UdwV", name: "f_date" },
            { type: "dateTime", id: "fldtppyB5tEZIMNuY", name: "f_dateTime" },
            { type: "duration", id: "fldCx1qp5VRuXrFCm", name: "f_duration" },
            { type: "email", id: "fldE7HaB2vir3yxCY", name: "f_email" },
            { type: "formula", id: "fldT8nRxPBOAYcJD7", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldKqa3OlDrjwQo36",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldsNCKa6kZWCsfnD",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fld10IVONir3kl9of",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldLz7K2GWznfGAxw",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldpeqVDxd4M1GlqM",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "fldr0uTGf9CulZWCs",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldDkCD5VNAtn3whs",
              },
              id: "fldXuueviR4zEIxoL",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldHe7e1nqsloTnEu",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldZ4SbJOAOKtBfQx", name: "f_number" },
            { type: "percent", id: "fldOQn8gmsdSPRbCA", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fld0MawcExfWmxzVv",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "flduXcitSIELy995e", name: "f_rating" },
            { type: "richText", id: "fldQweOqvhP08d0FQ", name: "f_richText" },
            { type: "rollup", id: "fldat1EdBLwAESHt6", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldoegdec5k5vax6Z",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldyQjptvPYQLuC3O",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldJD38QMDEPoumuM",
              name: "f_singleSelect",
            },
            { type: "url", id: "fld27b0jemF1gb9jk", name: "f_url" },
          ],
          views: [{ id: "viw0JWZy6z8zT7XAw", name: "Grid view", type: "grid" }],
        },
        {
          id: "tbl273pmkdKl4Khj1",
          name: "Empty",
          primaryFieldId: "fldKRVR8EZt7v7W2j",
          fields: [
            { type: "singleLineText", id: "fldKRVR8EZt7v7W2j", name: "Name" },
            {
              type: "autoNumber",
              id: "fldtYyJLMQ1WlNnW4",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldg6qZqiKHdiRNZZ", name: "f_barcode" },
            { type: "button", id: "fldI4YeDeHHi8DAV3", name: "f_button" },
            { type: "checkbox", id: "fldhKb7AkPQWdGWtv", name: "f_checkbox" },
            { type: "count", id: "fld0r9B5LPiy1YTZ9", name: "f_count" },
            { type: "createdBy", id: "fldGfkP7PSB9pgA2f", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldETofxJKT8oG9iT",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldApDN2BKfWGlPD6", name: "f_currency" },
            { type: "date", id: "fldwW1cAGKRN2ClG2", name: "f_date" },
            { type: "dateTime", id: "fldf87EINWuDFuVE5", name: "f_dateTime" },
            { type: "duration", id: "fldogJwwNoH8U9NMt", name: "f_duration" },
            { type: "email", id: "fldqQpgIKY850gFM5", name: "f_email" },
            { type: "formula", id: "fldFR5XEx4EeVURNe", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldw9S9V36hXtywdd",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldewkQhONPAzanxK",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fldNJq1VvLhHh3hym",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldxiPQ9opp1coIHD",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldbX81KfGUqYotAT",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "flddJcZNXCs8iH4Mz",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldp3kJcDgq7kLErz",
              },
              id: "fldJdckC0kUdBqFyS",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldtXPk85TiZlBvOB",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldLNAhQw3Eoqjn0E", name: "f_number" },
            { type: "percent", id: "fldAz5en4V3wMzjMH", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fldMvSCjm05AjfH5C",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "fldgGUoAAbupvRhfl", name: "f_rating" },
            { type: "richText", id: "fldCfWUxdKFE5V8PX", name: "f_richText" },
            { type: "rollup", id: "fldWcJKkjemeBAPDd", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldaXYjlUyaJsSFg6",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldkz1vAdiOuIcKdV",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldvmLeXu6utlcuET",
              name: "f_singleSelect",
            },
            { type: "url", id: "fldOQT6qWPvFdThtr", name: "f_url" },
          ],
          views: [{ id: "viwMsE5FO2YdQP5KD", name: "Grid view", type: "grid" }],
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "11153",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwNshLRSZAQQ3dfh; path=/; expires=Sun, 08 Jan 2023 00:09:41 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "11153",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(
    200,
    {
      bases: [
        {
          id: "app21Qak1T4cGoiP7",
          name: "[CI Test] Marketing Campaign Tracking",
          permissionLevel: "create",
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1015",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:42 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwV3cVD13sGOuzo1; path=/; expires=Sun, 08 Jan 2023 00:09:41 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1015",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/app21Qak1T4cGoiP7/tables")
  .once()
  .reply(
    200,
    {
      tables: [
        {
          id: "tbllaopqRMNISUAiH",
          name: "📣 Campaigns",
          primaryFieldId: "fldXl5MmXYEVxSdkP",
          fields: [
            {
              type: "singleLineText",
              id: "fldXl5MmXYEVxSdkP",
              name: "Campaign",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selGbc51zW9NNXioe",
                    name: "Development",
                    color: "cyanLight1",
                  },
                  {
                    id: "selcH0bR5RphHERXC",
                    name: "Planning",
                    color: "yellowLight1",
                  },
                  {
                    id: "self9uR9Ich39AMxc",
                    name: "Reviews",
                    color: "tealLight1",
                  },
                  {
                    id: "selDqi0T6dJ9Ei6I5",
                    name: "Published",
                    color: "greenLight1",
                  },
                  {
                    id: "selnxBXz0ZNqhJ4tI",
                    name: "On hold",
                    color: "grayBright",
                  },
                ],
              },
              id: "fldBVM4RoPpelu5ij",
              name: "Status",
            },
            { type: "multilineText", id: "fldnCtIwo2Mx1vUvv", name: "Goal" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selm9n1xW4BfTd2oJ",
                    name: "Awareness",
                    color: "blueBright",
                  },
                  {
                    id: "selcVFCFhg5WGJmFe",
                    name: "Consideration",
                    color: "cyanBright",
                  },
                  {
                    id: "selO9W3htGj6sD52O",
                    name: "Conversion",
                    color: "greenBright",
                  },
                ],
              },
              id: "fldaW3JeMwweQbWAr",
              name: "Funnel stage",
            },
            { type: "date", id: "fldyaPNESozF6ORmt", name: "Start date" },
            { type: "date", id: "fldieSrbU1PLmz4dm", name: "End date" },
            {
              type: "multipleLookupValues",
              id: "fldlkTL8a7A2dQqVj",
              name: "Next steps (from 📈 Results 2)",
            },
            {
              type: "multipleLookupValues",
              id: "flddnZ3LBa0SgVEmv",
              name: "Platform (from 💼 Ad sets table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2z61REOeVsBT50",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldFSRqEmj3PSjIzQ",
              },
              id: "fld1EoChduqR62TBG",
              name: "💼 Ad sets",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld40kIuGumksMtWL",
              },
              id: "fldyeOPwrLYBpg2Wf",
              name: "📈 Results (from 📈 Results table)",
            },
            { type: "singleLineText", id: "fldztbNH0WRvgGvbz", name: "All" },
          ],
          views: [
            { id: "viwgcdA7Qjq3WxpfO", name: "All campaigns", type: "grid" },
            {
              id: "viwfGRAKNvreWolEB",
              name: "👀 Campaign gantt view",
              type: "block",
            },
            {
              id: "viwqOY5fz4fFDEyW4",
              name: "Campaign status dashboard",
              type: "kanban",
            },
          ],
        },
        {
          id: "tbl2z61REOeVsBT50",
          name: "💼 Ad sets",
          primaryFieldId: "fldPcImpB9Lpi6pat",
          fields: [
            { type: "singleLineText", id: "fldPcImpB9Lpi6pat", name: "Ad set" },
            {
              type: "multipleAttachments",
              id: "fldLQH6t63Uhr2xr1",
              name: "Creative",
            },
            { type: "multilineText", id: "fldl8ubf25DCzQg1N", name: "Copy" },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selvoanFS5hzLKwF6",
                    name: "Facebook",
                    color: "blueLight2",
                  },
                  {
                    id: "selytfWYaGDDZWbDa",
                    name: "Google",
                    color: "cyanLight2",
                  },
                  {
                    id: "sellVrut6U0AzuA8k",
                    name: "LinkedIn",
                    color: "tealLight2",
                  },
                  {
                    id: "selv7nX8gxvaXxzfl",
                    name: "Twitter",
                    color: "greenLight2",
                  },
                  {
                    id: "selBn4R9apewbI6aF",
                    name: "Instagram",
                    color: "yellowLight2",
                  },
                  {
                    id: "selv9aI9AuUX7iGyJ",
                    name: "Print",
                    color: "orangeLight2",
                  },
                  {
                    id: "sel4J6O4favGEqXvd",
                    name: "Out of home",
                    color: "redLight2",
                  },
                ],
              },
              id: "fldPZY9GEYSXkdHhR",
              name: "Platform",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld1EoChduqR62TBG",
              },
              id: "fldFSRqEmj3PSjIzQ",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
          ],
          views: [
            {
              id: "viwGmtJrx4uVpEBSl",
              name: "👋 Ads and creative",
              type: "gallery",
            },
            { id: "viw6lvMRKfFpsI7FX", name: "All ad sets", type: "grid" },
            { id: "viwimOL0uAMSsHlEA", name: "Ad set platforms", type: "grid" },
          ],
        },
        {
          id: "tblyM3d3KYX1fBXpA",
          name: "📈 Results",
          primaryFieldId: "fldBVBhBGvpKisMXL",
          fields: [
            { type: "singleLineText", id: "fldBVBhBGvpKisMXL", name: "Name" },
            { type: "singleLineText", id: "fldj7GLWklUwld5VL", name: "Goals" },
            { type: "currency", id: "fldj2asLrPL9EBjrE", name: "Spend" },
            { type: "number", id: "fldGiTdXaCzx8AJiU", name: "Impressions" },
            { type: "formula", id: "flddZefEDkKO2p8DV", name: "CPM" },
            { type: "number", id: "fldHZVikg7Yb0zinz", name: "Clicks" },
            { type: "formula", id: "flddguD1i35j8EOet", name: "CPC" },
            { type: "number", id: "fldhjo5vgOioU4tbb", name: "Conversions" },
            { type: "formula", id: "fldwhATmMKwk2TmpA", name: "CPA" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selogRwMmpKScEQmO",
                    name: "Continue",
                    color: "greenBright",
                  },
                  {
                    id: "selyo5W8Gnj7vD5c0",
                    name: "Analysis",
                    color: "greenLight2",
                  },
                  {
                    id: "selYO2Ibe3uIZcoiC",
                    name: "Pause",
                    color: "yellowLight1",
                  },
                  { id: "sel7HfJDGHFRDOwMn", name: "Stop", color: "redLight1" },
                ],
              },
              id: "fldF1QM4qsQt89PXL",
              name: "Next steps",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldyeOPwrLYBpg2Wf",
              },
              id: "fld40kIuGumksMtWL",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2dYOTFAzBLHXTr",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldXuueviR4zEIxoL",
              },
              id: "fldDkCD5VNAtn3whs",
              name: "All",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl273pmkdKl4Khj1",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldJdckC0kUdBqFyS",
              },
              id: "fldp3kJcDgq7kLErz",
              name: "All copy",
            },
          ],
          views: [
            { id: "viw64acuQKHmLiVcM", name: "All campaigns", type: "grid" },
            { id: "viwIxDB1BzfeH6uc5", name: "✔️ Next steps", type: "grid" },
            {
              id: "viwAgQTVMjnQRBNjk",
              name: "Results at a glance",
              type: "gallery",
            },
          ],
        },
        {
          id: "tbl2dYOTFAzBLHXTr",
          name: "All",
          primaryFieldId: "fldY8dL1WwDtypOSc",
          fields: [
            { type: "singleLineText", id: "fldY8dL1WwDtypOSc", name: "Name" },
            {
              type: "autoNumber",
              id: "fldHfQDE4nbio5fMX",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldunITjAhRzl9FPS", name: "f_barcode" },
            { type: "button", id: "fldWlg8wweREbVsLW", name: "f_button" },
            { type: "checkbox", id: "fldv1t1tCm0igYOjo", name: "f_checkbox" },
            { type: "count", id: "fldeIrvY3msU4gLP2", name: "f_count" },
            { type: "createdBy", id: "fldUwCJ07pLvsysS8", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldSaG9q1h3urY18M",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldOGVHVThpiJDHtZ", name: "f_currency" },
            { type: "date", id: "fldKdj6tYh195UdwV", name: "f_date" },
            { type: "dateTime", id: "fldtppyB5tEZIMNuY", name: "f_dateTime" },
            { type: "duration", id: "fldCx1qp5VRuXrFCm", name: "f_duration" },
            { type: "email", id: "fldE7HaB2vir3yxCY", name: "f_email" },
            { type: "formula", id: "fldT8nRxPBOAYcJD7", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldKqa3OlDrjwQo36",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldsNCKa6kZWCsfnD",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fld10IVONir3kl9of",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldLz7K2GWznfGAxw",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldpeqVDxd4M1GlqM",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "fldr0uTGf9CulZWCs",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldDkCD5VNAtn3whs",
              },
              id: "fldXuueviR4zEIxoL",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldHe7e1nqsloTnEu",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldZ4SbJOAOKtBfQx", name: "f_number" },
            { type: "percent", id: "fldOQn8gmsdSPRbCA", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fld0MawcExfWmxzVv",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "flduXcitSIELy995e", name: "f_rating" },
            { type: "richText", id: "fldQweOqvhP08d0FQ", name: "f_richText" },
            { type: "rollup", id: "fldat1EdBLwAESHt6", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldoegdec5k5vax6Z",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldyQjptvPYQLuC3O",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldJD38QMDEPoumuM",
              name: "f_singleSelect",
            },
            { type: "url", id: "fld27b0jemF1gb9jk", name: "f_url" },
          ],
          views: [{ id: "viw0JWZy6z8zT7XAw", name: "Grid view", type: "grid" }],
        },
        {
          id: "tbl273pmkdKl4Khj1",
          name: "Empty",
          primaryFieldId: "fldKRVR8EZt7v7W2j",
          fields: [
            { type: "singleLineText", id: "fldKRVR8EZt7v7W2j", name: "Name" },
            {
              type: "autoNumber",
              id: "fldtYyJLMQ1WlNnW4",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldg6qZqiKHdiRNZZ", name: "f_barcode" },
            { type: "button", id: "fldI4YeDeHHi8DAV3", name: "f_button" },
            { type: "checkbox", id: "fldhKb7AkPQWdGWtv", name: "f_checkbox" },
            { type: "count", id: "fld0r9B5LPiy1YTZ9", name: "f_count" },
            { type: "createdBy", id: "fldGfkP7PSB9pgA2f", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldETofxJKT8oG9iT",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldApDN2BKfWGlPD6", name: "f_currency" },
            { type: "date", id: "fldwW1cAGKRN2ClG2", name: "f_date" },
            { type: "dateTime", id: "fldf87EINWuDFuVE5", name: "f_dateTime" },
            { type: "duration", id: "fldogJwwNoH8U9NMt", name: "f_duration" },
            { type: "email", id: "fldqQpgIKY850gFM5", name: "f_email" },
            { type: "formula", id: "fldFR5XEx4EeVURNe", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldw9S9V36hXtywdd",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldewkQhONPAzanxK",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fldNJq1VvLhHh3hym",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldxiPQ9opp1coIHD",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldbX81KfGUqYotAT",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "flddJcZNXCs8iH4Mz",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldp3kJcDgq7kLErz",
              },
              id: "fldJdckC0kUdBqFyS",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldtXPk85TiZlBvOB",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldLNAhQw3Eoqjn0E", name: "f_number" },
            { type: "percent", id: "fldAz5en4V3wMzjMH", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fldMvSCjm05AjfH5C",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "fldgGUoAAbupvRhfl", name: "f_rating" },
            { type: "richText", id: "fldCfWUxdKFE5V8PX", name: "f_richText" },
            { type: "rollup", id: "fldWcJKkjemeBAPDd", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldaXYjlUyaJsSFg6",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldkz1vAdiOuIcKdV",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldvmLeXu6utlcuET",
              name: "f_singleSelect",
            },
            { type: "url", id: "fldOQT6qWPvFdThtr", name: "f_url" },
          ],
          views: [{ id: "viwMsE5FO2YdQP5KD", name: "Grid view", type: "grid" }],
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "11153",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:43 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw8cNWDBSL3eWd5t; path=/; expires=Sun, 08 Jan 2023 00:09:43 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "11153",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/app21Qak1T4cGoiP7/tables")
  .once()
  .reply(
    200,
    {
      tables: [
        {
          id: "tbllaopqRMNISUAiH",
          name: "📣 Campaigns",
          primaryFieldId: "fldXl5MmXYEVxSdkP",
          fields: [
            {
              type: "singleLineText",
              id: "fldXl5MmXYEVxSdkP",
              name: "Campaign",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selGbc51zW9NNXioe",
                    name: "Development",
                    color: "cyanLight1",
                  },
                  {
                    id: "selcH0bR5RphHERXC",
                    name: "Planning",
                    color: "yellowLight1",
                  },
                  {
                    id: "self9uR9Ich39AMxc",
                    name: "Reviews",
                    color: "tealLight1",
                  },
                  {
                    id: "selDqi0T6dJ9Ei6I5",
                    name: "Published",
                    color: "greenLight1",
                  },
                  {
                    id: "selnxBXz0ZNqhJ4tI",
                    name: "On hold",
                    color: "grayBright",
                  },
                ],
              },
              id: "fldBVM4RoPpelu5ij",
              name: "Status",
            },
            { type: "multilineText", id: "fldnCtIwo2Mx1vUvv", name: "Goal" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selm9n1xW4BfTd2oJ",
                    name: "Awareness",
                    color: "blueBright",
                  },
                  {
                    id: "selcVFCFhg5WGJmFe",
                    name: "Consideration",
                    color: "cyanBright",
                  },
                  {
                    id: "selO9W3htGj6sD52O",
                    name: "Conversion",
                    color: "greenBright",
                  },
                ],
              },
              id: "fldaW3JeMwweQbWAr",
              name: "Funnel stage",
            },
            { type: "date", id: "fldyaPNESozF6ORmt", name: "Start date" },
            { type: "date", id: "fldieSrbU1PLmz4dm", name: "End date" },
            {
              type: "multipleLookupValues",
              id: "fldlkTL8a7A2dQqVj",
              name: "Next steps (from 📈 Results 2)",
            },
            {
              type: "multipleLookupValues",
              id: "flddnZ3LBa0SgVEmv",
              name: "Platform (from 💼 Ad sets table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2z61REOeVsBT50",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldFSRqEmj3PSjIzQ",
              },
              id: "fld1EoChduqR62TBG",
              name: "💼 Ad sets",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld40kIuGumksMtWL",
              },
              id: "fldyeOPwrLYBpg2Wf",
              name: "📈 Results (from 📈 Results table)",
            },
            { type: "singleLineText", id: "fldztbNH0WRvgGvbz", name: "All" },
          ],
          views: [
            { id: "viwgcdA7Qjq3WxpfO", name: "All campaigns", type: "grid" },
            {
              id: "viwfGRAKNvreWolEB",
              name: "👀 Campaign gantt view",
              type: "block",
            },
            {
              id: "viwqOY5fz4fFDEyW4",
              name: "Campaign status dashboard",
              type: "kanban",
            },
          ],
        },
        {
          id: "tbl2z61REOeVsBT50",
          name: "💼 Ad sets",
          primaryFieldId: "fldPcImpB9Lpi6pat",
          fields: [
            { type: "singleLineText", id: "fldPcImpB9Lpi6pat", name: "Ad set" },
            {
              type: "multipleAttachments",
              id: "fldLQH6t63Uhr2xr1",
              name: "Creative",
            },
            { type: "multilineText", id: "fldl8ubf25DCzQg1N", name: "Copy" },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selvoanFS5hzLKwF6",
                    name: "Facebook",
                    color: "blueLight2",
                  },
                  {
                    id: "selytfWYaGDDZWbDa",
                    name: "Google",
                    color: "cyanLight2",
                  },
                  {
                    id: "sellVrut6U0AzuA8k",
                    name: "LinkedIn",
                    color: "tealLight2",
                  },
                  {
                    id: "selv7nX8gxvaXxzfl",
                    name: "Twitter",
                    color: "greenLight2",
                  },
                  {
                    id: "selBn4R9apewbI6aF",
                    name: "Instagram",
                    color: "yellowLight2",
                  },
                  {
                    id: "selv9aI9AuUX7iGyJ",
                    name: "Print",
                    color: "orangeLight2",
                  },
                  {
                    id: "sel4J6O4favGEqXvd",
                    name: "Out of home",
                    color: "redLight2",
                  },
                ],
              },
              id: "fldPZY9GEYSXkdHhR",
              name: "Platform",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld1EoChduqR62TBG",
              },
              id: "fldFSRqEmj3PSjIzQ",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
          ],
          views: [
            {
              id: "viwGmtJrx4uVpEBSl",
              name: "👋 Ads and creative",
              type: "gallery",
            },
            { id: "viw6lvMRKfFpsI7FX", name: "All ad sets", type: "grid" },
            { id: "viwimOL0uAMSsHlEA", name: "Ad set platforms", type: "grid" },
          ],
        },
        {
          id: "tblyM3d3KYX1fBXpA",
          name: "📈 Results",
          primaryFieldId: "fldBVBhBGvpKisMXL",
          fields: [
            { type: "singleLineText", id: "fldBVBhBGvpKisMXL", name: "Name" },
            { type: "singleLineText", id: "fldj7GLWklUwld5VL", name: "Goals" },
            { type: "currency", id: "fldj2asLrPL9EBjrE", name: "Spend" },
            { type: "number", id: "fldGiTdXaCzx8AJiU", name: "Impressions" },
            { type: "formula", id: "flddZefEDkKO2p8DV", name: "CPM" },
            { type: "number", id: "fldHZVikg7Yb0zinz", name: "Clicks" },
            { type: "formula", id: "flddguD1i35j8EOet", name: "CPC" },
            { type: "number", id: "fldhjo5vgOioU4tbb", name: "Conversions" },
            { type: "formula", id: "fldwhATmMKwk2TmpA", name: "CPA" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selogRwMmpKScEQmO",
                    name: "Continue",
                    color: "greenBright",
                  },
                  {
                    id: "selyo5W8Gnj7vD5c0",
                    name: "Analysis",
                    color: "greenLight2",
                  },
                  {
                    id: "selYO2Ibe3uIZcoiC",
                    name: "Pause",
                    color: "yellowLight1",
                  },
                  { id: "sel7HfJDGHFRDOwMn", name: "Stop", color: "redLight1" },
                ],
              },
              id: "fldF1QM4qsQt89PXL",
              name: "Next steps",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldyeOPwrLYBpg2Wf",
              },
              id: "fld40kIuGumksMtWL",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2dYOTFAzBLHXTr",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldXuueviR4zEIxoL",
              },
              id: "fldDkCD5VNAtn3whs",
              name: "All",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl273pmkdKl4Khj1",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldJdckC0kUdBqFyS",
              },
              id: "fldp3kJcDgq7kLErz",
              name: "All copy",
            },
          ],
          views: [
            { id: "viw64acuQKHmLiVcM", name: "All campaigns", type: "grid" },
            { id: "viwIxDB1BzfeH6uc5", name: "✔️ Next steps", type: "grid" },
            {
              id: "viwAgQTVMjnQRBNjk",
              name: "Results at a glance",
              type: "gallery",
            },
          ],
        },
        {
          id: "tbl2dYOTFAzBLHXTr",
          name: "All",
          primaryFieldId: "fldY8dL1WwDtypOSc",
          fields: [
            { type: "singleLineText", id: "fldY8dL1WwDtypOSc", name: "Name" },
            {
              type: "autoNumber",
              id: "fldHfQDE4nbio5fMX",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldunITjAhRzl9FPS", name: "f_barcode" },
            { type: "button", id: "fldWlg8wweREbVsLW", name: "f_button" },
            { type: "checkbox", id: "fldv1t1tCm0igYOjo", name: "f_checkbox" },
            { type: "count", id: "fldeIrvY3msU4gLP2", name: "f_count" },
            { type: "createdBy", id: "fldUwCJ07pLvsysS8", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldSaG9q1h3urY18M",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldOGVHVThpiJDHtZ", name: "f_currency" },
            { type: "date", id: "fldKdj6tYh195UdwV", name: "f_date" },
            { type: "dateTime", id: "fldtppyB5tEZIMNuY", name: "f_dateTime" },
            { type: "duration", id: "fldCx1qp5VRuXrFCm", name: "f_duration" },
            { type: "email", id: "fldE7HaB2vir3yxCY", name: "f_email" },
            { type: "formula", id: "fldT8nRxPBOAYcJD7", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldKqa3OlDrjwQo36",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldsNCKa6kZWCsfnD",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fld10IVONir3kl9of",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldLz7K2GWznfGAxw",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldpeqVDxd4M1GlqM",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "fldr0uTGf9CulZWCs",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldDkCD5VNAtn3whs",
              },
              id: "fldXuueviR4zEIxoL",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldHe7e1nqsloTnEu",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldZ4SbJOAOKtBfQx", name: "f_number" },
            { type: "percent", id: "fldOQn8gmsdSPRbCA", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fld0MawcExfWmxzVv",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "flduXcitSIELy995e", name: "f_rating" },
            { type: "richText", id: "fldQweOqvhP08d0FQ", name: "f_richText" },
            { type: "rollup", id: "fldat1EdBLwAESHt6", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldoegdec5k5vax6Z",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldyQjptvPYQLuC3O",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldJD38QMDEPoumuM",
              name: "f_singleSelect",
            },
            { type: "url", id: "fld27b0jemF1gb9jk", name: "f_url" },
          ],
          views: [{ id: "viw0JWZy6z8zT7XAw", name: "Grid view", type: "grid" }],
        },
        {
          id: "tbl273pmkdKl4Khj1",
          name: "Empty",
          primaryFieldId: "fldKRVR8EZt7v7W2j",
          fields: [
            { type: "singleLineText", id: "fldKRVR8EZt7v7W2j", name: "Name" },
            {
              type: "autoNumber",
              id: "fldtYyJLMQ1WlNnW4",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldg6qZqiKHdiRNZZ", name: "f_barcode" },
            { type: "button", id: "fldI4YeDeHHi8DAV3", name: "f_button" },
            { type: "checkbox", id: "fldhKb7AkPQWdGWtv", name: "f_checkbox" },
            { type: "count", id: "fld0r9B5LPiy1YTZ9", name: "f_count" },
            { type: "createdBy", id: "fldGfkP7PSB9pgA2f", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldETofxJKT8oG9iT",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldApDN2BKfWGlPD6", name: "f_currency" },
            { type: "date", id: "fldwW1cAGKRN2ClG2", name: "f_date" },
            { type: "dateTime", id: "fldf87EINWuDFuVE5", name: "f_dateTime" },
            { type: "duration", id: "fldogJwwNoH8U9NMt", name: "f_duration" },
            { type: "email", id: "fldqQpgIKY850gFM5", name: "f_email" },
            { type: "formula", id: "fldFR5XEx4EeVURNe", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldw9S9V36hXtywdd",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldewkQhONPAzanxK",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fldNJq1VvLhHh3hym",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldxiPQ9opp1coIHD",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldbX81KfGUqYotAT",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "flddJcZNXCs8iH4Mz",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldp3kJcDgq7kLErz",
              },
              id: "fldJdckC0kUdBqFyS",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldtXPk85TiZlBvOB",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldLNAhQw3Eoqjn0E", name: "f_number" },
            { type: "percent", id: "fldAz5en4V3wMzjMH", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fldMvSCjm05AjfH5C",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "fldgGUoAAbupvRhfl", name: "f_rating" },
            { type: "richText", id: "fldCfWUxdKFE5V8PX", name: "f_richText" },
            { type: "rollup", id: "fldWcJKkjemeBAPDd", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldaXYjlUyaJsSFg6",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldkz1vAdiOuIcKdV",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldvmLeXu6utlcuET",
              name: "f_singleSelect",
            },
            { type: "url", id: "fldOQT6qWPvFdThtr", name: "f_url" },
          ],
          views: [{ id: "viwMsE5FO2YdQP5KD", name: "Grid view", type: "grid" }],
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "11153",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:43 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwPENPUDn3Eq1AAL; path=/; expires=Sun, 08 Jan 2023 00:09:43 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "11153",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Unknown%20Table")
  .query({})
  .once()
  .reply(
    404,
    {
      error: {
        type: "TABLE_NOT_FOUND",
        message:
          "Could not find table Unknown Table in application app21Qak1T4cGoiP7",
      },
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:43 GMT",
      "ETag",
      'W/"74-r/zJnLfSUauzlM4U4tNQNkiya3I"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwdvHhqbgLIFin3F; path=/; expires=Sun, 08 Jan 2023 00:09:43 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "116",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(
    200,
    {
      bases: [
        {
          id: "app21Qak1T4cGoiP7",
          name: "[CI Test] Marketing Campaign Tracking",
          permissionLevel: "create",
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1015",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:44 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwrwFZdi687zK6XG; path=/; expires=Sun, 08 Jan 2023 00:09:44 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1015",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/app21Qak1T4cGoiP7/tables")
  .once()
  .reply(
    200,
    {
      tables: [
        {
          id: "tbllaopqRMNISUAiH",
          name: "📣 Campaigns",
          primaryFieldId: "fldXl5MmXYEVxSdkP",
          fields: [
            {
              type: "singleLineText",
              id: "fldXl5MmXYEVxSdkP",
              name: "Campaign",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selGbc51zW9NNXioe",
                    name: "Development",
                    color: "cyanLight1",
                  },
                  {
                    id: "selcH0bR5RphHERXC",
                    name: "Planning",
                    color: "yellowLight1",
                  },
                  {
                    id: "self9uR9Ich39AMxc",
                    name: "Reviews",
                    color: "tealLight1",
                  },
                  {
                    id: "selDqi0T6dJ9Ei6I5",
                    name: "Published",
                    color: "greenLight1",
                  },
                  {
                    id: "selnxBXz0ZNqhJ4tI",
                    name: "On hold",
                    color: "grayBright",
                  },
                ],
              },
              id: "fldBVM4RoPpelu5ij",
              name: "Status",
            },
            { type: "multilineText", id: "fldnCtIwo2Mx1vUvv", name: "Goal" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selm9n1xW4BfTd2oJ",
                    name: "Awareness",
                    color: "blueBright",
                  },
                  {
                    id: "selcVFCFhg5WGJmFe",
                    name: "Consideration",
                    color: "cyanBright",
                  },
                  {
                    id: "selO9W3htGj6sD52O",
                    name: "Conversion",
                    color: "greenBright",
                  },
                ],
              },
              id: "fldaW3JeMwweQbWAr",
              name: "Funnel stage",
            },
            { type: "date", id: "fldyaPNESozF6ORmt", name: "Start date" },
            { type: "date", id: "fldieSrbU1PLmz4dm", name: "End date" },
            {
              type: "multipleLookupValues",
              id: "fldlkTL8a7A2dQqVj",
              name: "Next steps (from 📈 Results 2)",
            },
            {
              type: "multipleLookupValues",
              id: "flddnZ3LBa0SgVEmv",
              name: "Platform (from 💼 Ad sets table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2z61REOeVsBT50",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldFSRqEmj3PSjIzQ",
              },
              id: "fld1EoChduqR62TBG",
              name: "💼 Ad sets",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld40kIuGumksMtWL",
              },
              id: "fldyeOPwrLYBpg2Wf",
              name: "📈 Results (from 📈 Results table)",
            },
            { type: "singleLineText", id: "fldztbNH0WRvgGvbz", name: "All" },
          ],
          views: [
            { id: "viwgcdA7Qjq3WxpfO", name: "All campaigns", type: "grid" },
            {
              id: "viwfGRAKNvreWolEB",
              name: "👀 Campaign gantt view",
              type: "block",
            },
            {
              id: "viwqOY5fz4fFDEyW4",
              name: "Campaign status dashboard",
              type: "kanban",
            },
          ],
        },
        {
          id: "tbl2z61REOeVsBT50",
          name: "💼 Ad sets",
          primaryFieldId: "fldPcImpB9Lpi6pat",
          fields: [
            { type: "singleLineText", id: "fldPcImpB9Lpi6pat", name: "Ad set" },
            {
              type: "multipleAttachments",
              id: "fldLQH6t63Uhr2xr1",
              name: "Creative",
            },
            { type: "multilineText", id: "fldl8ubf25DCzQg1N", name: "Copy" },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selvoanFS5hzLKwF6",
                    name: "Facebook",
                    color: "blueLight2",
                  },
                  {
                    id: "selytfWYaGDDZWbDa",
                    name: "Google",
                    color: "cyanLight2",
                  },
                  {
                    id: "sellVrut6U0AzuA8k",
                    name: "LinkedIn",
                    color: "tealLight2",
                  },
                  {
                    id: "selv7nX8gxvaXxzfl",
                    name: "Twitter",
                    color: "greenLight2",
                  },
                  {
                    id: "selBn4R9apewbI6aF",
                    name: "Instagram",
                    color: "yellowLight2",
                  },
                  {
                    id: "selv9aI9AuUX7iGyJ",
                    name: "Print",
                    color: "orangeLight2",
                  },
                  {
                    id: "sel4J6O4favGEqXvd",
                    name: "Out of home",
                    color: "redLight2",
                  },
                ],
              },
              id: "fldPZY9GEYSXkdHhR",
              name: "Platform",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld1EoChduqR62TBG",
              },
              id: "fldFSRqEmj3PSjIzQ",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
          ],
          views: [
            {
              id: "viwGmtJrx4uVpEBSl",
              name: "👋 Ads and creative",
              type: "gallery",
            },
            { id: "viw6lvMRKfFpsI7FX", name: "All ad sets", type: "grid" },
            { id: "viwimOL0uAMSsHlEA", name: "Ad set platforms", type: "grid" },
          ],
        },
        {
          id: "tblyM3d3KYX1fBXpA",
          name: "📈 Results",
          primaryFieldId: "fldBVBhBGvpKisMXL",
          fields: [
            { type: "singleLineText", id: "fldBVBhBGvpKisMXL", name: "Name" },
            { type: "singleLineText", id: "fldj7GLWklUwld5VL", name: "Goals" },
            { type: "currency", id: "fldj2asLrPL9EBjrE", name: "Spend" },
            { type: "number", id: "fldGiTdXaCzx8AJiU", name: "Impressions" },
            { type: "formula", id: "flddZefEDkKO2p8DV", name: "CPM" },
            { type: "number", id: "fldHZVikg7Yb0zinz", name: "Clicks" },
            { type: "formula", id: "flddguD1i35j8EOet", name: "CPC" },
            { type: "number", id: "fldhjo5vgOioU4tbb", name: "Conversions" },
            { type: "formula", id: "fldwhATmMKwk2TmpA", name: "CPA" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selogRwMmpKScEQmO",
                    name: "Continue",
                    color: "greenBright",
                  },
                  {
                    id: "selyo5W8Gnj7vD5c0",
                    name: "Analysis",
                    color: "greenLight2",
                  },
                  {
                    id: "selYO2Ibe3uIZcoiC",
                    name: "Pause",
                    color: "yellowLight1",
                  },
                  { id: "sel7HfJDGHFRDOwMn", name: "Stop", color: "redLight1" },
                ],
              },
              id: "fldF1QM4qsQt89PXL",
              name: "Next steps",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldyeOPwrLYBpg2Wf",
              },
              id: "fld40kIuGumksMtWL",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2dYOTFAzBLHXTr",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldXuueviR4zEIxoL",
              },
              id: "fldDkCD5VNAtn3whs",
              name: "All",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl273pmkdKl4Khj1",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldJdckC0kUdBqFyS",
              },
              id: "fldp3kJcDgq7kLErz",
              name: "All copy",
            },
          ],
          views: [
            { id: "viw64acuQKHmLiVcM", name: "All campaigns", type: "grid" },
            { id: "viwIxDB1BzfeH6uc5", name: "✔️ Next steps", type: "grid" },
            {
              id: "viwAgQTVMjnQRBNjk",
              name: "Results at a glance",
              type: "gallery",
            },
          ],
        },
        {
          id: "tbl2dYOTFAzBLHXTr",
          name: "All",
          primaryFieldId: "fldY8dL1WwDtypOSc",
          fields: [
            { type: "singleLineText", id: "fldY8dL1WwDtypOSc", name: "Name" },
            {
              type: "autoNumber",
              id: "fldHfQDE4nbio5fMX",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldunITjAhRzl9FPS", name: "f_barcode" },
            { type: "button", id: "fldWlg8wweREbVsLW", name: "f_button" },
            { type: "checkbox", id: "fldv1t1tCm0igYOjo", name: "f_checkbox" },
            { type: "count", id: "fldeIrvY3msU4gLP2", name: "f_count" },
            { type: "createdBy", id: "fldUwCJ07pLvsysS8", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldSaG9q1h3urY18M",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldOGVHVThpiJDHtZ", name: "f_currency" },
            { type: "date", id: "fldKdj6tYh195UdwV", name: "f_date" },
            { type: "dateTime", id: "fldtppyB5tEZIMNuY", name: "f_dateTime" },
            { type: "duration", id: "fldCx1qp5VRuXrFCm", name: "f_duration" },
            { type: "email", id: "fldE7HaB2vir3yxCY", name: "f_email" },
            { type: "formula", id: "fldT8nRxPBOAYcJD7", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldKqa3OlDrjwQo36",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldsNCKa6kZWCsfnD",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fld10IVONir3kl9of",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldLz7K2GWznfGAxw",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldpeqVDxd4M1GlqM",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "fldr0uTGf9CulZWCs",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldDkCD5VNAtn3whs",
              },
              id: "fldXuueviR4zEIxoL",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldHe7e1nqsloTnEu",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldZ4SbJOAOKtBfQx", name: "f_number" },
            { type: "percent", id: "fldOQn8gmsdSPRbCA", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fld0MawcExfWmxzVv",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "flduXcitSIELy995e", name: "f_rating" },
            { type: "richText", id: "fldQweOqvhP08d0FQ", name: "f_richText" },
            { type: "rollup", id: "fldat1EdBLwAESHt6", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldoegdec5k5vax6Z",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldyQjptvPYQLuC3O",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldJD38QMDEPoumuM",
              name: "f_singleSelect",
            },
            { type: "url", id: "fld27b0jemF1gb9jk", name: "f_url" },
          ],
          views: [{ id: "viw0JWZy6z8zT7XAw", name: "Grid view", type: "grid" }],
        },
        {
          id: "tbl273pmkdKl4Khj1",
          name: "Empty",
          primaryFieldId: "fldKRVR8EZt7v7W2j",
          fields: [
            { type: "singleLineText", id: "fldKRVR8EZt7v7W2j", name: "Name" },
            {
              type: "autoNumber",
              id: "fldtYyJLMQ1WlNnW4",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldg6qZqiKHdiRNZZ", name: "f_barcode" },
            { type: "button", id: "fldI4YeDeHHi8DAV3", name: "f_button" },
            { type: "checkbox", id: "fldhKb7AkPQWdGWtv", name: "f_checkbox" },
            { type: "count", id: "fld0r9B5LPiy1YTZ9", name: "f_count" },
            { type: "createdBy", id: "fldGfkP7PSB9pgA2f", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldETofxJKT8oG9iT",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldApDN2BKfWGlPD6", name: "f_currency" },
            { type: "date", id: "fldwW1cAGKRN2ClG2", name: "f_date" },
            { type: "dateTime", id: "fldf87EINWuDFuVE5", name: "f_dateTime" },
            { type: "duration", id: "fldogJwwNoH8U9NMt", name: "f_duration" },
            { type: "email", id: "fldqQpgIKY850gFM5", name: "f_email" },
            { type: "formula", id: "fldFR5XEx4EeVURNe", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldw9S9V36hXtywdd",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldewkQhONPAzanxK",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fldNJq1VvLhHh3hym",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldxiPQ9opp1coIHD",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldbX81KfGUqYotAT",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "flddJcZNXCs8iH4Mz",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldp3kJcDgq7kLErz",
              },
              id: "fldJdckC0kUdBqFyS",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldtXPk85TiZlBvOB",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldLNAhQw3Eoqjn0E", name: "f_number" },
            { type: "percent", id: "fldAz5en4V3wMzjMH", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fldMvSCjm05AjfH5C",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "fldgGUoAAbupvRhfl", name: "f_rating" },
            { type: "richText", id: "fldCfWUxdKFE5V8PX", name: "f_richText" },
            { type: "rollup", id: "fldWcJKkjemeBAPDd", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldaXYjlUyaJsSFg6",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldkz1vAdiOuIcKdV",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldvmLeXu6utlcuET",
              name: "f_singleSelect",
            },
            { type: "url", id: "fldOQT6qWPvFdThtr", name: "f_url" },
          ],
          views: [{ id: "viwMsE5FO2YdQP5KD", name: "Grid view", type: "grid" }],
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "11153",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:44 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwexV9cHLIKtkil5; path=/; expires=Sun, 08 Jan 2023 00:09:44 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "11153",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/app21Qak1T4cGoiP7/tables")
  .once()
  .reply(
    200,
    {
      tables: [
        {
          id: "tbllaopqRMNISUAiH",
          name: "📣 Campaigns",
          primaryFieldId: "fldXl5MmXYEVxSdkP",
          fields: [
            {
              type: "singleLineText",
              id: "fldXl5MmXYEVxSdkP",
              name: "Campaign",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selGbc51zW9NNXioe",
                    name: "Development",
                    color: "cyanLight1",
                  },
                  {
                    id: "selcH0bR5RphHERXC",
                    name: "Planning",
                    color: "yellowLight1",
                  },
                  {
                    id: "self9uR9Ich39AMxc",
                    name: "Reviews",
                    color: "tealLight1",
                  },
                  {
                    id: "selDqi0T6dJ9Ei6I5",
                    name: "Published",
                    color: "greenLight1",
                  },
                  {
                    id: "selnxBXz0ZNqhJ4tI",
                    name: "On hold",
                    color: "grayBright",
                  },
                ],
              },
              id: "fldBVM4RoPpelu5ij",
              name: "Status",
            },
            { type: "multilineText", id: "fldnCtIwo2Mx1vUvv", name: "Goal" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selm9n1xW4BfTd2oJ",
                    name: "Awareness",
                    color: "blueBright",
                  },
                  {
                    id: "selcVFCFhg5WGJmFe",
                    name: "Consideration",
                    color: "cyanBright",
                  },
                  {
                    id: "selO9W3htGj6sD52O",
                    name: "Conversion",
                    color: "greenBright",
                  },
                ],
              },
              id: "fldaW3JeMwweQbWAr",
              name: "Funnel stage",
            },
            { type: "date", id: "fldyaPNESozF6ORmt", name: "Start date" },
            { type: "date", id: "fldieSrbU1PLmz4dm", name: "End date" },
            {
              type: "multipleLookupValues",
              id: "fldlkTL8a7A2dQqVj",
              name: "Next steps (from 📈 Results 2)",
            },
            {
              type: "multipleLookupValues",
              id: "flddnZ3LBa0SgVEmv",
              name: "Platform (from 💼 Ad sets table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2z61REOeVsBT50",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldFSRqEmj3PSjIzQ",
              },
              id: "fld1EoChduqR62TBG",
              name: "💼 Ad sets",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld40kIuGumksMtWL",
              },
              id: "fldyeOPwrLYBpg2Wf",
              name: "📈 Results (from 📈 Results table)",
            },
            { type: "singleLineText", id: "fldztbNH0WRvgGvbz", name: "All" },
          ],
          views: [
            { id: "viwgcdA7Qjq3WxpfO", name: "All campaigns", type: "grid" },
            {
              id: "viwfGRAKNvreWolEB",
              name: "👀 Campaign gantt view",
              type: "block",
            },
            {
              id: "viwqOY5fz4fFDEyW4",
              name: "Campaign status dashboard",
              type: "kanban",
            },
          ],
        },
        {
          id: "tbl2z61REOeVsBT50",
          name: "💼 Ad sets",
          primaryFieldId: "fldPcImpB9Lpi6pat",
          fields: [
            { type: "singleLineText", id: "fldPcImpB9Lpi6pat", name: "Ad set" },
            {
              type: "multipleAttachments",
              id: "fldLQH6t63Uhr2xr1",
              name: "Creative",
            },
            { type: "multilineText", id: "fldl8ubf25DCzQg1N", name: "Copy" },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selvoanFS5hzLKwF6",
                    name: "Facebook",
                    color: "blueLight2",
                  },
                  {
                    id: "selytfWYaGDDZWbDa",
                    name: "Google",
                    color: "cyanLight2",
                  },
                  {
                    id: "sellVrut6U0AzuA8k",
                    name: "LinkedIn",
                    color: "tealLight2",
                  },
                  {
                    id: "selv7nX8gxvaXxzfl",
                    name: "Twitter",
                    color: "greenLight2",
                  },
                  {
                    id: "selBn4R9apewbI6aF",
                    name: "Instagram",
                    color: "yellowLight2",
                  },
                  {
                    id: "selv9aI9AuUX7iGyJ",
                    name: "Print",
                    color: "orangeLight2",
                  },
                  {
                    id: "sel4J6O4favGEqXvd",
                    name: "Out of home",
                    color: "redLight2",
                  },
                ],
              },
              id: "fldPZY9GEYSXkdHhR",
              name: "Platform",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld1EoChduqR62TBG",
              },
              id: "fldFSRqEmj3PSjIzQ",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
          ],
          views: [
            {
              id: "viwGmtJrx4uVpEBSl",
              name: "👋 Ads and creative",
              type: "gallery",
            },
            { id: "viw6lvMRKfFpsI7FX", name: "All ad sets", type: "grid" },
            { id: "viwimOL0uAMSsHlEA", name: "Ad set platforms", type: "grid" },
          ],
        },
        {
          id: "tblyM3d3KYX1fBXpA",
          name: "📈 Results",
          primaryFieldId: "fldBVBhBGvpKisMXL",
          fields: [
            { type: "singleLineText", id: "fldBVBhBGvpKisMXL", name: "Name" },
            { type: "singleLineText", id: "fldj7GLWklUwld5VL", name: "Goals" },
            { type: "currency", id: "fldj2asLrPL9EBjrE", name: "Spend" },
            { type: "number", id: "fldGiTdXaCzx8AJiU", name: "Impressions" },
            { type: "formula", id: "flddZefEDkKO2p8DV", name: "CPM" },
            { type: "number", id: "fldHZVikg7Yb0zinz", name: "Clicks" },
            { type: "formula", id: "flddguD1i35j8EOet", name: "CPC" },
            { type: "number", id: "fldhjo5vgOioU4tbb", name: "Conversions" },
            { type: "formula", id: "fldwhATmMKwk2TmpA", name: "CPA" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selogRwMmpKScEQmO",
                    name: "Continue",
                    color: "greenBright",
                  },
                  {
                    id: "selyo5W8Gnj7vD5c0",
                    name: "Analysis",
                    color: "greenLight2",
                  },
                  {
                    id: "selYO2Ibe3uIZcoiC",
                    name: "Pause",
                    color: "yellowLight1",
                  },
                  { id: "sel7HfJDGHFRDOwMn", name: "Stop", color: "redLight1" },
                ],
              },
              id: "fldF1QM4qsQt89PXL",
              name: "Next steps",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldyeOPwrLYBpg2Wf",
              },
              id: "fld40kIuGumksMtWL",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2dYOTFAzBLHXTr",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldXuueviR4zEIxoL",
              },
              id: "fldDkCD5VNAtn3whs",
              name: "All",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl273pmkdKl4Khj1",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldJdckC0kUdBqFyS",
              },
              id: "fldp3kJcDgq7kLErz",
              name: "All copy",
            },
          ],
          views: [
            { id: "viw64acuQKHmLiVcM", name: "All campaigns", type: "grid" },
            { id: "viwIxDB1BzfeH6uc5", name: "✔️ Next steps", type: "grid" },
            {
              id: "viwAgQTVMjnQRBNjk",
              name: "Results at a glance",
              type: "gallery",
            },
          ],
        },
        {
          id: "tbl2dYOTFAzBLHXTr",
          name: "All",
          primaryFieldId: "fldY8dL1WwDtypOSc",
          fields: [
            { type: "singleLineText", id: "fldY8dL1WwDtypOSc", name: "Name" },
            {
              type: "autoNumber",
              id: "fldHfQDE4nbio5fMX",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldunITjAhRzl9FPS", name: "f_barcode" },
            { type: "button", id: "fldWlg8wweREbVsLW", name: "f_button" },
            { type: "checkbox", id: "fldv1t1tCm0igYOjo", name: "f_checkbox" },
            { type: "count", id: "fldeIrvY3msU4gLP2", name: "f_count" },
            { type: "createdBy", id: "fldUwCJ07pLvsysS8", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldSaG9q1h3urY18M",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldOGVHVThpiJDHtZ", name: "f_currency" },
            { type: "date", id: "fldKdj6tYh195UdwV", name: "f_date" },
            { type: "dateTime", id: "fldtppyB5tEZIMNuY", name: "f_dateTime" },
            { type: "duration", id: "fldCx1qp5VRuXrFCm", name: "f_duration" },
            { type: "email", id: "fldE7HaB2vir3yxCY", name: "f_email" },
            { type: "formula", id: "fldT8nRxPBOAYcJD7", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldKqa3OlDrjwQo36",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldsNCKa6kZWCsfnD",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fld10IVONir3kl9of",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldLz7K2GWznfGAxw",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldpeqVDxd4M1GlqM",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "fldr0uTGf9CulZWCs",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldDkCD5VNAtn3whs",
              },
              id: "fldXuueviR4zEIxoL",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldHe7e1nqsloTnEu",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldZ4SbJOAOKtBfQx", name: "f_number" },
            { type: "percent", id: "fldOQn8gmsdSPRbCA", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fld0MawcExfWmxzVv",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "flduXcitSIELy995e", name: "f_rating" },
            { type: "richText", id: "fldQweOqvhP08d0FQ", name: "f_richText" },
            { type: "rollup", id: "fldat1EdBLwAESHt6", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldoegdec5k5vax6Z",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldyQjptvPYQLuC3O",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldJD38QMDEPoumuM",
              name: "f_singleSelect",
            },
            { type: "url", id: "fld27b0jemF1gb9jk", name: "f_url" },
          ],
          views: [{ id: "viw0JWZy6z8zT7XAw", name: "Grid view", type: "grid" }],
        },
        {
          id: "tbl273pmkdKl4Khj1",
          name: "Empty",
          primaryFieldId: "fldKRVR8EZt7v7W2j",
          fields: [
            { type: "singleLineText", id: "fldKRVR8EZt7v7W2j", name: "Name" },
            {
              type: "autoNumber",
              id: "fldtYyJLMQ1WlNnW4",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldg6qZqiKHdiRNZZ", name: "f_barcode" },
            { type: "button", id: "fldI4YeDeHHi8DAV3", name: "f_button" },
            { type: "checkbox", id: "fldhKb7AkPQWdGWtv", name: "f_checkbox" },
            { type: "count", id: "fld0r9B5LPiy1YTZ9", name: "f_count" },
            { type: "createdBy", id: "fldGfkP7PSB9pgA2f", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldETofxJKT8oG9iT",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldApDN2BKfWGlPD6", name: "f_currency" },
            { type: "date", id: "fldwW1cAGKRN2ClG2", name: "f_date" },
            { type: "dateTime", id: "fldf87EINWuDFuVE5", name: "f_dateTime" },
            { type: "duration", id: "fldogJwwNoH8U9NMt", name: "f_duration" },
            { type: "email", id: "fldqQpgIKY850gFM5", name: "f_email" },
            { type: "formula", id: "fldFR5XEx4EeVURNe", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldw9S9V36hXtywdd",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldewkQhONPAzanxK",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fldNJq1VvLhHh3hym",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldxiPQ9opp1coIHD",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldbX81KfGUqYotAT",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "flddJcZNXCs8iH4Mz",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldp3kJcDgq7kLErz",
              },
              id: "fldJdckC0kUdBqFyS",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldtXPk85TiZlBvOB",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldLNAhQw3Eoqjn0E", name: "f_number" },
            { type: "percent", id: "fldAz5en4V3wMzjMH", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fldMvSCjm05AjfH5C",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "fldgGUoAAbupvRhfl", name: "f_rating" },
            { type: "richText", id: "fldCfWUxdKFE5V8PX", name: "f_richText" },
            { type: "rollup", id: "fldWcJKkjemeBAPDd", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldaXYjlUyaJsSFg6",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldkz1vAdiOuIcKdV",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldvmLeXu6utlcuET",
              name: "f_singleSelect",
            },
            { type: "url", id: "fldOQT6qWPvFdThtr", name: "f_url" },
          ],
          views: [{ id: "viwMsE5FO2YdQP5KD", name: "Grid view", type: "grid" }],
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "11153",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:44 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwbplitvt1YO1VYH; path=/; expires=Sun, 08 Jan 2023 00:09:44 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "11153",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/app21Qak1T4cGoiP7/tables")
  .once()
  .reply(
    200,
    {
      tables: [
        {
          id: "tbllaopqRMNISUAiH",
          name: "📣 Campaigns",
          primaryFieldId: "fldXl5MmXYEVxSdkP",
          fields: [
            {
              type: "singleLineText",
              id: "fldXl5MmXYEVxSdkP",
              name: "Campaign",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selGbc51zW9NNXioe",
                    name: "Development",
                    color: "cyanLight1",
                  },
                  {
                    id: "selcH0bR5RphHERXC",
                    name: "Planning",
                    color: "yellowLight1",
                  },
                  {
                    id: "self9uR9Ich39AMxc",
                    name: "Reviews",
                    color: "tealLight1",
                  },
                  {
                    id: "selDqi0T6dJ9Ei6I5",
                    name: "Published",
                    color: "greenLight1",
                  },
                  {
                    id: "selnxBXz0ZNqhJ4tI",
                    name: "On hold",
                    color: "grayBright",
                  },
                ],
              },
              id: "fldBVM4RoPpelu5ij",
              name: "Status",
            },
            { type: "multilineText", id: "fldnCtIwo2Mx1vUvv", name: "Goal" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selm9n1xW4BfTd2oJ",
                    name: "Awareness",
                    color: "blueBright",
                  },
                  {
                    id: "selcVFCFhg5WGJmFe",
                    name: "Consideration",
                    color: "cyanBright",
                  },
                  {
                    id: "selO9W3htGj6sD52O",
                    name: "Conversion",
                    color: "greenBright",
                  },
                ],
              },
              id: "fldaW3JeMwweQbWAr",
              name: "Funnel stage",
            },
            { type: "date", id: "fldyaPNESozF6ORmt", name: "Start date" },
            { type: "date", id: "fldieSrbU1PLmz4dm", name: "End date" },
            {
              type: "multipleLookupValues",
              id: "fldlkTL8a7A2dQqVj",
              name: "Next steps (from 📈 Results 2)",
            },
            {
              type: "multipleLookupValues",
              id: "flddnZ3LBa0SgVEmv",
              name: "Platform (from 💼 Ad sets table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2z61REOeVsBT50",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldFSRqEmj3PSjIzQ",
              },
              id: "fld1EoChduqR62TBG",
              name: "💼 Ad sets",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld40kIuGumksMtWL",
              },
              id: "fldyeOPwrLYBpg2Wf",
              name: "📈 Results (from 📈 Results table)",
            },
            { type: "singleLineText", id: "fldztbNH0WRvgGvbz", name: "All" },
          ],
          views: [
            { id: "viwgcdA7Qjq3WxpfO", name: "All campaigns", type: "grid" },
            {
              id: "viwfGRAKNvreWolEB",
              name: "👀 Campaign gantt view",
              type: "block",
            },
            {
              id: "viwqOY5fz4fFDEyW4",
              name: "Campaign status dashboard",
              type: "kanban",
            },
          ],
        },
        {
          id: "tbl2z61REOeVsBT50",
          name: "💼 Ad sets",
          primaryFieldId: "fldPcImpB9Lpi6pat",
          fields: [
            { type: "singleLineText", id: "fldPcImpB9Lpi6pat", name: "Ad set" },
            {
              type: "multipleAttachments",
              id: "fldLQH6t63Uhr2xr1",
              name: "Creative",
            },
            { type: "multilineText", id: "fldl8ubf25DCzQg1N", name: "Copy" },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selvoanFS5hzLKwF6",
                    name: "Facebook",
                    color: "blueLight2",
                  },
                  {
                    id: "selytfWYaGDDZWbDa",
                    name: "Google",
                    color: "cyanLight2",
                  },
                  {
                    id: "sellVrut6U0AzuA8k",
                    name: "LinkedIn",
                    color: "tealLight2",
                  },
                  {
                    id: "selv7nX8gxvaXxzfl",
                    name: "Twitter",
                    color: "greenLight2",
                  },
                  {
                    id: "selBn4R9apewbI6aF",
                    name: "Instagram",
                    color: "yellowLight2",
                  },
                  {
                    id: "selv9aI9AuUX7iGyJ",
                    name: "Print",
                    color: "orangeLight2",
                  },
                  {
                    id: "sel4J6O4favGEqXvd",
                    name: "Out of home",
                    color: "redLight2",
                  },
                ],
              },
              id: "fldPZY9GEYSXkdHhR",
              name: "Platform",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld1EoChduqR62TBG",
              },
              id: "fldFSRqEmj3PSjIzQ",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
          ],
          views: [
            {
              id: "viwGmtJrx4uVpEBSl",
              name: "👋 Ads and creative",
              type: "gallery",
            },
            { id: "viw6lvMRKfFpsI7FX", name: "All ad sets", type: "grid" },
            { id: "viwimOL0uAMSsHlEA", name: "Ad set platforms", type: "grid" },
          ],
        },
        {
          id: "tblyM3d3KYX1fBXpA",
          name: "📈 Results",
          primaryFieldId: "fldBVBhBGvpKisMXL",
          fields: [
            { type: "singleLineText", id: "fldBVBhBGvpKisMXL", name: "Name" },
            { type: "singleLineText", id: "fldj7GLWklUwld5VL", name: "Goals" },
            { type: "currency", id: "fldj2asLrPL9EBjrE", name: "Spend" },
            { type: "number", id: "fldGiTdXaCzx8AJiU", name: "Impressions" },
            { type: "formula", id: "flddZefEDkKO2p8DV", name: "CPM" },
            { type: "number", id: "fldHZVikg7Yb0zinz", name: "Clicks" },
            { type: "formula", id: "flddguD1i35j8EOet", name: "CPC" },
            { type: "number", id: "fldhjo5vgOioU4tbb", name: "Conversions" },
            { type: "formula", id: "fldwhATmMKwk2TmpA", name: "CPA" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selogRwMmpKScEQmO",
                    name: "Continue",
                    color: "greenBright",
                  },
                  {
                    id: "selyo5W8Gnj7vD5c0",
                    name: "Analysis",
                    color: "greenLight2",
                  },
                  {
                    id: "selYO2Ibe3uIZcoiC",
                    name: "Pause",
                    color: "yellowLight1",
                  },
                  { id: "sel7HfJDGHFRDOwMn", name: "Stop", color: "redLight1" },
                ],
              },
              id: "fldF1QM4qsQt89PXL",
              name: "Next steps",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldyeOPwrLYBpg2Wf",
              },
              id: "fld40kIuGumksMtWL",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2dYOTFAzBLHXTr",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldXuueviR4zEIxoL",
              },
              id: "fldDkCD5VNAtn3whs",
              name: "All",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl273pmkdKl4Khj1",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldJdckC0kUdBqFyS",
              },
              id: "fldp3kJcDgq7kLErz",
              name: "All copy",
            },
          ],
          views: [
            { id: "viw64acuQKHmLiVcM", name: "All campaigns", type: "grid" },
            { id: "viwIxDB1BzfeH6uc5", name: "✔️ Next steps", type: "grid" },
            {
              id: "viwAgQTVMjnQRBNjk",
              name: "Results at a glance",
              type: "gallery",
            },
          ],
        },
        {
          id: "tbl2dYOTFAzBLHXTr",
          name: "All",
          primaryFieldId: "fldY8dL1WwDtypOSc",
          fields: [
            { type: "singleLineText", id: "fldY8dL1WwDtypOSc", name: "Name" },
            {
              type: "autoNumber",
              id: "fldHfQDE4nbio5fMX",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldunITjAhRzl9FPS", name: "f_barcode" },
            { type: "button", id: "fldWlg8wweREbVsLW", name: "f_button" },
            { type: "checkbox", id: "fldv1t1tCm0igYOjo", name: "f_checkbox" },
            { type: "count", id: "fldeIrvY3msU4gLP2", name: "f_count" },
            { type: "createdBy", id: "fldUwCJ07pLvsysS8", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldSaG9q1h3urY18M",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldOGVHVThpiJDHtZ", name: "f_currency" },
            { type: "date", id: "fldKdj6tYh195UdwV", name: "f_date" },
            { type: "dateTime", id: "fldtppyB5tEZIMNuY", name: "f_dateTime" },
            { type: "duration", id: "fldCx1qp5VRuXrFCm", name: "f_duration" },
            { type: "email", id: "fldE7HaB2vir3yxCY", name: "f_email" },
            { type: "formula", id: "fldT8nRxPBOAYcJD7", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldKqa3OlDrjwQo36",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldsNCKa6kZWCsfnD",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fld10IVONir3kl9of",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldLz7K2GWznfGAxw",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldpeqVDxd4M1GlqM",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "fldr0uTGf9CulZWCs",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldDkCD5VNAtn3whs",
              },
              id: "fldXuueviR4zEIxoL",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldHe7e1nqsloTnEu",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldZ4SbJOAOKtBfQx", name: "f_number" },
            { type: "percent", id: "fldOQn8gmsdSPRbCA", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fld0MawcExfWmxzVv",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "flduXcitSIELy995e", name: "f_rating" },
            { type: "richText", id: "fldQweOqvhP08d0FQ", name: "f_richText" },
            { type: "rollup", id: "fldat1EdBLwAESHt6", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldoegdec5k5vax6Z",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldyQjptvPYQLuC3O",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldJD38QMDEPoumuM",
              name: "f_singleSelect",
            },
            { type: "url", id: "fld27b0jemF1gb9jk", name: "f_url" },
          ],
          views: [{ id: "viw0JWZy6z8zT7XAw", name: "Grid view", type: "grid" }],
        },
        {
          id: "tbl273pmkdKl4Khj1",
          name: "Empty",
          primaryFieldId: "fldKRVR8EZt7v7W2j",
          fields: [
            { type: "singleLineText", id: "fldKRVR8EZt7v7W2j", name: "Name" },
            {
              type: "autoNumber",
              id: "fldtYyJLMQ1WlNnW4",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldg6qZqiKHdiRNZZ", name: "f_barcode" },
            { type: "button", id: "fldI4YeDeHHi8DAV3", name: "f_button" },
            { type: "checkbox", id: "fldhKb7AkPQWdGWtv", name: "f_checkbox" },
            { type: "count", id: "fld0r9B5LPiy1YTZ9", name: "f_count" },
            { type: "createdBy", id: "fldGfkP7PSB9pgA2f", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldETofxJKT8oG9iT",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldApDN2BKfWGlPD6", name: "f_currency" },
            { type: "date", id: "fldwW1cAGKRN2ClG2", name: "f_date" },
            { type: "dateTime", id: "fldf87EINWuDFuVE5", name: "f_dateTime" },
            { type: "duration", id: "fldogJwwNoH8U9NMt", name: "f_duration" },
            { type: "email", id: "fldqQpgIKY850gFM5", name: "f_email" },
            { type: "formula", id: "fldFR5XEx4EeVURNe", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldw9S9V36hXtywdd",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldewkQhONPAzanxK",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fldNJq1VvLhHh3hym",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldxiPQ9opp1coIHD",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldbX81KfGUqYotAT",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "flddJcZNXCs8iH4Mz",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldp3kJcDgq7kLErz",
              },
              id: "fldJdckC0kUdBqFyS",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldtXPk85TiZlBvOB",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldLNAhQw3Eoqjn0E", name: "f_number" },
            { type: "percent", id: "fldAz5en4V3wMzjMH", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fldMvSCjm05AjfH5C",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "fldgGUoAAbupvRhfl", name: "f_rating" },
            { type: "richText", id: "fldCfWUxdKFE5V8PX", name: "f_richText" },
            { type: "rollup", id: "fldWcJKkjemeBAPDd", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldaXYjlUyaJsSFg6",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldkz1vAdiOuIcKdV",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldvmLeXu6utlcuET",
              name: "f_singleSelect",
            },
            { type: "url", id: "fldOQT6qWPvFdThtr", name: "f_url" },
          ],
          views: [{ id: "viwMsE5FO2YdQP5KD", name: "Grid view", type: "grid" }],
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "11153",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:45 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwJsMZv4O4axsQcF; path=/; expires=Sun, 08 Jan 2023 00:09:45 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "11153",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl2dYOTFAzBLHXTr")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd566d53dc3610fe2b1ef74b3b437cb26cf9e53e74022429498ecb0bd7b4a5308c6cafcf06d97274320764f8ef5dd9c0f98e6b43d37e0a731f90bc2b3d7a76f7d9fd622b48a5ca16f6f8cf2f7699d963b3f1627f22e8e1f93b997f383c6fed1d3b2f41189b2f767ed614b286695b25a0d0fac780919f2cc6d833977abe313dab5aa14b51d630832b8d260528b0ca85c5ad93ba86a5653e758650f152a041a24a5e3f872b5e35029c5456dd57de6a797f8d6b3632ae01ad29a12e5ef68cb89d59da2a05757a6d8f03b36c40a550e3b5c4ac54991677287eb00ae019a893bae18acf156f8a937a85176ffed8313129eb0bc386e1a13ccee373ee1ff083b76ff2d7f6e98e3de595c1b0671077cef51d429f3a0f206765b50694cedc78ec9131210e21e4b8f3535c97f51cfdcc22e12a9519187e758f7617c9644168df764f2c20bd48e4953dd6aa05b3b3405f019315c7f28ed2a4d55ad6e620c11330e4be6ba0b67efd38c1cfad321b85d6cd623c1a2d974b67ae648b7448d9b1de5fa6009f90ed5d9b43ba846817aa101fa60b2e6617af2b3549f1a887d02d60cec5f3452375995fdfc5aebe2789d799acad2363b276f80641343204113266c18aa05c2a0c0cbf27bb0fb6e00b7d28b312f371cb21d41d93604c0787282944dbd863e61327f2567ffe30ee13292fdae613172d98c0fb7118c4f1690757b626955cc4fe44e4b73bab2a7a797eeedfc8e24d292e5fec651b5594b526034ca8fc3822c36a80cb2dc5708ff50804a4bacbcf3dc46b9f6e560a5da5476f6b083496c35376b5e66951619d0cea9e6b3da595b87c1f5e4cce3fbfaa0c83cb32d305420cf1d802ca7981c7f911dd4ca54c38bc549a273de291c357178cb23c67791ee629e111f0240b12df7521062ff6f3d84de2911b79014fa83b3a4292a13e2aa45ef1cbb5eb9e79f4cc0b760f9d062bc6d028e02ec57a0fcbb8582b1f8b6bebdecb7a705b9437e812468cb01d5b5f37c6bfacf81c46fd775d208535c6a08bd0a2e242987f9efcd2d983ff2808884f4342681e929813f021896948533f4a1297f9f128093cdf0fdd7045b1c7560c7b01269ce06a0edf0a208efdd0e32c735346315e7eee723f205118a6c48f424e471e0b3392c4fcef636ceab5fd760a7896e1851e0b5073730a519ee32fe7290fb388b33c19b180411c011b50801534200157b7b7b7a71b1aefb03595771dea3da8f2cbcb0d5126bdf57ddaefa31af04462e14935487cd4b7f7f5046e8ea74544f76edeec0ff5cd688f2340d65c65cfd7e572207468644d7a23bb87fca80fb8a60f1066c4625b1f60dbfbc05ec07c8fbabd7a3e527dbd9496e9aedfadf49b88d2272bbf471e2b3f5672838d9c8b4edfd16bcaa777807a7127df26ee93c39757ec8fcb57200f149d7d654472c37e448aa330d83a22096c4116064d2e4fea93fa21a45f8bdace5a23f1bc60ad916008ae9fd2483e82694ebf18257ddc4fbc2dfda4777834905162af4f600e713786b09fadcfadd470523fb3121417d01612355861427f75280b7ebf0ce84d019fe038bc3674e2deee6fb383349aecd28243743018d47691037bf584a1020c93fc7fadff6159d3ed65bd8fb35d1493278f77bac0e87cb7556e82e4fda72aa7911391300c3d97c4d4f78238fa87018f926e14dcf16964bae370d2a3ff420c4e6fff02f335b4f53d0d0000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "3389",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:45 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwpZjDhI2UUHmDpq; path=/; expires=Sun, 08 Jan 2023 00:09:45 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1219",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl2dYOTFAzBLHXTr")
  .query({ filterByFormula: "%7BName%7D%3D%22Evan%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000000039d54db6edb3810fd1583cf894451773da5ee76812d5cf712ef3e64511823716829a54495a2e22681ffbda464d74eb10b1405f4200e67868767cee133d15829cd0752fcfb4c1a4e0a1778737f1f3da9fa6d231ffe587272454483d2e53c13b1e5a306d3a88e14519e51bbb7c5161a692bf101ba1bfc066d2fd1ab54eb0ab7ed284d6303b728b132ee1cb2942392cf6e1346a3d6635ba226057381a1e976a75cdb71cabcecf2ca18a8ea163b7381188c59b3563e7c48bfaceebffed9ded9927dc34d6d21a6b66d8dcdaeb6eda2cc2e46eda0d6c6f443e1fb5c7ad06803e58cd8f7e07c80cf858885484545214328795246418039867924f2a0ccfd200b132859e0df561ab1bbad95619405d701bb66199820d8866c1b26afde797db79b6894d8418b16c05cb170258b73cd02cce254b5f85136344fb624cd621a5f11f3d8bbfaa6851dfaf3bea92d859d9dc134a1a10529ddcf2fdf74f3a3de4f121ab1945226529a03c508cb9ca5ac8ab2b20ce228f7cb248ca23448cf1487f199e130395c11097a87bf0b20cfa33484980755ccecbc22114094d02c4d2b1a6529303f8c534ecb1cfe7fc61682187f9f02e0dc1e18c60970140c3321ec27a0829467108bd28f9318f30ce30b0a28a51724d8d5e17098045e8d5a63573d9222f16217e85157f63c52041e0bafc87a56c31beb9c49e7ddd10c74ce3ec9feb592124a658da7f485f0c7417fe856f874b7ae33b67c7afbdaf63899b1d40d749e44d581e6373badc61eb452475f1e55b874498bd59c4466c81c0c6e9a697b1666704dd986c605a5f6f3ece5ee26a8ee15b0f22b26a025e84af169ea06bf4dd64de2286401399c6dbd6a3adcccbb66af1635ead9dce5688c7b4f9ead744a74e0dff7d61b7f7f5a919ffdbadfefbd977799fa5b3359d47cf9e89a9ca8a9e5c7f50072f3e5af56afaa4b6a06dc81bc197a651af1f83323d071658de9525e347fc18933eb26c81d277172e644286d4706c789b229266130ef146fec1bfa1f3d5850d0c44ae682573bebb19f9cdc63d580fc07dc2b5858adac8f80d4e81444ede217b11d3e1fbe036af9c0b7ea050000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1514",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:45 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwaBNx2GRa22k4Zv; path=/; expires=Sun, 08 Jan 2023 00:09:45 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "782",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl2dYOTFAzBLHXTr")
  .query({ filterByFormula: "%7BName%7D%3D%22junkId%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:46 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwCSlSLCsVZbwbjn; path=/; expires=Sun, 08 Jan 2023 00:09:46 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({})
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:46 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwCFAE9sXA0lb8WH; path=/; expires=Sun, 08 Jan 2023 00:09:46 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(
    200,
    {
      bases: [
        {
          id: "app21Qak1T4cGoiP7",
          name: "[CI Test] Marketing Campaign Tracking",
          permissionLevel: "create",
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1015",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:46 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwti2nzf3o1HwfLg; path=/; expires=Sun, 08 Jan 2023 00:09:46 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1015",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/app21Qak1T4cGoiP7/tables")
  .once()
  .reply(
    200,
    {
      tables: [
        {
          id: "tbllaopqRMNISUAiH",
          name: "📣 Campaigns",
          primaryFieldId: "fldXl5MmXYEVxSdkP",
          fields: [
            {
              type: "singleLineText",
              id: "fldXl5MmXYEVxSdkP",
              name: "Campaign",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selGbc51zW9NNXioe",
                    name: "Development",
                    color: "cyanLight1",
                  },
                  {
                    id: "selcH0bR5RphHERXC",
                    name: "Planning",
                    color: "yellowLight1",
                  },
                  {
                    id: "self9uR9Ich39AMxc",
                    name: "Reviews",
                    color: "tealLight1",
                  },
                  {
                    id: "selDqi0T6dJ9Ei6I5",
                    name: "Published",
                    color: "greenLight1",
                  },
                  {
                    id: "selnxBXz0ZNqhJ4tI",
                    name: "On hold",
                    color: "grayBright",
                  },
                ],
              },
              id: "fldBVM4RoPpelu5ij",
              name: "Status",
            },
            { type: "multilineText", id: "fldnCtIwo2Mx1vUvv", name: "Goal" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selm9n1xW4BfTd2oJ",
                    name: "Awareness",
                    color: "blueBright",
                  },
                  {
                    id: "selcVFCFhg5WGJmFe",
                    name: "Consideration",
                    color: "cyanBright",
                  },
                  {
                    id: "selO9W3htGj6sD52O",
                    name: "Conversion",
                    color: "greenBright",
                  },
                ],
              },
              id: "fldaW3JeMwweQbWAr",
              name: "Funnel stage",
            },
            { type: "date", id: "fldyaPNESozF6ORmt", name: "Start date" },
            { type: "date", id: "fldieSrbU1PLmz4dm", name: "End date" },
            {
              type: "multipleLookupValues",
              id: "fldlkTL8a7A2dQqVj",
              name: "Next steps (from 📈 Results 2)",
            },
            {
              type: "multipleLookupValues",
              id: "flddnZ3LBa0SgVEmv",
              name: "Platform (from 💼 Ad sets table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2z61REOeVsBT50",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldFSRqEmj3PSjIzQ",
              },
              id: "fld1EoChduqR62TBG",
              name: "💼 Ad sets",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld40kIuGumksMtWL",
              },
              id: "fldyeOPwrLYBpg2Wf",
              name: "📈 Results (from 📈 Results table)",
            },
            { type: "singleLineText", id: "fldztbNH0WRvgGvbz", name: "All" },
          ],
          views: [
            { id: "viwgcdA7Qjq3WxpfO", name: "All campaigns", type: "grid" },
            {
              id: "viwfGRAKNvreWolEB",
              name: "👀 Campaign gantt view",
              type: "block",
            },
            {
              id: "viwqOY5fz4fFDEyW4",
              name: "Campaign status dashboard",
              type: "kanban",
            },
          ],
        },
        {
          id: "tbl2z61REOeVsBT50",
          name: "💼 Ad sets",
          primaryFieldId: "fldPcImpB9Lpi6pat",
          fields: [
            { type: "singleLineText", id: "fldPcImpB9Lpi6pat", name: "Ad set" },
            {
              type: "multipleAttachments",
              id: "fldLQH6t63Uhr2xr1",
              name: "Creative",
            },
            { type: "multilineText", id: "fldl8ubf25DCzQg1N", name: "Copy" },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selvoanFS5hzLKwF6",
                    name: "Facebook",
                    color: "blueLight2",
                  },
                  {
                    id: "selytfWYaGDDZWbDa",
                    name: "Google",
                    color: "cyanLight2",
                  },
                  {
                    id: "sellVrut6U0AzuA8k",
                    name: "LinkedIn",
                    color: "tealLight2",
                  },
                  {
                    id: "selv7nX8gxvaXxzfl",
                    name: "Twitter",
                    color: "greenLight2",
                  },
                  {
                    id: "selBn4R9apewbI6aF",
                    name: "Instagram",
                    color: "yellowLight2",
                  },
                  {
                    id: "selv9aI9AuUX7iGyJ",
                    name: "Print",
                    color: "orangeLight2",
                  },
                  {
                    id: "sel4J6O4favGEqXvd",
                    name: "Out of home",
                    color: "redLight2",
                  },
                ],
              },
              id: "fldPZY9GEYSXkdHhR",
              name: "Platform",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld1EoChduqR62TBG",
              },
              id: "fldFSRqEmj3PSjIzQ",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
          ],
          views: [
            {
              id: "viwGmtJrx4uVpEBSl",
              name: "👋 Ads and creative",
              type: "gallery",
            },
            { id: "viw6lvMRKfFpsI7FX", name: "All ad sets", type: "grid" },
            { id: "viwimOL0uAMSsHlEA", name: "Ad set platforms", type: "grid" },
          ],
        },
        {
          id: "tblyM3d3KYX1fBXpA",
          name: "📈 Results",
          primaryFieldId: "fldBVBhBGvpKisMXL",
          fields: [
            { type: "singleLineText", id: "fldBVBhBGvpKisMXL", name: "Name" },
            { type: "singleLineText", id: "fldj7GLWklUwld5VL", name: "Goals" },
            { type: "currency", id: "fldj2asLrPL9EBjrE", name: "Spend" },
            { type: "number", id: "fldGiTdXaCzx8AJiU", name: "Impressions" },
            { type: "formula", id: "flddZefEDkKO2p8DV", name: "CPM" },
            { type: "number", id: "fldHZVikg7Yb0zinz", name: "Clicks" },
            { type: "formula", id: "flddguD1i35j8EOet", name: "CPC" },
            { type: "number", id: "fldhjo5vgOioU4tbb", name: "Conversions" },
            { type: "formula", id: "fldwhATmMKwk2TmpA", name: "CPA" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selogRwMmpKScEQmO",
                    name: "Continue",
                    color: "greenBright",
                  },
                  {
                    id: "selyo5W8Gnj7vD5c0",
                    name: "Analysis",
                    color: "greenLight2",
                  },
                  {
                    id: "selYO2Ibe3uIZcoiC",
                    name: "Pause",
                    color: "yellowLight1",
                  },
                  { id: "sel7HfJDGHFRDOwMn", name: "Stop", color: "redLight1" },
                ],
              },
              id: "fldF1QM4qsQt89PXL",
              name: "Next steps",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldyeOPwrLYBpg2Wf",
              },
              id: "fld40kIuGumksMtWL",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2dYOTFAzBLHXTr",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldXuueviR4zEIxoL",
              },
              id: "fldDkCD5VNAtn3whs",
              name: "All",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl273pmkdKl4Khj1",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldJdckC0kUdBqFyS",
              },
              id: "fldp3kJcDgq7kLErz",
              name: "All copy",
            },
          ],
          views: [
            { id: "viw64acuQKHmLiVcM", name: "All campaigns", type: "grid" },
            { id: "viwIxDB1BzfeH6uc5", name: "✔️ Next steps", type: "grid" },
            {
              id: "viwAgQTVMjnQRBNjk",
              name: "Results at a glance",
              type: "gallery",
            },
          ],
        },
        {
          id: "tbl2dYOTFAzBLHXTr",
          name: "All",
          primaryFieldId: "fldY8dL1WwDtypOSc",
          fields: [
            { type: "singleLineText", id: "fldY8dL1WwDtypOSc", name: "Name" },
            {
              type: "autoNumber",
              id: "fldHfQDE4nbio5fMX",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldunITjAhRzl9FPS", name: "f_barcode" },
            { type: "button", id: "fldWlg8wweREbVsLW", name: "f_button" },
            { type: "checkbox", id: "fldv1t1tCm0igYOjo", name: "f_checkbox" },
            { type: "count", id: "fldeIrvY3msU4gLP2", name: "f_count" },
            { type: "createdBy", id: "fldUwCJ07pLvsysS8", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldSaG9q1h3urY18M",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldOGVHVThpiJDHtZ", name: "f_currency" },
            { type: "date", id: "fldKdj6tYh195UdwV", name: "f_date" },
            { type: "dateTime", id: "fldtppyB5tEZIMNuY", name: "f_dateTime" },
            { type: "duration", id: "fldCx1qp5VRuXrFCm", name: "f_duration" },
            { type: "email", id: "fldE7HaB2vir3yxCY", name: "f_email" },
            { type: "formula", id: "fldT8nRxPBOAYcJD7", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldKqa3OlDrjwQo36",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldsNCKa6kZWCsfnD",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fld10IVONir3kl9of",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldLz7K2GWznfGAxw",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldpeqVDxd4M1GlqM",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "fldr0uTGf9CulZWCs",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldDkCD5VNAtn3whs",
              },
              id: "fldXuueviR4zEIxoL",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldHe7e1nqsloTnEu",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldZ4SbJOAOKtBfQx", name: "f_number" },
            { type: "percent", id: "fldOQn8gmsdSPRbCA", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fld0MawcExfWmxzVv",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "flduXcitSIELy995e", name: "f_rating" },
            { type: "richText", id: "fldQweOqvhP08d0FQ", name: "f_richText" },
            { type: "rollup", id: "fldat1EdBLwAESHt6", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldoegdec5k5vax6Z",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldyQjptvPYQLuC3O",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldJD38QMDEPoumuM",
              name: "f_singleSelect",
            },
            { type: "url", id: "fld27b0jemF1gb9jk", name: "f_url" },
          ],
          views: [{ id: "viw0JWZy6z8zT7XAw", name: "Grid view", type: "grid" }],
        },
        {
          id: "tbl273pmkdKl4Khj1",
          name: "Empty",
          primaryFieldId: "fldKRVR8EZt7v7W2j",
          fields: [
            { type: "singleLineText", id: "fldKRVR8EZt7v7W2j", name: "Name" },
            {
              type: "autoNumber",
              id: "fldtYyJLMQ1WlNnW4",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldg6qZqiKHdiRNZZ", name: "f_barcode" },
            { type: "button", id: "fldI4YeDeHHi8DAV3", name: "f_button" },
            { type: "checkbox", id: "fldhKb7AkPQWdGWtv", name: "f_checkbox" },
            { type: "count", id: "fld0r9B5LPiy1YTZ9", name: "f_count" },
            { type: "createdBy", id: "fldGfkP7PSB9pgA2f", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldETofxJKT8oG9iT",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldApDN2BKfWGlPD6", name: "f_currency" },
            { type: "date", id: "fldwW1cAGKRN2ClG2", name: "f_date" },
            { type: "dateTime", id: "fldf87EINWuDFuVE5", name: "f_dateTime" },
            { type: "duration", id: "fldogJwwNoH8U9NMt", name: "f_duration" },
            { type: "email", id: "fldqQpgIKY850gFM5", name: "f_email" },
            { type: "formula", id: "fldFR5XEx4EeVURNe", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldw9S9V36hXtywdd",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldewkQhONPAzanxK",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fldNJq1VvLhHh3hym",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldxiPQ9opp1coIHD",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldbX81KfGUqYotAT",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "flddJcZNXCs8iH4Mz",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldp3kJcDgq7kLErz",
              },
              id: "fldJdckC0kUdBqFyS",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldtXPk85TiZlBvOB",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldLNAhQw3Eoqjn0E", name: "f_number" },
            { type: "percent", id: "fldAz5en4V3wMzjMH", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fldMvSCjm05AjfH5C",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "fldgGUoAAbupvRhfl", name: "f_rating" },
            { type: "richText", id: "fldCfWUxdKFE5V8PX", name: "f_richText" },
            { type: "rollup", id: "fldWcJKkjemeBAPDd", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldaXYjlUyaJsSFg6",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldkz1vAdiOuIcKdV",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldvmLeXu6utlcuET",
              name: "f_singleSelect",
            },
            { type: "url", id: "fldOQT6qWPvFdThtr", name: "f_url" },
          ],
          views: [{ id: "viwMsE5FO2YdQP5KD", name: "Grid view", type: "grid" }],
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "11153",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:47 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwnJprCuzaJIsaTO; path=/; expires=Sun, 08 Jan 2023 00:09:47 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "11153",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/app21Qak1T4cGoiP7/tables")
  .once()
  .reply(
    200,
    {
      tables: [
        {
          id: "tbllaopqRMNISUAiH",
          name: "📣 Campaigns",
          primaryFieldId: "fldXl5MmXYEVxSdkP",
          fields: [
            {
              type: "singleLineText",
              id: "fldXl5MmXYEVxSdkP",
              name: "Campaign",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selGbc51zW9NNXioe",
                    name: "Development",
                    color: "cyanLight1",
                  },
                  {
                    id: "selcH0bR5RphHERXC",
                    name: "Planning",
                    color: "yellowLight1",
                  },
                  {
                    id: "self9uR9Ich39AMxc",
                    name: "Reviews",
                    color: "tealLight1",
                  },
                  {
                    id: "selDqi0T6dJ9Ei6I5",
                    name: "Published",
                    color: "greenLight1",
                  },
                  {
                    id: "selnxBXz0ZNqhJ4tI",
                    name: "On hold",
                    color: "grayBright",
                  },
                ],
              },
              id: "fldBVM4RoPpelu5ij",
              name: "Status",
            },
            { type: "multilineText", id: "fldnCtIwo2Mx1vUvv", name: "Goal" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selm9n1xW4BfTd2oJ",
                    name: "Awareness",
                    color: "blueBright",
                  },
                  {
                    id: "selcVFCFhg5WGJmFe",
                    name: "Consideration",
                    color: "cyanBright",
                  },
                  {
                    id: "selO9W3htGj6sD52O",
                    name: "Conversion",
                    color: "greenBright",
                  },
                ],
              },
              id: "fldaW3JeMwweQbWAr",
              name: "Funnel stage",
            },
            { type: "date", id: "fldyaPNESozF6ORmt", name: "Start date" },
            { type: "date", id: "fldieSrbU1PLmz4dm", name: "End date" },
            {
              type: "multipleLookupValues",
              id: "fldlkTL8a7A2dQqVj",
              name: "Next steps (from 📈 Results 2)",
            },
            {
              type: "multipleLookupValues",
              id: "flddnZ3LBa0SgVEmv",
              name: "Platform (from 💼 Ad sets table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2z61REOeVsBT50",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldFSRqEmj3PSjIzQ",
              },
              id: "fld1EoChduqR62TBG",
              name: "💼 Ad sets",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld40kIuGumksMtWL",
              },
              id: "fldyeOPwrLYBpg2Wf",
              name: "📈 Results (from 📈 Results table)",
            },
            { type: "singleLineText", id: "fldztbNH0WRvgGvbz", name: "All" },
          ],
          views: [
            { id: "viwgcdA7Qjq3WxpfO", name: "All campaigns", type: "grid" },
            {
              id: "viwfGRAKNvreWolEB",
              name: "👀 Campaign gantt view",
              type: "block",
            },
            {
              id: "viwqOY5fz4fFDEyW4",
              name: "Campaign status dashboard",
              type: "kanban",
            },
          ],
        },
        {
          id: "tbl2z61REOeVsBT50",
          name: "💼 Ad sets",
          primaryFieldId: "fldPcImpB9Lpi6pat",
          fields: [
            { type: "singleLineText", id: "fldPcImpB9Lpi6pat", name: "Ad set" },
            {
              type: "multipleAttachments",
              id: "fldLQH6t63Uhr2xr1",
              name: "Creative",
            },
            { type: "multilineText", id: "fldl8ubf25DCzQg1N", name: "Copy" },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selvoanFS5hzLKwF6",
                    name: "Facebook",
                    color: "blueLight2",
                  },
                  {
                    id: "selytfWYaGDDZWbDa",
                    name: "Google",
                    color: "cyanLight2",
                  },
                  {
                    id: "sellVrut6U0AzuA8k",
                    name: "LinkedIn",
                    color: "tealLight2",
                  },
                  {
                    id: "selv7nX8gxvaXxzfl",
                    name: "Twitter",
                    color: "greenLight2",
                  },
                  {
                    id: "selBn4R9apewbI6aF",
                    name: "Instagram",
                    color: "yellowLight2",
                  },
                  {
                    id: "selv9aI9AuUX7iGyJ",
                    name: "Print",
                    color: "orangeLight2",
                  },
                  {
                    id: "sel4J6O4favGEqXvd",
                    name: "Out of home",
                    color: "redLight2",
                  },
                ],
              },
              id: "fldPZY9GEYSXkdHhR",
              name: "Platform",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld1EoChduqR62TBG",
              },
              id: "fldFSRqEmj3PSjIzQ",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
          ],
          views: [
            {
              id: "viwGmtJrx4uVpEBSl",
              name: "👋 Ads and creative",
              type: "gallery",
            },
            { id: "viw6lvMRKfFpsI7FX", name: "All ad sets", type: "grid" },
            { id: "viwimOL0uAMSsHlEA", name: "Ad set platforms", type: "grid" },
          ],
        },
        {
          id: "tblyM3d3KYX1fBXpA",
          name: "📈 Results",
          primaryFieldId: "fldBVBhBGvpKisMXL",
          fields: [
            { type: "singleLineText", id: "fldBVBhBGvpKisMXL", name: "Name" },
            { type: "singleLineText", id: "fldj7GLWklUwld5VL", name: "Goals" },
            { type: "currency", id: "fldj2asLrPL9EBjrE", name: "Spend" },
            { type: "number", id: "fldGiTdXaCzx8AJiU", name: "Impressions" },
            { type: "formula", id: "flddZefEDkKO2p8DV", name: "CPM" },
            { type: "number", id: "fldHZVikg7Yb0zinz", name: "Clicks" },
            { type: "formula", id: "flddguD1i35j8EOet", name: "CPC" },
            { type: "number", id: "fldhjo5vgOioU4tbb", name: "Conversions" },
            { type: "formula", id: "fldwhATmMKwk2TmpA", name: "CPA" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selogRwMmpKScEQmO",
                    name: "Continue",
                    color: "greenBright",
                  },
                  {
                    id: "selyo5W8Gnj7vD5c0",
                    name: "Analysis",
                    color: "greenLight2",
                  },
                  {
                    id: "selYO2Ibe3uIZcoiC",
                    name: "Pause",
                    color: "yellowLight1",
                  },
                  { id: "sel7HfJDGHFRDOwMn", name: "Stop", color: "redLight1" },
                ],
              },
              id: "fldF1QM4qsQt89PXL",
              name: "Next steps",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldyeOPwrLYBpg2Wf",
              },
              id: "fld40kIuGumksMtWL",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2dYOTFAzBLHXTr",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldXuueviR4zEIxoL",
              },
              id: "fldDkCD5VNAtn3whs",
              name: "All",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl273pmkdKl4Khj1",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldJdckC0kUdBqFyS",
              },
              id: "fldp3kJcDgq7kLErz",
              name: "All copy",
            },
          ],
          views: [
            { id: "viw64acuQKHmLiVcM", name: "All campaigns", type: "grid" },
            { id: "viwIxDB1BzfeH6uc5", name: "✔️ Next steps", type: "grid" },
            {
              id: "viwAgQTVMjnQRBNjk",
              name: "Results at a glance",
              type: "gallery",
            },
          ],
        },
        {
          id: "tbl2dYOTFAzBLHXTr",
          name: "All",
          primaryFieldId: "fldY8dL1WwDtypOSc",
          fields: [
            { type: "singleLineText", id: "fldY8dL1WwDtypOSc", name: "Name" },
            {
              type: "autoNumber",
              id: "fldHfQDE4nbio5fMX",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldunITjAhRzl9FPS", name: "f_barcode" },
            { type: "button", id: "fldWlg8wweREbVsLW", name: "f_button" },
            { type: "checkbox", id: "fldv1t1tCm0igYOjo", name: "f_checkbox" },
            { type: "count", id: "fldeIrvY3msU4gLP2", name: "f_count" },
            { type: "createdBy", id: "fldUwCJ07pLvsysS8", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldSaG9q1h3urY18M",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldOGVHVThpiJDHtZ", name: "f_currency" },
            { type: "date", id: "fldKdj6tYh195UdwV", name: "f_date" },
            { type: "dateTime", id: "fldtppyB5tEZIMNuY", name: "f_dateTime" },
            { type: "duration", id: "fldCx1qp5VRuXrFCm", name: "f_duration" },
            { type: "email", id: "fldE7HaB2vir3yxCY", name: "f_email" },
            { type: "formula", id: "fldT8nRxPBOAYcJD7", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldKqa3OlDrjwQo36",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldsNCKa6kZWCsfnD",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fld10IVONir3kl9of",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldLz7K2GWznfGAxw",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldpeqVDxd4M1GlqM",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "fldr0uTGf9CulZWCs",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldDkCD5VNAtn3whs",
              },
              id: "fldXuueviR4zEIxoL",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldHe7e1nqsloTnEu",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldZ4SbJOAOKtBfQx", name: "f_number" },
            { type: "percent", id: "fldOQn8gmsdSPRbCA", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fld0MawcExfWmxzVv",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "flduXcitSIELy995e", name: "f_rating" },
            { type: "richText", id: "fldQweOqvhP08d0FQ", name: "f_richText" },
            { type: "rollup", id: "fldat1EdBLwAESHt6", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldoegdec5k5vax6Z",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldyQjptvPYQLuC3O",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldJD38QMDEPoumuM",
              name: "f_singleSelect",
            },
            { type: "url", id: "fld27b0jemF1gb9jk", name: "f_url" },
          ],
          views: [{ id: "viw0JWZy6z8zT7XAw", name: "Grid view", type: "grid" }],
        },
        {
          id: "tbl273pmkdKl4Khj1",
          name: "Empty",
          primaryFieldId: "fldKRVR8EZt7v7W2j",
          fields: [
            { type: "singleLineText", id: "fldKRVR8EZt7v7W2j", name: "Name" },
            {
              type: "autoNumber",
              id: "fldtYyJLMQ1WlNnW4",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldg6qZqiKHdiRNZZ", name: "f_barcode" },
            { type: "button", id: "fldI4YeDeHHi8DAV3", name: "f_button" },
            { type: "checkbox", id: "fldhKb7AkPQWdGWtv", name: "f_checkbox" },
            { type: "count", id: "fld0r9B5LPiy1YTZ9", name: "f_count" },
            { type: "createdBy", id: "fldGfkP7PSB9pgA2f", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldETofxJKT8oG9iT",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldApDN2BKfWGlPD6", name: "f_currency" },
            { type: "date", id: "fldwW1cAGKRN2ClG2", name: "f_date" },
            { type: "dateTime", id: "fldf87EINWuDFuVE5", name: "f_dateTime" },
            { type: "duration", id: "fldogJwwNoH8U9NMt", name: "f_duration" },
            { type: "email", id: "fldqQpgIKY850gFM5", name: "f_email" },
            { type: "formula", id: "fldFR5XEx4EeVURNe", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldw9S9V36hXtywdd",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldewkQhONPAzanxK",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fldNJq1VvLhHh3hym",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldxiPQ9opp1coIHD",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldbX81KfGUqYotAT",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "flddJcZNXCs8iH4Mz",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldp3kJcDgq7kLErz",
              },
              id: "fldJdckC0kUdBqFyS",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldtXPk85TiZlBvOB",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldLNAhQw3Eoqjn0E", name: "f_number" },
            { type: "percent", id: "fldAz5en4V3wMzjMH", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fldMvSCjm05AjfH5C",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "fldgGUoAAbupvRhfl", name: "f_rating" },
            { type: "richText", id: "fldCfWUxdKFE5V8PX", name: "f_richText" },
            { type: "rollup", id: "fldWcJKkjemeBAPDd", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldaXYjlUyaJsSFg6",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldkz1vAdiOuIcKdV",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldvmLeXu6utlcuET",
              name: "f_singleSelect",
            },
            { type: "url", id: "fldOQT6qWPvFdThtr", name: "f_url" },
          ],
          views: [{ id: "viwMsE5FO2YdQP5KD", name: "Grid view", type: "grid" }],
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "11153",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:47 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwO6Uwze0HiLWPbP; path=/; expires=Sun, 08 Jan 2023 00:09:47 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "11153",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/app21Qak1T4cGoiP7/tables")
  .once()
  .reply(
    200,
    {
      tables: [
        {
          id: "tbllaopqRMNISUAiH",
          name: "📣 Campaigns",
          primaryFieldId: "fldXl5MmXYEVxSdkP",
          fields: [
            {
              type: "singleLineText",
              id: "fldXl5MmXYEVxSdkP",
              name: "Campaign",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selGbc51zW9NNXioe",
                    name: "Development",
                    color: "cyanLight1",
                  },
                  {
                    id: "selcH0bR5RphHERXC",
                    name: "Planning",
                    color: "yellowLight1",
                  },
                  {
                    id: "self9uR9Ich39AMxc",
                    name: "Reviews",
                    color: "tealLight1",
                  },
                  {
                    id: "selDqi0T6dJ9Ei6I5",
                    name: "Published",
                    color: "greenLight1",
                  },
                  {
                    id: "selnxBXz0ZNqhJ4tI",
                    name: "On hold",
                    color: "grayBright",
                  },
                ],
              },
              id: "fldBVM4RoPpelu5ij",
              name: "Status",
            },
            { type: "multilineText", id: "fldnCtIwo2Mx1vUvv", name: "Goal" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selm9n1xW4BfTd2oJ",
                    name: "Awareness",
                    color: "blueBright",
                  },
                  {
                    id: "selcVFCFhg5WGJmFe",
                    name: "Consideration",
                    color: "cyanBright",
                  },
                  {
                    id: "selO9W3htGj6sD52O",
                    name: "Conversion",
                    color: "greenBright",
                  },
                ],
              },
              id: "fldaW3JeMwweQbWAr",
              name: "Funnel stage",
            },
            { type: "date", id: "fldyaPNESozF6ORmt", name: "Start date" },
            { type: "date", id: "fldieSrbU1PLmz4dm", name: "End date" },
            {
              type: "multipleLookupValues",
              id: "fldlkTL8a7A2dQqVj",
              name: "Next steps (from 📈 Results 2)",
            },
            {
              type: "multipleLookupValues",
              id: "flddnZ3LBa0SgVEmv",
              name: "Platform (from 💼 Ad sets table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2z61REOeVsBT50",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldFSRqEmj3PSjIzQ",
              },
              id: "fld1EoChduqR62TBG",
              name: "💼 Ad sets",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld40kIuGumksMtWL",
              },
              id: "fldyeOPwrLYBpg2Wf",
              name: "📈 Results (from 📈 Results table)",
            },
            { type: "singleLineText", id: "fldztbNH0WRvgGvbz", name: "All" },
          ],
          views: [
            { id: "viwgcdA7Qjq3WxpfO", name: "All campaigns", type: "grid" },
            {
              id: "viwfGRAKNvreWolEB",
              name: "👀 Campaign gantt view",
              type: "block",
            },
            {
              id: "viwqOY5fz4fFDEyW4",
              name: "Campaign status dashboard",
              type: "kanban",
            },
          ],
        },
        {
          id: "tbl2z61REOeVsBT50",
          name: "💼 Ad sets",
          primaryFieldId: "fldPcImpB9Lpi6pat",
          fields: [
            { type: "singleLineText", id: "fldPcImpB9Lpi6pat", name: "Ad set" },
            {
              type: "multipleAttachments",
              id: "fldLQH6t63Uhr2xr1",
              name: "Creative",
            },
            { type: "multilineText", id: "fldl8ubf25DCzQg1N", name: "Copy" },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selvoanFS5hzLKwF6",
                    name: "Facebook",
                    color: "blueLight2",
                  },
                  {
                    id: "selytfWYaGDDZWbDa",
                    name: "Google",
                    color: "cyanLight2",
                  },
                  {
                    id: "sellVrut6U0AzuA8k",
                    name: "LinkedIn",
                    color: "tealLight2",
                  },
                  {
                    id: "selv7nX8gxvaXxzfl",
                    name: "Twitter",
                    color: "greenLight2",
                  },
                  {
                    id: "selBn4R9apewbI6aF",
                    name: "Instagram",
                    color: "yellowLight2",
                  },
                  {
                    id: "selv9aI9AuUX7iGyJ",
                    name: "Print",
                    color: "orangeLight2",
                  },
                  {
                    id: "sel4J6O4favGEqXvd",
                    name: "Out of home",
                    color: "redLight2",
                  },
                ],
              },
              id: "fldPZY9GEYSXkdHhR",
              name: "Platform",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fld1EoChduqR62TBG",
              },
              id: "fldFSRqEmj3PSjIzQ",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
          ],
          views: [
            {
              id: "viwGmtJrx4uVpEBSl",
              name: "👋 Ads and creative",
              type: "gallery",
            },
            { id: "viw6lvMRKfFpsI7FX", name: "All ad sets", type: "grid" },
            { id: "viwimOL0uAMSsHlEA", name: "Ad set platforms", type: "grid" },
          ],
        },
        {
          id: "tblyM3d3KYX1fBXpA",
          name: "📈 Results",
          primaryFieldId: "fldBVBhBGvpKisMXL",
          fields: [
            { type: "singleLineText", id: "fldBVBhBGvpKisMXL", name: "Name" },
            { type: "singleLineText", id: "fldj7GLWklUwld5VL", name: "Goals" },
            { type: "currency", id: "fldj2asLrPL9EBjrE", name: "Spend" },
            { type: "number", id: "fldGiTdXaCzx8AJiU", name: "Impressions" },
            { type: "formula", id: "flddZefEDkKO2p8DV", name: "CPM" },
            { type: "number", id: "fldHZVikg7Yb0zinz", name: "Clicks" },
            { type: "formula", id: "flddguD1i35j8EOet", name: "CPC" },
            { type: "number", id: "fldhjo5vgOioU4tbb", name: "Conversions" },
            { type: "formula", id: "fldwhATmMKwk2TmpA", name: "CPA" },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selogRwMmpKScEQmO",
                    name: "Continue",
                    color: "greenBright",
                  },
                  {
                    id: "selyo5W8Gnj7vD5c0",
                    name: "Analysis",
                    color: "greenLight2",
                  },
                  {
                    id: "selYO2Ibe3uIZcoiC",
                    name: "Pause",
                    color: "yellowLight1",
                  },
                  { id: "sel7HfJDGHFRDOwMn", name: "Stop", color: "redLight1" },
                ],
              },
              id: "fldF1QM4qsQt89PXL",
              name: "Next steps",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbllaopqRMNISUAiH",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldyeOPwrLYBpg2Wf",
              },
              id: "fld40kIuGumksMtWL",
              name: "📣 Campaigns (from 📣 Campaigns table)",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl2dYOTFAzBLHXTr",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldXuueviR4zEIxoL",
              },
              id: "fldDkCD5VNAtn3whs",
              name: "All",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tbl273pmkdKl4Khj1",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldJdckC0kUdBqFyS",
              },
              id: "fldp3kJcDgq7kLErz",
              name: "All copy",
            },
          ],
          views: [
            { id: "viw64acuQKHmLiVcM", name: "All campaigns", type: "grid" },
            { id: "viwIxDB1BzfeH6uc5", name: "✔️ Next steps", type: "grid" },
            {
              id: "viwAgQTVMjnQRBNjk",
              name: "Results at a glance",
              type: "gallery",
            },
          ],
        },
        {
          id: "tbl2dYOTFAzBLHXTr",
          name: "All",
          primaryFieldId: "fldY8dL1WwDtypOSc",
          fields: [
            { type: "singleLineText", id: "fldY8dL1WwDtypOSc", name: "Name" },
            {
              type: "autoNumber",
              id: "fldHfQDE4nbio5fMX",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldunITjAhRzl9FPS", name: "f_barcode" },
            { type: "button", id: "fldWlg8wweREbVsLW", name: "f_button" },
            { type: "checkbox", id: "fldv1t1tCm0igYOjo", name: "f_checkbox" },
            { type: "count", id: "fldeIrvY3msU4gLP2", name: "f_count" },
            { type: "createdBy", id: "fldUwCJ07pLvsysS8", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldSaG9q1h3urY18M",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldOGVHVThpiJDHtZ", name: "f_currency" },
            { type: "date", id: "fldKdj6tYh195UdwV", name: "f_date" },
            { type: "dateTime", id: "fldtppyB5tEZIMNuY", name: "f_dateTime" },
            { type: "duration", id: "fldCx1qp5VRuXrFCm", name: "f_duration" },
            { type: "email", id: "fldE7HaB2vir3yxCY", name: "f_email" },
            { type: "formula", id: "fldT8nRxPBOAYcJD7", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldKqa3OlDrjwQo36",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldsNCKa6kZWCsfnD",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fld10IVONir3kl9of",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldLz7K2GWznfGAxw",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldpeqVDxd4M1GlqM",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "fldr0uTGf9CulZWCs",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldDkCD5VNAtn3whs",
              },
              id: "fldXuueviR4zEIxoL",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldHe7e1nqsloTnEu",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldZ4SbJOAOKtBfQx", name: "f_number" },
            { type: "percent", id: "fldOQn8gmsdSPRbCA", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fld0MawcExfWmxzVv",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "flduXcitSIELy995e", name: "f_rating" },
            { type: "richText", id: "fldQweOqvhP08d0FQ", name: "f_richText" },
            { type: "rollup", id: "fldat1EdBLwAESHt6", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldoegdec5k5vax6Z",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldyQjptvPYQLuC3O",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldJD38QMDEPoumuM",
              name: "f_singleSelect",
            },
            { type: "url", id: "fld27b0jemF1gb9jk", name: "f_url" },
          ],
          views: [{ id: "viw0JWZy6z8zT7XAw", name: "Grid view", type: "grid" }],
        },
        {
          id: "tbl273pmkdKl4Khj1",
          name: "Empty",
          primaryFieldId: "fldKRVR8EZt7v7W2j",
          fields: [
            { type: "singleLineText", id: "fldKRVR8EZt7v7W2j", name: "Name" },
            {
              type: "autoNumber",
              id: "fldtYyJLMQ1WlNnW4",
              name: "f_autoNumber",
            },
            { type: "barcode", id: "fldg6qZqiKHdiRNZZ", name: "f_barcode" },
            { type: "button", id: "fldI4YeDeHHi8DAV3", name: "f_button" },
            { type: "checkbox", id: "fldhKb7AkPQWdGWtv", name: "f_checkbox" },
            { type: "count", id: "fld0r9B5LPiy1YTZ9", name: "f_count" },
            { type: "createdBy", id: "fldGfkP7PSB9pgA2f", name: "f_createdBy" },
            {
              type: "createdTime",
              id: "fldETofxJKT8oG9iT",
              name: "f_createdTime",
            },
            { type: "currency", id: "fldApDN2BKfWGlPD6", name: "f_currency" },
            { type: "date", id: "fldwW1cAGKRN2ClG2", name: "f_date" },
            { type: "dateTime", id: "fldf87EINWuDFuVE5", name: "f_dateTime" },
            { type: "duration", id: "fldogJwwNoH8U9NMt", name: "f_duration" },
            { type: "email", id: "fldqQpgIKY850gFM5", name: "f_email" },
            { type: "formula", id: "fldFR5XEx4EeVURNe", name: "f_formula" },
            {
              type: "lastModifiedBy",
              id: "fldw9S9V36hXtywdd",
              name: "f_lastModifiedBy",
            },
            {
              type: "lastModifiedTime",
              id: "fldewkQhONPAzanxK",
              name: "f_lastModifiedTime",
            },
            {
              type: "multilineText",
              id: "fldNJq1VvLhHh3hym",
              name: "f_multilineText",
            },
            {
              type: "multipleAttachments",
              id: "fldxiPQ9opp1coIHD",
              name: "f_multipleAttachments",
            },
            {
              type: "multipleCollaborators",
              id: "fldbX81KfGUqYotAT",
              name: "f_multipleCollaborators",
            },
            {
              type: "multipleLookupValues",
              id: "flddJcZNXCs8iH4Mz",
              name: "f_multipleLookupValues",
            },
            {
              type: "multipleRecordLinks",
              options: {
                linkedTableId: "tblyM3d3KYX1fBXpA",
                isReversed: false,
                prefersSingleRecordLink: false,
                inverseLinkFieldId: "fldp3kJcDgq7kLErz",
              },
              id: "fldJdckC0kUdBqFyS",
              name: "f_multipleRecordLinks",
            },
            {
              type: "multipleSelects",
              options: {
                choices: [
                  {
                    id: "selOKynE79J09d88j",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selnUHmtpvuMF0B0e",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selVphGxQcZZ66VYk", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldtXPk85TiZlBvOB",
              name: "f_multipleSelects",
            },
            { type: "number", id: "fldLNAhQw3Eoqjn0E", name: "f_number" },
            { type: "percent", id: "fldAz5en4V3wMzjMH", name: "f_percent" },
            {
              type: "phoneNumber",
              id: "fldMvSCjm05AjfH5C",
              name: "f_phoneNumber",
            },
            { type: "rating", id: "fldgGUoAAbupvRhfl", name: "f_rating" },
            { type: "richText", id: "fldCfWUxdKFE5V8PX", name: "f_richText" },
            { type: "rollup", id: "fldWcJKkjemeBAPDd", name: "f_rollup" },
            {
              type: "singleCollaborator",
              id: "fldaXYjlUyaJsSFg6",
              name: "f_singleCollaborator",
            },
            {
              type: "singleLineText",
              id: "fldkz1vAdiOuIcKdV",
              name: "f_singleLineText",
            },
            {
              type: "singleSelect",
              options: {
                choices: [
                  {
                    id: "selxNliIiqgxjkXyc",
                    name: "Blue",
                    color: "cyanLight2",
                  },
                  {
                    id: "selxxPGoufRTTHPTx",
                    name: "Green",
                    color: "tealLight2",
                  },
                  { id: "selU8OLbdRCakAVQQ", name: "Red", color: "blueLight2" },
                ],
              },
              id: "fldvmLeXu6utlcuET",
              name: "f_singleSelect",
            },
            { type: "url", id: "fldOQT6qWPvFdThtr", name: "f_url" },
          ],
          views: [{ id: "viwMsE5FO2YdQP5KD", name: "Grid view", type: "grid" }],
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "11153",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:47 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwP2Pa53QfQ2IOVs; path=/; expires=Sun, 08 Jan 2023 00:09:47 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "11153",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22junkId%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwg1nFc5b0QiaacF; path=/; expires=Sun, 08 Jan 2023 00:09:48 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
