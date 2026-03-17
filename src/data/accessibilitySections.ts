import type {Section} from "../types/Section.types";

export const sections: Section[] = [
  {
    title: "Accessibility Fundamentals",
    items: [
      {
        name: "What Accessibility Means",
        summary:
          "Accessibility ensures websites and apps are usable by people with disabilities including visual, motor, cognitive, and hearing impairments.",
        code: `<!-- Accessibility starts with semantic HTML -->
<button>Save</button>`,
      },
      {
        name: "WCAG Guidelines",
        summary:
          "The Web Content Accessibility Guidelines are organised around four principles: perceivable, operable, understandable, and robust.",
        code: `Perceivable
Operable
Understandable
Robust`,
      },
      {
        name: "Keyboard Accessibility",
        summary:
          "All interactive functionality should be usable via keyboard without requiring a mouse.",
        code: `<button>Submit</button>

<!-- Focusable via keyboard -->`,
      },
      {
        name: "Focus Management",
        summary:
          "Focus should move logically through the interface and remain visible so keyboard users know where they are.",
        code: `button:focus {
  outline: 2px solid blue;
}`,
      },
    ],
  },
  {
    title: "Semantic HTML",
    items: [
      {
        name: "Use Native Elements",
        summary:
          "Native HTML elements already include accessibility features and should be preferred over generic divs.",
        interview: true,
        code: `<button>Save</button>
<a href="/settings">Settings</a>`,
      },
      {
        name: "Landmark Elements",
        summary:
          "Landmark elements help assistive technologies understand page structure.",
        interview: true,
        code: `<header>Header</header>
<nav>Navigation</nav>
<main>Main content</main>
<footer>Footer</footer>`,
      },
      {
        name: "Heading Hierarchy",
        summary:
          "Headings should follow a logical hierarchy so screen readers can navigate the page structure.",
        code: `<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>`,
      },
      {
        name: "Lists for Grouped Content",
        summary: "Lists help screen readers communicate grouped related items.",
        code: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`,
      },
    ],
  },
  {
    title: "Forms and Inputs",
    items: [
      {
        name: "Labeling Inputs",
        summary:
          "Inputs should be associated with labels so assistive technologies can describe them.",
        interview: true,
        code: `<label for="email">Email</label>
<input id="email" type="email" />`,
      },
      {
        name: "Accessible Error Messages",
        summary:
          "Error messages should clearly describe the problem and be programmatically associated with inputs.",
        code: `<input aria-describedby="email-error" />
<p id="email-error">Email is required</p>`,
      },
      {
        name: "Fieldsets and Legends",
        summary:
          "Fieldsets group related form controls and improve clarity for screen readers.",
        code: `<fieldset>
  <legend>Contact Preference</legend>
  <label><input type="radio" /> Email</label>
</fieldset>`,
      },
      {
        name: "Required Fields",
        summary:
          "Required inputs should be indicated visually and programmatically.",
        code: `<input required aria-required="true" />`,
      },
    ],
  },
  {
    title: "ARIA",
    items: [
      {
        name: "What ARIA Is",
        summary:
          "ARIA attributes provide additional accessibility information when native HTML alone is not enough.",
        code: `<button aria-expanded="false">Menu</button>`,
      },
      {
        name: "aria-label",
        summary:
          "aria-label provides an accessible name when visible text is not sufficient.",
        code: `<button aria-label="Close dialog">×</button>`,
      },
      {
        name: "aria-live",
        summary:
          "aria-live regions announce dynamic content updates to screen readers.",
        code: `<div aria-live="polite">
  Notification updated
</div>`,
      },
      {
        name: "aria-expanded",
        summary:
          "aria-expanded indicates whether expandable content is open or closed.",
        code: `<button aria-expanded="true">Toggle menu</button>`,
      },
    ],
  },
  {
    title: "Keyboard Interaction",
    items: [
      {
        name: "Tab Navigation",
        summary:
          "Interactive elements should be reachable via the Tab key in a logical order.",
        code: `<button>Next</button>
<input />
<a href="/home">Home</a>`,
      },
      {
        name: "Focus Indicators",
        summary:
          "Focus styles should remain visible so keyboard users can track navigation.",
        code: `:focus {
  outline: 2px solid #f59e0b;
}`,
      },
      {
        name: "Avoid tabindex Abuse",
        summary:
          "tabindex should rarely be used except for custom interactive components.",
        code: `<div tabindex="0">Focusable element</div>`,
      },
      {
        name: "Keyboard Events",
        summary:
          "Custom components should respond to Enter and Space the same way as native controls.",
        code: `element.addEventListener("keydown", (e) => {
  if (e.key === "Enter") activate();
});`,
      },
    ],
  },
  {
    title: "Images and Media",
    items: [
      {
        name: "Alt Text",
        summary:
          "Images should include meaningful alt text when they convey information.",
        code: `<img src="chart.png" alt="Sales increased 20 percent" />`,
      },
      {
        name: "Decorative Images",
        summary:
          "Decorative images should use empty alt text so screen readers ignore them.",
        code: `<img src="border.png" alt="" />`,
      },
      {
        name: "Captions for Media",
        summary:
          "Videos should include captions so content is accessible to deaf or hard-of-hearing users.",
        code: `<video controls>
  <track kind="captions" src="captions.vtt" />
</video>`,
      },
      {
        name: "Audio Transcripts",
        summary:
          "Audio content should provide transcripts so users can read the content.",
        code: `<p>Transcript: Interview with developer...</p>`,
      },
    ],
  },
  {
    title: "Colour and Contrast",
    items: [
      {
        name: "Contrast Ratios",
        summary:
          "Text should meet WCAG contrast requirements to remain readable for users with low vision.",
        code: `/* Example high contrast */
color: #111;
background: #fff;`,
      },
      {
        name: "Avoid Colour-only Meaning",
        summary:
          "Colour should not be the only way information is communicated.",
        code: `<span class="error">Error</span>
<!-- not just red colour -->`,
      },
      {
        name: "Dark Mode Considerations",
        summary:
          "Dark mode should maintain readable contrast and accessible focus styles.",
        code: `@media (prefers-color-scheme: dark) {
  body { background: #111; }
}`,
      },
      {
        name: "Focus Contrast",
        summary:
          "Focus indicators should have strong contrast against backgrounds.",
        code: `:focus {
  outline: 3px solid #f59e0b;
}`,
      },
    ],
  },
  {
    title: "Testing Accessibility",
    items: [
      {
        name: "Keyboard Testing",
        summary:
          "Manually navigate using Tab, Enter, and Escape to ensure all controls work without a mouse.",
        code: `Tab
Shift + Tab
Enter
Escape`,
      },
      {
        name: "Screen Readers",
        summary:
          "Screen readers such as NVDA, VoiceOver, and JAWS help verify real accessibility behaviour.",
        code: `VoiceOver (Mac)
NVDA (Windows)
JAWS (Windows)`,
      },
      {
        name: "Automated Tools",
        summary:
          "Automated tools can catch many accessibility issues during development.",
        code: `npm install axe-core`,
      },
      {
        name: "Testing Library A11y",
        summary:
          "React Testing Library encourages accessible queries such as getByRole.",
        code: `screen.getByRole("button", { name: "Save" });`,
      },
    ],
  },
  {
    title: "Common Accessibility Pitfalls",
    items: [
      {
        name: "Clickable divs",
        summary:
          "Div elements should not be used as buttons because they lack built-in accessibility behaviour.",
        code: `<!-- Bad -->
<div onclick="save()">Save</div>

<!-- Good -->
<button>Save</button>`,
      },
      {
        name: "Missing Labels",
        summary:
          "Inputs without labels make forms difficult for screen reader users.",
        code: `<label>Email</label>
<input type="email" />`,
      },
      {
        name: "Hidden Content",
        summary:
          "Hidden content should use appropriate attributes so assistive tech understands visibility.",
        code: `<div hidden>Hidden text</div>`,
      },
      {
        name: "Modal Focus Trap",
        summary:
          "When a modal opens, focus should move inside it and remain trapped until closed.",
        code: `modal.focus();`,
      },
    ],
  },
];
