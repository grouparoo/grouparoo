import {
  GetSampleRowsMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/table";
import { castRow, getFields } from "./util";

export const getSampleRows: GetSampleRowsMethod = async ({
  connection,
  appOptions,
  tableName,
}) => {
  const out: DataResponseRow[] = [];
  const fields = await getFields(
    connection,
    appOptions.database as string,
    tableName
  );
  const filterFields = Object.assign({}, ...fields.map((s) => ({ [s]: 1 })), {
    _id: 0,
  });
  const rows = await connection
    .db(appOptions.database)
    .collection(tableName)
    .aggregate([{ $project: filterFields }, { $sample: { size: 10 } }])
    .toArray();

  rows.forEach((row) => {
    out.push(castRow(row));
  });

  return out;
};
