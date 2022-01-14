import {
  objectCache,
  objectCacheInvalidate,
  SimpleAppOptions,
} from "@grouparoo/core";

const { GoogleSpreadsheet } = require("google-spreadsheet");

const GOOGLE_SHEETS_ROWS_LIMIT = 10000;

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

  const sheetMatch = sheetRegex.exec(sheetUrl);
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
      await this.loadHeaders();
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
    await this.loadHeaders();
    return this.sheet;
  }

  async loadHeaders() {
    try {
      await this.sheet.loadHeaderRow();
    } catch (e) {}
  }

  async read({ limit, offset }) {
    const sheet = await this.load();
    const results = [];
    if (offset < sheet.rowCount) {
      const rows = await sheet.getRows({ limit, offset });
      for (const row of rows) {
        const result: any = {};
        result["_rowNumber"] = row.rowNumber;
        for (const header of sheet.headerValues) {
          result[header] = row[header];
        }
        results.push(result);
      }
    }
    return results;
  }

  async getHeaders() {
    await this.load();
    return this.sheet.headerValues;
  }

  async _invalidateCache(): Promise<void> {
    const contentId = `${this.docId}-${this.sheetId}`;
    await objectCacheInvalidate({ objectId: contentId });
  }

  async getAllRows() {
    await this.load();
    const allRows = [];
    const headers = await this.getHeaders();
    if (headers) {
      let offset = 0;
      let rows = await this.read({ limit: GOOGLE_SHEETS_ROWS_LIMIT, offset });
      while (rows.length > 0) {
        allRows.push(...rows);
        offset += GOOGLE_SHEETS_ROWS_LIMIT;
        rows = await this.read({ limit: GOOGLE_SHEETS_ROWS_LIMIT, offset });
      }
    }
    return allRows;
  }

  async getSheetRows() {
    const cacheDurationMs = 1000 * 60 * 3; // 3 minutes
    const contentId = `${this.docId}-${this.sheetId}`;
    const cacheKey = ["sheetContent", contentId];
    return objectCache(
      { objectId: contentId, cacheKey, cacheDurationMs },
      async () => {
        return await this.getAllRows();
      }
    );
  }

  async getRowByPrimaryKey(column, value) {
    await this.load();
    if (column && value) {
      const rows = await this.getSheetRows();
      return rows.filter((row) => row[column] === value)[0] || null;
    }
    return null;
  }

  async getRowObjectByPrimaryKey(column, value) {
    await this.load();
    const row = await this.getRowByPrimaryKey(column, value);
    if (row?._rowNumber) {
      return await this.getRowObjectByRowNumber(row?._rowNumber);
    }
    return null;
  }

  async getRowObjectByRowNumber(rowNumber) {
    await this.load();
    if (rowNumber) {
      const offset = rowNumber - 2; // offSet - 1 is the current line and lines starts with 1
      const rows = await this.sheet.getRows({ limit: 1, offset });
      return rows[0];
    }
    return null;
  }

  async cleanRowByRowNumber(rowNumber) {
    const row = await this.getRowObjectByRowNumber(rowNumber);
    await this._cleanRow(row);
  }

  async cleanRowByPrimaryKey(column, value) {
    const row = await this.getRowObjectByPrimaryKey(column, value);
    await this._cleanRow(row);
  }

  async _cleanRow(row) {
    const headers = await this.getHeaders();
    if (row && headers) {
      for (const header of headers) {
        row[header] = null;
      }
      await row.save();
      await this._invalidateCache();
    }
  }

  async updateRowByRowNumber(rowNumber, payload) {
    await this.ensureHeaders(payload);
    const row = await this.getRowObjectByRowNumber(rowNumber);
    await this._updateRow(row, payload);
  }

  async updateRowByPrimaryKey(column, value, payload) {
    await this.ensureHeaders(payload);
    const row = await this.getRowObjectByPrimaryKey(column, value);
    await this._updateRow(row, payload);
  }

  async _updateRow(row, payload) {
    if (row) {
      const payloadKeys = Object.keys(payload);
      for (const key of payloadKeys) {
        row[key] = payload[key];
      }
      await row.save();
      await this._invalidateCache();
    }
  }

  async addRow(payload) {
    await this.load();
    await this.ensureHeaders(payload);
    const addedRow = await this.sheet.addRow(payload);
    await this._invalidateCache();
    if (addedRow) {
      return addedRow._rowNumber;
    }
    return null;
  }

  async ensureHeaders(payload) {
    let headers = await this.getHeaders();
    if (!headers) {
      headers = [];
    }
    const missingHeaders = [];
    const payloadKeys = Object.keys(payload);
    for (const key of payloadKeys) {
      if (!headers.includes(key)) {
        missingHeaders.push(key);
      }
    }
    if (missingHeaders.length > 0) {
      await this.sheet.setHeaderRow([...headers, ...missingHeaders]);
    }
  }
}
