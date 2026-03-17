import type {Section} from "../types/Section.types";

export const sections: Section[] = [
  {
    title: "CSS Fundamentals",
    items: [
      {
        name: "Selectors",
        summary:
          "Selectors target HTML elements by tag, class, id, attribute, and more.",
        mockQuestions: [
          {
            id: "selectors-1",
            question: "What are CSS selectors used for?",
            answer:
              "CSS selectors are used to target HTML elements so styles can be applied based on tag, class, id, attribute, state, or position in the DOM.",
          },
          {
            id: "selectors-2",
            question:
              "Why are class selectors usually preferred over id selectors for styling?",
            answer:
              "Class selectors are more reusable and easier to compose, while id selectors are very specific and can make styles harder to override and maintain.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "box-model-1",
            question: "What is the CSS box model?",
            answer:
              "The CSS box model describes how an element is sized and spaced using content, padding, border, and margin.",
          },
          {
            id: "box-model-2",
            question: "What is the difference between padding and margin?",
            answer:
              "Padding is space inside the element, between content and border, while margin is space outside the element, separating it from neighbouring elements.",
          },
        ],
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
        mockQuestions: [
          {
            id: "units-1",
            question: "What is the difference between px, rem, and em?",
            answer:
              "px is an absolute unit, rem is relative to the root font size, and em is relative to the font size of the current element.",
          },
          {
            id: "units-2",
            question: "Why is rem often preferred for typography and spacing?",
            answer:
              "rem provides more consistent scaling because it is based on the root font size, which helps with accessibility and predictable sizing.",
          },
        ],
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
        mockQuestions: [
          {
            id: "display-1",
            question: "What does the display property control in CSS?",
            answer:
              "The display property controls how an element participates in layout, such as inline, block, flex, grid, or none.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "position-1",
            question:
              "What is the difference between static, relative, absolute, fixed, and sticky positioning?",
            answer:
              "static is the default flow, relative offsets from the normal position, absolute positions against the nearest positioned ancestor, fixed positions against the viewport, and sticky behaves like relative until a scroll threshold is reached.",
          },
        ],
        code: `.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}`,
      },
      {
        name: "Overflow",
        summary: "Overflow handles content that exceeds an element’s box.",
        mockQuestions: [
          {
            id: "overflow-1",
            question: "What does overflow control in CSS?",
            answer:
              "overflow controls what happens when content is larger than its container, such as being visible, hidden, clipped, or scrollable.",
          },
        ],
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
        mockQuestions: [
          {
            id: "flex-container-1",
            question: "What problem does Flexbox solve?",
            answer:
              "Flexbox solves one-dimensional layout problems by making it easier to distribute, align, and size items along a row or column.",
          },
          {
            id: "flex-container-2",
            question: "What are the main axis and cross axis in Flexbox?",
            answer:
              "The main axis is the direction defined by flex-direction, while the cross axis runs perpendicular to it.",
          },
        ],
        code: `.row {
  display: flex;
  gap: 1rem;
}`,
      },
      {
        name: "Alignment",
        summary:
          "justify-content aligns along the main axis and align-items along the cross axis.",
        mockQuestions: [
          {
            id: "flex-alignment-1",
            question:
              "What is the difference between justify-content and align-items in Flexbox?",
            answer:
              "justify-content aligns items along the main axis, while align-items aligns them along the cross axis.",
          },
        ],
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
        mockQuestions: [
          {
            id: "flex-growth-shrink-1",
            question: "What do flex-grow, flex-shrink, and flex-basis control?",
            answer:
              "flex-grow controls how items expand, flex-shrink controls how they contract, and flex-basis sets the starting size before extra space is distributed.",
          },
        ],
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
        mockQuestions: [
          {
            id: "grid-basics-1",
            question: "What problem does CSS Grid solve?",
            answer:
              "CSS Grid solves two-dimensional layout problems by allowing rows and columns to be defined together, making complex page layouts easier to build.",
          },
          {
            id: "grid-basics-2",
            question: "When would you choose Grid over Flexbox?",
            answer:
              "Grid is usually better for two-dimensional layouts with rows and columns, while Flexbox is often better for one-dimensional alignment in a row or column.",
          },
        ],
        code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`,
      },
      {
        name: "Grid Placement",
        summary: "Items can span rows and columns explicitly.",
        mockQuestions: [
          {
            id: "grid-placement-1",
            question: "How can grid items be placed or sized explicitly?",
            answer:
              "Grid items can be placed using properties like grid-column, grid-row, or shorthand placement values, and can span multiple tracks.",
          },
        ],
        code: `.card-featured {
  grid-column: span 2;
  grid-row: span 2;
}`,
      },
      {
        name: "Responsive Grid",
        summary:
          "Grid pairs well with minmax and auto-fit for responsive layouts.",
        mockQuestions: [
          {
            id: "responsive-grid-1",
            question: "Why are minmax and auto-fit useful in CSS Grid?",
            answer:
              "They allow grids to adapt automatically to available space, making responsive layouts easier without relying on many media queries.",
          },
        ],
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
        mockQuestions: [
          {
            id: "font-styling-1",
            question: "What CSS properties are commonly used for typography?",
            answer:
              "Common typography properties include font-family, font-size, font-weight, line-height, letter-spacing, and text-transform.",
          },
        ],
        code: `body {
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}`,
      },
      {
        name: "Text Styling",
        summary: "Text can be aligned, transformed, spaced, and decorated.",
        mockQuestions: [
          {
            id: "text-styling-1",
            question: "What kinds of text styling can CSS control?",
            answer:
              "CSS can control alignment, spacing, case transformation, decoration, line height, and many other text presentation details.",
          },
        ],
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
        mockQuestions: [
          {
            id: "colors-1",
            question: "What are common ways to define colour in CSS?",
            answer:
              "Common colour formats include named colours, hex, rgb, rgba, hsl, hsla, and CSS custom properties.",
          },
          {
            id: "colors-2",
            question: "Why are CSS variables useful for colour systems?",
            answer:
              "CSS variables make colour values reusable and easier to maintain, especially in themes and design systems.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "media-queries-1",
            question: "What are media queries used for?",
            answer:
              "Media queries are used to apply styles conditionally based on viewport size, device capabilities, or other media features.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "mobile-first-1",
            question: "What does mobile-first design mean in CSS?",
            answer:
              "Mobile-first means starting with base styles for smaller screens, then progressively enhancing the layout for larger viewports using min-width breakpoints.",
          },
          {
            id: "mobile-first-2",
            question: "Why is mobile-first often a good approach?",
            answer:
              "It encourages simpler base layouts, better progressive enhancement, and often results in cleaner responsive styles.",
          },
        ],
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
        mockQuestions: [
          {
            id: "clamp-1",
            question: "What does clamp() do in CSS?",
            answer:
              "clamp() lets you define a responsive value with a minimum, preferred, and maximum size, which is useful for fluid typography and spacing.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "specificity-1",
            question: "What is specificity in CSS?",
            answer:
              "Specificity is the weighting system CSS uses to decide which selector wins when multiple rules target the same element.",
          },
          {
            id: "specificity-2",
            question: "Why can high specificity become a maintenance problem?",
            answer:
              "High specificity makes styles harder to override and can lead to brittle CSS where small changes require increasingly complex selectors.",
          },
        ],
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
        mockQuestions: [
          {
            id: "cascade-order-1",
            question: "How does cascade order affect CSS rules?",
            answer:
              "When selectors have equal specificity and importance, the rule that appears later in the stylesheet wins.",
          },
        ],
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
        mockQuestions: [
          {
            id: "inheritance-css-1",
            question: "What does inheritance mean in CSS?",
            answer:
              "Inheritance means some CSS properties automatically take their value from the parent element unless explicitly overridden.",
          },
        ],
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
        mockQuestions: [
          {
            id: "transitions-1",
            question: "What is a CSS transition?",
            answer:
              "A CSS transition animates a change in one or more CSS properties over a duration, often with easing.",
          },
        ],
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
        mockQuestions: [
          {
            id: "transforms-1",
            question: "What do CSS transforms do?",
            answer:
              "Transforms visually modify an element by translating, scaling, rotating, or skewing it without affecting normal document flow in the same way layout properties do.",
          },
        ],
        code: `.card:hover {
  transform: translateY(-4px);
}`,
      },
      {
        name: "Shadows and Opacity",
        summary: "Shadows and opacity are common for depth and emphasis.",
        mockQuestions: [
          {
            id: "shadows-opacity-1",
            question: "How are shadows and opacity commonly used in UI design?",
            answer:
              "They are commonly used to create depth, layering, emphasis, and softer visual hierarchy in interfaces.",
          },
        ],
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
        mockQuestions: [
          {
            id: "dialog-1",
            question: "What is the benefit of using the dialog element?",
            answer:
              "The dialog element provides native browser support for modal and non-modal dialogs, which can reduce the need for custom implementations.",
          },
        ],
        code: `<dialog open>
  <p>Settings</p>
  <button>Close</button>
</dialog>`,
      },
      {
        name: "template",
        summary:
          "The template element stores inert markup that can be cloned and used later.",
        mockQuestions: [
          {
            id: "template-1",
            question: "What is the template element used for?",
            answer:
              "The template element stores inert HTML that is not rendered immediately and can be cloned and inserted later with JavaScript.",
          },
        ],
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
        mockQuestions: [
          {
            id: "picture-1",
            question: "What problem does the picture element solve?",
            answer:
              "The picture element allows different image sources to be used based on conditions such as format support or viewport size, improving responsiveness and performance.",
          },
        ],
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
        mockQuestions: [
          {
            id: "required-pattern-1",
            question: "What do required and pattern do in HTML forms?",
            answer:
              "required ensures a value must be provided before submission, while pattern checks the value against a regular expression-like format rule.",
          },
        ],
        code: `<input type="email" required />
<input type="text" pattern="[A-Za-z]+" />`,
      },
      {
        name: "min / max / step",
        summary: "Numeric inputs can define valid ranges and increments.",
        mockQuestions: [
          {
            id: "min-max-step-1",
            question: "What are min, max, and step used for in form inputs?",
            answer:
              "They define valid numeric ranges and increments, helping browsers validate input and provide better UI controls.",
          },
        ],
        code: `<input type="number" min="1" max="10" step="1" />`,
      },
      {
        name: "Autocomplete",
        summary:
          "Autocomplete hints help browsers fill in user details more effectively.",
        mockQuestions: [
          {
            id: "autocomplete-1",
            question: "Why is autocomplete useful in forms?",
            answer:
              "Autocomplete improves usability and speed by helping browsers understand what kind of information a field expects so they can offer relevant saved values.",
          },
        ],
        code: `<input type="email" autocomplete="email" />
<input type="text" autocomplete="given-name" />`,
      },
      {
        name: "Constraint Validation",
        summary:
          "The browser can validate forms natively and expose state through the DOM and CSS.",
        mockQuestions: [
          {
            id: "constraint-validation-1",
            question: "What is constraint validation in the browser?",
            answer:
              "Constraint validation is the built-in browser system for checking whether form fields satisfy rules such as required, pattern, min, max, and type constraints.",
          },
        ],
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
        mockQuestions: [
          {
            id: "iframe-1",
            question: "What is an iframe used for?",
            answer:
              "An iframe is used to embed another HTML document or external page inside the current page.",
          },
        ],
        code: `<iframe src="https://example.com" title="Example"></iframe>`,
      },
      {
        name: "script and defer",
        summary:
          "The defer attribute delays script execution until after HTML parsing finishes.",
        interview: true,
        mockQuestions: [
          {
            id: "script-defer-1",
            question: "What does the defer attribute do on a script tag?",
            answer:
              "defer downloads the script in parallel with HTML parsing but delays execution until parsing is complete.",
          },
          {
            id: "script-defer-2",
            question:
              "Why is defer often preferred for external scripts in the document head?",
            answer:
              "It helps avoid blocking HTML parsing, improving page load behaviour while still preserving script execution order for deferred scripts.",
          },
        ],
        code: `<script src="app.js" defer></script>`,
      },
      {
        name: "link Rel Types",
        summary:
          "link elements can load stylesheets, icons, and metadata relationships.",
        mockQuestions: [
          {
            id: "link-rel-types-1",
            question: "What are common uses of the link element?",
            answer:
              "The link element is commonly used for stylesheets, favicons, preconnect or preload hints, and other metadata relationships between documents.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "accessible-names-1",
            question: "What is an accessible name?",
            answer:
              "An accessible name is the text alternative assistive technologies use to identify an interactive element, coming from visible text, labels, alt text, or ARIA attributes.",
          },
          {
            id: "accessible-names-2",
            question: "Why do accessible names matter?",
            answer:
              "They help screen reader users understand what controls do and allow interactive elements to be announced clearly and meaningfully.",
          },
        ],
        code: `<button aria-label="Close menu">×</button>`,
      },
      {
        name: "Form Grouping",
        summary:
          "Related controls should be grouped semantically to aid comprehension.",
        mockQuestions: [
          {
            id: "form-grouping-1",
            question:
              "Why should related form controls be grouped semantically?",
            answer:
              "Semantic grouping improves clarity for all users and helps assistive technologies communicate the relationship between related controls.",
          },
        ],
        code: `<fieldset>
  <legend>Choose a contact method</legend>
  <label><input type="radio" name="contact" /> Email</label>
</fieldset>`,
      },
      {
        name: "Progressive Enhancement",
        summary:
          "Start with semantic HTML that works by default, then enhance it with CSS and JavaScript.",
        interview: true,
        mockQuestions: [
          {
            id: "progressive-enhancement-1",
            question: "What is progressive enhancement?",
            answer:
              "Progressive enhancement means starting with a solid baseline of semantic HTML that works by default, then layering on CSS and JavaScript for richer experiences where supported.",
          },
          {
            id: "progressive-enhancement-2",
            question:
              "Why is progressive enhancement still useful in modern frontend work?",
            answer:
              "It improves resilience, accessibility, and compatibility by ensuring the core experience works even when styling, scripting, or advanced features are unavailable.",
          },
        ],
        code: `<form action="/search" method="get">
  <input type="search" name="q" />
  <button type="submit">Search</button>
</form>`,
      },
    ],
  },
];
