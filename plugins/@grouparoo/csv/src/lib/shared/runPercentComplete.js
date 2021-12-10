"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runPercentComplete = void 0;
const fs_1 = require("fs");
async function runPercentComplete(run, localFile) {
    const total = await new Promise((resolve, reject) => {
        let i;
        let count = 0;
        // http://stackoverflow.com/questions/12453057/node-js-count-the-number-of-lines-in-a-file
        (0, fs_1.createReadStream)(localFile)
            .once("error", (error) => reject(error))
            .on("data", (chunk) => {
            for (i = 0; i < chunk.length; ++i)
                if (chunk[i] == 10)
                    count++;
        })
            .on("end", () => resolve(count));
    });
    const percentComplete = total > 0 ? Math.floor((run.recordsImported / total) * 100) : 100;
    return percentComplete;
}
exports.runPercentComplete = runPercentComplete;
