export function validateQuery(sql: string, allowLimitAndOffset = true) {
  const lowerCaseSQL = sql.toLowerCase();

  if (!lowerCaseSQL.trim()) {
    throw new Error("please provide a query");
  }

  if (lowerCaseSQL.indexOf("--") >= 0) {
    throw new Error("please remove any comments from the query");
  }

  if (!allowLimitAndOffset && lowerCaseSQL.indexOf(" limit") >= 0) {
    throw new Error("please remove any limits from the query");
  }

  if (!allowLimitAndOffset && lowerCaseSQL.indexOf(" offset") >= 0) {
    throw new Error("please remove any offsets from the query");
  }

  // if (
  //   lowerCaseSQL.indexOf("select") !== 0 &&
  //   lowerCaseSQL.indexOf("insert") !== 0 &&
  //   lowerCaseSQL.indexOf("update") !== 0 &&
  //   lowerCaseSQL.indexOf("delete") !== 0
  // ) {
  //   throw new Error(
  //     "query should start with SELECT, INSERT, UPDATE, or DELETE"
  //   );
  // }

  return sql;
}
