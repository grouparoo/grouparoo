// read file
// extract performance info into csv
const lineByLine = require("n-readlines");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const path = require("path");
const fs = require("fs");

module.exports.cmd = async function (vargs) {
  console.log("here");
  const files = vargs["_"] || [];
  if (!files.length === 1) {
    console.error("Pass in one file path");
    return;
  }
  const filePath = files[0];
  console.log(`Processing: ${filePath}`);
  await processFile(filePath);
};

async function processFile(filePath) {
  const liner = new lineByLine(filePath);

  let stream;
  let line = 0;

  const outputPath = `${path.basename(filePath)}_performance.csv`;
  console.log(`    Output: ${outputPath}`);

  if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath);
  }

  const csvWriter = createCsvWriter({
    path: outputPath,
    header: [
      { id: "line", title: "line" },
      { id: "milliseconds", title: "milliseconds" },
      { id: "task", title: "task" },
      { id: "content", title: "contents" },
    ],
  });

  while ((stream = liner.next())) {
    const content = stream.toString();
    console.log(content);
    let milliseconds = null;
    let task = null;
    await csvWriter.writeRecords([{ line, milliseconds, task, content }]);
    line++;
  }
}
