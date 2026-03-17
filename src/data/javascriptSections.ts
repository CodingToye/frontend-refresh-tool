import type {Section} from "../types/Section.types";

export const sections: Section[] = [
  {
    title: "Variables and Types",
    items: [
      {
        name: "let / const / var",
        summary:
          "Use const by default, let when reassignment is needed, and avoid var due to function scope and hoisting quirks.",
        interview: true,
        code: `const name = "Nick";
let count = 0;
count += 1;`,
      },
      {
        name: "Primitive Types",
        summary:
          "JavaScript primitives include string, number, boolean, null, undefined, symbol, and bigint.",
        code: `const name = "Nick";
const age = 50;
const active = true;
const value = null;
const missing = undefined;`,
      },
      {
        name: "Type Coercion",
        summary:
          "JavaScript can implicitly convert values, which is why strict equality is usually safer.",
        code: `"5" + 1;   // "51"
"5" - 1;   // 4
5 == "5";  // true
5 === "5"; // false`,
      },
    ],
  },
  {
    title: "Functions",
    items: [
      {
        name: "Function Declarations",
        summary:
          "Standard named functions are hoisted and useful when you want a reusable block of logic.",
        code: `function add(a, b) {
  return a + b;
}`,
      },
      {
        name: "Function Expressions",
        summary:
          "Functions can be assigned to variables, which is useful when passing them around.",
        code: `const add = function (a, b) {
  return a + b;
};`,
      },
      {
        name: "Arrow Functions",
        summary: "Arrow functions are concise and do not bind their own this.",
        code: `const add = (a, b) => a + b;

const log = (message) => {
  console.log(message);
};`,
      },
      {
        name: "Default Parameters",
        summary:
          "Default values let functions handle missing arguments more cleanly.",
        code: `function greet(name = "Guest") {
  return \`Hello, \${name}\`;
}`,
      },
    ],
  },
  {
    title: "Objects and Arrays",
    items: [
      {
        name: "Object Literals",
        summary:
          "Objects store related key-value data and are central to most JavaScript code.",
        code: `const user = {
  name: "Nick",
  age: 50,
  active: true,
};`,
      },
      {
        name: "Array Basics",
        summary:
          "Arrays hold ordered collections and are commonly looped, mapped, and filtered.",
        code: `const numbers = [1, 2, 3];
numbers.push(4);`,
      },
      {
        name: "Destructuring",
        summary:
          "Destructuring pulls values out of objects and arrays into local variables.",
        code: `const user = { name: "Nick", age: 50 };
const { name, age } = user;

const colors = ["red", "blue"];
const [first, second] = colors;`,
      },
      {
        name: "Spread and Rest",
        summary: "Spread expands values, while rest collects remaining values.",
        code: `const numbers = [1, 2, 3];
const copy = [...numbers, 4];

const user = { name: "Nick", age: 50 };
const updated = { ...user, active: true };`,
      },
    ],
  },
  {
    title: "Control Flow",
    items: [
      {
        name: "if / else",
        summary:
          "Use conditional branches to run different logic based on a condition.",
        code: `if (isLoggedIn) {
  showDashboard();
} else {
  showLogin();
}`,
      },
      {
        name: "Ternary Operator",
        summary:
          "A compact way to return one of two values based on a condition.",
        code: `const label = isAdmin ? "Admin" : "User";`,
      },
      {
        name: "switch",
        summary:
          "Useful when comparing one value against multiple known cases.",
        code: `switch (status) {
  case "loading":
    return "Loading...";
  case "error":
    return "Something went wrong";
  default:
    return "Ready";
}`,
      },
    ],
  },
  {
    title: "Loops and Iteration",
    items: [
      {
        name: "for Loop",
        summary: "A classic loop when you need explicit control over indexes.",
        code: `for (let i = 0; i < 3; i++) {
  console.log(i);
}`,
      },
      {
        name: "for...of",
        summary: "A clean way to iterate over iterable values such as arrays.",
        code: `for (const item of ["a", "b", "c"]) {
  console.log(item);
}`,
      },
      {
        name: "Array Methods",
        summary:
          "Methods like map, filter, and reduce are core to modern JavaScript.",
        code: `const numbers = [1, 2, 3, 4];

const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const total = numbers.reduce((sum, n) => sum + n, 0);`,
      },
    ],
  },
  {
    title: "Asynchronous JavaScript",
    items: [
      {
        name: "Promises",
        summary:
          "Promises represent asynchronous values that may resolve or reject later.",
        interview: true,
        code: `fetch("/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));`,
      },
      {
        name: "async / await",
        summary:
          "Async functions make asynchronous code easier to read and write.",
        interview: true,
        code: `async function loadUsers() {
  try {
    const response = await fetch("/api/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}`,
      },
      {
        name: "setTimeout / setInterval",
        summary: "Timers schedule code to run later or repeatedly.",
        code: `setTimeout(() => {
  console.log("Hello later");
}, 1000);

const id = setInterval(() => {
  console.log("Tick");
}, 1000);

clearInterval(id);`,
      },
    ],
  },
  {
    title: "The DOM",
    items: [
      {
        name: "Selecting Elements",
        summary:
          "The DOM API lets you find and work with elements in the page.",
        code: `const button = document.querySelector("button");
const title = document.getElementById("title");`,
      },
      {
        name: "Event Listeners",
        summary: "Use addEventListener to respond to user interaction.",
        code: `button.addEventListener("click", () => {
  console.log("Clicked");
});`,
      },
      {
        name: "Updating the DOM",
        summary:
          "JavaScript can change text, classes, styles, and attributes dynamically.",
        code: `title.textContent = "Updated";
title.classList.add("active");
title.setAttribute("data-ready", "true");`,
      },
    ],
  },
  {
    title: "Modules and Scope",
    items: [
      {
        name: "Block Scope",
        summary:
          "let and const are block-scoped, which makes scope more predictable.",
        code: `if (true) {
  const message = "Inside block";
}

console.log(message); // ReferenceError`,
      },
      {
        name: "ES Modules",
        summary:
          "Modern JavaScript uses import and export to split code into files.",
        code: `export function add(a, b) {
  return a + b;
}

import { add } from "./math.js";`,
      },
      {
        name: "Closures",
        summary:
          "A closure lets a function remember variables from its outer scope.",
        interview: true,
        code: `function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();`,
      },
    ],
  },
  {
    title: "Language Features",
    items: [
      {
        name: "Optional Chaining",
        summary:
          "Optional chaining safely accesses nested properties without throwing when something is null or undefined.",
        code: `const city = user?.address?.city;`,
      },
      {
        name: "Nullish Coalescing",
        summary:
          "Nullish coalescing provides a fallback only when the value is null or undefined, not for other falsy values.",
        code: `const label = input ?? "Default";`,
      },
      {
        name: "Template Literals",
        summary:
          "Template literals allow interpolation and multiline strings using backticks.",
        code: `const name = "Nick";
const message = \`Hello, \${name}\`;`,
      },
      {
        name: "Short Circuiting",
        summary:
          "Logical operators can be used to conditionally return values or trigger expressions.",
        code: `isLoggedIn && showDashboard();
const label = userName || "Guest";`,
      },
    ],
  },
  {
    title: "Advanced Objects and Collections",
    items: [
      {
        name: "Map",
        summary: "Map stores key-value pairs and allows keys of any type.",
        code: `const roles = new Map();
roles.set("admin", true);
roles.get("admin");`,
      },
      {
        name: "Set",
        summary: "Set stores unique values and is useful for deduplication.",
        code: `const ids = new Set([1, 2, 2, 3]);
console.log(ids.size);`,
      },
      {
        name: "WeakMap / WeakSet",
        summary:
          "Weak collections hold weak references and are mainly used for memory-sensitive object associations.",
        code: `const cache = new WeakMap();
const obj = {};
cache.set(obj, "cached");`,
      },
      {
        name: "Object Methods",
        summary:
          "Useful built-ins include Object.keys, Object.values, Object.entries, and Object.fromEntries.",
        code: `const user = { name: "Nick", age: 50 };

Object.keys(user);
Object.values(user);
Object.entries(user);`,
      },
    ],
  },
  {
    title: "Closures and this",
    items: [
      {
        name: "Closures",
        summary:
          "Closures let a function keep access to variables from its outer scope after that scope has finished.",
        interview: true,
        code: `function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}`,
      },
      {
        name: "this",
        summary:
          "The value of this depends on how a function is called, and arrow functions do not bind their own this.",
        interview: true,
        code: `const user = {
  name: "Nick",
  greet() {
    console.log(this.name);
  },
};`,
      },
      {
        name: "bind / call / apply",
        summary:
          "These methods control how a function is invoked and what this refers to.",
        code: `function greet() {
  console.log(this.name);
}

const user = { name: "Nick" };
greet.call(user);`,
      },
    ],
  },
  {
    title: "Prototypes and Classes",
    items: [
      {
        name: "Prototype Chain",
        summary: "Objects in JavaScript inherit through the prototype chain.",
        code: `const animal = {
  speak() {
    console.log("sound");
  },
};

const dog = Object.create(animal);
dog.speak();`,
      },
      {
        name: "Constructor Functions",
        summary:
          "Before classes, constructor functions were commonly used to create instances.",
        code: `function User(name) {
  this.name = name;
}

const user = new User("Nick");`,
      },
      {
        name: "Classes",
        summary:
          "Classes provide a cleaner syntax over prototype-based inheritance.",
        code: `class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return \`Hello, \${this.name}\`;
  }
}`,
      },
      {
        name: "Inheritance",
        summary: "Classes can extend other classes to share behaviour.",
        code: `class Admin extends User {
  deleteUser() {
    return "Deleted";
  }
}`,
      },
    ],
  },
  {
    title: "Async and Runtime",
    items: [
      {
        name: "Event Loop",
        summary:
          "The event loop coordinates synchronous code, microtasks, and macrotasks.",
        interview: true,
        code: `console.log("start");

setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));

console.log("end");`,
      },
      {
        name: "Promise.all",
        summary:
          "Promise.all waits for all promises to resolve or rejects when one fails.",
        code: `const results = await Promise.all([
  fetch("/users"),
  fetch("/posts"),
]);`,
      },
      {
        name: "Promise.allSettled",
        summary:
          "Promise.allSettled waits for all promises and returns their outcomes without failing fast.",
        code: `const results = await Promise.allSettled([
  Promise.resolve("ok"),
  Promise.reject("error"),
]);`,
      },
      {
        name: "try / catch with async",
        summary:
          "Async code should be wrapped in try/catch when using await and handling failures.",
        code: `try {
  const res = await fetch("/api/data");
  const data = await res.json();
} catch (error) {
  console.error(error);
}`,
      },
    ],
  },
];
