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
        code: `function Button() {
  return <button>Click</button>;
}`,
      },
      {
        name: "Props",
        summary:
          "Inputs passed into components. They let you make components reusable and configurable.",
        interview: true,
        code: `function Button({ label }) {
  return <button>{label}</button>;
}`,
      },
      {
        name: "Composition",
        summary:
          "Building larger UIs by combining smaller components instead of inheriting behaviour.",
        code: `function Card({ children }) {
  return <div className="card">{children}</div>;
}`,
      },
      {
        name: "Children",
        summary:
          "Special prop used to pass nested UI into a component, often for wrappers and layouts.",
        code: `function Layout({ children }) {
  return <main>{children}</main>;
}`,
      },
      {
        name: "Lists and Keys",
        summary:
          "Render arrays with map and use stable keys so React can track items efficiently.",
        interview: true,
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
        code: `const theme = useContext(ThemeContext);
return <div>{theme}</div>;`,
      },
      {
        name: "useRef",
        summary:
          "Stores mutable values across renders and can point to DOM elements.",
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
        ],
        code: `const total = useMemo(() => items.reduce(sumFn, 0), [items]);
const onClick = useCallback(() => save(id), [id]);`,
      },
      {
        name: "useReducer",
        summary:
          "Useful when state logic is more complex or involves multiple related transitions.",
        code: `const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: "save" });`,
      },
      {
        name: "Custom Hooks",
        summary:
          "Extract reusable stateful logic into your own hook functions.",
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
        code: `const [isOpen, setIsOpen] = useState(false);`,
      },
      {
        name: "Lifting State Up",
        summary:
          "Move shared state to the nearest common parent so multiple children stay in sync.",
        interview: true,
        code: `function Parent() {
  const [value, setValue] = useState("");
  return <Child value={value} onChange={setValue} />;
}`,
      },
      {
        name: "Context API",
        summary:
          "Good for shared app values like theme, auth, or simple global state.",
        code: `const AuthContext = createContext(null);
<AuthContext.Provider value={user}>{children}</AuthContext.Provider>`,
      },
      {
        name: "Global State",
        summary:
          "Use libraries like Redux or Zustand when many parts of the app depend on shared state.",
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
        code: `<Mouse>{({ x, y }) => <p>{x}, {y}</p>}</Mouse>`,
      },
      {
        name: "Higher Order Components",
        summary:
          "A function that wraps a component to enhance or reuse behaviour.",
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
        code: `<button onClick={handleClick}>Save</button>`,
      },
      {
        name: "Controlled Inputs",
        summary:
          "Input value is driven by React state, making it easier to validate and manage.",
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
        code: `useEffect(() => {
  connect();
  return () => disconnect();
}, []);`,
      },
      {
        name: "Dependency Arrays",
        summary:
          "These control when an effect reruns and should reflect the values used inside it.",
        code: `useEffect(() => {
  fetchUser(userId);
}, [userId]);`,
      },
      {
        name: "Cleanup Functions",
        summary:
          "Return a function from useEffect to remove subscriptions, timers, or listeners.",
        code: `useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
}, []);`,
      },
      {
        name: "Avoiding Unnecessary Effects",
        summary:
          "Not everything belongs in useEffect; derive values during render when possible.",
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
        code: `const Row = React.memo(function Row({ item }) {
  return <div>{item.name}</div>;
});`,
      },
      {
        name: "Memoisation",
        summary:
          "Cache values or functions to avoid needless recalculation or unstable references.",
        code: `const sorted = useMemo(() => sortItems(items), [items]);`,
      },
      {
        name: "Avoiding Re-renders",
        summary:
          "Keep state local, pass stable props, and avoid recreating expensive work unnecessarily.",
        code: `const onSelect = useCallback((id) => setSelected(id), []);`,
      },
      {
        name: "Lazy Loading",
        summary:
          "Load code only when needed, often with React.lazy and Suspense.",
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
        code: `const Input = forwardRef((props, ref) => <input ref={ref} {...props} />);`,
      },
      {
        name: "Imperative APIs",
        summary:
          "Occasionally useful when exposing controlled imperative methods from a component.",
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
        code: `useEffect(() => {
  fetch("/api/users").then((r) => r.json()).then(setUsers);
}, []);`,
      },
      {
        name: "Loading and Error States",
        summary:
          "Always account for pending, failed, and empty responses in UI.",
        code: `if (isLoading) return <Spinner />;
if (error) return <Error />;`,
      },
      {
        name: "React Query",
        summary:
          "Handles server state, caching, background refetching, and request status cleanly.",
        code: `const { data, isLoading } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});`,
      },
      {
        name: "Suspense",
        summary:
          "A React mechanism for coordinating loading states, increasingly used in modern data patterns.",
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
        code: `<Routes>
  <Route path="/" element={<Home />} />
</Routes>`,
      },
      {
        name: "Route Params",
        summary:
          "Dynamic URL values such as an id, often used to fetch specific data.",
        code: `const { id } = useParams();`,
      },
      {
        name: "Nested Routes",
        summary:
          "Useful for layouts where child pages render inside shared parent structure.",
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
        code: `import styles from "./Button.module.css";
<button className={styles.button}>Save</button>`,
      },
      {
        name: "CSS-in-JS",
        summary:
          "Define styles in JavaScript, often with props-driven dynamic styling.",
        code: `const Button = styled.button\`
  padding: 8px;
\`;`,
      },
      {
        name: "Tailwind",
        summary:
          "Utility-first classes that let you build UI directly in markup.",
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
        code: `render(<Button />);
expect(screen.getByRole("button")).toBeInTheDocument();`,
      },
      {
        name: "Component Testing",
        summary:
          "Verify rendering, behaviour, and interactions rather than internal implementation.",
        code: `await user.click(screen.getByText("Save"));`,
      },
      {
        name: "Mocking APIs",
        summary:
          "Simulate server responses so components can be tested without real network calls.",
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
        code: `<ErrorBoundary fallback={<ErrorPage />}>
  <App />
</ErrorBoundary>`,
      },
      {
        name: "Portals",
        summary:
          "Render UI outside the normal DOM hierarchy, useful for modals and tooltips.",
        code: `createPortal(<Modal />, document.body);`,
      },
      {
        name: "Suspense",
        summary:
          "Lets React pause part of the UI while waiting for asynchronous work.",
        code: `<Suspense fallback={<Loading />}>
  <Widget />
</Suspense>`,
      },
      {
        name: "Concurrent Features",
        summary:
          "Modern React can prioritise updates to keep the interface responsive.",
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
        code: `type ButtonProps = { label: string };`,
      },
      {
        name: "Typing Hooks",
        summary:
          "Type state, refs, events, and custom hooks so your editor can guide usage.",
        code: `const [count, setCount] = useState<number>(0);`,
      },
      {
        name: "Generics",
        summary:
          "Helpful for reusable components and hooks that work with different data types.",
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
        code: `features/
  users/
    components/
    hooks/`,
      },
      {
        name: "Feature-based Design",
        summary:
          "Group files by feature rather than by file type to improve scalability.",
        code: `src/features/profile/ProfilePage.tsx`,
      },
      {
        name: "Reusable Components",
        summary:
          "Build shared UI pieces with clear APIs so they can be used across the app.",
        code: `<Button variant="primary">Save</Button>`,
      },
      {
        name: "Design Systems",
        summary:
          "A consistent set of components, styles, and rules that keeps UI cohesive.",
        code: `tokens: { spacing: 8, radius: 12 }`,
      },
    ],
  },
];
