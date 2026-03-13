import type {Section} from "../types/shared.types";

export const sections: Section[] = [
  {
    title: "CSS Fundamentals",
    items: [
      {
        name: "Selectors",
        summary:
          "Selectors target HTML elements by tag, class, id, attribute, and more.",
        code: `h1 {
  color: red;
}

.card {
  padding: 1rem;
}

#header {
  border-bottom: 1px solid #ccc;
}`,
      },
      {
        name: "Box Model",
        summary:
          "Every element is made of content, padding, border, and margin.",
        code: `.box {
  width: 200px;
  padding: 16px;
  border: 1px solid #ccc;
  margin: 24px;
}`,
      },
      {
        name: "Units",
        summary: "Common units include px, rem, em, %, vw, and vh.",
        code: `.title {
  font-size: 2rem;
}

.container {
  width: 80%;
}`,
      },
    ],
  },
  {
    title: "Layout",
    items: [
      {
        name: "Display",
        summary: "The display property controls an element’s layout behaviour.",
        code: `.inline {
  display: inline;
}

.block {
  display: block;
}

.hidden {
  display: none;
}`,
      },
      {
        name: "Position",
        summary:
          "Positioning controls how elements are placed relative to normal flow or containing blocks.",
        code: `.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}`,
      },
      {
        name: "Overflow",
        summary: "Overflow handles content that exceeds an element’s box.",
        code: `.panel {
  max-height: 200px;
  overflow-y: auto;
}`,
      },
    ],
  },
  {
    title: "Flexbox",
    items: [
      {
        name: "Flex Container",
        summary: "Flexbox lays out children along a main axis and cross axis.",
        interview: true,
        code: `.row {
  display: flex;
  gap: 1rem;
}`,
      },
      {
        name: "Alignment",
        summary:
          "justify-content aligns along the main axis and align-items along the cross axis.",
        code: `.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
      },
      {
        name: "Flex Growth and Shrink",
        summary:
          "flex values control how items grow, shrink, and take available space.",
        code: `.sidebar {
  flex: 0 0 250px;
}

.main {
  flex: 1;
}`,
      },
    ],
  },
  {
    title: "Grid",
    items: [
      {
        name: "Grid Basics",
        summary: "CSS Grid is powerful for two-dimensional layouts.",
        interview: true,
        code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`,
      },
      {
        name: "Grid Placement",
        summary: "Items can span rows and columns explicitly.",
        code: `.card-featured {
  grid-column: span 2;
  grid-row: span 2;
}`,
      },
      {
        name: "Responsive Grid",
        summary:
          "Grid pairs well with minmax and auto-fit for responsive layouts.",
        code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}`,
      },
    ],
  },
  {
    title: "Typography and Color",
    items: [
      {
        name: "Font Styling",
        summary:
          "CSS controls font family, size, weight, line height, and spacing.",
        code: `body {
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}`,
      },
      {
        name: "Text Styling",
        summary: "Text can be aligned, transformed, spaced, and decorated.",
        code: `.heading {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-align: center;
}`,
      },
      {
        name: "Colors",
        summary:
          "Colors can be set with named values, hex, rgb, hsl, and variables.",
        code: `:root {
  --accent: #f59e0b;
}

.button {
  background: var(--accent);
  color: white;
}`,
      },
    ],
  },
  {
    title: "Responsive Design",
    items: [
      {
        name: "Media Queries",
        summary:
          "Media queries adapt styles based on viewport or device characteristics.",
        code: `@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}`,
      },
      {
        name: "Mobile-First",
        summary:
          "Mobile-first styles define the base first, then enhance at larger breakpoints.",
        code: `.grid {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}`,
      },
      {
        name: "Clamp",
        summary:
          "clamp helps create responsive values within a minimum and maximum range.",
        code: `.title {
  font-size: clamp(1.5rem, 3vw, 3rem);
}`,
      },
    ],
  },
  {
    title: "Specificity and Cascade",
    items: [
      {
        name: "Specificity",
        summary:
          "Specificity determines which rule wins when selectors compete.",
        code: `p {
  color: blue;
}

.card p {
  color: red;
}`,
      },
      {
        name: "Cascade Order",
        summary: "When specificity is equal, later rules win.",
        code: `.button {
  color: black;
}

.button {
  color: white;
}`,
      },
      {
        name: "Inheritance",
        summary:
          "Some properties inherit from parent elements, such as font-related values.",
        code: `body {
  color: #333;
  font-family: Arial, sans-serif;
}`,
      },
    ],
  },
  {
    title: "Transitions and Effects",
    items: [
      {
        name: "Transitions",
        summary: "Transitions animate changes in CSS properties over time.",
        code: `.button {
  transition: background-color 0.2s ease;
}

.button:hover {
  background-color: #2563eb;
}`,
      },
      {
        name: "Transforms",
        summary: "Transforms move, rotate, scale, or skew elements visually.",
        code: `.card:hover {
  transform: translateY(-4px);
}`,
      },
      {
        name: "Shadows and Opacity",
        summary: "Shadows and opacity are common for depth and emphasis.",
        code: `.panel {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  opacity: 0.95;
}`,
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
