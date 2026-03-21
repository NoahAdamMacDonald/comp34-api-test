import { Hono } from "hono";
import items from "./routes/items"

const app = new Hono();

app.route("/items", items);

export default {
    port: 3000,
    fetch: app.fetch
}