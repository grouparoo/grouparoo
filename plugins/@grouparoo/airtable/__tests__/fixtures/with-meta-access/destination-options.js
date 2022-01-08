const nock = require("nock");

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
      "Sat, 08 Jan 2022 00:09:58 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwi3yrSz4zRqZDmB; path=/; expires=Sun, 08 Jan 2023 00:09:58 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:58 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwemm6RYoyRCvKRL; path=/; expires=Sun, 08 Jan 2023 00:09:58 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwR9wqJzmVljo8mf; path=/; expires=Sun, 08 Jan 2023 00:09:59 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwwxR0eNYyyRV5bs; path=/; expires=Sun, 08 Jan 2023 00:09:59 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwYzc81vQvI9nbfi; path=/; expires=Sun, 08 Jan 2023 00:09:59 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:10:00 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwAfXmfsSIcNhXDQ; path=/; expires=Sun, 08 Jan 2023 00:10:00 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:10:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwyoiaqNZUq10yFl; path=/; expires=Sun, 08 Jan 2023 00:10:01 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:10:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwnITV5jBfZHlhLo; path=/; expires=Sun, 08 Jan 2023 00:10:01 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:10:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwwk3snt3lwHP9GX; path=/; expires=Sun, 08 Jan 2023 00:10:02 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:10:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwSrwbdmXOsOiIwQ; path=/; expires=Sun, 08 Jan 2023 00:10:02 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:10:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brweUa1v3RkYcVDfc; path=/; expires=Sun, 08 Jan 2023 00:10:02 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:10:03 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwXCQBq3lnTb3ZPS; path=/; expires=Sun, 08 Jan 2023 00:10:03 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:10:03 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwaYcMZkv05kjGjR; path=/; expires=Sun, 08 Jan 2023 00:10:03 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:10:03 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwNOOLMJXMLVMdnt; path=/; expires=Sun, 08 Jan 2023 00:10:03 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:10:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwHvyzrspsPbumjr; path=/; expires=Sun, 08 Jan 2023 00:10:04 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:10:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brweIwI95BOq6uXJd; path=/; expires=Sun, 08 Jan 2023 00:10:04 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:10:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwYffiGMJw9qPRCV; path=/; expires=Sun, 08 Jan 2023 00:10:04 GMT; domain=.airtable.com; samesite=none; secure",
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
