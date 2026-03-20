import type {Section} from "@/components/SectionCard/types";

export const sections: Section[] = [
  {
    title: "Performance Fundamentals",
    items: [
      {
        name: "Why Performance Matters",
        summary:
          "Performance affects user experience, SEO, and conversion rates.",
        interview: true,
        mockQuestions: [
          {
            id: "why-performance-matters-1",
            question: "Why does web performance matter?",
            answer:
              "Web performance matters because it affects user experience, engagement, SEO, accessibility, and conversion rates. Slow experiences often increase drop-off and frustration.",
          },
          {
            id: "why-performance-matters-2",
            question: "How can poor performance affect a product or business?",
            answer:
              "Poor performance can reduce retention, increase bounce rates, hurt search visibility, and negatively affect conversions and customer satisfaction.",
          },
        ],
        code: `
Fast load times improve engagement and retention.
`,
      },
      {
        name: "Core Web Vitals",
        summary: "Google metrics measuring real-world performance.",
        interview: true,
        mockQuestions: [
          {
            id: "core-web-vitals-1",
            question: "What are Core Web Vitals?",
            answer:
              "Core Web Vitals are Google's user-focused performance metrics that measure loading, interactivity, and visual stability.",
          },
          {
            id: "core-web-vitals-2",
            question: "What do LCP, CLS, and INP measure?",
            answer:
              "LCP measures loading performance, CLS measures visual stability, and INP measures responsiveness to user interactions.",
          },
        ],
        code: `
LCP – Largest Contentful Paint
CLS – Cumulative Layout Shift
INP – Interaction to Next Paint
`,
      },
      {
        name: "Measuring Performance",
        summary: "Use browser tools to measure page performance.",
        interview: true,
        mockQuestions: [
          {
            id: "measuring-performance-1",
            question:
              "What tools are commonly used to measure frontend performance?",
            answer:
              "Common tools include Chrome DevTools, Lighthouse, WebPageTest, and real-user monitoring tools that measure performance in production.",
          },
        ],
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
        mockQuestions: [
          {
            id: "performance-budget-1",
            question: "What is a performance budget?",
            answer:
              "A performance budget is a set of limits for things like bundle size, image weight, or load times, used to keep performance under control as the product grows.",
          },
        ],
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
        mockQuestions: [
          {
            id: "code-splitting-1",
            question: "What problem does code splitting solve?",
            answer:
              "Code splitting reduces the amount of JavaScript users need to download up front by splitting code into smaller chunks that can be loaded only when needed.",
          },
          {
            id: "code-splitting-2",
            question: "How does code splitting improve performance?",
            answer:
              "It reduces initial bundle size, improves load times, and helps users reach interactive content faster.",
          },
        ],
        code: `
const Settings = lazy(() => import("./Settings"));
`,
      },
      {
        name: "Debouncing",
        summary: "Delay execution to reduce rapid event calls.",
        interview: true,
        mockQuestions: [
          {
            id: "debouncing-1",
            question: "What is debouncing?",
            answer:
              "Debouncing delays execution until a burst of rapid events has stopped, which is useful for inputs like search or resize handling.",
          },
          {
            id: "debouncing-2",
            question: "When would you use debouncing?",
            answer:
              "Debouncing is commonly used for search inputs, window resize handlers, and other events that fire repeatedly in quick succession.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "throttling-1",
            question: "What is throttling?",
            answer:
              "Throttling limits how often a function can run over time, which is useful for events like scroll or mousemove.",
          },
          {
            id: "throttling-2",
            question:
              "What is the difference between throttling and debouncing?",
            answer:
              "Throttling guarantees execution at controlled intervals, while debouncing waits until activity has stopped before running once.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "avoiding-layout-thrashing-1",
            question: "What is layout thrashing?",
            answer:
              "Layout thrashing happens when code repeatedly reads layout information and writes layout-affecting styles in ways that force repeated browser reflows.",
          },
          {
            id: "avoiding-layout-thrashing-2",
            question: "Why is layout thrashing bad for performance?",
            answer:
              "It causes unnecessary layout recalculations and can make animations and interactions feel janky or slow.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "minimise-reflows-1",
            question: "What is a reflow in browser rendering?",
            answer:
              "A reflow happens when the browser recalculates layout because something changed that affects element size or position.",
          },
          {
            id: "minimise-reflows-2",
            question: "Why should reflows be minimised?",
            answer:
              "Frequent reflows can be expensive and make rendering slower, especially on complex pages or lower-powered devices.",
          },
        ],
        code: `
element.style.transform = "translateX(10px)";
`,
      },
      {
        name: "Virtual DOM Efficiency",
        summary: "Frameworks minimise DOM updates by diffing changes.",
        interview: true,
        mockQuestions: [
          {
            id: "virtual-dom-efficiency-1",
            question: "How does the virtual DOM help performance?",
            answer:
              "The virtual DOM helps frameworks calculate what changed before applying minimal updates to the real DOM, which can reduce unnecessary DOM work.",
          },
          {
            id: "virtual-dom-efficiency-2",
            question:
              "Does using a virtual DOM automatically make an app fast?",
            answer:
              "No. It can help reduce DOM updates, but application performance still depends on rendering patterns, component structure, data flow, and other bottlenecks.",
          },
        ],
        code: `
React compares previous and next render output.
`,
      },
      {
        name: "requestAnimationFrame",
        summary: "Schedule animations for the browser's rendering cycle.",
        interview: true,
        mockQuestions: [
          {
            id: "requestanimationframe-1",
            question: "What is requestAnimationFrame used for?",
            answer:
              "requestAnimationFrame schedules visual updates to run before the browser's next repaint, which makes animations smoother and more efficient.",
          },
        ],
        code: `
requestAnimationFrame(() => {
  element.style.transform = "translateX(20px)";
});
`,
      },
      {
        name: "Passive Event Listeners",
        summary: "Passive listeners improve scrolling performance.",
        interview: true,
        mockQuestions: [
          {
            id: "passive-event-listeners-1",
            question: "What is a passive event listener?",
            answer:
              "A passive event listener tells the browser the handler will not call preventDefault, allowing scrolling and touch interactions to remain more responsive.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "http-caching-1",
            question: "Why is HTTP caching important for performance?",
            answer:
              "HTTP caching reduces unnecessary network requests by allowing browsers and intermediaries to reuse previously fetched resources.",
          },
          {
            id: "http-caching-2",
            question: "What does Cache-Control do?",
            answer:
              "Cache-Control defines how and for how long a response can be cached by the browser or shared caches.",
          },
        ],
        code: `
Cache-Control: max-age=3600
`,
      },
      {
        name: "Compression",
        summary: "Compress responses with gzip or brotli.",
        interview: true,
        mockQuestions: [
          {
            id: "compression-1",
            question: "Why does compression improve web performance?",
            answer:
              "Compression reduces response size, which lowers transfer time and improves load performance over the network.",
          },
          {
            id: "compression-2",
            question:
              "What is the difference between gzip and brotli in practice?",
            answer:
              "Both compress assets, but brotli often provides better compression ratios than gzip, especially for text-based assets.",
          },
        ],
        code: `
Content-Encoding: br
`,
      },
      {
        name: "Preloading",
        summary: "Preload important resources.",
        interview: true,
        mockQuestions: [
          {
            id: "preloading-1",
            question: "What is preload used for in web performance?",
            answer:
              "Preload tells the browser to fetch important resources early so they are available sooner when needed for rendering.",
          },
        ],
        code: `
<link rel="preload" href="font.woff2" as="font">
`,
      },
      {
        name: "Lazy Loading Images",
        summary: "Load images only when they are near the viewport.",
        interview: true,
        mockQuestions: [
          {
            id: "lazy-loading-images-1",
            question: "Why is lazy loading useful for images?",
            answer:
              "Lazy loading avoids downloading off-screen images until they are close to being needed, which improves initial load performance and reduces wasted bandwidth.",
          },
          {
            id: "lazy-loading-images-2",
            question: "What is one trade-off of aggressive lazy loading?",
            answer:
              "If applied poorly, it can delay important content appearing when the user reaches it, so critical above-the-fold images should usually not be lazy loaded.",
          },
        ],
        code: `
<img src="photo.jpg" loading="lazy">
`,
      },
    ],
  },
];
