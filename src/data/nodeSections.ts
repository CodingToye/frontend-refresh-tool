import type {Section} from "../types/shared.types";

export const sections: Section[] = [
  {
    title: "Node Fundamentals",
    items: [
      {
        name: "What Node.js Is",
        summary:
          "Node.js lets you run JavaScript outside the browser, commonly for servers, scripts, and tooling.",
        code: `console.log("Hello from Node.js");`,
      },
      {
        name: "Global Objects",
        summary:
          "Node provides globals like process, __dirname, and console without needing imports.",
        code: `console.log(process.version);
console.log(__dirname);`,
      },
      {
        name: "process",
        summary:
          "The process object gives information about the current Node process, environment, and arguments.",
        code: `console.log(process.argv);
console.log(process.env.NODE_ENV);`,
      },
    ],
  },
  {
    title: "Modules",
    items: [
      {
        name: "CommonJS",
        summary:
          "CommonJS uses require and module.exports, and is still common in older Node codebases.",
        code: `const math = require("./math");

module.exports = {
  add,
};`,
      },
      {
        name: "ES Modules",
        summary:
          "Modern Node supports ES modules with import and export syntax.",
        code: `import { add } from "./math.js";

export function multiply(a, b) {
  return a * b;
}`,
      },
      {
        name: "Default vs Named Exports",
        summary:
          "Modules can export one default value or multiple named values.",
        code: `export default function greet() {
  return "Hello";
}

export const version = "1.0.0";`,
      },
      {
        name: "Path Resolution",
        summary:
          "Relative imports are resolved from the current file, while package imports resolve from node_modules.",
        code: `import path from "node:path";
import { helper } from "./utils/helper.js";`,
      },
    ],
  },
  {
    title: "Built-in Modules",
    items: [
      {
        name: "node:path",
        summary:
          "The path module helps build and normalize file system paths safely across platforms.",
        code: `import path from "node:path";

const fullPath = path.join(__dirname, "data", "users.json");`,
      },
      {
        name: "node:fs",
        summary: "The fs module works with files and directories.",
        code: `import fs from "node:fs";

const content = fs.readFileSync("notes.txt", "utf8");
console.log(content);`,
      },
      {
        name: "node:fs/promises",
        summary: "The promise-based fs API works well with async and await.",
        code: `import fs from "node:fs/promises";

const content = await fs.readFile("notes.txt", "utf8");
console.log(content);`,
      },
      {
        name: "node:os",
        summary:
          "The os module provides information about the operating system.",
        code: `import os from "node:os";

console.log(os.platform());
console.log(os.cpus().length);`,
      },
    ],
  },
  {
    title: "Files and Directories",
    items: [
      {
        name: "Reading Files",
        summary:
          "Node can read files synchronously or asynchronously depending on the use case.",
        code: `import fs from "node:fs/promises";

const text = await fs.readFile("message.txt", "utf8");`,
      },
      {
        name: "Writing Files",
        summary: "Files can be created or overwritten using writeFile.",
        code: `import fs from "node:fs/promises";

await fs.writeFile("output.txt", "Saved content");`,
      },
      {
        name: "Appending Files",
        summary:
          "appendFile adds content to an existing file instead of replacing it.",
        code: `import fs from "node:fs/promises";

await fs.appendFile("log.txt", "New line\\n");`,
      },
      {
        name: "Working with Directories",
        summary: "Directories can be listed, created, and removed from Node.",
        code: `import fs from "node:fs/promises";

await fs.mkdir("reports", { recursive: true });
const files = await fs.readdir(".");`,
      },
    ],
  },
  {
    title: "Asynchronous Patterns",
    items: [
      {
        name: "Callbacks",
        summary: "Older Node APIs often use error-first callbacks.",
        code: `import fs from "node:fs";

fs.readFile("notes.txt", "utf8", (error, data) => {
  if (error) return console.error(error);
  console.log(data);
});`,
      },
      {
        name: "Promises",
        summary:
          "Promises provide a cleaner way to handle async work than nested callbacks.",
        code: `doSomething()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));`,
      },
      {
        name: "async / await",
        summary:
          "Async and await make asynchronous code easier to read and structure.",
        code: `async function loadFile() {
  try {
    const data = await fs.readFile("notes.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}`,
      },
      {
        name: "Promise.all",
        summary:
          "Promise.all runs multiple asynchronous tasks in parallel and waits for all of them.",
        code: `const [users, posts] = await Promise.all([
  fs.readFile("users.json", "utf8"),
  fs.readFile("posts.json", "utf8"),
]);`,
      },
    ],
  },
  {
    title: "HTTP Servers",
    items: [
      {
        name: "Basic HTTP Server",
        summary: "Node can create HTTP servers using the built-in http module.",
        code: `import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world");
});

server.listen(3000);`,
      },
      {
        name: "Routing by URL",
        summary:
          "Simple routing can be done by inspecting req.url and req.method.",
        code: `const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    res.end("Users");
    return;
  }

  res.statusCode = 404;
  res.end("Not found");
});`,
      },
      {
        name: "JSON Responses",
        summary: "Servers commonly return JSON for API endpoints.",
        code: `res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify({ success: true }));`,
      },
      {
        name: "Reading Request Body",
        summary:
          "Incoming request data arrives as chunks and often needs to be assembled.",
        code: `let body = "";

req.on("data", (chunk) => {
  body += chunk;
});

req.on("end", () => {
  const data = JSON.parse(body);
  console.log(data);
});`,
      },
    ],
  },
  {
    title: "Express Basics",
    items: [
      {
        name: "Creating an Express App",
        summary:
          "Express is a popular framework that simplifies routing and middleware.",
        code: `import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server running");
});`,
      },
      {
        name: "Routes",
        summary: "Express routes map HTTP methods and paths to handlers.",
        code: `app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Nick" }]);
});`,
      },
      {
        name: "Middleware",
        summary:
          "Middleware runs between the request and the response and is useful for parsing, logging, and auth.",
        code: `app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});`,
      },
      {
        name: "JSON Parsing",
        summary:
          "Express can parse JSON request bodies with built-in middleware.",
        code: `app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  res.status(201).json(req.body);
});`,
      },
    ],
  },
  {
    title: "Environment and Configuration",
    items: [
      {
        name: "Environment Variables",
        summary:
          "Environment variables are commonly used for secrets, ports, and deployment config.",
        code: `const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;`,
      },
      {
        name: "dotenv",
        summary:
          "dotenv loads environment variables from a local .env file during development.",
        code: `import "dotenv/config";

console.log(process.env.PORT);`,
      },
      {
        name: "NODE_ENV",
        summary:
          "NODE_ENV is commonly used to distinguish development, test, and production behaviour.",
        code: `if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
}`,
      },
    ],
  },
  {
    title: "Streams and Buffers",
    items: [
      {
        name: "Readable Streams",
        summary:
          "Streams process data in chunks instead of loading everything into memory at once.",
        code: `import fs from "node:fs";

const stream = fs.createReadStream("large-file.txt", "utf8");

stream.on("data", (chunk) => {
  console.log(chunk);
});`,
      },
      {
        name: "Writable Streams",
        summary:
          "Writable streams let you send data somewhere incrementally, such as a file or response.",
        code: `import fs from "node:fs";

const stream = fs.createWriteStream("output.txt");
stream.write("Hello");
stream.end();`,
      },
      {
        name: "Piping Streams",
        summary:
          "Piping connects a readable stream directly to a writable stream.",
        code: `import fs from "node:fs";

fs.createReadStream("input.txt").pipe(
  fs.createWriteStream("copy.txt")
);`,
      },
      {
        name: "Buffers",
        summary:
          "Buffers represent binary data and are used heavily in low-level Node APIs.",
        code: `const buffer = Buffer.from("hello");
console.log(buffer.toString());`,
      },
    ],
  },
  {
    title: "Error Handling",
    items: [
      {
        name: "try / catch",
        summary:
          "Synchronous code and awaited async code can be handled with try/catch.",
        code: `try {
  const data = JSON.parse("{ bad json }");
} catch (error) {
  console.error(error);
}`,
      },
      {
        name: "Error-first Callbacks",
        summary:
          "Traditional Node callbacks use the first argument for an error.",
        code: `fs.readFile("missing.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
});`,
      },
      {
        name: "Throwing Custom Errors",
        summary:
          "Custom errors help make failure states more explicit and easier to handle.",
        code: `if (!user) {
  throw new Error("User not found");
}`,
      },
      {
        name: "Unhandled Rejections",
        summary:
          "Promise rejections should be handled explicitly to avoid unstable runtime behaviour.",
        code: `process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
});`,
      },
    ],
  },
  {
    title: "Packages and Scripts",
    items: [
      {
        name: "package.json",
        summary:
          "package.json defines metadata, scripts, dependencies, and package settings.",
        code: `{
  "name": "node-app",
  "type": "module",
  "scripts": {
    "dev": "node index.js"
  }
}`,
      },
      {
        name: "npm Scripts",
        summary:
          "npm scripts provide a simple way to run project tasks consistently.",
        code: `{
  "scripts": {
    "dev": "node --watch index.js",
    "start": "node index.js"
  }
}`,
      },
      {
        name: "Dependencies vs Dev Dependencies",
        summary:
          "Runtime packages belong in dependencies, while tooling belongs in devDependencies.",
        code: `npm install express
npm install -D typescript nodemon`,
      },
      {
        name: "npx",
        summary:
          "npx runs package executables without requiring a global install.",
        code: `npx eslint .
npx tsc --init`,
      },
    ],
  },
  {
    title: "Testing and Tooling",
    items: [
      {
        name: "Node Test Runner",
        summary: "Modern Node includes a built-in test runner via node:test.",
        code: `import test from "node:test";
import assert from "node:assert";

test("adds numbers", () => {
  assert.equal(1 + 1, 2);
});`,
      },
      {
        name: "Watching Files",
        summary:
          "Node can restart or rerun scripts automatically during development with watch mode or external tools.",
        code: `node --watch index.js`,
      },
      {
        name: "Linting and Formatting",
        summary:
          "Tools like ESLint and Prettier help keep code consistent and catch common issues.",
        code: `npm install -D eslint prettier`,
      },
    ],
  },
  {
    title: "Events and EventEmitter",
    items: [
      {
        name: "EventEmitter Basics",
        summary:
          "EventEmitter is Node’s built-in pattern for publishing and subscribing to events.",
        code: `import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

emitter.on("greet", () => {
  console.log("Hello");
});

emitter.emit("greet");`,
      },
      {
        name: "Passing Event Data",
        summary: "Events can send arguments to listeners when emitted.",
        code: `emitter.on("user:created", (user) => {
  console.log(user.name);
});

emitter.emit("user:created", { name: "Nick" });`,
      },
      {
        name: "once",
        summary:
          "The once method listens for an event only the first time it occurs.",
        code: `emitter.once("ready", () => {
  console.log("Only once");
});`,
      },
      {
        name: "Removing Listeners",
        summary:
          "Listeners can be removed to avoid leaks or repeated execution.",
        code: `function onReady() {
  console.log("Ready");
}

emitter.on("ready", onReady);
emitter.off("ready", onReady);`,
      },
    ],
  },
  {
    title: "Authentication and Sessions",
    items: [
      {
        name: "Password Hashing",
        summary:
          "Passwords should be hashed before storage rather than stored in plain text.",
        code: `import bcrypt from "bcrypt";

const hash = await bcrypt.hash(password, 10);
const valid = await bcrypt.compare(password, hash);`,
      },
      {
        name: "JWT Basics",
        summary:
          "JWTs are commonly used for stateless authentication between client and server.",
        code: `import jwt from "jsonwebtoken";

const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET);
const payload = jwt.verify(token, process.env.JWT_SECRET);`,
      },
      {
        name: "Express Session",
        summary:
          "Sessions store user state on the server and identify clients with cookies.",
        code: `import session from "express-session";

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);`,
      },
      {
        name: "Auth Middleware",
        summary:
          "Middleware is commonly used to block unauthenticated requests.",
        code: `function requireAuth(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}`,
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        name: "Connecting to a Database",
        summary:
          "Node apps often establish a database connection during startup.",
        code: `import mongoose from "mongoose";

await mongoose.connect(process.env.MONGO_URL);`,
      },
      {
        name: "Basic Querying",
        summary:
          "Applications commonly perform create, read, update, and delete operations.",
        code: `const users = await User.find();
const user = await User.findById(id);`,
      },
      {
        name: "Parameterized SQL",
        summary:
          "Parameterized queries help prevent SQL injection by separating values from SQL strings.",
        code: `const result = await db.query(
  "SELECT * FROM users WHERE id = $1",
  [id]
);`,
      },
      {
        name: "Connection Pools",
        summary:
          "Connection pools manage a reusable set of database connections for efficiency.",
        code: `import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});`,
      },
    ],
  },
  {
    title: "Child Processes",
    items: [
      {
        name: "exec",
        summary: "exec runs a shell command and buffers the output.",
        code: `import { exec } from "node:child_process";

exec("ls", (error, stdout) => {
  console.log(stdout);
});`,
      },
      {
        name: "spawn",
        summary:
          "spawn starts a process and streams input/output, which is better for long-running tasks.",
        code: `import { spawn } from "node:child_process";

const child = spawn("node", ["script.js"]);

child.stdout.on("data", (data) => {
  console.log(data.toString());
});`,
      },
      {
        name: "execFile",
        summary: "execFile runs an executable directly without a shell.",
        code: `import { execFile } from "node:child_process";

execFile("node", ["--version"], (error, stdout) => {
  console.log(stdout);
});`,
      },
      {
        name: "Use Cases",
        summary:
          "Child processes are useful for CLI wrappers, build tooling, and delegating work to external programs.",
        code: `const child = spawn("npm", ["run", "build"]);`,
      },
    ],
  },
  {
    title: "WebSockets and Real-time",
    items: [
      {
        name: "WebSocket Server",
        summary:
          "WebSockets allow persistent two-way communication between client and server.",
        code: `import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  socket.send("Connected");
});`,
      },
      {
        name: "Receiving Messages",
        summary: "Servers can listen for messages sent by connected clients.",
        code: `wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(message.toString());
  });
});`,
      },
      {
        name: "Broadcasting",
        summary:
          "Real-time apps often send messages to every connected client.",
        code: `wss.clients.forEach((client) => {
  client.send("Updated");
});`,
      },
      {
        name: "Use Cases",
        summary:
          "Common real-time use cases include chat, notifications, dashboards, and collaboration.",
        code: `socket.send(JSON.stringify({ type: "notification", text: "Saved" }));`,
      },
    ],
  },
  {
    title: "Node Architecture Patterns",
    items: [
      {
        name: "Controllers and Services",
        summary:
          "A common pattern is to keep request handling separate from business logic.",
        code: `app.get("/users", async (req, res) => {
  const users = await userService.getAll();
  res.json(users);
});`,
      },
      {
        name: "Config Separation",
        summary:
          "Configuration is easier to manage when centralised in its own module.",
        code: `export const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL,
};`,
      },
      {
        name: "Error Middleware",
        summary:
          "Express apps often centralise error handling in one middleware function.",
        code: `app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Server error" });
});`,
      },
      {
        name: "Graceful Shutdown",
        summary:
          "Servers should close cleanly on termination signals to avoid dropped work or corrupted state.",
        code: `process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed");
  });
});`,
      },
    ],
  },
];
