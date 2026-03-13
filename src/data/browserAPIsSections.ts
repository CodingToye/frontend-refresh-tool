import type {Section} from "../types/shared.types";

export const sections: Section[] = [
  {
    title: "DOM APIs",
    items: [
      {
        name: "querySelector",
        summary: "Select DOM elements using CSS selectors.",
        code: `
const button = document.querySelector("button");
button.textContent = "Clicked";
`,
      },
      {
        name: "Event Listeners",
        summary: "Attach handlers to DOM events like clicks or keyboard input.",
        code: `
button.addEventListener("click", () => {
  console.log("clicked");
});
`,
      },
      {
        name: "classList",
        summary: "Modify element classes dynamically.",
        code: `
element.classList.add("active");
element.classList.remove("hidden");
`,
      },
      {
        name: "dataset",
        summary: "Access custom data attributes from HTML.",
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
        code: `
localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");
`,
      },
      {
        name: "sessionStorage",
        summary:
          "Similar to localStorage but cleared when the browser tab closes.",
        code: `
sessionStorage.setItem("token", "123");
`,
      },
      {
        name: "JSON Storage Pattern",
        summary: "Objects should be serialised before storing.",
        code: `
localStorage.setItem("user", JSON.stringify(user));

const saved = JSON.parse(localStorage.getItem("user"));
`,
      },
      {
        name: "Storage Events",
        summary: "Listen for storage changes across tabs.",
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
        code: `
const response = await fetch("/api/users");
const data = await response.json();
`,
      },
      {
        name: "POST Requests",
        summary: "Send JSON data to an API.",
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
        code: `
if (!response.ok) {
  throw new Error("Request failed");
}
`,
      },
      {
        name: "AbortController",
        summary: "AbortController cancels in-flight requests.",
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
        code: `
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");
});
`,
      },
      {
        name: "Resize Events",
        summary: "Detect window resizing.",
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
        code: `
await navigator.clipboard.writeText("Copied text");
`,
      },
      {
        name: "Reading Clipboard",
        summary: "Read clipboard content when permitted.",
        code: `
const text = await navigator.clipboard.readText();
`,
      },
      {
        name: "Permissions API",
        summary: "Check whether a permission has been granted.",
        code: `
const status = await navigator.permissions.query({
  name: "clipboard-read"
});
`,
      },
      {
        name: "Geolocation",
        summary: "Retrieve the user's geographic location.",
        code: `
navigator.geolocation.getCurrentPosition((pos) => {
  console.log(pos.coords.latitude);
});
`,
      },
    ],
  },
];
