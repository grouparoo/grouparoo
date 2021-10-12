export const TYPES = {
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
