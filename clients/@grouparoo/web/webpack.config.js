const path = require("path");

const webConfig = {
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
    path: path.resolve(__dirname, "dist"),
    filename: "grouparooWebClient.js",
    library: "GrouparooWebClient",
    libraryTarget: "var",
  },
};

const nodeConfig = {
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
    libraryTarget: "umd",
  },
};

module.exports = [webConfig, nodeConfig];
