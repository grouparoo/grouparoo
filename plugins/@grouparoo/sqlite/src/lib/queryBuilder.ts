import { SQLiteQueryParamValue } from "./sqlite";
import { validateQuery } from "./validateQuery";

export default class SQLiteQueryBuilder {
  private statements: string[] = [];
  private params: SQLiteQueryParamValue[] = [];

  constructor(statement?: string, params?: SQLiteQueryParamValue[]) {
    if (statement) {
      this.push(statement, params);
    }
  }

  push(
    statement: string,
    params?: SQLiteQueryParamValue[],
    options?: {
      prependComma?: boolean;
    }
  ): SQLiteQueryBuilder {
    if (options?.prependComma && this.statements.length > 0) {
      this.statements[this.statements.length - 1] += ",";
    }

    this.statements.push(statement);

    if (params) {
      this.pushParams(params);
    }

    return this;
  }

  pushParams(params: SQLiteQueryParamValue[]): SQLiteQueryBuilder {
    this.params.push(...params);

    return this;
  }

  build(): [query: string, params: SQLiteQueryParamValue[]] {
    const query = validateQuery(this.statements.join(" "));
    const params = [...this.params];

    return [query, params];
  }

  static build(statement: string, params?: SQLiteQueryParamValue[]) {
    return new SQLiteQueryBuilder(statement, params).build();
  }
}
