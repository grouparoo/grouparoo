import {
  GetSampleRowsMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/table";
import { castRow } from "./util";

export const getSampleRows: GetSampleRowsMethod = async ({
  connection,
  appOptions,
  sourceOptions,
  tableName,
}) => {
  const out: DataResponseRow[] = [];
  if (sourceOptions) {
    const fields = sourceOptions.fields.toString().split(",");
    const filterFields = Object.assign({}, ...fields.map((s) => ({ [s]: 1 })));

    const rows = await connection.db
      .collection(tableName)
      .aggregate([{ $project: filterFields }, { $sample: { size: 10 } }])
      .toArray();

    rows.forEach((row) => out.push(castRow(row)));
  }
  return out;
};
