import { FreshdeskClient } from "../../src/lib/client";

export async function findCompanyFromAll(
  client: FreshdeskClient,
  name: string
) {
  const companies = await client.getAllCompanies();
  return companies.find((c) => c.name === name) ?? null;
}
