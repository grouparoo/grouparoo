import { objectCache } from "@grouparoo/core";

export async function ensureCompanyIdByName({
  connection,
  companyName,
}): Promise<number> {
  // Check if it's already exists
  let company = await connection.getCompanyByName(companyName);
  if (company) {
    return company.id;
  }

  // Create it if not exists
  company = await connection.createCompany({
    name: companyName,
  });
  return company.id;
}

export async function getCompanyIdByName({
  appId,
  connection,
  appOptions,
  companyName,
}): Promise<number> {
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getCompanyIdByName", companyName, appOptions];
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs, write: true },
    async () => {
      return ensureCompanyIdByName({
        connection,
        companyName,
      });
    }
  );
}
