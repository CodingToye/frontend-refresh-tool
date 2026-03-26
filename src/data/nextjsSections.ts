import type {Section} from "@/components/SectionCard/types";

export const sections: Section[] = [
  {
    title: "Next.js Fundamentals",
    items: [
      {
        name: "What Next.js Is",
        summary:
          "Next.js is a React framework that adds routing, rendering strategies, server capabilities, and production tooling on top of React.",
        interview: true,
        mockQuestions: [
          {
            id: "what-nextjs-is-1",
            question: "What is Next.js and why would you use it?",
            answer:
              "Next.js is a React framework that provides features such as file-based routing, server-side rendering, static generation, API routes, and build optimisations. It is used to build production-ready React applications with better performance, structure, and developer experience.",
          },
          {
            id: "what-nextjs-is-2",
            question: "How is Next.js different from plain React?",
            answer:
              "React is a UI library, while Next.js is a framework built on top of React. Next.js adds conventions and tooling such as routing, rendering strategies, server components, and backend capabilities.",
          },
        ],
        code: `export default function HomePage() {
  return <h1>Hello from Next.js</h1>;
}`,
      },
      {
        name: "App Router",
        summary:
          "The App Router uses the app directory and is built around layouts, nested routing, server components, and modern React patterns.",
        interview: true,
        mockQuestions: [
          {
            id: "app-router-1",
            question: "What is the App Router in Next.js?",
            answer:
              "The App Router is the newer routing system in Next.js that uses the app directory. It supports nested layouts, server components, streaming, loading states, and co-located route files.",
          },
          {
            id: "app-router-2",
            question: "Why is the App Router important?",
            answer:
              "It enables more flexible routing, better layout composition, and deeper integration with React server features such as server components and streaming.",
          },
        ],
        code: `app/
  layout.tsx
  page.tsx
  about/
    page.tsx`,
      },
      {
        name: "Pages Router",
        summary:
          "The Pages Router is the older routing system based on the pages directory and route files mapping directly to URLs.",
        mockQuestions: [
          {
            id: "pages-router-1",
            question: "What is the Pages Router in Next.js?",
            answer:
              "The Pages Router is the traditional Next.js routing system where files inside the pages directory become routes. It supports features like getServerSideProps and getStaticProps.",
          },
        ],
        code: `pages/
  index.tsx
  about.tsx
  blog/[slug].tsx`,
      },
    ],
  },
  {
    title: "Routing",
    items: [
      {
        name: "File-based Routing",
        summary:
          "Routes are defined by folders and files, which removes the need for manual route configuration in many cases.",
        interview: true,
        mockQuestions: [
          {
            id: "file-based-routing-1",
            question: "How does file-based routing work in Next.js?",
            answer:
              "In Next.js, the folder and file structure defines the route structure. A page.tsx file inside a folder becomes the UI for that route path.",
          },
        ],
        code: `app/dashboard/page.tsx
// maps to /dashboard`,
      },
      {
        name: "Dynamic Routes",
        summary:
          "Dynamic route segments allow pages to respond to URL parameters such as slugs or IDs.",
        interview: true,
        mockQuestions: [
          {
            id: "dynamic-routes-1",
            question: "How do dynamic routes work in Next.js?",
            answer:
              "Dynamic routes are created using bracket syntax such as [slug] or [id]. The value is then available through route params.",
          },
          {
            id: "dynamic-routes-2",
            question: "When would you use a dynamic route?",
            answer:
              "You would use a dynamic route for pages such as blog posts, product details, or user profiles where part of the URL changes based on data.",
          },
        ],
        code: `app/blog/[slug]/page.tsx

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  return <h1>{params.slug}</h1>;
}`,
      },
      {
        name: "Nested Routes and Layouts",
        summary:
          "Layouts let you share UI across route segments while nested routes define the page structure below them.",
        mockQuestions: [
          {
            id: "nested-routes-layouts-1",
            question: "What is the role of layouts in the App Router?",
            answer:
              "Layouts let you share persistent UI such as headers, sidebars, or wrappers across route segments without remounting them on navigation.",
          },
        ],
        code: `app/dashboard/layout.tsx
app/dashboard/settings/page.tsx`,
      },
      {
        name: "Link Navigation",
        summary:
          "The Link component enables client-side navigation for faster transitions between routes.",
        mockQuestions: [
          {
            id: "link-navigation-1",
            question: "Why use Next.js Link instead of a plain anchor tag?",
            answer:
              "The Link component enables client-side navigation, which improves performance and preserves app state better than a full page reload.",
          },
        ],
        code: `import Link from "next/link";

<Link href="/about">About</Link>;`,
      },
    ],
  },
  {
    title: "Rendering Strategies",
    items: [
      {
        name: "Server-side Rendering",
        summary:
          "Server-side rendering generates HTML on the server for each request, which is useful for dynamic content and SEO-sensitive pages.",
        interview: true,
        mockQuestions: [
          {
            id: "ssr-1",
            question: "What is server-side rendering in Next.js?",
            answer:
              "Server-side rendering means the HTML for a page is generated on the server at request time before being sent to the browser.",
          },
          {
            id: "ssr-2",
            question: "When would you choose SSR?",
            answer:
              "SSR is useful when data must be fresh on every request or when a page depends on request-specific information such as headers, cookies, or authentication.",
          },
        ],
        code: `export default async function Page() {
  const res = await fetch("https://api.example.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return <div>{posts.length} posts</div>;
}`,
      },
      {
        name: "Static Generation",
        summary:
          "Static generation builds pages ahead of time, which is ideal for content that changes infrequently and benefits from fast delivery.",
        interview: true,
        mockQuestions: [
          {
            id: "static-generation-1",
            question: "What is static generation in Next.js?",
            answer:
              "Static generation means pages are rendered at build time and served as static assets, which can improve performance and caching.",
          },
        ],
        code: `export default async function Page() {
  const res = await fetch("https://api.example.com/posts", {
    cache: "force-cache",
  });
  const posts = await res.json();

  return <div>{posts.length} posts</div>;
}`,
      },
      {
        name: "Incremental Static Regeneration",
        summary:
          "ISR allows static pages to be updated after deployment without rebuilding the whole site.",
        interview: true,
        mockQuestions: [
          {
            id: "isr-1",
            question: "What is ISR in Next.js?",
            answer:
              "Incremental Static Regeneration allows a statically generated page to be revalidated and updated after deployment, giving a balance between static performance and fresher data.",
          },
        ],
        code: `export const revalidate = 60;

export default async function Page() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return <div>{posts.length} posts</div>;
}`,
      },
      {
        name: "Streaming",
        summary:
          "Streaming allows parts of a page to be sent to the browser as they become ready rather than waiting for the full response.",
        mockQuestions: [
          {
            id: "streaming-1",
            question: "What is streaming in Next.js?",
            answer:
              "Streaming allows the server to progressively send UI to the client as different parts of the page are ready, improving perceived performance.",
          },
        ],
        code: `import {Suspense} from "react";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SlowComponent />
    </Suspense>
  );
}`,
      },
    ],
  },
  {
    title: "Server and Client Components",
    items: [
      {
        name: "Server Components",
        summary:
          "Server Components run on the server by default in the App Router and can fetch data without shipping that logic to the client.",
        interview: true,
        mockQuestions: [
          {
            id: "server-components-1",
            question: "What is a Server Component in Next.js?",
            answer:
              "A Server Component is rendered on the server and does not send its component logic to the browser. It can fetch data directly and reduce client-side JavaScript.",
          },
          {
            id: "server-components-2",
            question: "What is a benefit of Server Components?",
            answer:
              "They can improve performance by reducing bundle size and allowing server-side data access without exposing implementation details to the client.",
          },
        ],
        code: `export default async function Products() {
  const res = await fetch("https://api.example.com/products");
  const products = await res.json();

  return <ul>{products.map((p: { id: string; name: string }) => <li key={p.id}>{p.name}</li>)}</ul>;
}`,
      },
      {
        name: "Client Components",
        summary:
          "Client Components are needed when using hooks, event handlers, browser APIs, or interactive UI logic.",
        interview: true,
        mockQuestions: [
          {
            id: "client-components-1",
            question: "When do you need a Client Component in Next.js?",
            answer:
              "You need a Client Component when using React hooks like useState or useEffect, browser APIs, or event handlers that require client-side interactivity.",
          },
        ],
        code: `"use client";

import {useState} from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
      },
      {
        name: "use client Directive",
        summary:
          "The use client directive marks a file as a Client Component entry point in the App Router.",
        mockQuestions: [
          {
            id: "use-client-1",
            question: "What does use client do in Next.js?",
            answer:
              "use client tells Next.js that the file should be treated as a Client Component so it can use hooks, event handlers, and browser-only APIs.",
          },
        ],
        code: `"use client";

export default function SearchInput() {
  return <input placeholder="Search" />;
}`,
      },
    ],
  },
  {
    title: "Data Fetching",
    items: [
      {
        name: "Fetching in Server Components",
        summary:
          "Data fetching can happen directly in async Server Components, making the component and data flow more straightforward.",
        interview: true,
        mockQuestions: [
          {
            id: "fetching-server-components-1",
            question: "How do you fetch data in a Server Component?",
            answer:
              "A Server Component can be declared async and use fetch directly on the server before returning JSX.",
          },
        ],
        code: `export default async function UsersPage() {
  const res = await fetch("https://api.example.com/users");
  const users = await res.json();

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}`,
      },
      {
        name: "Caching and Revalidation",
        summary:
          "Next.js extends fetch with caching controls and revalidation options to balance speed and freshness.",
        interview: true,
        mockQuestions: [
          {
            id: "caching-revalidation-1",
            question:
              "How do caching and revalidation work with fetch in Next.js?",
            answer:
              "Next.js extends fetch so you can control caching and freshness using options such as force-cache, no-store, or route-level revalidate settings.",
          },
        ],
        code: `await fetch("https://api.example.com/posts", {
  next: { revalidate: 120 },
});`,
      },
      {
        name: "generateStaticParams",
        summary:
          "generateStaticParams is used to statically generate dynamic routes at build time in the App Router.",
        mockQuestions: [
          {
            id: "generate-static-params-1",
            question: "What is generateStaticParams used for?",
            answer:
              "generateStaticParams returns a list of route params for dynamic routes that should be statically generated at build time.",
          },
        ],
        code: `export async function generateStaticParams() {
  return [{ slug: "hello-world" }, { slug: "nextjs-guide" }];
}`,
      },
      {
        name: "Route Handlers",
        summary:
          "Route Handlers provide backend logic in the App Router for handling HTTP requests in a route segment.",
        interview: true,
        mockQuestions: [
          {
            id: "route-handlers-1",
            question: "What are Route Handlers in Next.js?",
            answer:
              "Route Handlers are server-side request handlers in the App Router that let you respond to HTTP methods such as GET or POST using route.ts files.",
          },
        ],
        code: `export async function GET() {
  return Response.json({ ok: true });
}`,
      },
    ],
  },
  {
    title: "Layouts and Special Files",
    items: [
      {
        name: "layout.tsx",
        summary:
          "layout.tsx defines shared UI for a route segment and persists across navigation within that segment.",
        mockQuestions: [
          {
            id: "layout-tsx-1",
            question: "What does layout.tsx do in Next.js?",
            answer:
              "layout.tsx wraps pages in a route segment and provides persistent shared UI such as navigation, wrappers, or context providers.",
          },
        ],
        code: `export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}`,
      },
      {
        name: "loading.tsx",
        summary:
          "loading.tsx provides a route-level loading UI while content streams in.",
        mockQuestions: [
          {
            id: "loading-tsx-1",
            question: "What is loading.tsx used for in Next.js?",
            answer:
              "loading.tsx defines a loading fallback for a route segment, helping provide instant feedback while server-rendered content is being prepared.",
          },
        ],
        code: `export default function Loading() {
  return <p>Loading...</p>;
}`,
      },
      {
        name: "error.tsx",
        summary:
          "error.tsx handles rendering an error boundary UI for a route segment.",
        mockQuestions: [
          {
            id: "error-tsx-1",
            question: "What is error.tsx in Next.js?",
            answer:
              "error.tsx defines an error boundary UI for a route segment so rendering errors can be handled gracefully without breaking the whole app.",
          },
        ],
        code: `"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}`,
      },
      {
        name: "not-found.tsx",
        summary:
          "not-found.tsx defines custom UI for unmatched routes or explicit notFound calls.",
        mockQuestions: [
          {
            id: "not-found-tsx-1",
            question: "How do you handle 404 pages in the App Router?",
            answer:
              "You can create a not-found.tsx file for a route segment or call notFound() programmatically to render custom 404 UI.",
          },
        ],
        code: `export default function NotFound() {
  return <h2>Page not found</h2>;
}`,
      },
    ],
  },
  {
    title: "Metadata and SEO",
    items: [
      {
        name: "Static Metadata",
        summary:
          "Metadata can be exported from a route to define page titles, descriptions, and other SEO-relevant values.",
        interview: true,
        mockQuestions: [
          {
            id: "static-metadata-1",
            question: "How do you define metadata in Next.js?",
            answer:
              "In the App Router, metadata can be exported from a route file using the metadata export or generated dynamically with generateMetadata.",
          },
        ],
        code: `export const metadata = {
  title: "Blog",
  description: "Latest posts",
};`,
      },
      {
        name: "generateMetadata",
        summary:
          "generateMetadata lets metadata be created dynamically using route params or fetched data.",
        mockQuestions: [
          {
            id: "generate-metadata-1",
            question: "When would you use generateMetadata?",
            answer:
              "You would use generateMetadata when metadata depends on route params, fetched content, or dynamic page state.",
          },
        ],
        code: `export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: params.slug,
  };
}`,
      },
    ],
  },
  {
    title: "Styling and Assets",
    items: [
      {
        name: "Global CSS",
        summary:
          "Global CSS can be imported in top-level files such as the root layout and is used for app-wide styling.",
        mockQuestions: [
          {
            id: "global-css-1",
            question: "Where do you import global CSS in Next.js?",
            answer:
              "In the App Router, global CSS is typically imported in the root layout file so it applies across the application.",
          },
        ],
        code: `import "./globals.css";`,
      },
      {
        name: "CSS Modules",
        summary:
          "CSS Modules provide locally scoped styles tied to a component file.",
        mockQuestions: [
          {
            id: "css-modules-1",
            question: "What are CSS Modules in Next.js?",
            answer:
              "CSS Modules are CSS files where class names are scoped locally to the component, reducing collisions and making styles easier to organise.",
          },
        ],
        code: `import styles from "./button.module.css";

export function Button() {
  return <button className={styles.button}>Click</button>;
}`,
      },
      {
        name: "next/image",
        summary:
          "The next/image component provides automatic image optimisation, responsive sizing, and performance benefits.",
        interview: true,
        mockQuestions: [
          {
            id: "next-image-1",
            question: "Why use next/image instead of a normal img tag?",
            answer:
              "next/image provides image optimisation features such as responsive sizing, lazy loading, and better performance handling out of the box.",
          },
        ],
        code: `import Image from "next/image";

<Image
  src="/profile.jpg"
  alt="Profile"
  width={300}
  height={200}
/>;`,
      },
      {
        name: "next/font",
        summary:
          "next/font helps load and optimise fonts with better performance and less layout shift.",
        mockQuestions: [
          {
            id: "next-font-1",
            question: "What is the benefit of using next/font?",
            answer:
              "next/font helps optimise font loading, reduce layout shift, and simplify integrating local or Google fonts into a Next.js app.",
          },
        ],
        code: `import {Inter} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return <main className={inter.className}>Hello</main>;
}`,
      },
    ],
  },
  {
    title: "API and Server Features",
    items: [
      {
        name: "API Routes",
        summary:
          "In the Pages Router, API routes allow backend endpoints to live alongside frontend code.",
        mockQuestions: [
          {
            id: "api-routes-1",
            question: "What are API routes in Next.js?",
            answer:
              "API routes are backend endpoints created inside the pages/api directory in the Pages Router, allowing server-side logic to live in the same project.",
          },
        ],
        code: `export default function handler(req, res) {
  res.status(200).json({ message: "Hello" });
}`,
      },
      {
        name: "Middleware",
        summary:
          "Middleware runs before a request is completed and is useful for redirects, rewrites, auth checks, and request logic.",
        interview: true,
        mockQuestions: [
          {
            id: "middleware-1",
            question: "What is middleware in Next.js used for?",
            answer:
              "Middleware is used for logic that runs before a request reaches the route, such as authentication checks, redirects, rewrites, or modifying responses.",
          },
        ],
        code: `import {NextResponse} from "next/server";

export function middleware() {
  return NextResponse.next();
}`,
      },
      {
        name: "Server Actions",
        summary:
          "Server Actions allow forms and other client interactions to trigger server-side logic directly in the App Router.",
        interview: true,
        mockQuestions: [
          {
            id: "server-actions-1",
            question: "What are Server Actions in Next.js?",
            answer:
              "Server Actions are functions that run on the server and can be called from forms or components, allowing server-side mutations and logic without a traditional API route in some cases.",
          },
        ],
        code: `"use server";

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  console.log(title);
}`,
      },
    ],
  },
  {
    title: "Performance and Deployment",
    items: [
      {
        name: "Code Splitting",
        summary:
          "Next.js splits bundles by route and can also lazily load components to reduce initial JavaScript.",
        mockQuestions: [
          {
            id: "code-splitting-1",
            question: "How does Next.js help with code splitting?",
            answer:
              "Next.js performs route-based code splitting automatically and also supports lazy loading for components, which reduces the JavaScript needed for the initial render.",
          },
        ],
        code: `import dynamic from "next/dynamic";

const HeavyChart = dynamic(() => import("./HeavyChart"));`,
      },
      {
        name: "Prefetching",
        summary:
          "Next.js can prefetch linked routes in the background to make navigation feel faster.",
        mockQuestions: [
          {
            id: "prefetching-1",
            question: "What is prefetching in Next.js?",
            answer:
              "Prefetching loads route resources in advance, often when a link becomes visible, which helps make navigation faster and smoother.",
          },
        ],
        code: `import Link from "next/link";

<Link href="/dashboard">Dashboard</Link>;`,
      },
      {
        name: "Deployment with Vercel",
        summary:
          "Next.js works especially well with Vercel, which supports framework features such as edge functions, previews, and optimised deployment flows.",
        mockQuestions: [
          {
            id: "vercel-deployment-1",
            question: "Why is Vercel commonly used with Next.js?",
            answer:
              "Vercel is closely aligned with Next.js and provides first-class support for its routing, rendering, caching, previews, and deployment workflows.",
          },
        ],
        code: `git push origin main
# deploys via connected Vercel project`,
      },
    ],
  },
];
