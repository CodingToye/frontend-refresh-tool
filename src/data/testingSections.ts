import type {Section} from "../types/Section.types";

export const sections: Section[] = [
  {
    title: "Testing Fundamentals",
    items: [
      {
        name: "Why Testing Matters",
        summary:
          "Tests help catch regressions, support refactoring, and document expected behaviour.",
        interview: true,
        mockQuestions: [
          {
            id: "why-testing-matters-1",
            question: "Why does testing matter in software development?",
            answer:
              "Testing helps catch regressions, gives confidence when refactoring, documents expected behaviour, and reduces the risk of breaking existing features.",
          },
          {
            id: "why-testing-matters-2",
            question: "How do tests support refactoring?",
            answer:
              "Tests provide a safety net, so developers can change internal implementation while checking that the visible behaviour still works as expected.",
          },
        ],
        code: `function add(a, b) {
  return a + b;
}`,
      },
      {
        name: "Test Structure",
        summary: "Most tests follow an arrange, act, assert structure.",
        mockQuestions: [
          {
            id: "test-structure-1",
            question: "What is the arrange, act, assert pattern?",
            answer:
              "Arrange sets up the test data and environment, act performs the behaviour being tested, and assert verifies the outcome.",
          },
        ],
        code: `test("adds two numbers", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});`,
      },
      {
        name: "Test Types",
        summary:
          "Common test levels include unit, integration, and end-to-end testing.",
        interview: true,
        mockQuestions: [
          {
            id: "test-types-1",
            question:
              "What is the difference between unit, integration, and end-to-end tests?",
            answer:
              "Unit tests focus on small isolated pieces of logic, integration tests verify multiple parts working together, and end-to-end tests cover real user flows across the full application stack.",
          },
          {
            id: "test-types-2",
            question: "Why is it useful to have different levels of testing?",
            answer:
              "Different test levels balance speed, confidence, and realism. Unit tests are fast, integration tests verify collaboration, and end-to-end tests validate real user journeys.",
          },
        ],
        code: `// Unit: one function
// Integration: multiple parts working together
// E2E: full user flow in the app`,
      },
      {
        name: "Behaviour over Implementation",
        summary:
          "Good tests focus on what the user or consumer observes, not private implementation details.",
        interview: true,
        mockQuestions: [
          {
            id: "behaviour-over-implementation-1",
            question:
              "Why should tests focus on behaviour over implementation details?",
            answer:
              "Behaviour-focused tests are more resilient because they verify what users or consumers observe, rather than internal details that may change during refactoring.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "test-and-expect-1",
            question: "How do test and expect work in Jest?",
            answer:
              "test defines a test case, and expect is used with matchers to assert that the result matches the expected behaviour.",
          },
        ],
        code: `test("returns true for active user", () => {
  expect(isActiveUser(user)).toBe(true);
});`,
      },
      {
        name: "Common Matchers",
        summary:
          "Matchers like toBe, toEqual, toContain, and toHaveLength cover common assertions.",
        mockQuestions: [
          {
            id: "common-matchers-1",
            question:
              "What is the difference between toBe and toEqual in Jest?",
            answer:
              "toBe checks strict equality, while toEqual checks deep equality for objects and arrays.",
          },
        ],
        code: `expect(2 + 2).toBe(4);
expect({ name: "Nick" }).toEqual({ name: "Nick" });
expect(["a", "b"]).toContain("a");`,
      },
      {
        name: "Grouping with describe",
        summary: "describe helps organise related tests into logical groups.",
        mockQuestions: [
          {
            id: "grouping-with-describe-1",
            question: "Why is describe useful in test files?",
            answer:
              "describe groups related tests together, making test suites easier to read, organise, and maintain.",
          },
        ],
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
        mockQuestions: [
          {
            id: "only-and-skip-1",
            question: "What do only and skip do in Jest?",
            answer:
              "only runs just the selected test or suite, while skip temporarily ignores a test or suite.",
          },
        ],
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
        mockQuestions: [
          {
            id: "mock-functions-1",
            question: "What is jest.fn used for?",
            answer:
              "jest.fn creates a mock function that can track calls, arguments, return values, and be configured for different behaviours in tests.",
          },
          {
            id: "mock-functions-2",
            question: "Why are mock functions useful in testing?",
            answer:
              "Mock functions are useful for verifying interactions, isolating dependencies, and testing callback behaviour without relying on real implementations.",
          },
        ],
        code: `const onClick = jest.fn();

onClick("save");

expect(onClick).toHaveBeenCalledWith("save");`,
      },
      {
        name: "Mock Return Values",
        summary: "Mocks can be configured to return specific values.",
        mockQuestions: [
          {
            id: "mock-return-values-1",
            question: "Why would you mock a return value in a test?",
            answer:
              "Mocking return values lets you control dependency behaviour so the test stays predictable and focused on the unit under test.",
          },
        ],
        code: `const getUser = jest.fn().mockReturnValue({ id: 1 });

expect(getUser()).toEqual({ id: 1 });`,
      },
      {
        name: "Spies",
        summary:
          "jest.spyOn watches an existing method and can replace its implementation.",
        interview: true,
        mockQuestions: [
          {
            id: "spies-1",
            question:
              "What is the difference between a spy and a plain mock function?",
            answer:
              "A spy wraps an existing method so you can observe or replace it, while a plain mock function is created from scratch with jest.fn.",
          },
        ],
        code: `const spy = jest.spyOn(console, "log");

console.log("hello");

expect(spy).toHaveBeenCalledWith("hello");

spy.mockRestore();`,
      },
      {
        name: "Mocking Modules",
        summary: "Entire modules can be mocked to isolate the unit under test.",
        interview: true,
        mockQuestions: [
          {
            id: "mocking-modules-1",
            question: "Why might you mock a module in Jest?",
            answer:
              "Mocking a module helps isolate the unit under test from external dependencies such as APIs, utilities, or expensive side effects.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "async-and-await-testing-1",
            question: "Why is async/await useful in tests?",
            answer:
              "async/await makes asynchronous tests easier to read and reason about by letting you write promise-based code in a more linear style.",
          },
        ],
        code: `test("loads data", async () => {
  const data = await fetchData();
  expect(data).toEqual(["a", "b"]);
});`,
      },
      {
        name: "Rejects and Resolves",
        summary:
          "Jest provides helpers for promise-based success and failure assertions.",
        mockQuestions: [
          {
            id: "rejects-and-resolves-1",
            question: "What do resolves and rejects help with in Jest?",
            answer:
              "They make it easy to assert promise outcomes directly, whether the promise should resolve successfully or reject with an error.",
          },
        ],
        code: `await expect(fetchData()).resolves.toEqual(["a"]);
await expect(fetchFail()).rejects.toThrow("Oops");`,
      },
      {
        name: "done Callback",
        summary:
          "The done callback is used for callback-based async code, though promises are usually cleaner.",
        mockQuestions: [
          {
            id: "done-callback-1",
            question: "When is the done callback used in tests?",
            answer:
              "The done callback is used for callback-based async code where the test runner needs an explicit signal that asynchronous work has finished.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "fake-timers-1",
            question: "Why are fake timers useful in tests?",
            answer:
              "Fake timers let you control and advance time-based behaviour deterministically without waiting for real time to pass.",
          },
        ],
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
        mockQuestions: [
          {
            id: "rtl-render-1",
            question: "What does render do in React Testing Library?",
            answer:
              "render mounts a React component into a test DOM so queries and user interactions can be performed against it.",
          },
        ],
        code: `import { render, screen } from "@testing-library/react";

render(<Button />);
expect(screen.getByRole("button")).toBeInTheDocument();`,
      },
      {
        name: "Queries",
        summary:
          "RTL provides queries like getBy, queryBy, and findBy for different situations.",
        interview: true,
        mockQuestions: [
          {
            id: "rtl-queries-1",
            question:
              "What is the difference between getBy, queryBy, and findBy in React Testing Library?",
            answer:
              "getBy throws if no element is found, queryBy returns null if not found, and findBy is async and waits for an element to appear.",
          },
        ],
        code: `screen.getByText("Save");
screen.queryByText("Loading");
await screen.findByText("Loaded");`,
      },
      {
        name: "ByRole",
        summary:
          "ByRole is usually the best query because it matches how users and assistive tech find elements.",
        interview: true,
        mockQuestions: [
          {
            id: "byrole-1",
            question: "Why is getByRole usually the preferred RTL query?",
            answer:
              "getByRole is preferred because it reflects how users and assistive technologies identify elements, making tests more accessible and resilient.",
          },
        ],
        code: `screen.getByRole("button", { name: "Save" });`,
      },
      {
        name: "screen",
        summary:
          "screen gives access to queries globally so tests read more clearly.",
        mockQuestions: [
          {
            id: "screen-1",
            question: "Why is screen often used in RTL tests?",
            answer:
              "screen provides globally available queries, which often makes tests easier to read by avoiding repeated destructuring from render.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "userevent-1",
            question: "Why is userEvent usually preferred over fireEvent?",
            answer:
              "userEvent more closely simulates real user behaviour such as typing, clicking, and tabbing, making tests more realistic.",
          },
        ],
        code: `import userEvent from "@testing-library/user-event";

const user = userEvent.setup();
await user.click(screen.getByRole("button", { name: "Save" }));`,
      },
      {
        name: "Typing Input",
        summary:
          "Typing can be simulated character by character for realistic form tests.",
        mockQuestions: [
          {
            id: "typing-input-1",
            question: "Why is realistic typing behaviour useful in tests?",
            answer:
              "Realistic typing helps verify that input handling, validation, and updates work the way a user would actually experience them.",
          },
        ],
        code: `const user = userEvent.setup();

await user.type(screen.getByLabelText("Email"), "nick@example.com");`,
      },
      {
        name: "Form Submission",
        summary:
          "Form behaviour can be tested by filling inputs and submitting via button click.",
        mockQuestions: [
          {
            id: "form-submission-1",
            question: "What should a good form submission test cover?",
            answer:
              "A good form submission test should cover user input, submission, validation or API behaviour, and the resulting UI update or callback.",
          },
        ],
        code: `await user.type(screen.getByLabelText("Name"), "Nick");
await user.click(screen.getByRole("button", { name: "Submit" }));`,
      },
      {
        name: "fireEvent",
        summary:
          "fireEvent is lower-level and still useful for some edge cases, though userEvent is often preferred.",
        mockQuestions: [
          {
            id: "fireevent-1",
            question: "When might fireEvent still be useful?",
            answer:
              "fireEvent can still be useful for lower-level edge cases, custom events, or situations where a simpler direct event trigger is enough.",
          },
        ],
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
        mockQuestions: [
          {
            id: "testing-props-1",
            question: "Why should components be tested with different props?",
            answer:
              "Testing with different props helps verify that the component renders the correct states and behaviour under different inputs.",
          },
        ],
        code: `render(<Alert variant="error" message="Failed" />);
expect(screen.getByText("Failed")).toBeInTheDocument();`,
      },
      {
        name: "Conditional Rendering",
        summary:
          "Tests should verify what appears and disappears based on conditions.",
        mockQuestions: [
          {
            id: "conditional-rendering-testing-1",
            question:
              "What should be verified when testing conditional rendering?",
            answer:
              "Tests should verify that the correct UI appears or disappears when conditions change, based on what the user should actually see.",
          },
        ],
        code: `render(<Loader isLoading />);
expect(screen.getByText("Loading...")).toBeInTheDocument();`,
      },
      {
        name: "Callback Props",
        summary:
          "Callbacks can be tested with mock functions and user interactions.",
        interview: true,
        mockQuestions: [
          {
            id: "callback-props-1",
            question: "How do you test callback props in React components?",
            answer:
              "Callback props are typically tested by passing a mock function, simulating a user action, and asserting that the callback was called correctly.",
          },
        ],
        code: `const onClose = jest.fn();

render(<Modal onClose={onClose} />);
await user.click(screen.getByRole("button", { name: "Close" }));

expect(onClose).toHaveBeenCalled();`,
      },
      {
        name: "Context Providers",
        summary:
          "Components that rely on context should be rendered within the appropriate provider.",
        mockQuestions: [
          {
            id: "context-providers-testing-1",
            question:
              "Why do components using context often need wrapper providers in tests?",
            answer:
              "Because the component depends on context values that must be supplied during rendering, otherwise it may fail or not behave correctly.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "msw-1",
            question: "What problem does Mock Service Worker solve?",
            answer:
              "MSW intercepts network requests at the network layer, allowing tests to stay closer to real app behaviour while returning controlled responses.",
          },
          {
            id: "msw-2",
            question: "Why is MSW often preferred over mocking fetch directly?",
            answer:
              "MSW keeps tests more realistic because the application code still makes real requests, while the responses are intercepted and controlled externally.",
          },
        ],
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
        mockQuestions: [
          {
            id: "loading-states-testing-1",
            question: "Why should loading states be tested explicitly?",
            answer:
              "Loading states are part of the real user experience, so tests should verify that pending UI appears correctly before data arrives.",
          },
        ],
        code: `expect(screen.getByText("Loading...")).toBeInTheDocument();
expect(await screen.findByText("Nick")).toBeInTheDocument();`,
      },
      {
        name: "Error States",
        summary:
          "APIs can fail, and tests should verify the UI handles failures properly.",
        mockQuestions: [
          {
            id: "error-states-testing-1",
            question: "Why should error states be included in component tests?",
            answer:
              "Error states should be tested because failures are part of real application behaviour, and the UI needs to handle them clearly and safely.",
          },
        ],
        code: `server.use(
  http.get("/api/users", () => HttpResponse.error())
);

expect(await screen.findByText("Something went wrong")).toBeInTheDocument();`,
      },
      {
        name: "Avoid Mocking fetch Directly",
        summary:
          "MSW is often preferred because it keeps tests closer to real app behaviour than mocking fetch manually.",
        mockQuestions: [
          {
            id: "avoid-mocking-fetch-directly-1",
            question:
              "What is the downside of mocking fetch directly in many tests?",
            answer:
              "Mocking fetch directly can make tests more tightly coupled to implementation details and less representative of how the app behaves in reality.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "multiple-components-together-1",
            question: "What is the goal of an integration test?",
            answer:
              "The goal of an integration test is to verify how multiple parts of the system work together rather than testing one unit in isolation.",
          },
        ],
        code: `render(<CheckoutPage />);
await user.click(screen.getByRole("button", { name: "Pay now" }));`,
      },
      {
        name: "Routing",
        summary:
          "Routes can be tested by rendering components inside a memory router.",
        mockQuestions: [
          {
            id: "routing-testing-1",
            question: "Why is MemoryRouter useful in route tests?",
            answer:
              "MemoryRouter lets you simulate navigation and route state in tests without depending on a real browser history environment.",
          },
        ],
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
        mockQuestions: [
          {
            id: "state-management-testing-1",
            question:
              "Why is it often better to use real providers in integration tests?",
            answer:
              "Using real providers makes tests more representative of actual app behaviour and avoids over-mocking important state interactions.",
          },
        ],
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
        mockQuestions: [
          {
            id: "forms-plus-api-1",
            question:
              "What makes a good integration test for a form that hits an API?",
            answer:
              "It should cover filling in fields, submitting the form, the API interaction, and the resulting success or error UI that the user sees.",
          },
        ],
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
        mockQuestions: [
          {
            id: "testing-pure-functions-1",
            question: "Why are pure functions usually easy to test?",
            answer:
              "Pure functions are easy to test because they depend only on their inputs and return predictable outputs without side effects.",
          },
        ],
        code: `test("calculates total", () => {
  expect(calculateTotal([10, 20])).toBe(30);
});`,
      },
      {
        name: "Testing Express Routes",
        summary:
          "HTTP handlers can be tested by sending requests to the app in memory.",
        interview: true,
        mockQuestions: [
          {
            id: "testing-express-routes-1",
            question: "How are Express routes commonly tested?",
            answer:
              "Express routes are commonly tested by sending in-memory HTTP requests to the app and asserting on the response status, body, and headers.",
          },
        ],
        code: `const response = await request(app).get("/users");
expect(response.status).toBe(200);`,
      },
      {
        name: "supertest",
        summary:
          "supertest is commonly used to test Node and Express HTTP endpoints.",
        mockQuestions: [
          {
            id: "supertest-1",
            question: "What is supertest used for?",
            answer:
              "supertest is used to test HTTP endpoints by making requests against a Node or Express app in memory and asserting on the responses.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "database-test-isolation-1",
            question: "Why is database test isolation important?",
            answer:
              "Test isolation prevents one test run from affecting another, which keeps backend tests reliable, repeatable, and easier to debug.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "what-e2e-covers-1",
            question: "What do end-to-end tests cover?",
            answer:
              "End-to-end tests cover real user flows through the application, often across the UI, network layer, backend, and persistence stack.",
          },
        ],
        code: `// Example: login -> navigate -> submit form -> see success message`,
      },
      {
        name: "Playwright Basics",
        summary:
          "Playwright is a modern tool for browser automation and end-to-end testing.",
        interview: true,
        mockQuestions: [
          {
            id: "playwright-basics-1",
            question: "Why is Playwright popular for end-to-end testing?",
            answer:
              "Playwright provides modern browser automation, strong selector support, good reliability, and cross-browser testing capabilities.",
          },
        ],
        code: `await page.goto("/login");
await page.fill('input[name="email"]', "nick@example.com");
await page.click('button[type="submit"]');`,
      },
      {
        name: "Assertions in E2E",
        summary:
          "E2E tests should assert visible outcomes that matter to users.",
        mockQuestions: [
          {
            id: "assertions-in-e2e-1",
            question: "What should end-to-end assertions usually focus on?",
            answer:
              "They should focus on visible outcomes and meaningful user-facing behaviour rather than internal implementation details.",
          },
        ],
        code: `await expect(page.getByText("Welcome back")).toBeVisible();`,
      },
      {
        name: "Stable Selectors",
        summary:
          "Test selectors such as data-testid can help avoid flaky tests when UI structure changes.",
        mockQuestions: [
          {
            id: "stable-selectors-1",
            question: "Why are stable selectors important in E2E tests?",
            answer:
              "Stable selectors reduce test flakiness by making tests less sensitive to cosmetic UI or DOM structure changes.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "what-vitest-is-1",
            question: "What is Vitest?",
            answer:
              "Vitest is a fast modern test runner designed for Vite-based projects, with an API that feels very similar to Jest.",
          },
        ],
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
        mockQuestions: [
          {
            id: "vitest-mock-functions-1",
            question: "What is vi.fn used for in Vitest?",
            answer:
              "vi.fn creates mock functions in Vitest, similar to jest.fn, and can track calls and be configured for custom behaviour.",
          },
        ],
        code: `import { vi } from "vitest";

const onSave = vi.fn();
onSave("done");

expect(onSave).toHaveBeenCalledWith("done");`,
      },
      {
        name: "Using Vitest with RTL",
        summary:
          "Vitest works well with React Testing Library in modern frontend projects.",
        mockQuestions: [
          {
            id: "using-vitest-with-rtl-1",
            question:
              "Why do Vitest and React Testing Library pair well together?",
            answer:
              "Vitest provides fast test execution while React Testing Library provides user-focused rendering and queries, making them a strong combination for frontend testing.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "jest-vs-vitest-1",
            question: "What is one advantage Vitest has in Vite projects?",
            answer:
              "Vitest integrates naturally with Vite, which often results in faster startup and test execution in Vite-based codebases.",
          },
          {
            id: "jest-vs-vitest-2",
            question: "Why does Jest still remain common?",
            answer:
              "Jest remains common because it is widely adopted, mature, well documented, and used across many existing codebases and teams.",
          },
        ],
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
        interview: true,
        mockQuestions: [
          {
            id: "keep-tests-focused-1",
            question: "Why should a test stay focused on one behaviour?",
            answer:
              "Focused tests are easier to read, debug, and maintain because failures point more clearly to one specific broken behaviour.",
          },
        ],
        code: `test("shows error when email is missing", async () => {
  // single focused behaviour
});`,
      },
      {
        name: "Use Descriptive Test Names",
        summary:
          "A test name should explain the behaviour, not just the function being called.",
        mockQuestions: [
          {
            id: "use-descriptive-test-names-1",
            question: "What makes a good test name?",
            answer:
              "A good test name clearly describes the behaviour being verified so the intent of the test is obvious when reading the suite or a failure report.",
          },
        ],
        code: `test("shows a validation message when email is empty", () => {
  // ...
});`,
      },
      {
        name: "Avoid Over-mocking",
        summary: "Too much mocking can make tests unrealistic and fragile.",
        interview: true,
        mockQuestions: [
          {
            id: "avoid-over-mocking-1",
            question: "Why is over-mocking a problem in tests?",
            answer:
              "Over-mocking can make tests unrealistic, tightly coupled to implementation details, and less trustworthy as indicators of real application behaviour.",
          },
        ],
        code: `// Prefer real rendering and network interception over mocking every dependency`,
      },
      {
        name: "Test Public Behaviour",
        summary:
          "Tests should verify outputs, side effects, and visible behaviour instead of internal implementation details.",
        interview: true,
        mockQuestions: [
          {
            id: "test-public-behaviour-1",
            question: "What does it mean to test public behaviour?",
            answer:
              "Testing public behaviour means verifying the outputs, side effects, and visible results that matter to the user or consumer, rather than internal implementation details.",
          },
        ],
        code: `expect(screen.getByRole("alert")).toHaveTextContent("Failed to save");`,
      },
    ],
  },
];
