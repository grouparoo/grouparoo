export const TYPES: Readonly<Record<string, Record<string, string>>> = {
  users: {
    id: "INT NOT NULL PRIMARY KEY",
    account_id: "INT",
    first_name: "VARCHAR(191)",
    last_name: "VARCHAR(191)",
    email: "VARCHAR(191)",
    gender: "VARCHAR(191)",
    ip_address: "VARCHAR(191)",
    avatar: "VARCHAR(191)",
    language: "VARCHAR(191)",
    deactivated: "BOOLEAN",
    created_at: "TIMESTAMP NOT NULL",
    updated_at: "TIMESTAMP NOT NULL",
  },

  admins: {
    id: "INT NOT NULL PRIMARY KEY",
    first_name: "VARCHAR(191)",
    last_name: "VARCHAR(191)",
    email: "VARCHAR(191)",
    permission: "VARCHAR(191)",
    created_at: "TIMESTAMP NOT NULL",
    updated_at: "TIMESTAMP NOT NULL",
  },

  purchases: {
    id: "INT NOT NULL PRIMARY KEY",
    user_id: "INT NOT NULL",
    item: "VARCHAR(191)",
    category: "VARCHAR(191)",
    price: "DECIMAL",
    state: "VARCHAR(191)",
    created_at: "TIMESTAMP NOT NULL",
  },

  accounts: {
    id: "INT NOT NULL PRIMARY KEY",
    name: "VARCHAR(191)",
    domain: "VARCHAR(191)",
    plan_id: "INT",
    created_at: "TIMESTAMP NOT NULL",
    updated_at: "TIMESTAMP NOT NULL",
  },

  plans: {
    id: "INT NOT NULL PRIMARY KEY",
    name: "VARCHAR(191)",
    seats: "INT NOT NULL",
    monthly_rate: "INT NOT NULL",
  },

  payments: {
    id: "INT NOT NULL PRIMARY KEY",
    account_id: "INT NOT NULL",
    amount: "DECIMAL",
    state: "VARCHAR(191)",
    created_at: "TIMESTAMP NOT NULL",
  },
};

export const COUNTS = {
  users: 1000,
  admins: 25,
  purchases: 1000,
  accounts: 50,
  plans: 4,
  payments: 1000,
};

const badEmail = function (val) {
  return val.replace("@", "-");
};
const badNumber = function (val, num) {
  if (num % 2 === 0) {
    return `-${val}`;
  } else {
    return "NaN";
  }
};
const emptyValue = function () {
  return "";
};

export const JUNK = {
  users: {
    first_name: emptyValue,
    email: badEmail,
    deactivated: emptyValue,
  },

  admins: {
    email: badEmail,
  },

  purchases: {
    category: emptyValue,
    price: badNumber,
  },

  accounts: {
    name: emptyValue,
  },

  plans: {
    name: emptyValue,
    seats: badNumber,
    monthly_rate: badNumber,
  },

  payments: {
    amount: badNumber,
  },
};
