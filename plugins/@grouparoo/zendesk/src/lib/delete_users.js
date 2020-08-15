//deleted_users.js: Client for the zendesk API.

var util = require("util"),
  Client = require("node-zendesk/lib/client/client").Client;

var DeletedUsers = (exports.DeletedUsers = function (options) {
  this.jsonAPINames = ["deleted_users", "deleted_user"];
  Client.call(this, options);
});

// Inherit from Client base object
util.inherits(DeletedUsers, Client);

DeletedUsers.prototype.list = function (cb) {
  return this.requestAll("GET", ["deleted_users"], cb);
};

DeletedUsers.prototype.show = function (id, cb) {
  return this.request("GET", ["deleted_users", id], cb);
};

DeletedUsers.prototype.delete = function (id, cb) {
  return this.request("DELETE", ["deleted_users", id], cb);
};
