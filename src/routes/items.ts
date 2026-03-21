import { Hono } from "hono";
import { db } from "../db";

const items = new Hono();

// GET all
items.get("/", (c) => {
  const rows = db.query("SELECT * FROM items ORDER BY id").all();
  return c.json(rows);
});

// GET by id
items.get("/:id", (c) => {
  const id = Number(c.req.param("id"));

  const item = db.query("SELECT * FROM items WHERE id = ?").get(id);

  if (!item) {
    return c.json({ error: "Item not found" }, 404);
  }

  return c.json(item);
});

// POST new item
items.post("/", async (c) => {
  const body = await c.req.json();

  if (!body.name) {
    return c.json({ error: "Name is required" }, 400);
  }

  const statement = db.query(
    "INSERT INTO items (name, description) VALUES (?, ?)"
  );

  const result = statement.run(body.name, body.description ?? null);

  return c.json({ id: result.lastInsertRowid }, 201);
});

// Delete item by id
items.delete("/:id", (c) => {
  const id = Number(c.req.param("id"));

  const statement = db.query("DELETE FROM items WHERE id = ?");
  const result = statement.run(id);

  if (result.changes === 0) {
    return c.json({ error: "Item not found" }, 404);
  }

  return c.json({ message: "Deleted" });
});

export default items;
