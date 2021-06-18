"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromList = exports.addToList = void 0;
const core_1 = require("@grouparoo/core");
const axios_1 = __importDefault(require("axios"));
async function getLists(client, appId, appOptions, update = false) {
    const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
    const cacheKey = ["getLists", appOptions];
    const read = !update; // if updating, skip the read from cache. still write.
    return core_1.objectCache({ objectId: appId, cacheKey, cacheDurationMs, read }, async () => {
        return client.getLists();
    });
}
async function getListId(client, appId, appOptions, groupName) {
    groupName = (groupName || "").toString().trim();
    if (groupName.length === 0) {
        return `Hubspot empty groupName`;
    }
    const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
    const cacheKey = ["getListId", groupName, appOptions];
    return core_1.objectCache({ objectId: appId, cacheKey, cacheDurationMs }, async () => {
        return ensureList(client, appId, appOptions, groupName);
    });
}
function filterLists(hubspotLists, groupName) {
    hubspotLists = hubspotLists || [];
    const matchingList = hubspotLists.filter((list) => list.name === groupName)[0];
    if (matchingList) {
        return matchingList.listId;
    }
    return null;
}
// gets called if the list if is not cached
async function ensureList(client, appId, appOptions, groupName) {
    let hubspotLists, listId;
    // see if it's already there
    hubspotLists = await getLists(client, appId, appOptions);
    listId = filterLists(hubspotLists, groupName);
    if (listId) {
        return listId;
    }
    // maybe it's just not cached yet
    hubspotLists = await getLists(client, appId, appOptions, true);
    listId = filterLists(hubspotLists, groupName);
    if (listId) {
        return listId;
    }
    // need to create it
    const url = `https://api.hubapi.com/contacts/v1/lists?hapikey=${appOptions.hapikey}`;
    const response = await axios_1.default({
        method: "POST",
        url,
        headers: { "Content-Type": "application/json" },
        data: {
            name: groupName,
        },
    });
    return response.data.listId;
}
async function addToList(client, appId, appOptions, email, groupName) {
    const listId = await getListId(client, appId, appOptions, groupName);
    await client.addContactToList(listId, email);
}
exports.addToList = addToList;
async function removeFromList(client, appId, appOptions, email, groupName) {
    const listId = await getListId(client, appId, appOptions, groupName);
    await client.removeContactFromList(listId, email);
}
exports.removeFromList = removeFromList;
