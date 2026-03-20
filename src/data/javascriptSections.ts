import type {Section} from "@/components/SectionCard/types";

export const sections: Section[] = [
  {
    title: "Variables and Types",
    items: [
      {
        name: "let / const / var",
        summary:
          "Use const by default, let when reassignment is needed, and avoid var due to function scope and hoisting quirks.",
        interview: true,
        mockQuestions: [
          {
            id: "let-const-var-1",
            question: "What is the difference between let, const, and var?",
            answer:
              "const is block-scoped and cannot be reassigned, let is block-scoped and can be reassigned, and var is function-scoped and has hoisting behaviour that can lead to bugs.",
          },
          {
            id: "let-const-var-2",
            question: "Why is var generally avoided in modern JavaScript?",
            answer:
              "var is generally avoided because it is function-scoped rather than block-scoped and its hoisting behaviour can make code harder to reason about and more error-prone.",
          },
        ],
        code: `const name = "Nick";
let count = 0;
count += 1;`,
      },
      {
        name: "Primitive Types",
        summary:
          "JavaScript primitives include string, number, boolean, null, undefined, symbol, and bigint.",
        mockQuestions: [
          {
            id: "primitive-types-1",
            question: "What are the primitive types in JavaScript?",
            answer:
              "The primitive types are string, number, boolean, null, undefined, symbol, and bigint.",
          },
          {
            id: "primitive-types-2",
            question:
              "What is the difference between a primitive and an object?",
            answer:
              "Primitives are immutable value types, while objects are reference types that can hold collections of properties and methods.",
          },
        ],
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
        mockQuestions: [
          {
            id: "type-coercion-1",
            question: "What is type coercion in JavaScript?",
            answer:
              "Type coercion is when JavaScript automatically converts a value from one type to another during an operation or comparison.",
          },
          {
            id: "type-coercion-2",
            question:
              "Why is strict equality usually preferred over loose equality?",
            answer:
              "Strict equality avoids implicit type coercion, which makes comparisons more predictable and reduces surprising bugs.",
          },
        ],
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
        mockQuestions: [
          {
            id: "function-declarations-1",
            question: "What is a function declaration in JavaScript?",
            answer:
              "A function declaration defines a named function using the function keyword, and it is hoisted so it can be called before its declaration appears in the file.",
          },
        ],
        code: `function add(a, b) {
  return a + b;
}`,
      },
      {
        name: "Function Expressions",
        summary:
          "Functions can be assigned to variables, which is useful when passing them around.",
        mockQuestions: [
          {
            id: "function-expressions-1",
            question: "What is a function expression?",
            answer:
              "A function expression is a function assigned to a variable or passed as a value. Unlike function declarations, it is not fully hoisted in the same way.",
          },
        ],
        code: `const add = function (a, b) {
  return a + b;
};`,
      },
      {
        name: "Arrow Functions",
        summary: "Arrow functions are concise and do not bind their own this.",
        mockQuestions: [
          {
            id: "arrow-functions-1",
            question:
              "What is the main difference between an arrow function and a regular function?",
            answer:
              "Arrow functions are more concise and do not bind their own this, arguments, super, or new.target, so this is taken lexically from the surrounding scope.",
          },
          {
            id: "arrow-functions-2",
            question: "When should you be careful using arrow functions?",
            answer:
              "You should be careful when a function needs its own this context, such as object methods or certain event handler patterns, because arrow functions do not create their own this.",
          },
        ],
        code: `const add = (a, b) => a + b;

const log = (message) => {
  console.log(message);
};`,
      },
      {
        name: "Default Parameters",
        summary:
          "Default values let functions handle missing arguments more cleanly.",
        mockQuestions: [
          {
            id: "default-parameters-1",
            question: "What problem do default parameters solve?",
            answer:
              "Default parameters let a function fall back to sensible values when arguments are omitted, reducing the need for manual checks inside the function body.",
          },
        ],
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
        mockQuestions: [
          {
            id: "object-literals-1",
            question: "What is an object literal in JavaScript?",
            answer:
              "An object literal is a way to create an object directly using curly braces, with key-value pairs for related data and behaviour.",
          },
        ],
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
        mockQuestions: [
          {
            id: "array-basics-1",
            question: "What is an array in JavaScript?",
            answer:
              "An array is an ordered collection of values that can be accessed by index and manipulated using built-in methods.",
          },
        ],
        code: `const numbers = [1, 2, 3];
numbers.push(4);`,
      },
      {
        name: "Destructuring",
        summary:
          "Destructuring pulls values out of objects and arrays into local variables.",
        mockQuestions: [
          {
            id: "destructuring-1",
            question: "What is destructuring in JavaScript?",
            answer:
              "Destructuring is a syntax that lets you extract values from objects or arrays into local variables in a concise way.",
          },
        ],
        code: `const user = { name: "Nick", age: 50 };
const { name, age } = user;

const colors = ["red", "blue"];
const [first, second] = colors;`,
      },
      {
        name: "Spread and Rest",
        summary: "Spread expands values, while rest collects remaining values.",
        mockQuestions: [
          {
            id: "spread-rest-1",
            question: "What is the difference between spread and rest syntax?",
            answer:
              "Spread expands values out of an array or object, while rest collects remaining values into a new array or object.",
          },
        ],
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
        mockQuestions: [
          {
            id: "ternary-operator-1",
            question: "When is a ternary operator a good choice?",
            answer:
              "A ternary operator is a good choice for short, simple conditional expressions where you need one of two values and readability is still clear.",
          },
        ],
        code: `const label = isAdmin ? "Admin" : "User";`,
      },
      {
        name: "switch",
        summary:
          "Useful when comparing one value against multiple known cases.",
        mockQuestions: [
          {
            id: "switch-1",
            question: "When might you choose a switch statement over if/else?",
            answer:
              "A switch statement can be useful when comparing one value against multiple known cases, especially when the branching logic is based on a single variable.",
          },
        ],
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
        mockQuestions: [
          {
            id: "for-of-1",
            question: "What is for...of used for?",
            answer:
              "for...of is used to iterate over iterable values such as arrays, strings, maps, and sets, giving you each item directly rather than an index.",
          },
        ],
        code: `for (const item of ["a", "b", "c"]) {
  console.log(item);
}`,
      },
      {
        name: "Array Methods",
        summary:
          "Methods like map, filter, and reduce are core to modern JavaScript.",
        interview: true,
        mockQuestions: [
          {
            id: "array-methods-1",
            question: "What is the difference between map, filter, and reduce?",
            answer:
              "map transforms each item into a new value, filter keeps only items that match a condition, and reduce combines all items into a single accumulated result.",
          },
          {
            id: "array-methods-2",
            question:
              "Why are array methods often preferred over manual loops?",
            answer:
              "Array methods are often more expressive, easier to read, and make the intent of the code clearer, especially for transformation and filtering tasks.",
          },
        ],
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
        mockQuestions: [
          {
            id: "promises-1",
            question: "What is a Promise in JavaScript?",
            answer:
              "A Promise is an object representing the eventual completion or failure of an asynchronous operation, with states such as pending, fulfilled, or rejected.",
          },
          {
            id: "promises-2",
            question:
              "What problem do Promises solve compared with nested callbacks?",
            answer:
              "Promises make asynchronous flows easier to compose and read, and they reduce callback nesting and some forms of callback hell.",
          },
        ],
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
        mockQuestions: [
          {
            id: "async-await-1",
            question:
              "What is the relationship between async/await and Promises?",
            answer:
              "async/await is syntax built on top of Promises. async functions return Promises, and await pauses execution until a Promise settles.",
          },
          {
            id: "async-await-2",
            question: "Why is async/await often preferred over .then chains?",
            answer:
              "async/await often makes asynchronous code read more like synchronous code, which can improve clarity and make error handling with try/catch easier to follow.",
          },
        ],
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
        mockQuestions: [
          {
            id: "timers-1",
            question:
              "What is the difference between setTimeout and setInterval?",
            answer:
              "setTimeout runs a callback once after a delay, while setInterval runs a callback repeatedly at roughly the given interval until cleared.",
          },
        ],
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
        mockQuestions: [
          {
            id: "selecting-elements-1",
            question: "How do you select elements in the DOM with JavaScript?",
            answer:
              "You can select elements using DOM APIs such as document.getElementById, document.querySelector, and document.querySelectorAll.",
          },
        ],
        code: `const button = document.querySelector("button");
const title = document.getElementById("title");`,
      },
      {
        name: "Event Listeners",
        summary: "Use addEventListener to respond to user interaction.",
        mockQuestions: [
          {
            id: "event-listeners-1",
            question: "What does addEventListener do?",
            answer:
              "addEventListener attaches a callback function to an element so code runs when a specified event, such as click or input, occurs.",
          },
        ],
        code: `button.addEventListener("click", () => {
  console.log("Clicked");
});`,
      },
      {
        name: "Updating the DOM",
        summary:
          "JavaScript can change text, classes, styles, and attributes dynamically.",
        mockQuestions: [
          {
            id: "updating-dom-1",
            question: "What are common ways to update the DOM with JavaScript?",
            answer:
              "Common DOM updates include changing textContent or innerHTML, adding or removing classes, updating styles, and setting attributes.",
          },
        ],
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
        mockQuestions: [
          {
            id: "block-scope-1",
            question: "What does block scope mean in JavaScript?",
            answer:
              "Block scope means a variable declared with let or const only exists within the nearest enclosing block, such as an if statement or loop.",
          },
        ],
        code: `if (true) {
  const message = "Inside block";
}

console.log(message); // ReferenceError`,
      },
      {
        name: "ES Modules",
        summary:
          "Modern JavaScript uses import and export to split code into files.",
        mockQuestions: [
          {
            id: "es-modules-1",
            question: "What are ES Modules?",
            answer:
              "ES Modules are the standard JavaScript module system using import and export to organise code into separate files with explicit dependencies.",
          },
        ],
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
        mockQuestions: [
          {
            id: "closures-modules-scope-1",
            question: "What is a closure in JavaScript?",
            answer:
              "A closure is created when a function remembers and can still access variables from its outer lexical scope, even after that outer function has finished executing.",
          },
          {
            id: "closures-modules-scope-2",
            question: "Why are closures useful?",
            answer:
              "Closures are useful for encapsulation, function factories, private state, and preserving values across later function calls.",
          },
        ],
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
        mockQuestions: [
          {
            id: "optional-chaining-1",
            question: "What problem does optional chaining solve?",
            answer:
              "Optional chaining allows safe access to nested properties or methods without throwing an error when an intermediate value is null or undefined.",
          },
        ],
        code: `const city = user?.address?.city;`,
      },
      {
        name: "Nullish Coalescing",
        summary:
          "Nullish coalescing provides a fallback only when the value is null or undefined, not for other falsy values.",
        mockQuestions: [
          {
            id: "nullish-coalescing-1",
            question: "What is the difference between ?? and || ?",
            answer:
              "?? only falls back when the value is null or undefined, while || falls back for any falsy value such as 0, false, or an empty string.",
          },
        ],
        code: `const label = input ?? "Default";`,
      },
      {
        name: "Template Literals",
        summary:
          "Template literals allow interpolation and multiline strings using backticks.",
        mockQuestions: [
          {
            id: "template-literals-1",
            question: "What are template literals used for?",
            answer:
              "Template literals are used for string interpolation, multiline strings, and cleaner string construction using backticks and embedded expressions.",
          },
        ],
        code: `const name = "Nick";
const message = \`Hello, \${name}\`;`,
      },
      {
        name: "Short Circuiting",
        summary:
          "Logical operators can be used to conditionally return values or trigger expressions.",
        mockQuestions: [
          {
            id: "short-circuiting-1",
            question: "What is short-circuiting in JavaScript?",
            answer:
              "Short-circuiting is when logical operators stop evaluating as soon as the final result is already known, which can be used for conditional expressions and fallback values.",
          },
        ],
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
        mockQuestions: [
          {
            id: "map-1",
            question: "When would you use a Map instead of a plain object?",
            answer:
              "A Map is useful when keys are not just strings or symbols, when insertion order matters, or when you want built-in methods for size, iteration, and key management.",
          },
        ],
        code: `const roles = new Map();
roles.set("admin", true);
roles.get("admin");`,
      },
      {
        name: "Set",
        summary: "Set stores unique values and is useful for deduplication.",
        mockQuestions: [
          {
            id: "set-1",
            question: "What is a Set useful for?",
            answer:
              "A Set is useful for storing unique values and is commonly used for deduplication or fast membership checks.",
          },
        ],
        code: `const ids = new Set([1, 2, 2, 3]);
console.log(ids.size);`,
      },
      {
        name: "WeakMap / WeakSet",
        summary:
          "Weak collections hold weak references and are mainly used for memory-sensitive object associations.",
        mockQuestions: [
          {
            id: "weakmap-weakset-1",
            question: "What is special about WeakMap and WeakSet?",
            answer:
              "They hold weak references to objects, which means entries can be garbage-collected when there are no other references, making them useful for memory-sensitive associations.",
          },
        ],
        code: `const cache = new WeakMap();
const obj = {};
cache.set(obj, "cached");`,
      },
      {
        name: "Object Methods",
        summary:
          "Useful built-ins include Object.keys, Object.values, Object.entries, and Object.fromEntries.",
        mockQuestions: [
          {
            id: "object-methods-1",
            question:
              "What are Object.keys, Object.values, and Object.entries used for?",
            answer:
              "They are used to extract an object's keys, values, or key-value pairs for iteration, transformation, or inspection.",
          },
        ],
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
        mockQuestions: [
          {
            id: "closures-this-1",
            question:
              "What is a closure and why is it important in JavaScript?",
            answer:
              "A closure happens when a function retains access to variables from its outer scope after the outer function has completed. It is important because it enables encapsulation, private state, and function factories.",
          },
          {
            id: "closures-this-2",
            question: "Can you give a practical use case for closures?",
            answer:
              "A practical use case is creating private state, such as a counter function that keeps track of count between calls without exposing the variable directly.",
          },
        ],
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
        mockQuestions: [
          {
            id: "this-1",
            question: "What determines the value of this in JavaScript?",
            answer:
              "The value of this is determined by how a function is called, not where it is defined, except for arrow functions which capture this lexically from the surrounding scope.",
          },
          {
            id: "this-2",
            question:
              "How do arrow functions handle this differently from regular functions?",
            answer:
              "Arrow functions do not create their own this. Instead, they inherit this from the surrounding lexical scope.",
          },
        ],
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
        mockQuestions: [
          {
            id: "bind-call-apply-1",
            question: "What is the difference between bind, call, and apply?",
            answer:
              "call invokes a function immediately with a given this and individual arguments, apply does the same but takes arguments as an array-like value, and bind returns a new function with this permanently set.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "prototype-chain-1",
            question: "What is the prototype chain in JavaScript?",
            answer:
              "The prototype chain is the mechanism JavaScript uses for inheritance, where an object can look up properties and methods on its prototype and then further up the chain if needed.",
          },
        ],
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
        mockQuestions: [
          {
            id: "constructor-functions-1",
            question: "What is a constructor function?",
            answer:
              "A constructor function is a regular function used with new to create object instances, with properties assigned to this and shared behaviour often placed on the prototype.",
          },
        ],
        code: `function User(name) {
  this.name = name;
}

const user = new User("Nick");`,
      },
      {
        name: "Classes",
        summary:
          "Classes provide a cleaner syntax over prototype-based inheritance.",
        mockQuestions: [
          {
            id: "classes-1",
            question:
              "Are JavaScript classes a different inheritance model from prototypes?",
            answer:
              "No. Classes are mainly syntactic sugar over JavaScript's existing prototype-based inheritance model.",
          },
        ],
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
        mockQuestions: [
          {
            id: "inheritance-1",
            question: "How does inheritance work with JavaScript classes?",
            answer:
              "A class can extend another class to inherit its properties and methods, while also adding or overriding behaviour in the subclass.",
          },
        ],
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
        mockQuestions: [
          {
            id: "event-loop-1",
            question: "What is the JavaScript event loop?",
            answer:
              "The event loop is the mechanism that allows JavaScript to handle asynchronous tasks by coordinating the call stack, task queues, and microtask queues while keeping the runtime responsive.",
          },
          {
            id: "event-loop-2",
            question:
              "What is the difference between microtasks and macrotasks?",
            answer:
              "Microtasks, such as Promise callbacks, run before the next macrotask, while macrotasks include things like setTimeout callbacks and are processed in the main task queue.",
          },
        ],
        code: `console.log("start");

setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));

console.log("end");`,
      },
      {
        name: "Promise.all",
        summary:
          "Promise.all waits for all promises to resolve or rejects when one fails.",
        mockQuestions: [
          {
            id: "promise-all-1",
            question: "How does Promise.all behave if one promise rejects?",
            answer:
              "Promise.all rejects immediately as soon as one of the input promises rejects, and it does not wait for the rest to complete successfully.",
          },
        ],
        code: `const results = await Promise.all([
  fetch("/users"),
  fetch("/posts"),
]);`,
      },
      {
        name: "Promise.allSettled",
        summary:
          "Promise.allSettled waits for all promises and returns their outcomes without failing fast.",
        mockQuestions: [
          {
            id: "promise-allsettled-1",
            question:
              "When would you use Promise.allSettled instead of Promise.all?",
            answer:
              "You would use Promise.allSettled when you want the result of every promise regardless of whether some fail, rather than failing fast on the first rejection.",
          },
        ],
        code: `const results = await Promise.allSettled([
  Promise.resolve("ok"),
  Promise.reject("error"),
]);`,
      },
      {
        name: "try / catch with async",
        summary:
          "Async code should be wrapped in try/catch when using await and handling failures.",
        mockQuestions: [
          {
            id: "try-catch-async-1",
            question: "Why use try/catch with async/await?",
            answer:
              "try/catch lets you handle rejected Promises in a structured way when using await, making async error handling clearer and easier to follow.",
          },
        ],
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
