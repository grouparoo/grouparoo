"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.previewCSV = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const csv_parser_1 = __importDefault(require("csv-parser"));
async function previewCSV(localPath) {
    const response = [];
    const stream = fs_extra_1.default.createReadStream(localPath);
    const parser = stream.pipe((0, csv_parser_1.default)());
    await new Promise((resolve, reject) => {
        parser.on("data", (row) => {
            if (response.length < 10)
                response.push(row);
            if (response.length >= 10) {
                stream.destroy();
                return resolve(null);
            }
        });
        parser.once("end", () => resolve(null));
        parser.once("close", () => resolve(null));
        parser.once("error", (error) => reject(error));
    });
    return response;
}
exports.previewCSV = previewCSV;
