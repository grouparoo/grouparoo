const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: {
    fetch: "fetch",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "GrouparooWebClient",
  },
};
