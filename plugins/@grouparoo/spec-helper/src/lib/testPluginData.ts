const users = [
  {
    id: 1,
    accountId: 42,
    firstName: "mario",
    lastName: "mario",
    email: "mario@nintendo.com",
    lastLoginAt: "2020-01-02",
    ltv: 500,
    isVIP: true,
    purchases: 123,
    purchaseAmounts: 12,
  },
  {
    id: 2,
    accountId: 12,
    firstName: "luigi",
    lastName: "mario",
    email: "luigi@nintendo.com",
    lastLoginAt: "2020-01-02",
    ltv: 213,
    isVIP: false,
    purchases: 18,
    purchaseAmounts: 50,
  },
  {
    id: 3,
    accountId: 42,
    firstName: "peach",
    lastName: "toadstool",
    email: "peach@nintendo.com",
    lastLoginAt: "2020-05-02",
    ltv: 321,
    isVIP: true,
    purchases: 212,
    purchaseAmounts: 0,
  },
];

const admins = [
  { id: 1, fname: "mario", lname: "mario" },
  { id: 2, fname: "luigi", lname: "mario" },
  { id: 3, fname: "peach", lname: "toadstool" },
];

const purchases = [
  { id: 1, user_id: 1, product_id: 1 },
  { id: 1, user_id: 1, product_id: 2 },
  { id: 3, user_id: 3, product_id: 1 },
];

const products = [
  { id: 1, name: "Hat" },
  { id: 2, name: "Overalls" },
  { id: 3, name: "Mushroom" },
];

export const TestPluginData = {
  users,
  admins,
  purchases,
  products,
};
