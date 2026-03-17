import type {Section} from "../types/Section.types";

export const sections: Section[] = [
  {
    title: "Accessibility Fundamentals",
    items: [
      {
        name: "What Accessibility Means",
        summary:
          "Accessibility ensures websites and apps are usable by people with disabilities including visual, motor, cognitive, and hearing impairments.",
        interview: true,
        mockQuestions: [
          {
            id: "what-accessibility-means-1",
            question: "What does accessibility mean in web development?",
            answer:
              "Accessibility means building websites and apps so they are usable by as many people as possible, including people with visual, motor, cognitive, and hearing impairments.",
          },
          {
            id: "what-accessibility-means-2",
            question: "Why is accessibility important beyond compliance?",
            answer:
              "Accessibility improves usability, inclusivity, and resilience for all users, not just people with permanent disabilities.",
          },
        ],
        code: `<!-- Accessibility starts with semantic HTML -->
<button>Save</button>`,
      },
      {
        name: "WCAG Guidelines",
        summary:
          "The Web Content Accessibility Guidelines are organised around four principles: perceivable, operable, understandable, and robust.",
        interview: true,
        mockQuestions: [
          {
            id: "wcag-guidelines-1",
            question: "What are the four WCAG principles?",
            answer:
              "The four WCAG principles are perceivable, operable, understandable, and robust.",
          },
          {
            id: "wcag-guidelines-2",
            question: "What is the purpose of WCAG?",
            answer:
              "WCAG provides recognised guidelines for making digital content more accessible and usable for people with disabilities.",
          },
        ],
        code: `Perceivable
Operable
Understandable
Robust`,
      },
      {
        name: "Keyboard Accessibility",
        summary:
          "All interactive functionality should be usable via keyboard without requiring a mouse.",
        interview: true,
        mockQuestions: [
          {
            id: "keyboard-accessibility-1",
            question: "Why is keyboard accessibility important?",
            answer:
              "Keyboard accessibility is important because many users cannot use a mouse and rely on the keyboard or keyboard-like assistive technologies to navigate and interact.",
          },
        ],
        code: `<button>Submit</button>

<!-- Focusable via keyboard -->`,
      },
      {
        name: "Focus Management",
        summary:
          "Focus should move logically through the interface and remain visible so keyboard users know where they are.",
        interview: true,
        mockQuestions: [
          {
            id: "focus-management-1",
            question: "What is focus management in accessibility?",
            answer:
              "Focus management means controlling where keyboard focus moves so users can navigate logically and always know where they are in the interface.",
          },
          {
            id: "focus-management-2",
            question: "When is focus management especially important?",
            answer:
              "It is especially important in dynamic UI such as modals, menus, dialogs, and route changes where focus might otherwise become lost.",
          },
        ],
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
        mockQuestions: [
          {
            id: "use-native-elements-1",
            question:
              "Why should native HTML elements be preferred over divs for interactive controls?",
            answer:
              "Native elements such as button and input include built-in semantics, keyboard behaviour, and accessibility support that generic divs do not provide by default.",
          },
        ],
        code: `<button>Save</button>
<a href="/settings">Settings</a>`,
      },
      {
        name: "Landmark Elements",
        summary:
          "Landmark elements help assistive technologies understand page structure.",
        interview: true,
        mockQuestions: [
          {
            id: "landmark-elements-1",
            question: "What are landmark elements in HTML?",
            answer:
              "Landmark elements are semantic regions such as header, nav, main, aside, and footer that help assistive technologies understand page structure.",
          },
        ],
        code: `<header>Header</header>
<nav>Navigation</nav>
<main>Main content</main>
<footer>Footer</footer>`,
      },
      {
        name: "Heading Hierarchy",
        summary:
          "Headings should follow a logical hierarchy so screen readers can navigate the page structure.",
        interview: true,
        mockQuestions: [
          {
            id: "heading-hierarchy-1",
            question: "Why does heading hierarchy matter for accessibility?",
            answer:
              "A clear heading hierarchy helps screen reader users understand and navigate the structure of a page quickly.",
          },
        ],
        code: `<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>`,
      },
      {
        name: "Lists for Grouped Content",
        summary: "Lists help screen readers communicate grouped related items.",
        mockQuestions: [
          {
            id: "lists-for-grouped-content-1",
            question: "Why are lists useful for accessibility?",
            answer:
              "Lists communicate grouped related items semantically, which helps screen readers announce structure more clearly.",
          },
        ],
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
        mockQuestions: [
          {
            id: "labeling-inputs-1",
            question: "Why should inputs be associated with labels?",
            answer:
              "Labels give form controls an accessible name and make them easier to understand and activate, especially for screen reader and keyboard users.",
          },
        ],
        code: `<label for="email">Email</label>
<input id="email" type="email" />`,
      },
      {
        name: "Accessible Error Messages",
        summary:
          "Error messages should clearly describe the problem and be programmatically associated with inputs.",
        interview: true,
        mockQuestions: [
          {
            id: "accessible-error-messages-1",
            question: "What makes an error message accessible?",
            answer:
              "An accessible error message clearly explains the problem and is programmatically associated with the relevant input, often using aria-describedby or similar techniques.",
          },
        ],
        code: `<input aria-describedby="email-error" />
<p id="email-error">Email is required</p>`,
      },
      {
        name: "Fieldsets and Legends",
        summary:
          "Fieldsets group related form controls and improve clarity for screen readers.",
        mockQuestions: [
          {
            id: "fieldsets-legends-1",
            question: "Why are fieldset and legend useful in forms?",
            answer:
              "They group related controls semantically and provide context for screen reader users, especially for radio buttons and checkboxes.",
          },
        ],
        code: `<fieldset>
  <legend>Contact Preference</legend>
  <label><input type="radio" /> Email</label>
</fieldset>`,
      },
      {
        name: "Required Fields",
        summary:
          "Required inputs should be indicated visually and programmatically.",
        mockQuestions: [
          {
            id: "required-fields-1",
            question: "How should required fields be communicated accessibly?",
            answer:
              "Required fields should be indicated visually and also exposed programmatically so assistive technologies can understand that input is mandatory.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "what-aria-is-1",
            question: "What is ARIA?",
            answer:
              "ARIA stands for Accessible Rich Internet Applications and provides attributes that add accessibility information when native HTML semantics are not enough.",
          },
          {
            id: "what-aria-is-2",
            question: "What is a common rule when using ARIA?",
            answer:
              "A common rule is to prefer native HTML semantics first and only use ARIA when necessary.",
          },
        ],
        code: `<button aria-expanded="false">Menu</button>`,
      },
      {
        name: "aria-label",
        summary:
          "aria-label provides an accessible name when visible text is not sufficient.",
        mockQuestions: [
          {
            id: "aria-label-1",
            question: "When should aria-label be used?",
            answer:
              "aria-label should be used when an element needs an accessible name but does not already have suitable visible text or an associated label.",
          },
        ],
        code: `<button aria-label="Close dialog">×</button>`,
      },
      {
        name: "aria-live",
        summary:
          "aria-live regions announce dynamic content updates to screen readers.",
        mockQuestions: [
          {
            id: "aria-live-1",
            question: "What is aria-live used for?",
            answer:
              "aria-live is used to announce dynamic content changes to screen reader users without requiring focus to move.",
          },
        ],
        code: `<div aria-live="polite">
  Notification updated
</div>`,
      },
      {
        name: "aria-expanded",
        summary:
          "aria-expanded indicates whether expandable content is open or closed.",
        mockQuestions: [
          {
            id: "aria-expanded-1",
            question: "What does aria-expanded communicate?",
            answer:
              "aria-expanded communicates whether a control that toggles content is currently expanded or collapsed.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "tab-navigation-1",
            question: "Why does tab order matter?",
            answer:
              "Tab order matters because keyboard users rely on a logical sequence to navigate interactive elements efficiently.",
          },
        ],
        code: `<button>Next</button>
<input />
<a href="/home">Home</a>`,
      },
      {
        name: "Focus Indicators",
        summary:
          "Focus styles should remain visible so keyboard users can track navigation.",
        interview: true,
        mockQuestions: [
          {
            id: "focus-indicators-1",
            question: "Why should focus indicators remain visible?",
            answer:
              "Visible focus indicators help keyboard users know which element is currently active and prevent them from getting lost in the interface.",
          },
        ],
        code: `:focus {
  outline: 2px solid #f59e0b;
}`,
      },
      {
        name: "Avoid tabindex Abuse",
        summary:
          "tabindex should rarely be used except for custom interactive components.",
        mockQuestions: [
          {
            id: "avoid-tabindex-abuse-1",
            question: "Why should tabindex be used carefully?",
            answer:
              "Improper tabindex use can break natural navigation order and create confusing keyboard experiences.",
          },
        ],
        code: `<div tabindex="0">Focusable element</div>`,
      },
      {
        name: "Keyboard Events",
        summary:
          "Custom components should respond to Enter and Space the same way as native controls.",
        mockQuestions: [
          {
            id: "keyboard-events-1",
            question: "Why should custom components support Enter and Space?",
            answer:
              "Keyboard users expect custom controls to behave like native controls, including activation with Enter and Space where appropriate.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "a11y-alt-text-1",
            question: "When should an image have meaningful alt text?",
            answer:
              "An image should have meaningful alt text when it conveys information that users need in order to understand the content or complete a task.",
          },
        ],
        code: `<img src="chart.png" alt="Sales increased 20 percent" />`,
      },
      {
        name: "Decorative Images",
        summary:
          "Decorative images should use empty alt text so screen readers ignore them.",
        mockQuestions: [
          {
            id: "decorative-images-1",
            question: "How should decorative images be handled accessibly?",
            answer:
              "Decorative images should use empty alt text so screen readers ignore them and users are not burdened with unnecessary descriptions.",
          },
        ],
        code: `<img src="border.png" alt="" />`,
      },
      {
        name: "Captions for Media",
        summary:
          "Videos should include captions so content is accessible to deaf or hard-of-hearing users.",
        interview: true,
        mockQuestions: [
          {
            id: "captions-for-media-1",
            question: "Why are captions important for video?",
            answer:
              "Captions make video content accessible to deaf or hard-of-hearing users and can also help users in noisy or silent environments.",
          },
        ],
        code: `<video controls>
  <track kind="captions" src="captions.vtt" />
</video>`,
      },
      {
        name: "Audio Transcripts",
        summary:
          "Audio content should provide transcripts so users can read the content.",
        mockQuestions: [
          {
            id: "audio-transcripts-1",
            question: "Why should audio content have transcripts?",
            answer:
              "Transcripts allow users to access audio information in text form, which supports deaf or hard-of-hearing users and improves usability more broadly.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "contrast-ratios-1",
            question: "Why do contrast ratios matter in accessibility?",
            answer:
              "Contrast ratios matter because low contrast makes text and controls hard to read for users with low vision or in poor viewing conditions.",
          },
        ],
        code: `/* Example high contrast */
color: #111;
background: #fff;`,
      },
      {
        name: "Avoid Colour-only Meaning",
        summary:
          "Colour should not be the only way information is communicated.",
        interview: true,
        mockQuestions: [
          {
            id: "avoid-colour-only-meaning-1",
            question:
              "Why should colour not be the only way to communicate information?",
            answer:
              "Some users cannot reliably perceive colour differences, so information should also be conveyed with text, icons, patterns, or other cues.",
          },
        ],
        code: `<span class="error">Error</span>
<!-- not just red colour -->`,
      },
      {
        name: "Dark Mode Considerations",
        summary:
          "Dark mode should maintain readable contrast and accessible focus styles.",
        mockQuestions: [
          {
            id: "dark-mode-considerations-1",
            question: "What accessibility concerns apply to dark mode?",
            answer:
              "Dark mode still needs sufficient contrast, readable typography, and visible focus indicators so content remains usable.",
          },
        ],
        code: `@media (prefers-color-scheme: dark) {
  body { background: #111; }
}`,
      },
      {
        name: "Focus Contrast",
        summary:
          "Focus indicators should have strong contrast against backgrounds.",
        mockQuestions: [
          {
            id: "focus-contrast-1",
            question: "Why should focus indicators have strong contrast?",
            answer:
              "Strong contrast makes focus indicators easier to spot, helping keyboard users keep track of navigation.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "keyboard-testing-1",
            question: "Why is manual keyboard testing important?",
            answer:
              "Manual keyboard testing helps confirm that interactive elements are reachable, usable, and logically ordered without relying on a mouse.",
          },
        ],
        code: `Tab
Shift + Tab
Enter
Escape`,
      },
      {
        name: "Screen Readers",
        summary:
          "Screen readers such as NVDA, VoiceOver, and JAWS help verify real accessibility behaviour.",
        interview: true,
        mockQuestions: [
          {
            id: "screen-readers-1",
            question: "Why should developers test with screen readers?",
            answer:
              "Testing with screen readers helps verify the real user experience of semantic structure, labels, announcements, and navigation.",
          },
        ],
        code: `VoiceOver (Mac)
NVDA (Windows)
JAWS (Windows)`,
      },
      {
        name: "Automated Tools",
        summary:
          "Automated tools can catch many accessibility issues during development.",
        mockQuestions: [
          {
            id: "automated-tools-1",
            question: "What are automated accessibility tools good for?",
            answer:
              "Automated tools are good for catching many common issues quickly, such as missing labels, low contrast, and invalid ARIA usage, though they cannot catch everything.",
          },
        ],
        code: `npm install axe-core`,
      },
      {
        name: "Testing Library A11y",
        summary:
          "React Testing Library encourages accessible queries such as getByRole.",
        mockQuestions: [
          {
            id: "testing-library-a11y-1",
            question: "Why are role-based queries useful in testing?",
            answer:
              "Role-based queries encourage tests that reflect how users and assistive technologies actually interact with the interface.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "clickable-divs-1",
            question: "Why are clickable divs an accessibility problem?",
            answer:
              "Clickable divs lack built-in keyboard interaction, semantics, and accessibility behaviour that native buttons provide automatically.",
          },
        ],
        code: `<!-- Bad -->
<div onclick="save()">Save</div>

<!-- Good -->
<button>Save</button>`,
      },
      {
        name: "Missing Labels",
        summary:
          "Inputs without labels make forms difficult for screen reader users.",
        mockQuestions: [
          {
            id: "missing-labels-1",
            question: "What problem do missing form labels cause?",
            answer:
              "Without labels, screen reader users may not know what an input is for, making forms confusing or unusable.",
          },
        ],
        code: `<label>Email</label>
<input type="email" />`,
      },
      {
        name: "Hidden Content",
        summary:
          "Hidden content should use appropriate attributes so assistive tech understands visibility.",
        mockQuestions: [
          {
            id: "hidden-content-1",
            question:
              "Why should hidden content be managed carefully for accessibility?",
            answer:
              "If hidden content is not handled properly, assistive technologies may still announce it or fail to understand when it becomes available.",
          },
        ],
        code: `<div hidden>Hidden text</div>`,
      },
      {
        name: "Modal Focus Trap",
        summary:
          "When a modal opens, focus should move inside it and remain trapped until closed.",
        interview: true,
        mockQuestions: [
          {
            id: "modal-focus-trap-1",
            question: "Why is a focus trap important in a modal?",
            answer:
              "A focus trap keeps keyboard users inside the modal while it is open, preventing focus from moving to background content and creating confusion.",
          },
        ],
        code: `modal.focus();`,
      },
    ],
  },
];
