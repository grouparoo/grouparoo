import {
  objectCache,
  objectCacheInvalidate,
  SimpleAppOptions,
} from "@grouparoo/core";
import { getCodeConfigLockKey } from "@grouparoo/core/dist/classes/codeConfig";

const { GoogleSpreadsheet } = require("google-spreadsheet");

const GOOGLE_SHEETS_ROWS_LIMIT = 10000;
const WAIT_TIME = 20 * 1000;

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
  bypassSleep: boolean;
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
    this.bypassSleep = false;
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
    await this.loadDocInfo();

    if (this.sheetId) {
      this.sheet = this.doc.sheetsById[this.sheetId];
    }
    if (!this.sheet) {
      // didn't have that id, use the first one
      this.sheet = this.doc.sheetsByIndex[0];
    }
    await this.loadHeaders();
    return this.sheet;
  }

  async loadDocInfo() {
    try {
      await this.doc.loadInfo(); // loads document properties and worksheets
    } catch (error) {
      if (error?.response?.status === 429) {
        await this.sleep(WAIT_TIME);
        await this.loadDocInfo();
      }
    }
  }

  async loadHeaders() {
    try {
      await this.sheet.loadHeaderRow();
      return this.sheet.headerValues;
    } catch (error) {
      if (error?.response?.status === 429) {
        await this.sleep(WAIT_TIME);
        return await this.loadHeaders();
      }
    }
  }

  async read({ limit, offset }) {
    try {
      const results = [];
      const sheet = await this.load();
      if (offset < sheet.rowCount) {
        const rows = await sheet.getRows({ limit, offset });
        for (const row of rows) {
          const result: any = {};
          result["_rowObject"] = row;
          result["_rowNumber"] = row.rowNumber;
          for (const header of sheet.headerValues) {
            result[header] = row[header];
          }
          results.push(result);
        }
      }
      return results;
    } catch (error) {
      if (error?.response?.status === 429) {
        await this.sleep(WAIT_TIME);
        return this.read({ limit, offset });
      } else {
        throw error;
      }
    }
  }

  async getHeaders() {
    await this.load();
    return this.loadHeaders();
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

  async getRowByPrimaryKey(column, value) {
    await this.load();
    if (column && value) {
      const rows = await this.getAllRows();
      return rows.filter((row) => row[column] === value)[0] || null;
    }
    return null;
  }

  async getRowByRowNumber(rowNumber) {
    await this.load();
    try {
      if (rowNumber) {
        const offset = rowNumber - 2; // offSet - 1 is the current line and lines starts with 1
        const rows = await this.sheet.getRows({ limit: 1, offset });
        return rows[0];
      }
    } catch (error) {
      if (error?.response?.status === 429) {
        await this.sleep(WAIT_TIME);
        return this.getRowByRowNumber(rowNumber);
      } else {
        throw error;
      }
    }

    return null;
  }

  async cleanRowByRowNumber(rowNumber) {
    const row = await this.getRowByRowNumber(rowNumber);
    await this._cleanRow(row);
  }

  async cleanRowByPrimaryKey(column, value) {
    const row = await this.getRowByPrimaryKey(column, value);
    await this._cleanRow(row?._rowObject);
  }

  async _cleanRow(row) {
    const headers = await this.getHeaders();
    try {
      if (row && headers) {
        for (const header of headers) {
          row[header] = "-";
        }
        await row.save();
      }
    } catch (error) {
      if (error?.response?.status === 429) {
        await this.sleep(WAIT_TIME);
        return this._cleanRow(row);
      } else {
        throw error;
      }
    }
  }

  async updateRowByRowNumber(rowNumber, payload) {
    await this.ensureHeaders(payload);
    const row = await this.getRowByRowNumber(rowNumber);
    await this._updateRow(row, payload);
  }

  async updateRowByPrimaryKey(column, value, payload) {
    await this.ensureHeaders(payload);
    const row = await this.getRowByPrimaryKey(column, value);
    await this._updateRow(row?._rowObject, payload);
  }

  async _updateRow(row, payload) {
    if (row) {
      try {
        const payloadKeys = Object.keys(payload);
        for (const key of payloadKeys) {
          row[key] = payload[key];
        }
        await row.save();
      } catch (error) {
        if (error?.response?.status === 429) {
          await this.sleep(WAIT_TIME);
          return this._updateRow(row, payload);
        } else {
          throw error;
        }
      }
    }
  }

  async addRowAtTheEnd(payload: any) {
    await this.load();
    await this.ensureHeaders(payload);
    try {
      const addedRow = await this.sheet.addRow(payload);
      if (addedRow) {
        return addedRow._rowNumber;
      }
      return null;
    } catch (error) {
      if (error?.response?.status === 429) {
        await this.sleep(WAIT_TIME);
        return this.addRowAtTheEnd(payload);
      } else {
        throw error;
      }
    }
  }

  async addRowsAtTheEnd(payload: any[], primaryKey) {
    await this.load();
    let objectWithAllKeys = {};
    for (const entry of payload) {
      objectWithAllKeys = Object.assign(objectWithAllKeys, entry);
    }
    await this.ensureHeaders(objectWithAllKeys);
    try {
      const addedRows = await this.sheet.addRows(payload);
      if (addedRows) {
        return addedRows.map((row) => ({
          primaryKey: row[primaryKey],
          destinationId: row._rowNumber,
        }));
      }
      return null;
    } catch (error) {
      if (error?.response?.status === 429) {
        await this.sleep(WAIT_TIME);
        return this.addRowAtTheEnd(payload);
      } else {
        throw error;
      }
    }
  }

  async ensureHeaders(payload) {
    let headers = await this.getHeaders();
    if (!headers) {
      headers = [];
    }
    try {
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
    } catch (error) {
      if (error?.response?.status === 429) {
        await this.sleep(WAIT_TIME);
        return this.ensureHeaders(payload);
      } else {
        throw error;
      }
    }
  }

  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, this.bypassSleep ? 0 : ms);
    });
  }

  setBypassSleep(bypass) {
    this.bypassSleep = bypass;
  }

  async _cleanSheet() {
    try {
      const rows = await this.getAllRows();
      for (let i = rows.length - 1; i >= 0; i--) {
        await rows[i]?._rowObject.delete();
      }
    } catch (error) {
      if (error?.response?.status === 429) {
        await this.sleep(WAIT_TIME);
        return this._cleanSheet();
      } else {
        throw error;
      }
    }
  }
}
