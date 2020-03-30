import { SimpleAppOptions } from "@grouparoo/core";
const { GoogleSpreadsheet } = require("google-spreadsheet");

const RECONNECT_ATTEMPTS = 5;
const RECONNECT_SLEEP_MS = 250;

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, RECONNECT_SLEEP_MS);
  });
}

const DOC_REGEX = /\/spreadsheets\/.\/([\w-]+)\/edit/g;
const SHEET_REGEX = /edit#gid=(\d+)/g;
function parseUrl(sheetUrl: string) {
  // e.g. https://docs.google.com/spreadsheets/d/1-QDnY0N4obyqnyDpncfr6dooyC2mWw2hn1RY8XlZLWM/edit
  // e.g. https://docs.google.com/spreadsheets/d/1-QDnY0N4obyqnyDpncfr6dooyC2mWw2hn1RY8XlZLWM/edit#gid=0
  // e.g. https://docs.google.com/spreadsheets/d/1-QDnY0N4obyqnyDpncfr6dooyC2mWw2hn1RY8XlZLWM/edit#gid=1859698494

  const docMatch = DOC_REGEX.exec(sheetUrl);
  let docId = null;
  if (docMatch) {
    docId = docMatch[1];
  }

  const sheetMatch = SHEET_REGEX.exec(sheetUrl);
  let sheetId = null;
  if (sheetMatch) {
    sheetId = sheetMatch[1];
  }

  return { docId, sheetId };
}

export default class Spreadsheet {
  credentials: SimpleAppOptions;

  doc: any; // GoogleSpreadsheet
  sheet: any; // doc.getSheet

  connected: boolean;
  loaded: boolean;
  docId: string;
  sheetId: string;

  constructor(credentials: SimpleAppOptions, sheetUrl: string) {
    this.credentials = credentials;
    this.connected = false;

    const { docId, sheetId } = parseUrl(sheetUrl);
    this.docId = docId;
    this.sheetId = sheetId;

    this.doc = new GoogleSpreadsheet(docId);
    this.sheet = null;
  }

  async tryConnect() {
    if (this.connected) {
      return;
    }
    const client_email = this.credentials.client_email;
    const private_key = this.credentials.private_key.replace(/\\n/g, "\n");
    await this.doc.useServiceAccountAuth({ client_email, private_key });
    this.connected = true;
  }

  async tryLoad() {
    if (this.sheet) {
      return this.sheet;
    }
    await this.connect();
    const doc = this.doc;
    await doc.loadInfo(); // loads document properties and worksheets

    if (this.sheetId) {
      this.sheet = doc.sheetsById[this.sheetId];
    }
    if (!this.sheet) {
      // didn't have that id, use the first one
      this.sheet = doc.sheetsByIndex[0];
    }
    await this.sheet.loadHeaderRow();
    return this.sheet;
  }

  async connect() {
    return await this.withRetry(this.tryConnect.bind(this));
  }
  async load() {
    return await this.withRetry(this.tryLoad.bind(this));
  }
  async read({ limit, offset }) {
    const sheet = await this.load();
    const rows = await sheet.getRows({ limit, offset });
    const results = [];
    for (const row of rows) {
      const result: any = {};
      for (const header of sheet.headerValues) {
        result[header] = row[header];
      }
      results.push(result);
    }
    return results;
  }

  async withRetry(asyncFunc) {
    // Google API error - [404] Requested entity was not found.
    // This is happening somewhat intermittently. Let's try a few times.
    let lastError = null;
    for (let i = 0; i < RECONNECT_ATTEMPTS; i++) {
      if (i > 0) {
        await sleep();
      }
      try {
        return await asyncFunc();
      } catch (err) {
        console.error(i, err);
        lastError = err;
      }
    }
    throw lastError;
  }
}
