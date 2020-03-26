export const DEFAULT = {
  files: (config) => {
    return {
      transport: "local",
      path: `/tmp/grouparoo-development`,
    };
  },
};

export const test = {
  files: (config) => {
    return {
      transport: "local",
      path: `/tmp/grouparoo-test-${process.env.JEST_WORKER_ID || 0}`,
    };
  },
};

export const staging = {
  files: (config) => {
    return {
      transport: "s3",
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      region: process.env.S3_REGION,
      bucket: process.env.S3_BUCKET,
      // endpoint: 's3.yourdomain.com',
      // sslEnabled: false
      // any other options are passed to new AWS.S3()
      // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
    };
  },
};

export const production = {
  files: (config) => {
    return {
      transport: "s3",
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      region: process.env.S3_REGION,
      bucket: process.env.S3_BUCKET,
      // endpoint: 's3.yourdomain.com',
      // sslEnabled: false
      // any other options are passed to new AWS.S3()
      // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
    };
  },
};
