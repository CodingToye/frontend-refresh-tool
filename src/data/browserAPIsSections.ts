import type {Section} from "../types/Section.types";

export const sections: Section[] = [
  {
    title: "DOM APIs",
    items: [
      {
        name: "querySelector",
        summary: "Select DOM elements using CSS selectors.",
        interview: true,
        mockQuestions: [
          {
            id: "queryselector-1",
            question: "What does querySelector do?",
            answer:
              "querySelector returns the first element in the document that matches a given CSS selector.",
          },
          {
            id: "queryselector-2",
            question:
              "What is the difference between querySelector and querySelectorAll?",
            answer:
              "querySelector returns the first matching element, while querySelectorAll returns a static collection of all matching elements.",
          },
        ],
        code: `
const button = document.querySelector("button");
button.textContent = "Clicked";
`,
      },
      {
        name: "Event Listeners",
        summary: "Attach handlers to DOM events like clicks or keyboard input.",
        interview: true,
        mockQuestions: [
          {
            id: "dom-event-listeners-1",
            question: "What does addEventListener do?",
            answer:
              "addEventListener attaches a callback to an element so code runs when a specified event occurs, such as click, input, or keydown.",
          },
          {
            id: "dom-event-listeners-2",
            question:
              "Why is addEventListener usually preferred over inline event handlers?",
            answer:
              "It keeps behaviour separate from markup, supports multiple listeners, and makes code easier to maintain and test.",
          },
        ],
        code: `
button.addEventListener("click", () => {
  console.log("clicked");
});
`,
      },
      {
        name: "classList",
        summary: "Modify element classes dynamically.",
        mockQuestions: [
          {
            id: "classlist-1",
            question: "What is classList used for?",
            answer:
              "classList is used to add, remove, toggle, or check CSS classes on an element dynamically.",
          },
        ],
        code: `
element.classList.add("active");
element.classList.remove("hidden");
`,
      },
      {
        name: "dataset",
        summary: "Access custom data attributes from HTML.",
        mockQuestions: [
          {
            id: "dataset-1",
            question: "What is dataset in the DOM?",
            answer:
              "dataset provides access to an element's custom data-* attributes as a JavaScript object.",
          },
        ],
        code: `
<button data-id="42"></button>

const id = button.dataset.id;
`,
      },
    ],
  },
  {
    title: "Storage APIs",
    items: [
      {
        name: "localStorage",
        summary:
          "Persist small amounts of data in the browser across sessions.",
        interview: true,
        mockQuestions: [
          {
            id: "localstorage-1",
            question: "What is localStorage used for?",
            answer:
              "localStorage is used to store small amounts of string-based data in the browser that persist across page reloads and browser restarts.",
          },
          {
            id: "localstorage-2",
            question: "What is one limitation of localStorage?",
            answer:
              "localStorage only stores strings and is synchronous, so it is not suitable for large or sensitive data.",
          },
        ],
        code: `
localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");
`,
      },
      {
        name: "sessionStorage",
        summary:
          "Similar to localStorage but cleared when the browser tab closes.",
        mockQuestions: [
          {
            id: "sessionstorage-1",
            question: "How does sessionStorage differ from localStorage?",
            answer:
              "sessionStorage is scoped to a single browser tab or session and is cleared when that tab is closed, unlike localStorage which persists longer.",
          },
        ],
        code: `
sessionStorage.setItem("token", "123");
`,
      },
      {
        name: "JSON Storage Pattern",
        summary: "Objects should be serialised before storing.",
        mockQuestions: [
          {
            id: "json-storage-pattern-1",
            question:
              "Why do objects need to be serialised before storing in localStorage?",
            answer:
              "Because localStorage only stores strings, objects must be converted with JSON.stringify before saving and parsed with JSON.parse when reading them back.",
          },
        ],
        code: `
localStorage.setItem("user", JSON.stringify(user));

const saved = JSON.parse(localStorage.getItem("user"));
`,
      },
      {
        name: "Storage Events",
        summary: "Listen for storage changes across tabs.",
        mockQuestions: [
          {
            id: "storage-events-1",
            question: "What is the storage event useful for?",
            answer:
              "The storage event lets the browser notify other tabs or windows when localStorage changes, which is useful for syncing state across tabs.",
          },
        ],
        code: `
window.addEventListener("storage", (e) => {
  console.log(e.key, e.newValue);
});
`,
      },
    ],
  },
  {
    title: "Fetch API",
    items: [
      {
        name: "Basic Fetch",
        summary: "Fetch allows HTTP requests from the browser.",
        interview: true,
        mockQuestions: [
          {
            id: "basic-fetch-1",
            question: "What does fetch do in the browser?",
            answer:
              "fetch sends an HTTP request and returns a Promise that resolves to a Response object.",
          },
          {
            id: "basic-fetch-2",
            question: "What do you usually need to do after calling fetch?",
            answer:
              "You usually need to check the response status and then parse the response body, for example with response.json() for JSON APIs.",
          },
        ],
        code: `
const response = await fetch("/api/users");
const data = await response.json();
`,
      },
      {
        name: "POST Requests",
        summary: "Send JSON data to an API.",
        mockQuestions: [
          {
            id: "post-requests-1",
            question: "How do you send JSON in a POST request with fetch?",
            answer:
              "You set the method to POST, add a Content-Type of application/json, and pass a JSON string in the body.",
          },
        ],
        code: `
await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(user)
});
`,
      },
      {
        name: "Error Handling",
        summary: "Check response status and handle failures.",
        interview: true,
        mockQuestions: [
          {
            id: "fetch-error-handling-1",
            question: "Why do you need to check response.ok with fetch?",
            answer:
              "fetch only rejects on network failures, so response.ok should be checked to handle HTTP error statuses such as 404 or 500 explicitly.",
          },
        ],
        code: `
if (!response.ok) {
  throw new Error("Request failed");
}
`,
      },
      {
        name: "AbortController",
        summary: "AbortController cancels in-flight requests.",
        mockQuestions: [
          {
            id: "abortcontroller-1",
            question: "What problem does AbortController solve?",
            answer:
              "AbortController allows you to cancel in-flight fetch requests, which is useful for cleanup, avoiding race conditions, or stopping work the user no longer needs.",
          },
        ],
        code: `
const controller = new AbortController();

fetch(url, { signal: controller.signal });

controller.abort();
`,
      },
    ],
  },
  {
    title: "Browser Events",
    items: [
      {
        name: "DOMContentLoaded",
        summary:
          "Fires when HTML has loaded but resources like images may still be loading.",
        mockQuestions: [
          {
            id: "domcontentloaded-1",
            question: "What does DOMContentLoaded mean?",
            answer:
              "DOMContentLoaded fires when the initial HTML document has been fully parsed, without waiting for images, stylesheets, or other external resources to finish loading.",
          },
        ],
        code: `
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");
});
`,
      },
      {
        name: "Resize Events",
        summary: "Detect window resizing.",
        mockQuestions: [
          {
            id: "resize-events-1",
            question: "What is the resize event used for?",
            answer:
              "The resize event is used to detect changes to the browser window size, often for responsive behaviour or recalculating layout-related logic.",
          },
        ],
        code: `
window.addEventListener("resize", () => {
  console.log(window.innerWidth);
});
`,
      },
      {
        name: "IntersectionObserver",
        summary:
          "Efficiently observe when elements enter or leave the viewport.",
        interview: true,
        mockQuestions: [
          {
            id: "intersectionobserver-1",
            question: "What is IntersectionObserver useful for?",
            answer:
              "IntersectionObserver is useful for efficiently detecting when elements enter or leave the viewport, such as for lazy loading, analytics, or scroll-based UI behaviour.",
          },
        ],
        code: `
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => console.log(e.isIntersecting));
});

observer.observe(element);
`,
      },
      {
        name: "MutationObserver",
        summary: "Watch for DOM changes like added or removed nodes.",
        mockQuestions: [
          {
            id: "mutationobserver-1",
            question: "What does MutationObserver do?",
            answer:
              "MutationObserver watches for changes to the DOM, such as added or removed nodes, attribute updates, or text changes.",
          },
        ],
        code: `
const observer = new MutationObserver(() => {
  console.log("DOM changed");
});
`,
      },
    ],
  },
  {
    title: "Clipboard and Permissions",
    items: [
      {
        name: "Clipboard API",
        summary: "Copy text to the user's clipboard.",
        mockQuestions: [
          {
            id: "clipboard-api-1",
            question: "What is the Clipboard API used for?",
            answer:
              "The Clipboard API is used to read from or write to the user's clipboard, such as implementing copy-to-clipboard features.",
          },
        ],
        code: `
await navigator.clipboard.writeText("Copied text");
`,
      },
      {
        name: "Reading Clipboard",
        summary: "Read clipboard content when permitted.",
        mockQuestions: [
          {
            id: "reading-clipboard-1",
            question:
              "Why might reading from the clipboard require permission?",
            answer:
              "Clipboard contents can be sensitive, so browsers may require user gestures or permission checks before allowing clipboard reads.",
          },
        ],
        code: `
const text = await navigator.clipboard.readText();
`,
      },
      {
        name: "Permissions API",
        summary: "Check whether a permission has been granted.",
        mockQuestions: [
          {
            id: "permissions-api-1",
            question: "What is the Permissions API used for?",
            answer:
              "The Permissions API is used to query the current state of certain browser permissions, such as clipboard, notifications, or geolocation.",
          },
        ],
        code: `
const status = await navigator.permissions.query({
  name: "clipboard-read"
});
`,
      },
      {
        name: "Geolocation",
        summary: "Retrieve the user's geographic location.",
        interview: true,
        mockQuestions: [
          {
            id: "geolocation-1",
            question: "How does the Geolocation API work?",
            answer:
              "The Geolocation API requests the user's location through the browser and provides position data such as latitude and longitude if permission is granted.",
          },
          {
            id: "geolocation-2",
            question:
              "What is an important consideration when using geolocation?",
            answer:
              "Geolocation involves sensitive user data, so you should request it only when necessary, explain why it is needed, and handle denial gracefully.",
          },
        ],
        code: `
navigator.geolocation.getCurrentPosition((pos) => {
  console.log(pos.coords.latitude);
});
`,
      },
    ],
  },
];
