import type {Section} from "../types/Section.types";

export const sections: Section[] = [
  {
    title: "Components",
    items: [
      {
        name: "Function Components",
        summary:
          "The standard way to build UI in modern React. A component is just a function that returns JSX.",
        interview: true,
        mockQuestions: [
          {
            id: "function-components-1",
            question: "What is a function component in React?",
            answer:
              "A function component is a JavaScript or TypeScript function that accepts props as input and returns JSX to describe what should be rendered.",
          },
          {
            id: "function-components-2",
            question:
              "Why are function components preferred over class components in modern React?",
            answer:
              "Function components are simpler to read and write, work naturally with hooks, and are the standard approach in modern React. They reduce boilerplate compared with class components.",
          },
        ],
        code: `function Button() {
  return <button>Click</button>;
}`,
      },
      {
        name: "Props",
        summary:
          "Inputs passed into components. They let you make components reusable and configurable.",
        interview: true,
        mockQuestions: [
          {
            id: "props-1",
            question: "What are props in React?",
            answer:
              "Props are inputs passed from a parent component to a child component. They make components configurable and reusable by allowing data and callbacks to be passed in.",
          },
          {
            id: "props-2",
            question: "What is the difference between props and state?",
            answer:
              "Props are read-only values passed into a component, while state is data managed inside a component that can change over time and trigger re-renders.",
          },
        ],
        code: `function Button({ label }) {
  return <button>{label}</button>;
}`,
      },
      {
        name: "Composition",
        summary:
          "Building larger UIs by combining smaller components instead of inheriting behaviour.",
        mockQuestions: [
          {
            id: "composition-1",
            question: "What does composition mean in React?",
            answer:
              "Composition means building more complex UI by combining smaller components together. Instead of inheriting behaviour, React encourages passing UI and behaviour through props and children.",
          },
        ],
        code: `function Card({ children }) {
  return <div className="card">{children}</div>;
}`,
      },
      {
        name: "Children",
        summary:
          "Special prop used to pass nested UI into a component, often for wrappers and layouts.",
        mockQuestions: [
          {
            id: "children-1",
            question: "What is the children prop in React?",
            answer:
              "The children prop is a special prop that contains the nested content placed between a component's opening and closing tags. It is commonly used for wrapper and layout components.",
          },
        ],
        code: `function Layout({ children }) {
  return <main>{children}</main>;
}`,
      },
      {
        name: "Lists and Keys",
        summary:
          "Render arrays with map and use stable keys so React can track items efficiently.",
        interview: true,
        mockQuestions: [
          {
            id: "lists-keys-1",
            question: "Why does React need keys when rendering lists?",
            answer:
              "Keys help React identify which items have changed, been added, or been removed. This allows React to update the DOM efficiently and preserve component state correctly where possible.",
          },
          {
            id: "lists-keys-2",
            question:
              "Why is using the array index as a key often discouraged?",
            answer:
              "Using the array index as a key can cause incorrect UI updates and state bugs when items are reordered, inserted, or removed, because the key is no longer stable for each item.",
          },
        ],
        code: `{users.map((user) => (
  <li key={user.id}>{user.name}</li>
))}`,
      },
    ],
  },
  {
    title: "Hooks",
    items: [
      {
        name: "Rules of Hooks",
        summary:
          "Only call hooks at the top level of React functions, and always in the same order.",
        interview: true,
        mockQuestions: [
          {
            id: "rules-of-hooks-1",
            question: "What are the Rules of Hooks?",
            answer:
              "Hooks must only be called at the top level of React function components or custom hooks, and never inside loops, conditions, or nested functions. This ensures React can preserve hook order across renders.",
          },
          {
            id: "rules-of-hooks-2",
            question:
              "Why do hooks need to be called in the same order on every render?",
            answer:
              "React relies on the call order of hooks to match state and effects to the correct hook instance. If the order changes, React can associate the wrong state with the wrong hook call.",
          },
        ],
        code: `function Example() {
  const [count, setCount] = useState(0);
  return <button>{count}</button>;
}`,
      },
      {
        name: "useState",
        summary:
          "Lets a component store and update local state across renders.",
        interview: true,
        mockQuestions: [
          {
            id: "usestate-1",
            question: "What does useState do in React?",
            answer:
              "useState lets a function component store local state and update it across renders. Calling the setter triggers React to re-render with the new state.",
          },
          {
            id: "usestate-2",
            question:
              "When should you use the functional form of setState with useState?",
            answer:
              "You should use the functional updater form when the next state depends on the previous state, for example setCount((prev) => prev + 1). This avoids stale state issues.",
          },
        ],
        code: `const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  {count}
</button>`,
      },
      {
        name: "useEffect",
        summary:
          "Runs side effects after render, such as subscriptions, timers, or syncing external data.",
        interview: true,
        mockQuestions: [
          {
            id: "useeffect-1",
            question: "What is useEffect and when would you use it?",
            answer:
              "useEffect is used to handle side effects in React function components, such as data fetching, subscriptions, timers, or synchronising with external systems.",
          },
          {
            id: "useeffect-2",
            question:
              "What are common mistakes developers make with useEffect?",
            answer:
              "Common mistakes include missing dependencies, adding unstable dependencies unnecessarily, causing infinite re-renders, and using useEffect for logic that should happen during rendering instead.",
          },
        ],
        code: `useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`,
      },
      {
        name: "useContext",
        summary:
          "Reads shared values from context without passing props through every level.",
        mockQuestions: [
          {
            id: "usecontext-1",
            question: "What problem does useContext solve?",
            answer:
              "useContext solves prop drilling for shared values by allowing a component to read data from the nearest matching provider without passing props through every intermediate level.",
          },
          {
            id: "usecontext-2",
            question: "When should you be careful using context?",
            answer:
              "You should be careful using context for frequently changing values, because updates can cause many consuming components to re-render. In those cases, more targeted state management may be better.",
          },
        ],
        code: `const theme = useContext(ThemeContext);
return <div>{theme}</div>;`,
      },
      {
        name: "useRef",
        summary:
          "Stores mutable values across renders and can point to DOM elements.",
        mockQuestions: [
          {
            id: "useref-1",
            question: "What is useRef used for?",
            answer:
              "useRef is used to persist a mutable value across renders without causing re-renders, and it is also commonly used to reference DOM elements directly.",
          },
          {
            id: "useref-2",
            question: "What is the difference between useRef and useState?",
            answer:
              "Updating useState triggers a re-render, while updating a ref does not. Refs are for values that should persist but do not need to drive UI updates.",
          },
        ],
        code: `const inputRef = useRef(null);

<input ref={inputRef} />`,
      },
      {
        name: "useMemo / useCallback",
        summary:
          "Memoise computed values or functions when referential stability matters.",
        interview: true,
        mockQuestions: [
          {
            id: "usememo-1",
            question: "What problem does useMemo solve?",
            answer:
              "useMemo helps avoid recomputing expensive derived values on every render by memoising the result until its dependencies change.",
          },
          {
            id: "usememo-usecallback-2",
            question: "What is the difference between useMemo and useCallback?",
            answer:
              "useMemo memoises a computed value, while useCallback memoises a function reference. Both are useful when referential stability matters for performance or dependency arrays.",
          },
        ],
        code: `const total = useMemo(() => items.reduce(sumFn, 0), [items]);
const onClick = useCallback(() => save(id), [id]);`,
      },
      {
        name: "useReducer",
        summary:
          "Useful when state logic is more complex or involves multiple related transitions.",
        mockQuestions: [
          {
            id: "usereducer-1",
            question: "When would you choose useReducer over useState?",
            answer:
              "useReducer is a good choice when state logic is complex, when multiple state transitions are related, or when you want to centralise updates in a reducer function.",
          },
        ],
        code: `const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: "save" });`,
      },
      {
        name: "Custom Hooks",
        summary:
          "Extract reusable stateful logic into your own hook functions.",
        mockQuestions: [
          {
            id: "custom-hooks-1",
            question: "What is a custom hook?",
            answer:
              "A custom hook is a reusable function that starts with 'use' and encapsulates stateful logic or side effects so it can be shared across components.",
          },
          {
            id: "custom-hooks-2",
            question: "What is the main benefit of custom hooks?",
            answer:
              "The main benefit is reusing behaviour and stateful logic without duplicating code or introducing wrapper components just to share logic.",
          },
        ],
        code: `function useToggle() {
  const [open, setOpen] = useState(false);
  return { open, toggle: () => setOpen((v) => !v) };
}`,
      },
    ],
  },
  {
    title: "State Management",
    items: [
      {
        name: "Local State",
        summary:
          "State that belongs to a single component and is managed close to where it is used.",
        mockQuestions: [
          {
            id: "local-state-1",
            question: "What is local state in React?",
            answer:
              "Local state is state owned by a specific component and managed close to where it is used. It is ideal when the data only affects that component or a very small part of the UI.",
          },
        ],
        code: `const [isOpen, setIsOpen] = useState(false);`,
      },
      {
        name: "Lifting State Up",
        summary:
          "Move shared state to the nearest common parent so multiple children stay in sync.",
        interview: true,
        mockQuestions: [
          {
            id: "lifting-state-up-1",
            question: "What does lifting state up mean in React?",
            answer:
              "Lifting state up means moving shared state to the nearest common parent so multiple child components can read it and stay in sync through props.",
          },
          {
            id: "lifting-state-up-2",
            question: "When would you lift state up?",
            answer:
              "You would lift state up when two or more sibling components need to share or coordinate the same piece of state.",
          },
        ],
        code: `function Parent() {
  const [value, setValue] = useState("");
  return <Child value={value} onChange={setValue} />;
}`,
      },
      {
        name: "Context API",
        summary:
          "Good for shared app values like theme, auth, or simple global state.",
        mockQuestions: [
          {
            id: "context-api-1",
            question: "When is the Context API a good fit?",
            answer:
              "The Context API is a good fit for shared values like theme, locale, auth, or other app-wide concerns that many components need to read.",
          },
        ],
        code: `const AuthContext = createContext(null);
<AuthContext.Provider value={user}>{children}</AuthContext.Provider>`,
      },
      {
        name: "Global State",
        summary:
          "Use libraries like Redux or Zustand when many parts of the app depend on shared state.",
        mockQuestions: [
          {
            id: "global-state-1",
            question: "When might you introduce a global state library?",
            answer:
              "You might introduce a global state library when many distant parts of the app depend on shared state, state transitions are complex, or context and prop passing become difficult to manage.",
          },
        ],
        code: `const count = useStore((state) => state.count);`,
      },
    ],
  },
  {
    title: "Rendering Patterns",
    items: [
      {
        name: "Conditional Rendering",
        summary:
          "Show different UI based on conditions using if, ternaries, or logical operators.",
        mockQuestions: [
          {
            id: "conditional-rendering-1",
            question: "What is conditional rendering in React?",
            answer:
              "Conditional rendering means showing different UI based on application state or props, using patterns like if statements, ternaries, or logical operators.",
          },
        ],
        code: `return isLoggedIn ? <Dashboard /> : <Login />;`,
      },
      {
        name: "Dynamic Lists",
        summary: "Build repeated UI from data arrays, usually with map.",
        code: `return items.map((item) => <Item key={item.id} item={item} />);`,
      },
      {
        name: "Render Props",
        summary: "A pattern where a function prop controls what gets rendered.",
        mockQuestions: [
          {
            id: "render-props-1",
            question: "What is the render props pattern?",
            answer:
              "The render props pattern is when a component accepts a function prop and calls it to decide what UI to render, allowing behaviour to be reused while keeping rendering flexible.",
          },
        ],
        code: `<Mouse>{({ x, y }) => <p>{x}, {y}</p>}</Mouse>`,
      },
      {
        name: "Higher Order Components",
        summary:
          "A function that wraps a component to enhance or reuse behaviour.",
        mockQuestions: [
          {
            id: "hoc-1",
            question: "What is a higher-order component?",
            answer:
              "A higher-order component is a function that takes a component and returns a new enhanced component, often used to reuse behaviour such as authentication or data loading.",
          },
        ],
        code: `const Enhanced = withAuth(Dashboard);`,
      },
    ],
  },
  {
    title: "Events and Forms",
    items: [
      {
        name: "Event Handling",
        summary:
          "React uses camelCase event props like onClick and passes a synthetic event object.",
        mockQuestions: [
          {
            id: "event-handling-1",
            question: "How does event handling work in React?",
            answer:
              "React uses camelCase event props such as onClick or onChange, and handlers receive a synthetic event object that normalises browser differences.",
          },
        ],
        code: `<button onClick={handleClick}>Save</button>`,
      },
      {
        name: "Controlled Inputs",
        summary:
          "Input value is driven by React state, making it easier to validate and manage.",
        mockQuestions: [
          {
            id: "controlled-inputs-1",
            question: "What is a controlled input in React?",
            answer:
              "A controlled input is an input whose value is driven by React state. Changes are handled through event callbacks, which makes validation and form logic easier to manage.",
          },
          {
            id: "controlled-inputs-2",
            question:
              "What is the difference between controlled and uncontrolled inputs?",
            answer:
              "Controlled inputs are managed by React state, while uncontrolled inputs keep their current value in the DOM and are often accessed with refs.",
          },
        ],
        code: `const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />`,
      },
      {
        name: "Uncontrolled Inputs",
        summary: "Input state lives in the DOM, often accessed with refs.",
        code: `const ref = useRef(null);
<input ref={ref} />`,
      },
      {
        name: "Form State",
        summary:
          "Managing input values, validation, touched fields, and submission flow.",
        mockQuestions: [
          {
            id: "form-state-1",
            question: "What concerns are typically part of form state?",
            answer:
              "Form state typically includes input values, validation errors, touched fields, submission status, and any loading or success states related to submission.",
          },
        ],
        code: `function handleSubmit(e) {
  e.preventDefault();
  submit(formValues);
}`,
      },
    ],
  },
  {
    title: "Effects and Side Effects",
    items: [
      {
        name: "Effect Lifecycle",
        summary:
          "Effects run after render and may rerun when dependencies change.",
        mockQuestions: [
          {
            id: "effect-lifecycle-1",
            question: "When does an effect run in React?",
            answer:
              "Effects run after React has committed the render to the DOM. They may run again when dependencies change, and cleanup runs before the next effect or when the component unmounts.",
          },
        ],
        code: `useEffect(() => {
  connect();
  return () => disconnect();
}, []);`,
      },
      {
        name: "Dependency Arrays",
        summary:
          "These control when an effect reruns and should reflect the values used inside it.",
        mockQuestions: [
          {
            id: "dependency-arrays-1",
            question: "What does the dependency array in useEffect do?",
            answer:
              "The dependency array tells React when to rerun the effect based on which values used inside the effect have changed.",
          },
        ],
        code: `useEffect(() => {
  fetchUser(userId);
}, [userId]);`,
      },
      {
        name: "Cleanup Functions",
        summary:
          "Return a function from useEffect to remove subscriptions, timers, or listeners.",
        mockQuestions: [
          {
            id: "cleanup-functions-1",
            question: "Why do cleanup functions matter in useEffect?",
            answer:
              "Cleanup functions prevent leaks and stale subscriptions by removing timers, event listeners, or subscriptions before the effect reruns or the component unmounts.",
          },
        ],
        code: `useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
}, []);`,
      },
      {
        name: "Avoiding Unnecessary Effects",
        summary:
          "Not everything belongs in useEffect; derive values during render when possible.",
        mockQuestions: [
          {
            id: "avoid-unnecessary-effects-1",
            question: "Why should you avoid unnecessary useEffect calls?",
            answer:
              "Unnecessary effects add complexity, can introduce bugs, and may cause extra renders or stale data issues. If a value can be derived during render, it is often better not to use an effect.",
          },
        ],
        code: `const fullName = \`\${firstName} \${lastName}\`;`,
      },
    ],
  },
  {
    title: "Performance Optimisation",
    items: [
      {
        name: "React.memo",
        summary: "Prevents re-rendering when props have not changed.",
        mockQuestions: [
          {
            id: "react-memo-1",
            question: "What does React.memo do?",
            answer:
              "React.memo memoises a component so React can skip re-rendering it when its props have not changed according to a shallow comparison.",
          },
        ],
        code: `const Row = React.memo(function Row({ item }) {
  return <div>{item.name}</div>;
});`,
      },
      {
        name: "Memoisation",
        summary:
          "Cache values or functions to avoid needless recalculation or unstable references.",
        mockQuestions: [
          {
            id: "memoisation-1",
            question: "What does memoisation mean in React?",
            answer:
              "Memoisation means caching a computed value or function reference so it can be reused instead of recreated on every render, when dependencies have not changed.",
          },
        ],
        code: `const sorted = useMemo(() => sortItems(items), [items]);`,
      },
      {
        name: "Avoiding Re-renders",
        summary:
          "Keep state local, pass stable props, and avoid recreating expensive work unnecessarily.",
        mockQuestions: [
          {
            id: "avoiding-rerenders-1",
            question:
              "What are some common ways to reduce unnecessary re-renders?",
            answer:
              "Common approaches include keeping state local, avoiding unnecessary parent updates, memoising expensive values or callbacks, and passing stable props to memoised child components.",
          },
        ],
        code: `const onSelect = useCallback((id) => setSelected(id), []);`,
      },
      {
        name: "Lazy Loading",
        summary:
          "Load code only when needed, often with React.lazy and Suspense.",
        mockQuestions: [
          {
            id: "lazy-loading-1",
            question: "What is lazy loading in React?",
            answer:
              "Lazy loading means loading code only when it is needed, usually by splitting bundles and using React.lazy with Suspense so less JavaScript is loaded upfront.",
          },
        ],
        code: `const SettingsPage = lazy(() => import("./SettingsPage"));`,
      },
    ],
  },
  {
    title: "Refs and DOM Interaction",
    items: [
      {
        name: "useRef",
        summary:
          "Useful for persisting mutable values or referencing DOM nodes without causing re-renders.",
        code: `const hasMounted = useRef(false);`,
      },
      {
        name: "Forwarding Refs",
        summary:
          "Lets parent components pass refs through to child DOM elements or components.",
        mockQuestions: [
          {
            id: "forwarding-refs-1",
            question: "What does forwarding refs allow you to do?",
            answer:
              "Forwarding refs allows a parent component to pass a ref through a child component so the ref can point to an inner DOM node or component instance.",
          },
        ],
        code: `const Input = forwardRef((props, ref) => <input ref={ref} {...props} />);`,
      },
      {
        name: "Imperative APIs",
        summary:
          "Occasionally useful when exposing controlled imperative methods from a component.",
        mockQuestions: [
          {
            id: "imperative-apis-1",
            question:
              "When might you expose an imperative API from a component?",
            answer:
              "An imperative API can be useful when a parent needs to trigger actions like focus, scroll, or reset on a child component in a controlled way, usually with refs and useImperativeHandle.",
          },
        ],
        code: `useImperativeHandle(ref, () => ({
  focus: () => inputRef.current?.focus(),
}));`,
      },
    ],
  },
  {
    title: "Data Fetching",
    items: [
      {
        name: "Fetching in useEffect",
        summary:
          "A basic way to load data after mount, though dedicated libraries are often better.",
        mockQuestions: [
          {
            id: "fetching-in-useeffect-1",
            question: "How would you fetch data in a basic React component?",
            answer:
              "A basic approach is to fetch data inside useEffect after mount, then store the result in state. You should also handle loading, errors, and cleanup where needed.",
          },
        ],
        code: `useEffect(() => {
  fetch("/api/users").then((r) => r.json()).then(setUsers);
}, []);`,
      },
      {
        name: "Loading and Error States",
        summary:
          "Always account for pending, failed, and empty responses in UI.",
        mockQuestions: [
          {
            id: "loading-error-states-1",
            question:
              "Why are loading and error states important in data-fetching UI?",
            answer:
              "They make the UI resilient and user-friendly by clearly communicating when data is pending, when a request has failed, or when there is no data to show.",
          },
        ],
        code: `if (isLoading) return <Spinner />;
if (error) return <Error />;`,
      },
      {
        name: "React Query",
        summary:
          "Handles server state, caching, background refetching, and request status cleanly.",
        mockQuestions: [
          {
            id: "react-query-1",
            question: "What problems does React Query solve?",
            answer:
              "React Query helps manage server state by handling data fetching, caching, background refetching, stale data, loading states, and error states in a consistent way.",
          },
        ],
        code: `const { data, isLoading } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});`,
      },
      {
        name: "Suspense",
        summary:
          "A React mechanism for coordinating loading states, increasingly used in modern data patterns.",
        mockQuestions: [
          {
            id: "suspense-data-fetching-1",
            question: "What is Suspense used for in React?",
            answer:
              "Suspense allows React to coordinate asynchronous work by showing a fallback UI while part of the tree is waiting for code or data to be ready.",
          },
        ],
        code: `<Suspense fallback={<Spinner />}>
  <Profile />
</Suspense>`,
      },
    ],
  },
  {
    title: "Routing",
    items: [
      {
        name: "React Router Basics",
        summary:
          "Maps URLs to UI so different pages or views render in a single-page app.",
        mockQuestions: [
          {
            id: "react-router-basics-1",
            question: "What problem does React Router solve?",
            answer:
              "React Router maps URL paths to React components so a single-page application can render different views without full page reloads.",
          },
        ],
        code: `<Routes>
  <Route path="/" element={<Home />} />
</Routes>`,
      },
      {
        name: "Route Params",
        summary:
          "Dynamic URL values such as an id, often used to fetch specific data.",
        mockQuestions: [
          {
            id: "route-params-1",
            question: "What are route params typically used for?",
            answer:
              "Route params are dynamic values in the URL, such as an id, and are commonly used to identify which resource or page data should be loaded.",
          },
        ],
        code: `const { id } = useParams();`,
      },
      {
        name: "Nested Routes",
        summary:
          "Useful for layouts where child pages render inside shared parent structure.",
        mockQuestions: [
          {
            id: "nested-routes-1",
            question: "When are nested routes useful?",
            answer:
              "Nested routes are useful when multiple pages share common layout structure, such as dashboards or settings sections, and child content should render inside a parent layout.",
          },
        ],
        code: `<Route path="dashboard" element={<Layout />}>
  <Route path="settings" element={<Settings />} />
</Route>`,
      },
    ],
  },
  {
    title: "Styling",
    items: [
      {
        name: "CSS Modules",
        summary: "Scoped CSS files that avoid global class name collisions.",
        mockQuestions: [
          {
            id: "css-modules-1",
            question: "What problem do CSS Modules solve?",
            answer:
              "CSS Modules solve global class name collisions by scoping class names locally to the component or file where they are defined.",
          },
        ],
        code: `import styles from "./Button.module.css";
<button className={styles.button}>Save</button>`,
      },
      {
        name: "CSS-in-JS",
        summary:
          "Define styles in JavaScript, often with props-driven dynamic styling.",
        mockQuestions: [
          {
            id: "css-in-js-1",
            question: "What are the benefits and trade-offs of CSS-in-JS?",
            answer:
              "Benefits include colocated styles, dynamic styling with props, and component-level encapsulation. Trade-offs can include runtime overhead, larger bundles, and added tooling complexity depending on the library.",
          },
        ],
        code: `const Button = styled.button\`
  padding: 8px;
\`;`,
      },
      {
        name: "Tailwind",
        summary:
          "Utility-first classes that let you build UI directly in markup.",
        mockQuestions: [
          {
            id: "tailwind-1",
            question: "What are the advantages of using Tailwind with React?",
            answer:
              "Tailwind allows rapid UI development with utility classes directly in JSX, promotes consistency, and reduces the need to context-switch between markup and separate CSS files.",
          },
        ],
        code: `<button className="rounded bg-blue-600 px-4 py-2 text-white">Save</button>`,
      },
    ],
  },
  {
    title: "Testing",
    items: [
      {
        name: "React Testing Library",
        summary: "Encourages testing UI the way a user interacts with it.",
        mockQuestions: [
          {
            id: "rtl-1",
            question: "What is the main idea behind React Testing Library?",
            answer:
              "React Testing Library encourages testing components the way users interact with them, focusing on visible behaviour and accessible queries rather than implementation details.",
          },
        ],
        code: `render(<Button />);
expect(screen.getByRole("button")).toBeInTheDocument();`,
      },
      {
        name: "Component Testing",
        summary:
          "Verify rendering, behaviour, and interactions rather than internal implementation.",
        mockQuestions: [
          {
            id: "component-testing-1",
            question: "What should component tests focus on?",
            answer:
              "Component tests should focus on what the user sees and can do, such as rendering, interactions, state changes, and side effects, rather than private implementation details.",
          },
        ],
        code: `await user.click(screen.getByText("Save"));`,
      },
      {
        name: "Mocking APIs",
        summary:
          "Simulate server responses so components can be tested without real network calls.",
        mockQuestions: [
          {
            id: "mocking-apis-1",
            question: "Why do we mock APIs in frontend tests?",
            answer:
              "Mocking APIs makes tests reliable, fast, and isolated by removing dependence on real network requests or live backend systems.",
          },
        ],
        code: `server.use(http.get("/api/users", () => HttpResponse.json([])));`,
      },
    ],
  },
  {
    title: "Advanced React",
    items: [
      {
        name: "Error Boundaries",
        summary:
          "Catch rendering errors in parts of the component tree and show fallback UI.",
        mockQuestions: [
          {
            id: "error-boundaries-1",
            question: "What do error boundaries do in React?",
            answer:
              "Error boundaries catch errors thrown during rendering, lifecycle methods, and constructors in part of the component tree, and allow fallback UI to be shown instead of crashing the whole app.",
          },
        ],
        code: `<ErrorBoundary fallback={<ErrorPage />}>
  <App />
</ErrorBoundary>`,
      },
      {
        name: "Portals",
        summary:
          "Render UI outside the normal DOM hierarchy, useful for modals and tooltips.",
        mockQuestions: [
          {
            id: "portals-1",
            question: "What problem do portals solve in React?",
            answer:
              "Portals allow components like modals, tooltips, or popovers to render outside the normal DOM hierarchy while still remaining part of the React tree.",
          },
        ],
        code: `createPortal(<Modal />, document.body);`,
      },
      {
        name: "Suspense",
        summary:
          "Lets React pause part of the UI while waiting for asynchronous work.",
        mockQuestions: [
          {
            id: "advanced-suspense-1",
            question: "How does Suspense improve user experience?",
            answer:
              "Suspense improves user experience by coordinating asynchronous work and displaying a clear fallback while a part of the UI waits for code or data to become ready.",
          },
        ],
        code: `<Suspense fallback={<Loading />}>
  <Widget />
</Suspense>`,
      },
      {
        name: "Concurrent Features",
        summary:
          "Modern React can prioritise updates to keep the interface responsive.",
        mockQuestions: [
          {
            id: "concurrent-features-1",
            question: "What is the goal of React concurrent features?",
            answer:
              "The goal is to keep the interface responsive by allowing React to prioritise urgent updates and defer less urgent rendering work where appropriate.",
          },
        ],
        code: `const [isPending, startTransition] = useTransition();`,
      },
    ],
  },
  {
    title: "React + TypeScript",
    items: [
      {
        name: "Typing Props",
        summary:
          "Define clear prop contracts so components are safer and easier to use.",
        mockQuestions: [
          {
            id: "typing-props-1",
            question: "Why is typing props important in React with TypeScript?",
            answer:
              "Typing props makes components safer and easier to use by documenting expected inputs, catching mistakes at compile time, and improving editor autocomplete and refactoring support.",
          },
        ],
        code: `type ButtonProps = { label: string };`,
      },
      {
        name: "Typing Hooks",
        summary:
          "Type state, refs, events, and custom hooks so your editor can guide usage.",
        mockQuestions: [
          {
            id: "typing-hooks-1",
            question:
              "What kinds of hooks commonly need explicit TypeScript types?",
            answer:
              "Common examples include useState when the initial value is ambiguous, useRef for DOM elements or nullable refs, event handlers, and custom hooks that return structured state and actions.",
          },
        ],
        code: `const [count, setCount] = useState<number>(0);`,
      },
      {
        name: "Generics",
        summary:
          "Helpful for reusable components and hooks that work with different data types.",
        mockQuestions: [
          {
            id: "generics-1",
            question: "Why are generics useful in React with TypeScript?",
            answer:
              "Generics allow components and hooks to stay reusable while preserving strong type safety, for example when building reusable lists, forms, or data-driven hooks.",
          },
        ],
        code: `function List<T>({ items }: { items: T[] }) {
  return null;
}`,
      },
    ],
  },
  {
    title: "Architecture",
    items: [
      {
        name: "Folder Structure",
        summary:
          "Organise code so related components, hooks, and tests are easy to find.",
        mockQuestions: [
          {
            id: "folder-structure-1",
            question: "What makes a good frontend folder structure?",
            answer:
              "A good folder structure makes related code easy to find, supports scaling, reduces cognitive load, and reflects how the application is actually organised rather than being purely theoretical.",
          },
        ],
        code: `features/
  users/
    components/
    hooks/`,
      },
      {
        name: "Feature-based Design",
        summary:
          "Group files by feature rather than by file type to improve scalability.",
        mockQuestions: [
          {
            id: "feature-based-design-1",
            question:
              "Why do teams often prefer feature-based folder structure?",
            answer:
              "Feature-based structure keeps related components, hooks, styles, and tests together, which improves maintainability and makes larger applications easier to navigate.",
          },
        ],
        code: `src/features/profile/ProfilePage.tsx`,
      },
      {
        name: "Reusable Components",
        summary:
          "Build shared UI pieces with clear APIs so they can be used across the app.",
        mockQuestions: [
          {
            id: "reusable-components-1",
            question: "What makes a component reusable?",
            answer:
              "A reusable component has a clear and focused responsibility, a predictable API, sensible defaults, and enough flexibility to work in multiple contexts without becoming overcomplicated.",
          },
        ],
        code: `<Button variant="primary">Save</Button>`,
      },
      {
        name: "Design Systems",
        summary:
          "A consistent set of components, styles, and rules that keeps UI cohesive.",
        mockQuestions: [
          {
            id: "design-systems-1",
            question: "What is a design system in frontend development?",
            answer:
              "A design system is a shared set of components, tokens, patterns, and rules that helps teams build consistent, accessible, and maintainable user interfaces across an application or product suite.",
          },
        ],
        code: `tokens: { spacing: 8, radius: 12 }`,
      },
    ],
  },
];
