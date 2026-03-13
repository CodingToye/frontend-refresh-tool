import type {Section} from "../types/shared.types";

export const sections: Section[] = [
  {
    title: "Performance Fundamentals",
    items: [
      {
        name: "Why Performance Matters",
        summary:
          "Performance affects user experience, SEO, and conversion rates.",
        code: `
Fast load times improve engagement and retention.
`,
      },
      {
        name: "Core Web Vitals",
        summary: "Google metrics measuring real-world performance.",
        code: `
LCP – Largest Contentful Paint
CLS – Cumulative Layout Shift
INP – Interaction to Next Paint
`,
      },
      {
        name: "Measuring Performance",
        summary: "Use browser tools to measure page performance.",
        code: `
Chrome DevTools
Lighthouse
WebPageTest
`,
      },
      {
        name: "Performance Budget",
        summary:
          "A performance budget sets limits for bundle size or load time.",
        code: `
Example:
JS bundle < 200kb
`,
      },
    ],
  },
  {
    title: "JavaScript Performance",
    items: [
      {
        name: "Code Splitting",
        summary: "Split bundles so users only load what they need.",
        interview: true,
        code: `
const Settings = lazy(() => import("./Settings"));
`,
      },
      {
        name: "Debouncing",
        summary: "Delay execution to reduce rapid event calls.",
        code: `
function debounce(fn, delay) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), delay);
  };
}
`,
      },
      {
        name: "Throttling",
        summary: "Limit how frequently a function can run.",
        code: `
function throttle(fn, wait) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last > wait) {
      last = now;
      fn(...args);
    }
  };
}
`,
      },
      {
        name: "Avoiding Layout Thrashing",
        summary:
          "Reading and writing layout values repeatedly can cause performance issues.",
        code: `
const height = el.offsetHeight;
el.style.height = height + "px";
`,
      },
    ],
  },
  {
    title: "Rendering Performance",
    items: [
      {
        name: "Minimise Reflows",
        summary:
          "Avoid forcing the browser to recalculate layout unnecessarily.",
        code: `
element.style.transform = "translateX(10px)";
`,
      },
      {
        name: "Virtual DOM Efficiency",
        summary: "Frameworks minimise DOM updates by diffing changes.",
        code: `
React compares previous and next render output.
`,
      },
      {
        name: "requestAnimationFrame",
        summary: "Schedule animations for the browser's rendering cycle.",
        code: `
requestAnimationFrame(() => {
  element.style.transform = "translateX(20px)";
});
`,
      },
      {
        name: "Passive Event Listeners",
        summary: "Passive listeners improve scrolling performance.",
        code: `
window.addEventListener("scroll", handler, {
  passive: true
});
`,
      },
    ],
  },
  {
    title: "Network Performance",
    items: [
      {
        name: "HTTP Caching",
        summary: "Use cache headers to avoid unnecessary network requests.",
        code: `
Cache-Control: max-age=3600
`,
      },
      {
        name: "Compression",
        summary: "Compress responses with gzip or brotli.",
        code: `
Content-Encoding: br
`,
      },
      {
        name: "Preloading",
        summary: "Preload important resources.",
        code: `
<link rel="preload" href="font.woff2" as="font">
`,
      },
      {
        name: "Lazy Loading Images",
        summary: "Load images only when they are near the viewport.",
        code: `
<img src="photo.jpg" loading="lazy">
`,
      },
    ],
  },
];
