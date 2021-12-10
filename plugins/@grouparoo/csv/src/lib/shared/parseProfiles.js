"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseProfiles = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const core_1 = require("@grouparoo/core");
async function parseProfiles({ localPath, source, sourceMapping, run, limit, highWaterMark, }) {
    var _a;
    // unlike a normal source in which we could fetch Record Properties as needed, we need to be sure we get them all in one go
    let combinedMapping = Object.assign({}, sourceMapping);
    const properties = await source.$get("properties");
    for (const i in properties) {
        const property = properties[i];
        const propertyOptions = await property.getOptions();
        const propertyMapping = {};
        if (propertyOptions.column) {
            propertyMapping[(_a = propertyOptions.column) === null || _a === void 0 ? void 0 : _a.toString()] = property.key;
            combinedMapping = Object.assign(combinedMapping, propertyMapping);
        }
    }
    const stream = fs_extra_1.default.createReadStream(localPath);
    const parser = stream.pipe((0, csv_parser_1.default)());
    // TODO: Is there a way to scan by row numbers and start/stop the stream as needed?
    //       Scanning the whole file each time seems silly.
    let rowId = -1;
    const validRows = [];
    const offset = (highWaterMark === null || highWaterMark === void 0 ? void 0 : highWaterMark.row)
        ? parseInt(highWaterMark === null || highWaterMark === void 0 ? void 0 : highWaterMark.row.toString())
        : 0;
    await new Promise((resolve, reject) => {
        parser.on("data", (row) => {
            rowId++;
            const inRange = rowId >= offset && rowId < offset + limit;
            if (inRange)
                validRows.push(row);
            if (rowId > offset + limit) {
                stream.destroy();
                return resolve(null);
            }
        });
        parser.once("end", () => resolve(null));
        parser.once("close", () => resolve(null));
        parser.once("error", (error) => reject(error));
    });
    await core_1.plugin.createImports(combinedMapping, run, validRows);
    return {
        importsCount: validRows.length,
        highWaterMark: { row: (offset + validRows.length).toString() },
        sourceOffset: 0,
    };
}
exports.parseProfiles = parseProfiles;
