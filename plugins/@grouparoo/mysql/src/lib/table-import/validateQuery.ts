export function validateQuery(sql: string) {
  const lowerCaseSQL = sql.toLowerCase();

  if (lowerCaseSQL.indexOf(";") >= 0) {
    throw new Error("only provide a single query");
  }

  if (lowerCaseSQL.indexOf("--") >= 0) {
    throw new Error("please remove any comments from the query");
  }

  if (lowerCaseSQL.indexOf("select") !== 0) {
    throw new Error("query should start with SELECT");
  }
}
