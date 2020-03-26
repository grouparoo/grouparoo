const env = require("./env");

module.exports = {
  env,

  experimental: {
    modern: true,
    async redirects() {
      return [
        {
          source: "/schedules/",
          destination: "/sources",
          statusCode: 302
        },
        {
          source: "/schedules",
          destination: "/sources",
          statusCode: 302
        }
      ];
    }
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.plugin\.js|\.plugin\.jsx|\.plugin\.ts|\.plugin\.tsx$/,
      use: [options.defaultLoaders.babel]
    });

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  }
};
