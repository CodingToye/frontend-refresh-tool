import type {Section} from "@/components/SectionCard/types";

export const sections: Section[] = [
  {
    title: "HTML Fundamentals",
    items: [
      {
        name: "Basic Document Structure",
        summary:
          "A standard HTML document includes doctype, html, head, and body elements.",
        interview: true,
        mockQuestions: [
          {
            id: "html-structure-1",
            question: "What is the basic structure of an HTML document?",
            answer:
              "A basic HTML document contains a doctype declaration followed by html, head, and body elements. The head holds metadata while the body contains visible content.",
          },
          {
            id: "html-structure-2",
            question: "What is the purpose of the <!doctype html> declaration?",
            answer:
              "The doctype tells the browser to render the page using modern HTML standards instead of legacy compatibility modes.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "semantic-html-1",
            question: "What is semantic HTML?",
            answer:
              "Semantic HTML uses elements that describe the meaning of the content, such as header, nav, main, article, and footer.",
          },
          {
            id: "semantic-html-2",
            question: "Why is semantic HTML important?",
            answer:
              "Semantic HTML improves accessibility, SEO, and maintainability by giving structure and meaning to content.",
          },
        ],
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
        mockQuestions: [
          {
            id: "headings-1",
            question: "Why should headings be used in order in HTML?",
            answer:
              "Headings should follow a logical hierarchy from h1 to h6 so screen readers and search engines can understand the document structure.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "links-1",
            question: "What is the purpose of the anchor tag?",
            answer:
              "The anchor tag creates hyperlinks that navigate to other pages, resources, or locations within the same page.",
          },
        ],
        code: `<a href="/about">About</a>
<a href="mailto:test@example.com">Email us</a>`,
      },
      {
        name: "Images",
        summary:
          "Images should include meaningful alt text when they convey content.",
        interview: true,
        mockQuestions: [
          {
            id: "images-1",
            question: "Why is alt text important on images?",
            answer:
              "Alt text provides a text alternative for screen readers and helps describe images when they cannot be displayed.",
          },
        ],
        code: `<img src="/images/profile.jpg" alt="Profile photo" />`,
      },
      {
        name: "Audio and Video",
        summary: "HTML provides native media elements with playback controls.",
        mockQuestions: [
          {
            id: "media-1",
            question: "What are the benefits of HTML's native media elements?",
            answer:
              "They provide built-in playback controls and browser support without requiring external plugins.",
          },
        ],
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
        mockQuestions: [
          {
            id: "lists-1",
            question:
              "What is the difference between unordered and ordered lists?",
            answer:
              "Unordered lists use bullet points while ordered lists represent a sequence with numbers.",
          },
        ],
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
        mockQuestions: [
          {
            id: "description-lists-1",
            question: "When should a description list be used?",
            answer:
              "Description lists are useful for representing pairs of terms and descriptions such as glossaries or metadata.",
          },
        ],
        code: `<dl>
  <dt>HTML</dt>
  <dd>Markup language for web pages</dd>
</dl>`,
      },
      {
        name: "Tables",
        summary: "Tables should be used for tabular data, not layout.",
        interview: true,
        mockQuestions: [
          {
            id: "tables-1",
            question: "When should tables be used in HTML?",
            answer:
              "Tables should be used for structured tabular data such as spreadsheets or datasets rather than page layout.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "forms-1",
            question: "What is the purpose of the form element?",
            answer:
              "The form element groups user inputs and allows the browser to submit the collected data to a server.",
          },
        ],
        code: `<form action="/submit" method="post">
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>`,
      },
      {
        name: "Labels and Inputs",
        summary:
          "Inputs should usually be associated with labels for usability and accessibility.",
        interview: true,
        mockQuestions: [
          {
            id: "labels-inputs-1",
            question: "Why are labels important for form inputs?",
            answer:
              "Labels improve accessibility and usability by associating descriptive text with input fields.",
          },
        ],
        code: `<label for="email">Email</label>
<input id="email" type="email" name="email" />`,
      },
      {
        name: "Common Input Types",
        summary:
          "Different input types give built-in browser behaviour and validation hints.",
        mockQuestions: [
          {
            id: "input-types-1",
            question: "Why are specialised input types useful?",
            answer:
              "They enable built-in validation and better user interfaces such as email keyboards on mobile devices.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "alt-text-1",
            question: "What is the purpose of alt text?",
            answer:
              "Alt text describes an image so that screen reader users can understand its content.",
          },
        ],
        code: `<img src="chart.png" alt="Sales increased 20 percent this quarter" />`,
      },
      {
        name: "Buttons vs Links",
        summary: "Buttons trigger actions, while links navigate to locations.",
        interview: true,
        mockQuestions: [
          {
            id: "buttons-vs-links-1",
            question: "When should you use a button instead of a link?",
            answer:
              "Buttons should be used for actions such as submitting forms or opening modals, while links should navigate to another location.",
          },
        ],
        code: `<button type="button">Open modal</button>
<a href="/settings">Go to settings</a>`,
      },
      {
        name: "ARIA Basics",
        summary:
          "ARIA can improve accessibility when native HTML alone is not enough.",
        interview: true,
        mockQuestions: [
          {
            id: "aria-basics-1",
            question: "What is ARIA used for?",
            answer:
              "ARIA provides attributes that improve accessibility when native HTML semantics are insufficient.",
          },
        ],
        code: `<button aria-expanded="false" aria-controls="menu">
  Menu
</button>`,
      },
    ],
  },
];
