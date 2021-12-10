"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseProfileProperties = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const csv_parser_1 = __importDefault(require("csv-parser"));
async function parseProfileProperties({ localPath, columnNameHash, mappedCSVColumn, primaryKeysHash, }) {
    const data = {};
    const columnNames = Object.keys(columnNameHash);
    const stream = fs_extra_1.default.createReadStream(localPath);
    const parser = stream.pipe((0, csv_parser_1.default)());
    await new Promise((resolve, reject) => {
        // All columns in the row are returned as strings
        parser.on("data", (row) => {
            const profileId = primaryKeysHash[row[mappedCSVColumn]];
            if (!profileId)
                return;
            data[profileId] = {};
            for (const columnName in row) {
                if (columnNames.includes(columnName)) {
                    data[profileId][columnNameHash[columnName]] = [row[columnName]];
                }
            }
        });
        parser.once("end", () => resolve(null));
        parser.once("close", () => resolve(null));
        parser.once("error", (error) => reject(error));
    });
    return data;
}
exports.parseProfileProperties = parseProfileProperties;
