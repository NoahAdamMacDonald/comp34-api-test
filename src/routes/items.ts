import { Hono } from "hono";
import { db } from "../db";

const items = new Hono();

//GET all
items.get("/", (c)=> {
  const statement = db.prepare("SELECT * FROM items ORDER BY id DESC");
  const rows = statement.all();
  return c.json(rows);
})

//GET by id
items.get("/:id", (c)=> {
    const statement = db.prepare("SELECT * FROM items WHERE id = ?");
    const item = statement.get(id);

    if(!item) {
        return c.json({error: "Item not found"}, 404);
    }
    
    return c.json(item);
})


