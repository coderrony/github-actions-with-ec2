import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Configure environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// View engine & static files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.use(express.static(path.join(__dirname, "..", "public")));

// Routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "EJS Server (behind Nginx)",
    serverName: process.env.SERVER_NAME || "express-app",
    port: PORT,
    host: req.headers.host,
    now: new Date().toISOString(),
    requestId: req.headers["x-request-id"] || null,
    forwardedFor: req.headers["x-forwarded-for"] || null,
  });
});

app.get("/api", async (req, res) => {
  res.json({
    message: "Hello from the API endpoint!",
    serverName: process.env.SERVER_NAME || "express-app",
    time: new Date().toISOString(),
  });
});

app.get("/healthz", (req, res) => {
  res.json({ status: "ok", message: "ejs-server is healthy" });
});

// 404 handler (keep this AFTER all other routes)
app.use((req, res) => {
  res.status(404).render("404", {
    title: "404 - Not Found",
    path: req.originalUrl,
    serverName: process.env.SERVER_NAME || "express-app",
  });
});

export { app };
export default app;

