import { AppOptionsMethod } from "@grouparoo/core";

export const appOptions: AppOptionsMethod = async () => {
  return {
    salesforceDomain: {
      type: "list",
      options: ["https://login.salesforce.com", "https://test.salesforce.com"],
      descriptions: ["Production domain", "Sandbox domain"],
    },
    pardotDomain: {
      type: "list",
      options: ["https://pi.pardot.com", "https://pi.demo.pardot.com"],
      descriptions: ["Production domain", "Demo domain"],
    },
    password: { type: "password" },
    securityToken: { type: "password" },
  };
};
