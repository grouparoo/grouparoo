import { SimpleAppOptions } from "@grouparoo/core";
const { GoogleSpreadsheet } = require("google-spreadsheet");

function parseUrl(sheetUrl: string): Record<string, string> {
  // e.g. https://docs.google.com/spreadsheets/d/1-QDnY0N4obyqnyDpncfr6dooyC2mWw2hn1RY8XlZLWM/edit
  // e.g. https://docs.google.com/spreadsheets/d/1-QDnY0N4obyqnyDpncfr6dooyC2mWw2hn1RY8XlZLWM/edit#gid=0
  // e.g. https://docs.google.com/spreadsheets/d/1-QDnY0N4obyqnyDpncfr6dooyC2mWw2hn1RY8XlZLWM/edit#gid=1859698494
  const docRegex = /\/spreadsheets\/.\/(.+)\/edit/g;
  const sheetRegex = /edit#gid=(\d+)/g;

  const docMatch = docRegex.exec(sheetUrl);
  let docId = null;

  if (docMatch) {
    docId = docMatch[1];
  }

  const sheetMatch = docRegex.exec(sheetUrl);
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
    if (!docId) {
      throw `no spreadsheet document given: ${sheetUrl}`;
    }
    this.docId = docId;
    this.sheetId = sheetId;

    this.doc = new GoogleSpreadsheet(docId);
    this.sheet = null;
  }

  async connect() {
    if (this.connected) {
      return;
    }
    const client_email = this.credentials.client_email;
    const private_key = this.credentials.private_key
      ?.toString()
      .replace(/\\n/g, "\n");
    await this.doc.useServiceAccountAuth({ client_email, private_key });
    this.connected = true;
  }

  async load() {
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

  async getHeaders() {
    const sheet = await this.load();
    return sheet.headerValues;
  }
}
