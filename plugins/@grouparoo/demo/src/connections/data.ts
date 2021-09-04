export const TYPES = {
  users: {
    id: "INT NOT NULL PRIMARY KEY",
    account_id: "INT",
    first_name: "VARCHAR(191) NOT NULL",
    last_name: "VARCHAR(191) NOT NULL",
    email: "VARCHAR(191) NOT NULL",
    gender: "VARCHAR(191)",
    ip_address: "VARCHAR(191)",
    avatar: "VARCHAR(191)",
    language: "VARCHAR(191)",
    deactivated: "BOOLEAN",
    created_at: "TIMESTAMP NOT NULL",
    updated_at: "TIMESTAMP NOT NULL",
  },

  purchases: {
    id: "INT NOT NULL PRIMARY KEY",
    user_id: "INT NOT NULL",
    item: "VARCHAR(191) NOT NULL",
    category: "VARCHAR(191) NOT NULL",
    price: "DECIMAL",
    state: "VARCHAR(191)",
    created_at: "TIMESTAMP NOT NULL",
  },

  accounts: {
    id: "INT NOT NULL PRIMARY KEY",
    name: "VARCHAR(191) NOT NULL",
    domain: "VARCHAR(191) NOT NULL",
    plan_id: "INT",
    created_at: "TIMESTAMP NOT NULL",
    updated_at: "TIMESTAMP NOT NULL",
  },

  plans: {
    id: "INT NOT NULL PRIMARY KEY",
    name: "VARCHAR(191) NOT NULL",
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
