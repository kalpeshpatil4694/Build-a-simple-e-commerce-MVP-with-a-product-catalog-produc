import { Router } from "./router.js";
import { productsHandler } from "./api/products.js";

const router = new Router();

router.get("/", () => new Response("Hello from e-commerce MVP!", { headers: { "content-type": "text/plain" } }));

// Product API routes
router.get("/api/products", productsHandler.list);
router.get("/api/products/:id", productsHandler.get);

// Admin placeholder
router.get("/admin", () => new Response("Admin page placeholder", { headers: { "content-type": "text/plain" } }));

// Serve static files from /static/*
router.get("/static/*", (request, params) => {
  const path = params[0];
  return fetch(new URL(path, import.meta.url));
});

addEventListener("fetch", event => {
  event.respondWith(router.handle(event.request));
});
