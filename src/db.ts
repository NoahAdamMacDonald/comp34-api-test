import { Database } from "bun:sqlite";

//manage database
export const db = new Database("/data/database.sqlite");
db.run(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);
