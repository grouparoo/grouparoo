require("@grouparoo/spec-helper/dist/lib/environment");

// gaxios needs this and jest isn't loading it for some reason...
global.URL = require("url").URL;
