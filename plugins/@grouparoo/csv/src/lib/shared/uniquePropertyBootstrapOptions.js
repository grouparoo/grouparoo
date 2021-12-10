"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniquePropertyBootstrapOptions = void 0;
const uniquePropertyBootstrapOptions = async ({ mappedColumn }) => {
    const options = { column: mappedColumn, aggregationMethod: "exact" };
    return options;
};
exports.uniquePropertyBootstrapOptions = uniquePropertyBootstrapOptions;
