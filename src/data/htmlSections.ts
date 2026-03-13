import type {Section} from "../types/shared.types";

export const sections: Section[] = [
  {
    title: "HTML Fundamentals",
    items: [
      {
        name: "Basic Document Structure",
        summary:
          "A standard HTML document includes doctype, html, head, and body elements.",
        code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello world</h1>
  </body>
</html>`,
      },
      {
        name: "Semantic HTML",
        summary:
          "Semantic elements describe meaning and improve accessibility and structure.",
        code: `<header>Site Header</header>
<main>
  <article>Post content</article>
</main>
<footer>Site Footer</footer>`,
      },
      {
        name: "Headings and Paragraphs",
        summary:
          "Use headings in order and paragraphs for blocks of text content.",
        code: `<h1>Main Heading</h1>
<h2>Section Heading</h2>
<p>This is a paragraph of text.</p>`,
      },
    ],
  },
  {
    title: "Links and Media",
    items: [
      {
        name: "Links",
        summary:
          "Anchor tags link to pages, files, email addresses, and in-page locations.",
        code: `<a href="/about">About</a>
<a href="mailto:test@example.com">Email us</a>`,
      },
      {
        name: "Images",
        summary:
          "Images should include meaningful alt text when they convey content.",
        code: `<img src="/images/profile.jpg" alt="Profile photo" />`,
      },
      {
        name: "Audio and Video",
        summary: "HTML provides native media elements with playback controls.",
        code: `<video controls width="400">
  <source src="movie.mp4" type="video/mp4" />
</video>`,
      },
    ],
  },
  {
    title: "Lists and Tables",
    items: [
      {
        name: "Unordered and Ordered Lists",
        summary:
          "Lists represent grouped related items in sequence or without sequence.",
        code: `<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>

<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>`,
      },
      {
        name: "Description Lists",
        summary: "Description lists are useful for terms and definitions.",
        code: `<dl>
  <dt>HTML</dt>
  <dd>Markup language for web pages</dd>
</dl>`,
      },
      {
        name: "Tables",
        summary: "Tables should be used for tabular data, not layout.",
        code: `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nick</td>
      <td>Developer</td>
    </tr>
  </tbody>
</table>`,
      },
    ],
  },
  {
    title: "Forms",
    items: [
      {
        name: "Form Basics",
        summary:
          "Forms collect user input and group related controls together.",
        code: `<form action="/submit" method="post">
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>`,
      },
      {
        name: "Labels and Inputs",
        summary:
          "Inputs should usually be associated with labels for usability and accessibility.",
        code: `<label for="email">Email</label>
<input id="email" type="email" name="email" />`,
      },
      {
        name: "Common Input Types",
        summary:
          "Different input types give built-in browser behaviour and validation hints.",
        code: `<input type="text" />
<input type="email" />
<input type="password" />
<input type="checkbox" />`,
      },
    ],
  },
  {
    title: "Accessibility and Semantics",
    items: [
      {
        name: "Alt Text",
        summary:
          "Alternative text helps screen reader users understand image content.",
        code: `<img src="chart.png" alt="Sales increased 20 percent this quarter" />`,
      },
      {
        name: "Buttons vs Links",
        summary: "Buttons trigger actions, while links navigate to locations.",
        code: `<button type="button">Open modal</button>
<a href="/settings">Go to settings</a>`,
      },
      {
        name: "ARIA Basics",
        summary:
          "ARIA can improve accessibility when native HTML alone is not enough.",
        code: `<button aria-expanded="false" aria-controls="menu">
  Menu
</button>`,
      },
    ],
  },
  {
    title: "Document Metadata",
    items: [
      {
        name: "Meta Tags",
        summary:
          "Meta tags define metadata such as encoding, viewport, and description.",
        code: `<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="My page description" />`,
      },
      {
        name: "Page Title",
        summary: "The title element sets the browser tab title and helps SEO.",
        code: `<title>Frontend Revision Tool</title>`,
      },
      {
        name: "Language Attribute",
        summary:
          "The lang attribute helps browsers and assistive technologies interpret content correctly.",
        code: `<html lang="en">`,
      },
    ],
  },
  {
    title: "HTML Structure Patterns",
    items: [
      {
        name: "Forms with Fieldsets",
        summary: "Fieldsets and legends help group related form controls.",
        code: `<fieldset>
  <legend>Contact Preferences</legend>
  <label><input type="checkbox" /> Email</label>
  <label><input type="checkbox" /> SMS</label>
</fieldset>`,
      },
      {
        name: "Navigation Landmarks",
        summary:
          "Landmark elements help users and assistive tools understand page structure.",
        code: `<header>Header</header>
<nav>Main navigation</nav>
<main>Main content</main>
<footer>Footer</footer>`,
      },
      {
        name: "Details and Summary",
        summary:
          "These elements provide native disclosure behaviour for expandable content.",
        code: `<details>
  <summary>More information</summary>
  <p>Hidden content goes here.</p>
</details>`,
      },
    ],
  },
  {
    title: "Modern Elements",
    items: [
      {
        name: "dialog",
        summary:
          "The dialog element provides native modal and non-modal dialog behaviour.",
        code: `<dialog open>
  <p>Settings</p>
  <button>Close</button>
</dialog>`,
      },
      {
        name: "template",
        summary:
          "The template element stores inert markup that can be cloned and used later.",
        code: `<template id="card-template">
  <article class="card">
    <h2>Title</h2>
  </article>
</template>`,
      },
      {
        name: "picture",
        summary:
          "The picture element lets you provide multiple image sources for different conditions.",
        code: `<picture>
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Example image" />
</picture>`,
      },
    ],
  },
  {
    title: "Forms and Validation",
    items: [
      {
        name: "Required and Pattern",
        summary:
          "Built-in validation attributes can enforce required values and format patterns.",
        code: `<input type="email" required />
<input type="text" pattern="[A-Za-z]+" />`,
      },
      {
        name: "min / max / step",
        summary: "Numeric inputs can define valid ranges and increments.",
        code: `<input type="number" min="1" max="10" step="1" />`,
      },
      {
        name: "Autocomplete",
        summary:
          "Autocomplete hints help browsers fill in user details more effectively.",
        code: `<input type="email" autocomplete="email" />
<input type="text" autocomplete="given-name" />`,
      },
      {
        name: "Constraint Validation",
        summary:
          "The browser can validate forms natively and expose state through the DOM and CSS.",
        code: `<form>
  <input type="email" required />
  <button type="submit">Submit</button>
</form>`,
      },
    ],
  },
  {
    title: "Embedded and External Content",
    items: [
      {
        name: "iframe",
        summary: "iframes embed another HTML page inside the current one.",
        code: `<iframe src="https://example.com" title="Example"></iframe>`,
      },
      {
        name: "script and defer",
        summary:
          "The defer attribute delays script execution until after HTML parsing finishes.",
        code: `<script src="app.js" defer></script>`,
      },
      {
        name: "link Rel Types",
        summary:
          "link elements can load stylesheets, icons, and metadata relationships.",
        code: `<link rel="stylesheet" href="styles.css" />
<link rel="icon" href="/favicon.ico" />`,
      },
    ],
  },
  {
    title: "Accessibility Patterns",
    items: [
      {
        name: "Accessible Names",
        summary:
          "Interactive elements need clear accessible names through text, labels, or ARIA.",
        code: `<button aria-label="Close menu">×</button>`,
      },
      {
        name: "Form Grouping",
        summary:
          "Related controls should be grouped semantically to aid comprehension.",
        code: `<fieldset>
  <legend>Choose a contact method</legend>
  <label><input type="radio" name="contact" /> Email</label>
</fieldset>`,
      },
      {
        name: "Progressive Enhancement",
        summary:
          "Start with semantic HTML that works by default, then enhance it with CSS and JavaScript.",
        code: `<form action="/search" method="get">
  <input type="search" name="q" />
  <button type="submit">Search</button>
</form>`,
      },
    ],
  },
];
