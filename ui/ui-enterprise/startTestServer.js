process.env.NODE_ENV = "test";
process.env.NEXT_DISABLED = "false";

require('@grouparoo/spec-helper/dist/lib/environment');

process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/ui-enterprise": { path: __dirname },
});

const { helper } = require('@grouparoo/spec-helper')

helper.startTestServer({
  port: 3100,
  truncate: true
})
