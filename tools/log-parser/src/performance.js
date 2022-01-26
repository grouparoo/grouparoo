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
      { id: "type", title: "type" },
      { id: "name", title: "name" },
      { id: "content", title: "contents" },
    ],
  });

  while ((stream = liner.next())) {
    line++;

    const content = stream.toString();
    console.log(content);
    const milliseconds = parseToken("duration=", content);
    const action = parseToken("action=", content);
    const task = parseToken("class=", content);
    const file = parseToken("file=", content);

    let type = "unknown";
    let name = "unknown";
    if (action) {
      name = action;
      type = "web";
    } else if (task) {
      name = task;
      type = "task";
    } else if (file) {
      name = file;
      type = "file";
    }

    if (milliseconds) {
      await csvWriter.writeRecords([
        { line, milliseconds, name, type, content },
      ]);
    }
  }
}

function parseToken(token, content) {
  const index = content.indexOf(token);
  if (index < 0) return null;
  const sub = content.substring(index + token.length);
  const pieces = sub.split(" ");
  return pieces[0];
}
