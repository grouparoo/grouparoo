import {
  GetSampleRowsMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/table";
import { castRow, getFields } from "./util";

export const getSampleRows: GetSampleRowsMethod = async ({
  connection,
  appOptions,
  sourceOptions,
  tableName,
}) => {
  const out: DataResponseRow[] = [];
  if (sourceOptions) {
    const fields = getFields(sourceOptions);
    const filterFields = Object.assign({}, ...fields.map((s) => ({ [s]: 1 })));
    const rows = await connection.db
      .collection(tableName)
      .aggregate([{ $project: filterFields }, { $sample: { size: 10 } }])
      .toArray();

    rows.forEach((row) => out.push(castRow(row)));
  }
  return out;
};
