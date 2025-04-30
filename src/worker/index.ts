import { Hono } from "hono";

// Define Env interface for Cloudflare Worker bindings
interface Env {
  ASSETS: {
    fetch: typeof fetch;
  };
}

const app = new Hono<{ Bindings: Env }>();

// API routes
app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

// Let the SPA handle all frontend routing - Cloudflare will automatically serve index.html for routes
// that don't match files or routes defined here.

export default app;
