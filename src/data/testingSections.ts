import type {Section} from "../types/shared.types";

export const sections: Section[] = [
  {
    title: "Testing Fundamentals",
    items: [
      {
        name: "Why Testing Matters",
        summary:
          "Tests help catch regressions, support refactoring, and document expected behaviour.",
        code: `function add(a, b) {
  return a + b;
}`,
      },
      {
        name: "Test Structure",
        summary: "Most tests follow an arrange, act, assert structure.",
        code: `test("adds two numbers", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});`,
      },
      {
        name: "Test Types",
        summary:
          "Common test levels include unit, integration, and end-to-end testing.",
        code: `// Unit: one function
// Integration: multiple parts working together
// E2E: full user flow in the app`,
      },
      {
        name: "Behaviour over Implementation",
        summary:
          "Good tests focus on what the user or consumer observes, not private implementation details.",
        code: `expect(screen.getByRole("button")).toBeInTheDocument();`,
      },
    ],
  },
  {
    title: "Jest Basics",
    items: [
      {
        name: "test and expect",
        summary:
          "Jest uses test blocks and expect assertions to define behaviour.",
        code: `test("returns true for active user", () => {
  expect(isActiveUser(user)).toBe(true);
});`,
      },
      {
        name: "Common Matchers",
        summary:
          "Matchers like toBe, toEqual, toContain, and toHaveLength cover common assertions.",
        code: `expect(2 + 2).toBe(4);
expect({ name: "Nick" }).toEqual({ name: "Nick" });
expect(["a", "b"]).toContain("a");`,
      },
      {
        name: "Grouping with describe",
        summary: "describe helps organise related tests into logical groups.",
        code: `describe("math utils", () => {
  test("adds", () => {
    expect(add(1, 2)).toBe(3);
  });
});`,
      },
      {
        name: "Only and Skip",
        summary:
          "Use only and skip to focus or temporarily ignore tests during development.",
        code: `test.only("runs just this test", () => {
  expect(true).toBe(true);
});

test.skip("skipped for now", () => {
  expect(true).toBe(false);
});`,
      },
    ],
  },
  {
    title: "Jest Mocks and Spies",
    items: [
      {
        name: "Mock Functions",
        summary: "jest.fn creates mock functions you can inspect and control.",
        interview: true,
        code: `const onClick = jest.fn();

onClick("save");

expect(onClick).toHaveBeenCalledWith("save");`,
      },
      {
        name: "Mock Return Values",
        summary: "Mocks can be configured to return specific values.",
        code: `const getUser = jest.fn().mockReturnValue({ id: 1 });

expect(getUser()).toEqual({ id: 1 });`,
      },
      {
        name: "Spies",
        summary:
          "jest.spyOn watches an existing method and can replace its implementation.",
        code: `const spy = jest.spyOn(console, "log");

console.log("hello");

expect(spy).toHaveBeenCalledWith("hello");

spy.mockRestore();`,
      },
      {
        name: "Mocking Modules",
        summary: "Entire modules can be mocked to isolate the unit under test.",
        code: `jest.mock("./api", () => ({
  fetchUsers: jest.fn(),
}));`,
      },
    ],
  },
  {
    title: "Async Testing",
    items: [
      {
        name: "Async and Await",
        summary:
          "Async tests can await promises directly for readable assertions.",
        code: `test("loads data", async () => {
  const data = await fetchData();
  expect(data).toEqual(["a", "b"]);
});`,
      },
      {
        name: "Rejects and Resolves",
        summary:
          "Jest provides helpers for promise-based success and failure assertions.",
        code: `await expect(fetchData()).resolves.toEqual(["a"]);
await expect(fetchFail()).rejects.toThrow("Oops");`,
      },
      {
        name: "done Callback",
        summary:
          "The done callback is used for callback-based async code, though promises are usually cleaner.",
        code: `test("calls callback", (done) => {
  setTimeout(() => {
    expect(true).toBe(true);
    done();
  }, 100);
});`,
      },
      {
        name: "Fake Timers",
        summary: "Fake timers let you control time-based behaviour in tests.",
        code: `jest.useFakeTimers();

setTimeout(() => {
  console.log("later");
}, 1000);

jest.runAllTimers();`,
      },
    ],
  },
  {
    title: "React Testing Library Basics",
    items: [
      {
        name: "render",
        summary:
          "render mounts a component into a test DOM so it can be queried and interacted with.",
        interview: true,
        code: `import { render, screen } from "@testing-library/react";

render(<Button />);
expect(screen.getByRole("button")).toBeInTheDocument();`,
      },
      {
        name: "Queries",
        summary:
          "RTL provides queries like getBy, queryBy, and findBy for different situations.",
        code: `screen.getByText("Save");
screen.queryByText("Loading");
await screen.findByText("Loaded");`,
      },
      {
        name: "ByRole",
        summary:
          "ByRole is usually the best query because it matches how users and assistive tech find elements.",
        code: `screen.getByRole("button", { name: "Save" });`,
      },
      {
        name: "screen",
        summary:
          "screen gives access to queries globally so tests read more clearly.",
        code: `render(<Form />);
expect(screen.getByLabelText("Email")).toBeInTheDocument();`,
      },
    ],
  },
  {
    title: "RTL User Interaction",
    items: [
      {
        name: "userEvent",
        summary:
          "userEvent simulates realistic user interactions more closely than lower-level event firing.",
        code: `import userEvent from "@testing-library/user-event";

const user = userEvent.setup();
await user.click(screen.getByRole("button", { name: "Save" }));`,
      },
      {
        name: "Typing Input",
        summary:
          "Typing can be simulated character by character for realistic form tests.",
        code: `const user = userEvent.setup();

await user.type(screen.getByLabelText("Email"), "nick@example.com");`,
      },
      {
        name: "Form Submission",
        summary:
          "Form behaviour can be tested by filling inputs and submitting via button click.",
        code: `await user.type(screen.getByLabelText("Name"), "Nick");
await user.click(screen.getByRole("button", { name: "Submit" }));`,
      },
      {
        name: "fireEvent",
        summary:
          "fireEvent is lower-level and still useful for some edge cases, though userEvent is often preferred.",
        code: `import { fireEvent } from "@testing-library/react";

fireEvent.change(input, { target: { value: "Hello" } });`,
      },
    ],
  },
  {
    title: "Testing React Components",
    items: [
      {
        name: "Props",
        summary:
          "Components should be tested with different props to verify different states and output.",
        code: `render(<Alert variant="error" message="Failed" />);
expect(screen.getByText("Failed")).toBeInTheDocument();`,
      },
      {
        name: "Conditional Rendering",
        summary:
          "Tests should verify what appears and disappears based on conditions.",
        code: `render(<Loader isLoading />);
expect(screen.getByText("Loading...")).toBeInTheDocument();`,
      },
      {
        name: "Callback Props",
        summary:
          "Callbacks can be tested with mock functions and user interactions.",
        code: `const onClose = jest.fn();

render(<Modal onClose={onClose} />);
await user.click(screen.getByRole("button", { name: "Close" }));

expect(onClose).toHaveBeenCalled();`,
      },
      {
        name: "Context Providers",
        summary:
          "Components that rely on context should be rendered within the appropriate provider.",
        code: `render(
  <ThemeProvider value="dark">
    <Header />
  </ThemeProvider>
);`,
      },
    ],
  },
  {
    title: "Mocking Network Requests",
    items: [
      {
        name: "Mock Service Worker",
        summary:
          "MSW intercepts real network calls in tests and returns controlled responses.",
        code: `import { http, HttpResponse } from "msw";

server.use(
  http.get("/api/users", () => {
    return HttpResponse.json([{ id: 1, name: "Nick" }]);
  })
);`,
      },
      {
        name: "Loading States",
        summary:
          "Components that fetch data should be tested for loading, success, and error states.",
        code: `expect(screen.getByText("Loading...")).toBeInTheDocument();
expect(await screen.findByText("Nick")).toBeInTheDocument();`,
      },
      {
        name: "Error States",
        summary:
          "APIs can fail, and tests should verify the UI handles failures properly.",
        code: `server.use(
  http.get("/api/users", () => HttpResponse.error())
);

expect(await screen.findByText("Something went wrong")).toBeInTheDocument();`,
      },
      {
        name: "Avoid Mocking fetch Directly",
        summary:
          "MSW is often preferred because it keeps tests closer to real app behaviour than mocking fetch manually.",
        code: `// Prefer intercepting the request over rewriting global.fetch`,
      },
    ],
  },
  {
    title: "Integration Testing",
    items: [
      {
        name: "Multiple Components Together",
        summary:
          "Integration tests verify how parts of the UI work together rather than in isolation.",
        code: `render(<CheckoutPage />);
await user.click(screen.getByRole("button", { name: "Pay now" }));`,
      },
      {
        name: "Routing",
        summary:
          "Routes can be tested by rendering components inside a memory router.",
        code: `render(
  <MemoryRouter initialEntries={["/settings"]}>
    <App />
  </MemoryRouter>
);`,
      },
      {
        name: "State Management",
        summary:
          "Redux, Zustand, or context state can be included in tests using real providers where practical.",
        code: `render(
  <Provider store={store}>
    <Cart />
  </Provider>
);`,
      },
      {
        name: "Forms plus API",
        summary:
          "A strong integration test covers user input, submission, and the resulting UI updates.",
        code: `await user.type(screen.getByLabelText("Email"), "nick@example.com");
await user.click(screen.getByRole("button", { name: "Save" }));`,
      },
    ],
  },
  {
    title: "API and Backend Testing",
    items: [
      {
        name: "Testing Pure Functions",
        summary:
          "Business logic should be tested directly when it doesn’t require the DOM or server.",
        code: `test("calculates total", () => {
  expect(calculateTotal([10, 20])).toBe(30);
});`,
      },
      {
        name: "Testing Express Routes",
        summary:
          "HTTP handlers can be tested by sending requests to the app in memory.",
        code: `const response = await request(app).get("/users");
expect(response.status).toBe(200);`,
      },
      {
        name: "supertest",
        summary:
          "supertest is commonly used to test Node and Express HTTP endpoints.",
        code: `import request from "supertest";

await request(app)
  .post("/users")
  .send({ name: "Nick" })
  .expect(201);`,
      },
      {
        name: "Database Test Isolation",
        summary:
          "Backend tests should avoid leaking state between runs by resetting data or using test databases.",
        code: `beforeEach(async () => {
  await db.reset();
});`,
      },
    ],
  },
  {
    title: "End-to-End Testing",
    items: [
      {
        name: "What E2E Covers",
        summary:
          "End-to-end tests verify real user flows across the full application stack.",
        code: `// Example: login -> navigate -> submit form -> see success message`,
      },
      {
        name: "Playwright Basics",
        summary:
          "Playwright is a modern tool for browser automation and end-to-end testing.",
        code: `await page.goto("/login");
await page.fill('input[name="email"]', "nick@example.com");
await page.click('button[type="submit"]');`,
      },
      {
        name: "Assertions in E2E",
        summary:
          "E2E tests should assert visible outcomes that matter to users.",
        code: `await expect(page.getByText("Welcome back")).toBeVisible();`,
      },
      {
        name: "Stable Selectors",
        summary:
          "Test selectors such as data-testid can help avoid flaky tests when UI structure changes.",
        code: `<button data-testid="save-button">Save</button>`,
      },
    ],
  },
  {
    title: "Vitest",
    items: [
      {
        name: "What Vitest Is",
        summary:
          "Vitest is a fast test runner designed for Vite-based projects and feels very similar to Jest.",
        code: `import { describe, it, expect } from "vitest";

describe("math", () => {
  it("adds numbers", () => {
    expect(1 + 1).toBe(2);
  });
});`,
      },
      {
        name: "Vitest Mock Functions",
        summary: "Vitest provides vi.fn and related helpers for mocking.",
        code: `import { vi } from "vitest";

const onSave = vi.fn();
onSave("done");

expect(onSave).toHaveBeenCalledWith("done");`,
      },
      {
        name: "Using Vitest with RTL",
        summary:
          "Vitest works well with React Testing Library in modern frontend projects.",
        code: `import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

it("renders button", () => {
  render(<Button />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});`,
      },
      {
        name: "Jest vs Vitest",
        summary:
          "Vitest is often chosen in Vite projects for speed and native integration, while Jest remains very common across many codebases.",
        code: `// Jest: jest.fn()
// Vitest: vi.fn()`,
      },
    ],
  },
  {
    title: "Good Testing Practices",
    items: [
      {
        name: "Keep Tests Focused",
        summary:
          "Each test should cover one behaviour clearly rather than many unrelated outcomes.",
        code: `test("shows error when email is missing", async () => {
  // single focused behaviour
});`,
      },
      {
        name: "Use Descriptive Test Names",
        summary:
          "A test name should explain the behaviour, not just the function being called.",
        code: `test("shows a validation message when email is empty", () => {
  // ...
});`,
      },
      {
        name: "Avoid Over-mocking",
        summary: "Too much mocking can make tests unrealistic and fragile.",
        code: `// Prefer real rendering and network interception over mocking every dependency`,
      },
      {
        name: "Test Public Behaviour",
        summary:
          "Tests should verify outputs, side effects, and visible behaviour instead of internal implementation details.",
        code: `expect(screen.getByRole("alert")).toHaveTextContent("Failed to save");`,
      },
    ],
  },
];
