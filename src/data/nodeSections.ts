import type {Section} from "@/components/SectionCard/types";

export const sections: Section[] = [
  {
    title: "Node Fundamentals",
    items: [
      {
        name: "What Node.js Is",
        summary:
          "Node.js lets you run JavaScript outside the browser, commonly for servers, scripts, and tooling.",
        interview: true,
        mockQuestions: [
          {
            id: "what-node-is-1",
            question: "What is Node.js?",
            answer:
              "Node.js is a JavaScript runtime built on V8 that allows JavaScript to run outside the browser, commonly for servers, scripts, tooling, and backend services.",
          },
          {
            id: "what-node-is-2",
            question:
              "Why is Node.js well suited to certain backend workloads?",
            answer:
              "Node.js is well suited to I/O-heavy workloads because it uses an event-driven, non-blocking model that handles many concurrent operations efficiently.",
          },
        ],
        code: `console.log("Hello from Node.js");`,
      },
      {
        name: "Global Objects",
        summary:
          "Node provides globals like process, __dirname, and console without needing imports.",
        mockQuestions: [
          {
            id: "global-objects-1",
            question: "What are some common global objects in Node.js?",
            answer:
              "Common Node globals include process, console, Buffer, __dirname in CommonJS, and timers like setTimeout and setInterval.",
          },
        ],
        code: `console.log(process.version);
console.log(__dirname);`,
      },
      {
        name: "process",
        summary:
          "The process object gives information about the current Node process, environment, and arguments.",
        mockQuestions: [
          {
            id: "process-1",
            question: "What is the process object used for in Node.js?",
            answer:
              "The process object provides information and control over the current Node process, including environment variables, command-line arguments, exit codes, and signal handling.",
          },
        ],
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
        mockQuestions: [
          {
            id: "commonjs-1",
            question: "What is CommonJS?",
            answer:
              "CommonJS is the older Node module system that uses require to import modules and module.exports to export values.",
          },
        ],
        code: `const math = require("./math");

module.exports = {
  add,
};`,
      },
      {
        name: "ES Modules",
        summary:
          "Modern Node supports ES modules with import and export syntax.",
        interview: true,
        mockQuestions: [
          {
            id: "es-modules-node-1",
            question: "What are ES Modules in Node.js?",
            answer:
              "ES Modules are the modern JavaScript module system using import and export syntax, supported in Node.js with the right file extensions or package configuration.",
          },
          {
            id: "es-modules-node-2",
            question:
              "What is a practical difference between CommonJS and ES Modules in Node?",
            answer:
              "They use different syntax and have different loading semantics. CommonJS is synchronous and uses require, while ES Modules are standards-based and use import/export.",
          },
        ],
        code: `import { add } from "./math.js";

export function multiply(a, b) {
  return a * b;
}`,
      },
      {
        name: "Default vs Named Exports",
        summary:
          "Modules can export one default value or multiple named values.",
        mockQuestions: [
          {
            id: "default-vs-named-exports-1",
            question:
              "What is the difference between default and named exports?",
            answer:
              "A module can have one default export and multiple named exports. Named exports must be imported by their exact names, while a default export can be imported with any local name.",
          },
        ],
        code: `export default function greet() {
  return "Hello";
}

export const version = "1.0.0";`,
      },
      {
        name: "Path Resolution",
        summary:
          "Relative imports are resolved from the current file, while package imports resolve from node_modules.",
        mockQuestions: [
          {
            id: "path-resolution-1",
            question: "How are module paths resolved in Node.js?",
            answer:
              "Relative imports are resolved from the current file location, while bare package imports are resolved through Node's module resolution algorithm, typically from node_modules.",
          },
        ],
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
        mockQuestions: [
          {
            id: "node-path-1",
            question: "Why is node:path useful?",
            answer:
              "node:path helps build and normalise file paths in a cross-platform way, avoiding issues with manual string concatenation and different path separators.",
          },
        ],
        code: `import path from "node:path";

const fullPath = path.join(__dirname, "data", "users.json");`,
      },
      {
        name: "node:fs",
        summary: "The fs module works with files and directories.",
        mockQuestions: [
          {
            id: "node-fs-1",
            question: "What is the fs module used for?",
            answer:
              "The fs module is used to work with the file system, including reading, writing, updating, and deleting files and directories.",
          },
        ],
        code: `import fs from "node:fs";

const content = fs.readFileSync("notes.txt", "utf8");
console.log(content);`,
      },
      {
        name: "node:fs/promises",
        summary: "The promise-based fs API works well with async and await.",
        mockQuestions: [
          {
            id: "node-fs-promises-1",
            question:
              "Why might you prefer node:fs/promises over node:fs callbacks?",
            answer:
              "The promise-based API works naturally with async/await, usually making asynchronous file operations easier to read and compose.",
          },
        ],
        code: `import fs from "node:fs/promises";

const content = await fs.readFile("notes.txt", "utf8");
console.log(content);`,
      },
      {
        name: "node:os",
        summary:
          "The os module provides information about the operating system.",
        mockQuestions: [
          {
            id: "node-os-1",
            question: "What kind of information does node:os provide?",
            answer:
              "node:os provides system-level information such as platform, CPU details, memory, hostname, and temporary directory paths.",
          },
        ],
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
        mockQuestions: [
          {
            id: "reading-files-1",
            question:
              "When would you choose asynchronous file reading in Node?",
            answer:
              "Asynchronous file reading is usually preferred in application code because it avoids blocking the event loop and allows the process to handle other work while waiting for I/O.",
          },
        ],
        code: `import fs from "node:fs/promises";

const text = await fs.readFile("message.txt", "utf8");`,
      },
      {
        name: "Writing Files",
        summary: "Files can be created or overwritten using writeFile.",
        mockQuestions: [
          {
            id: "writing-files-1",
            question: "What does writeFile do in Node?",
            answer:
              "writeFile writes content to a file, creating it if needed or overwriting the existing contents unless another option is used.",
          },
        ],
        code: `import fs from "node:fs/promises";

await fs.writeFile("output.txt", "Saved content");`,
      },
      {
        name: "Appending Files",
        summary:
          "appendFile adds content to an existing file instead of replacing it.",
        mockQuestions: [
          {
            id: "appending-files-1",
            question:
              "What is the difference between writeFile and appendFile?",
            answer:
              "writeFile replaces the file contents by default, while appendFile adds new content to the end of an existing file.",
          },
        ],
        code: `import fs from "node:fs/promises";

await fs.appendFile("log.txt", "New line\\n");`,
      },
      {
        name: "Working with Directories",
        summary: "Directories can be listed, created, and removed from Node.",
        mockQuestions: [
          {
            id: "working-with-directories-1",
            question: "What are common directory operations in Node.js?",
            answer:
              "Common operations include creating directories, listing contents, renaming them, and removing them, often using the fs or fs/promises modules.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "callbacks-1",
            question: "What is an error-first callback in Node.js?",
            answer:
              "An error-first callback is a pattern where the first argument is an error object if something went wrong, and the second argument contains the successful result.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "promises-node-1",
            question: "Why are Promises often preferred over nested callbacks?",
            answer:
              "Promises usually make asynchronous flows easier to read, compose, and error-handle, and they reduce deeply nested callback structures.",
          },
        ],
        code: `doSomething()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));`,
      },
      {
        name: "async / await",
        summary:
          "Async and await make asynchronous code easier to read and structure.",
        interview: true,
        mockQuestions: [
          {
            id: "async-await-node-1",
            question: "Why is async/await popular in Node.js codebases?",
            answer:
              "async/await makes asynchronous code read more like synchronous code, which often improves clarity, sequencing, and error handling with try/catch.",
          },
        ],
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
        mockQuestions: [
          {
            id: "promise-all-node-1",
            question: "What is Promise.all useful for?",
            answer:
              "Promise.all is useful when multiple asynchronous tasks can run in parallel and you need all of their results before continuing.",
          },
          {
            id: "promise-all-node-2",
            question: "How does Promise.all behave when one promise fails?",
            answer:
              "Promise.all rejects as soon as one of the promises rejects, rather than waiting for the rest to finish successfully.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "basic-http-server-1",
            question: "How do you create a basic HTTP server in Node.js?",
            answer:
              "You can create a server with the built-in http module by calling http.createServer with a request handler and then listening on a port.",
          },
        ],
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
        mockQuestions: [
          {
            id: "routing-by-url-1",
            question:
              "How can routing be implemented in a basic Node HTTP server?",
            answer:
              "A simple approach is to inspect req.url and req.method and branch to different handlers based on the path and HTTP method.",
          },
        ],
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
        mockQuestions: [
          {
            id: "json-responses-1",
            question: "How do you send a JSON response from a Node server?",
            answer:
              "You typically set the Content-Type to application/json and send a JSON string, often by using JSON.stringify on a JavaScript object.",
          },
        ],
        code: `res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify({ success: true }));`,
      },
      {
        name: "Reading Request Body",
        summary:
          "Incoming request data arrives as chunks and often needs to be assembled.",
        mockQuestions: [
          {
            id: "reading-request-body-1",
            question:
              "Why does a Node request body often need to be assembled from chunks?",
            answer:
              "Incoming request data is streamed, so the body may arrive in multiple chunks that need to be collected and combined before parsing.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "creating-express-app-1",
            question: "Why do many Node backends use Express?",
            answer:
              "Express simplifies common backend concerns such as routing, middleware, request parsing, and response handling, making server code quicker to write and easier to organise.",
          },
        ],
        code: `import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server running");
});`,
      },
      {
        name: "Routes",
        summary: "Express routes map HTTP methods and paths to handlers.",
        mockQuestions: [
          {
            id: "express-routes-1",
            question: "What is an Express route?",
            answer:
              "An Express route maps an HTTP method and path to a handler function that processes the request and sends a response.",
          },
        ],
        code: `app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Nick" }]);
});`,
      },
      {
        name: "Middleware",
        summary:
          "Middleware runs between the request and the response and is useful for parsing, logging, and auth.",
        interview: true,
        mockQuestions: [
          {
            id: "middleware-1",
            question: "What is middleware in Express?",
            answer:
              "Middleware is a function that runs during the request-response cycle and can inspect, modify, block, or pass control to the next handler.",
          },
          {
            id: "middleware-2",
            question: "What are common uses of Express middleware?",
            answer:
              "Common uses include logging, authentication, validation, JSON parsing, error handling, and attaching useful data to the request object.",
          },
        ],
        code: `app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});`,
      },
      {
        name: "JSON Parsing",
        summary:
          "Express can parse JSON request bodies with built-in middleware.",
        mockQuestions: [
          {
            id: "json-parsing-1",
            question: "Why is express.json() commonly used?",
            answer:
              "express.json() parses incoming JSON request bodies and makes the result available on req.body, which simplifies API development.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "environment-variables-1",
            question:
              "Why are environment variables important in backend applications?",
            answer:
              "Environment variables are important for configuration such as ports, database URLs, API keys, and secrets, allowing different settings per environment without hardcoding them in source code.",
          },
        ],
        code: `const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;`,
      },
      {
        name: "dotenv",
        summary:
          "dotenv loads environment variables from a local .env file during development.",
        mockQuestions: [
          {
            id: "dotenv-1",
            question: "What does dotenv do?",
            answer:
              "dotenv loads environment variables from a local .env file into process.env, which is useful in development.",
          },
        ],
        code: `import "dotenv/config";

console.log(process.env.PORT);`,
      },
      {
        name: "NODE_ENV",
        summary:
          "NODE_ENV is commonly used to distinguish development, test, and production behaviour.",
        mockQuestions: [
          {
            id: "node-env-1",
            question: "What is NODE_ENV commonly used for?",
            answer:
              "NODE_ENV is commonly used to switch behaviour between environments such as development, test, and production.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "readable-streams-1",
            question: "Why are streams useful in Node.js?",
            answer:
              "Streams allow data to be processed in chunks instead of loading everything into memory at once, which is more efficient for large files or continuous data sources.",
          },
        ],
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
        mockQuestions: [
          {
            id: "writable-streams-1",
            question: "What is a writable stream?",
            answer:
              "A writable stream is a destination that accepts data over time in chunks, such as a file, HTTP response, or process output.",
          },
        ],
        code: `import fs from "node:fs";

const stream = fs.createWriteStream("output.txt");
stream.write("Hello");
stream.end();`,
      },
      {
        name: "Piping Streams",
        summary:
          "Piping connects a readable stream directly to a writable stream.",
        mockQuestions: [
          {
            id: "piping-streams-1",
            question: "What does piping do with streams?",
            answer:
              "Piping connects a readable stream to a writable stream so data flows from one to the other automatically, often with backpressure handling built in.",
          },
        ],
        code: `import fs from "node:fs";

fs.createReadStream("input.txt").pipe(
  fs.createWriteStream("copy.txt")
);`,
      },
      {
        name: "Buffers",
        summary:
          "Buffers represent binary data and are used heavily in low-level Node APIs.",
        mockQuestions: [
          {
            id: "buffers-1",
            question: "What is a Buffer in Node.js?",
            answer:
              "A Buffer is a Node.js object for working with raw binary data, commonly used in file, network, and stream operations.",
          },
        ],
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
        mockQuestions: [
          {
            id: "try-catch-node-1",
            question: "When does try/catch work in Node.js?",
            answer:
              "try/catch works for synchronous code and for awaited async code inside an async function, but it does not automatically catch errors from non-awaited asynchronous callbacks.",
          },
        ],
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
        mockQuestions: [
          {
            id: "error-first-callbacks-1",
            question: "Why did Node adopt error-first callbacks?",
            answer:
              "Error-first callbacks provide a consistent convention for asynchronous APIs, making it clear whether an operation failed before handling the result.",
          },
        ],
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
        mockQuestions: [
          {
            id: "throwing-custom-errors-1",
            question: "Why use custom errors in backend code?",
            answer:
              "Custom errors make failure cases more explicit and can carry meaningful metadata such as status codes, error types, or context for logging and response handling.",
          },
        ],
        code: `if (!user) {
  throw new Error("User not found");
}`,
      },
      {
        name: "Unhandled Rejections",
        summary:
          "Promise rejections should be handled explicitly to avoid unstable runtime behaviour.",
        mockQuestions: [
          {
            id: "unhandled-rejections-1",
            question: "Why are unhandled Promise rejections a problem?",
            answer:
              "Unhandled rejections can leave the application in an uncertain state, hide bugs, and may terminate the process depending on runtime settings and Node versions.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "package-json-1",
            question: "What is package.json used for?",
            answer:
              "package.json stores project metadata, scripts, dependencies, and package configuration, making it a central file in Node projects.",
          },
        ],
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
        mockQuestions: [
          {
            id: "npm-scripts-1",
            question: "Why are npm scripts useful?",
            answer:
              "npm scripts provide a simple, consistent way to run common project tasks such as development servers, tests, builds, and linting.",
          },
        ],
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
        mockQuestions: [
          {
            id: "dependencies-vs-devdependencies-1",
            question:
              "What is the difference between dependencies and devDependencies?",
            answer:
              "dependencies are needed at runtime by the application, while devDependencies are only needed during development, testing, or build steps.",
          },
        ],
        code: `npm install express
npm install -D typescript nodemon`,
      },
      {
        name: "npx",
        summary:
          "npx runs package executables without requiring a global install.",
        mockQuestions: [
          {
            id: "npx-1",
            question: "What is npx used for?",
            answer:
              "npx runs package executables directly, often without requiring a global install, which is useful for one-off commands and local project tooling.",
          },
        ],
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
        mockQuestions: [
          {
            id: "node-test-runner-1",
            question: "What is node:test?",
            answer:
              "node:test is Node's built-in test runner module, which allows you to write and run tests without bringing in a third-party test framework.",
          },
        ],
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
        mockQuestions: [
          {
            id: "watching-files-1",
            question: "Why is watch mode useful during development?",
            answer:
              "Watch mode improves developer experience by automatically rerunning or restarting code when files change, reducing manual repetition.",
          },
        ],
        code: `node --watch index.js`,
      },
      {
        name: "Linting and Formatting",
        summary:
          "Tools like ESLint and Prettier help keep code consistent and catch common issues.",
        mockQuestions: [
          {
            id: "linting-formatting-1",
            question:
              "Why are linting and formatting tools important in Node projects?",
            answer:
              "They improve consistency, catch common mistakes early, reduce style debates, and make code easier to review and maintain.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "eventemitter-basics-1",
            question: "What is EventEmitter in Node.js?",
            answer:
              "EventEmitter is Node's built-in pattern for emitting named events and registering listeners, enabling loosely coupled communication inside an application.",
          },
        ],
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
        mockQuestions: [
          {
            id: "passing-event-data-1",
            question: "How can data be passed with an emitted event?",
            answer:
              "Data can be passed as arguments to emit, and any listeners for that event receive those arguments.",
          },
        ],
        code: `emitter.on("user:created", (user) => {
  console.log(user.name);
});

emitter.emit("user:created", { name: "Nick" });`,
      },
      {
        name: "once",
        summary:
          "The once method listens for an event only the first time it occurs.",
        mockQuestions: [
          {
            id: "once-1",
            question: "What does once do on an EventEmitter?",
            answer:
              "once registers a listener that runs only the first time the event is emitted and is then removed automatically.",
          },
        ],
        code: `emitter.once("ready", () => {
  console.log("Only once");
});`,
      },
      {
        name: "Removing Listeners",
        summary:
          "Listeners can be removed to avoid leaks or repeated execution.",
        mockQuestions: [
          {
            id: "removing-listeners-1",
            question: "Why might you remove EventEmitter listeners?",
            answer:
              "Removing listeners helps avoid memory leaks, duplicate execution, and unintended behaviour when a listener is no longer needed.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "password-hashing-1",
            question:
              "Why should passwords be hashed instead of stored in plain text?",
            answer:
              "Hashing protects user passwords if the database is leaked, because the original plain text password is not stored directly.",
          },
          {
            id: "password-hashing-2",
            question:
              "Why are algorithms like bcrypt commonly used for password hashing?",
            answer:
              "bcrypt is designed to be slow and include salting, which makes brute-force and rainbow table attacks much harder.",
          },
        ],
        code: `import bcrypt from "bcrypt";

const hash = await bcrypt.hash(password, 10);
const valid = await bcrypt.compare(password, hash);`,
      },
      {
        name: "JWT Basics",
        summary:
          "JWTs are commonly used for stateless authentication between client and server.",
        interview: true,
        mockQuestions: [
          {
            id: "jwt-basics-1",
            question: "What is a JWT?",
            answer:
              "A JWT is a signed token that can carry claims such as a user ID and is often used for stateless authentication between a client and server.",
          },
          {
            id: "jwt-basics-2",
            question: "What is one trade-off of JWT-based authentication?",
            answer:
              "JWTs are convenient for stateless auth, but revocation and immediate invalidation can be harder than with server-side sessions.",
          },
        ],
        code: `import jwt from "jsonwebtoken";

const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET);
const payload = jwt.verify(token, process.env.JWT_SECRET);`,
      },
      {
        name: "Express Session",
        summary:
          "Sessions store user state on the server and identify clients with cookies.",
        mockQuestions: [
          {
            id: "express-session-1",
            question: "How do server-side sessions differ from JWT auth?",
            answer:
              "Server-side sessions keep user state on the server and identify clients with cookies, while JWT auth typically stores claims in a signed token sent by the client.",
          },
        ],
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
        mockQuestions: [
          {
            id: "auth-middleware-1",
            question:
              "Why is middleware a good place for authentication checks?",
            answer:
              "Middleware allows authentication and authorisation logic to be applied consistently before protected route handlers run.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "connecting-to-database-1",
            question:
              "Why is database connection setup usually done during application startup?",
            answer:
              "Initialising the connection during startup makes it clear whether the app can operate correctly and allows connection problems to be detected early.",
          },
        ],
        code: `import mongoose from "mongoose";

await mongoose.connect(process.env.MONGO_URL);`,
      },
      {
        name: "Basic Querying",
        summary:
          "Applications commonly perform create, read, update, and delete operations.",
        mockQuestions: [
          {
            id: "basic-querying-1",
            question:
              "What kinds of database queries are common in backend applications?",
            answer:
              "Most applications perform CRUD operations: create, read, update, and delete, often with filtering, sorting, pagination, and joins or relations where needed.",
          },
        ],
        code: `const users = await User.find();
const user = await User.findById(id);`,
      },
      {
        name: "Parameterized SQL",
        summary:
          "Parameterized queries help prevent SQL injection by separating values from SQL strings.",
        interview: true,
        mockQuestions: [
          {
            id: "parameterized-sql-1",
            question: "Why are parameterized SQL queries important?",
            answer:
              "Parameterized queries help prevent SQL injection by separating SQL logic from user-provided values rather than interpolating raw input into query strings.",
          },
        ],
        code: `const result = await db.query(
  "SELECT * FROM users WHERE id = $1",
  [id]
);`,
      },
      {
        name: "Connection Pools",
        summary:
          "Connection pools manage a reusable set of database connections for efficiency.",
        mockQuestions: [
          {
            id: "connection-pools-1",
            question: "What is a database connection pool?",
            answer:
              "A connection pool maintains a reusable set of database connections so requests can share them efficiently instead of opening a new connection every time.",
          },
        ],
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
        mockQuestions: [
          {
            id: "exec-1",
            question: "What is exec used for in Node.js?",
            answer:
              "exec is used to run a shell command and collect its output into a buffer, which is convenient for smaller outputs and simple shell interactions.",
          },
        ],
        code: `import { exec } from "node:child_process";

exec("ls", (error, stdout) => {
  console.log(stdout);
});`,
      },
      {
        name: "spawn",
        summary:
          "spawn starts a process and streams input/output, which is better for long-running tasks.",
        mockQuestions: [
          {
            id: "spawn-1",
            question: "When is spawn a better choice than exec?",
            answer:
              "spawn is better for long-running processes or large outputs because it streams data instead of buffering everything in memory.",
          },
        ],
        code: `import { spawn } from "node:child_process";

const child = spawn("node", ["script.js"]);

child.stdout.on("data", (data) => {
  console.log(data.toString());
});`,
      },
      {
        name: "execFile",
        summary: "execFile runs an executable directly without a shell.",
        mockQuestions: [
          {
            id: "execfile-1",
            question: "What is the difference between exec and execFile?",
            answer:
              "exec runs a command through a shell, while execFile runs an executable directly without a shell, which can be more efficient and safer in some cases.",
          },
        ],
        code: `import { execFile } from "node:child_process";

execFile("node", ["--version"], (error, stdout) => {
  console.log(stdout);
});`,
      },
      {
        name: "Use Cases",
        summary:
          "Child processes are useful for CLI wrappers, build tooling, and delegating work to external programs.",
        mockQuestions: [
          {
            id: "child-process-use-cases-1",
            question:
              "What are common use cases for child processes in Node.js?",
            answer:
              "Common use cases include wrapping CLI tools, running build tasks, invoking other programs, and delegating work that should run outside the main Node process.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "websocket-server-1",
            question: "What problem do WebSockets solve?",
            answer:
              "WebSockets provide persistent two-way communication between client and server, which is useful for real-time features without repeated polling.",
          },
        ],
        code: `import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  socket.send("Connected");
});`,
      },
      {
        name: "Receiving Messages",
        summary: "Servers can listen for messages sent by connected clients.",
        mockQuestions: [
          {
            id: "receiving-messages-1",
            question: "How does a WebSocket server receive data from clients?",
            answer:
              "The server listens for message events on a connected socket and handles the incoming payload when it arrives.",
          },
        ],
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
        mockQuestions: [
          {
            id: "broadcasting-1",
            question: "What is broadcasting in a WebSocket application?",
            answer:
              "Broadcasting means sending a message to multiple or all connected clients, often used for updates in chat, dashboards, or collaboration features.",
          },
        ],
        code: `wss.clients.forEach((client) => {
  client.send("Updated");
});`,
      },
      {
        name: "Use Cases",
        summary:
          "Common real-time use cases include chat, notifications, dashboards, and collaboration.",
        mockQuestions: [
          {
            id: "websocket-use-cases-1",
            question: "What are common use cases for WebSockets?",
            answer:
              "Common use cases include chat apps, notifications, live dashboards, multiplayer features, and collaborative tools where low-latency updates matter.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "controllers-services-1",
            question:
              "Why separate controllers from services in a Node backend?",
            answer:
              "Separating controllers from services keeps request/response concerns apart from business logic, which improves testability, readability, and maintainability.",
          },
        ],
        code: `app.get("/users", async (req, res) => {
  const users = await userService.getAll();
  res.json(users);
});`,
      },
      {
        name: "Config Separation",
        summary:
          "Configuration is easier to manage when centralised in its own module.",
        mockQuestions: [
          {
            id: "config-separation-1",
            question: "Why centralise configuration in backend applications?",
            answer:
              "Centralising configuration makes environment values easier to manage, validates them in one place, and avoids scattering setup logic across the codebase.",
          },
        ],
        code: `export const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL,
};`,
      },
      {
        name: "Error Middleware",
        summary:
          "Express apps often centralise error handling in one middleware function.",
        mockQuestions: [
          {
            id: "error-middleware-1",
            question: "Why use centralised error middleware in Express?",
            answer:
              "Centralised error middleware keeps error handling consistent, reduces duplication, and makes it easier to log and format error responses in one place.",
          },
        ],
        code: `app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Server error" });
});`,
      },
      {
        name: "Graceful Shutdown",
        summary:
          "Servers should close cleanly on termination signals to avoid dropped work or corrupted state.",
        interview: true,
        mockQuestions: [
          {
            id: "graceful-shutdown-1",
            question: "What is graceful shutdown in a Node server?",
            answer:
              "Graceful shutdown means handling termination signals by stopping new work, finishing or cleaning up existing work, and closing resources like servers or database connections safely.",
          },
        ],
        code: `process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed");
  });
});`,
      },
    ],
  },
];
