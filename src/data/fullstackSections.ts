import type {Section} from "@/components/SectionCard/types";

export const sections: Section[] = [
  {
    title: "Foundations",
    items: [
      {
        name: "What System Design Is",
        summary:
          "System design focuses on how an application is structured end-to-end, including frontend, backend, data, and infrastructure.",
        interview: true,
        mockQuestions: [
          {
            id: "system-design-1",
            question:
              "What is system design in the context of web applications?",
            answer:
              "System design is the process of defining the architecture of an application, including how the frontend, backend, database, and infrastructure interact to meet performance, scalability, and reliability requirements.",
          },
        ],
        code: `User -> Frontend -> API -> Database`,
      },
      {
        name: "Request Flow",
        summary:
          "Understanding how a request moves through the system is key to debugging, scaling, and optimising applications.",
        interview: true,
        mockQuestions: [
          {
            id: "request-flow-1",
            question: "What happens when a user loads a web page?",
            answer:
              "The browser makes a request to a server or CDN, receives HTML/JS/CSS, executes JavaScript, fetches additional data via APIs, and renders the UI.",
          },
        ],
        code: `Browser -> CDN -> API -> DB -> Response`,
      },
    ],
  },
  {
    title: "Frontend Architecture",
    items: [
      {
        name: "Client vs Server Rendering",
        summary:
          "Frontend apps can render on the client, server, or both depending on performance and SEO needs.",
        interview: true,
        mockQuestions: [
          {
            id: "csr-ssr-1",
            question: "When would you choose SSR over CSR?",
            answer:
              "SSR is useful for SEO, initial load performance, and dynamic content, while CSR is often used for highly interactive apps where initial load is less critical.",
          },
        ],
        code: `// CSR
fetch("/api/data");

// SSR
const data = await fetch(...)`,
      },
      {
        name: "State Management",
        summary:
          "State can be local, global, or server-driven depending on the data lifecycle and sharing requirements.",
        mockQuestions: [
          {
            id: "state-management-1",
            question: "When should state be global vs local?",
            answer:
              "State should be global when shared across multiple components or pages, and local when it only affects a single component or small subtree.",
          },
        ],
        code: `useState()
useContext()
React Query`,
      },
      {
        name: "API Interaction Patterns",
        summary:
          "Frontend apps typically interact with APIs via REST or GraphQL, often using caching and async data libraries.",
        mockQuestions: [
          {
            id: "api-patterns-1",
            question: "Why use a data fetching library like React Query?",
            answer:
              "It simplifies caching, background refetching, error handling, and loading states, reducing boilerplate and improving consistency.",
          },
        ],
        code: `useQuery(["users"], fetchUsers);`,
      },
    ],
  },
  {
    title: "Backend Architecture",
    items: [
      {
        name: "API Design",
        summary:
          "APIs should be consistent, predictable, and designed around resources or use cases.",
        interview: true,
        mockQuestions: [
          {
            id: "api-design-1",
            question: "What makes a good API design?",
            answer:
              "A good API is consistent, well-structured, versioned, uses clear naming, handles errors properly, and aligns with client needs.",
          },
        ],
        code: `GET /users
POST /users`,
      },
      {
        name: "REST vs GraphQL",
        summary:
          "REST exposes fixed endpoints, while GraphQL allows flexible querying of data.",
        mockQuestions: [
          {
            id: "rest-vs-graphql-1",
            question: "When would you choose GraphQL over REST?",
            answer:
              "GraphQL is useful when clients need flexible data fetching, reducing over-fetching or under-fetching compared to REST.",
          },
        ],
        code: `query {
  user {
    name
  }
}`,
      },
      {
        name: "Layered Architecture",
        summary:
          "Separating controllers, services, and data access improves maintainability and testability.",
        mockQuestions: [
          {
            id: "layered-architecture-1",
            question: "Why separate controller, service, and data layers?",
            answer:
              "It improves separation of concerns, making the system easier to test, maintain, and evolve.",
          },
        ],
        code: `Controller -> Service -> Repository`,
      },
    ],
  },
  {
    title: "Data and Storage",
    items: [
      {
        name: "SQL vs NoSQL",
        summary:
          "Relational databases are structured and consistent, while NoSQL databases are flexible and scalable.",
        interview: true,
        mockQuestions: [
          {
            id: "sql-nosql-1",
            question: "When would you choose SQL vs NoSQL?",
            answer:
              "SQL is ideal for structured data and relationships, while NoSQL is useful for flexible schemas, high scale, and specific access patterns.",
          },
        ],
        code: `SELECT * FROM users;`,
      },
      {
        name: "Indexing",
        summary:
          "Indexes improve query performance by reducing the amount of data scanned.",
        mockQuestions: [
          {
            id: "indexing-1",
            question: "What is a database index?",
            answer:
              "An index is a data structure that improves query performance by allowing faster lookups on specific columns.",
          },
        ],
        code: `CREATE INDEX idx_users_email ON users(email);`,
      },
      {
        name: "Caching",
        summary:
          "Caching reduces load on databases and improves response times.",
        interview: true,
        mockQuestions: [
          {
            id: "caching-1",
            question: "Where can caching be applied in a system?",
            answer:
              "Caching can be applied at the CDN level, API layer, or database layer using tools like Redis.",
          },
        ],
        code: `cache.get("user:123")`,
      },
    ],
  },
  {
    title: "Authentication and Security",
    items: [
      {
        name: "Sessions vs JWT",
        summary:
          "Sessions store state on the server, while JWTs store state in the client.",
        interview: true,
        mockQuestions: [
          {
            id: "sessions-jwt-1",
            question: "What is the difference between sessions and JWT?",
            answer:
              "Sessions store user state on the server, while JWTs are stateless tokens stored on the client and verified on each request.",
          },
        ],
        code: `Authorization: Bearer token`,
      },
      {
        name: "CORS and CSRF",
        summary:
          "Security controls ensure only trusted clients can interact with your backend.",
        mockQuestions: [
          {
            id: "cors-csrf-1",
            question: "What problem does CORS solve?",
            answer:
              "CORS controls which origins are allowed to access resources on a server, preventing unauthorised cross-origin requests.",
          },
        ],
        code: `Access-Control-Allow-Origin`,
      },
      {
        name: "Password Hashing",
        summary:
          "Passwords should never be stored in plain text and must be securely hashed.",
        mockQuestions: [
          {
            id: "password-hashing-1",
            question: "Why should passwords be hashed?",
            answer:
              "Hashing ensures that even if the database is compromised, raw passwords are not exposed.",
          },
        ],
        code: `bcrypt.hash(password, 10);`,
      },
    ],
  },
  {
    title: "Scalability and Performance",
    items: [
      {
        name: "Horizontal vs Vertical Scaling",
        summary:
          "Scaling can be done by increasing resources or adding more instances.",
        interview: true,
        mockQuestions: [
          {
            id: "scaling-1",
            question:
              "What is the difference between horizontal and vertical scaling?",
            answer:
              "Vertical scaling increases the power of a single machine, while horizontal scaling adds more machines to distribute load.",
          },
        ],
        code: `Load Balancer -> Multiple servers`,
      },
      {
        name: "Load Balancing",
        summary:
          "Load balancers distribute traffic across multiple servers to improve availability and performance.",
        mockQuestions: [
          {
            id: "load-balancer-1",
            question: "Why use a load balancer?",
            answer:
              "A load balancer distributes traffic, improves availability, and prevents any single server from becoming a bottleneck.",
          },
        ],
        code: `Client -> LB -> Server cluster`,
      },
      {
        name: "Rate Limiting",
        summary:
          "Rate limiting protects systems from abuse and excessive traffic.",
        mockQuestions: [
          {
            id: "rate-limiting-1",
            question: "Why is rate limiting important?",
            answer:
              "Rate limiting prevents abuse, protects resources, and ensures fair usage across users.",
          },
        ],
        code: `limit: 100 requests / minute`,
      },
    ],
  },
  {
    title: "Async and Background Work",
    items: [
      {
        name: "Queues",
        summary:
          "Queues decouple systems and allow background processing of tasks.",
        interview: true,
        mockQuestions: [
          {
            id: "queues-1",
            question: "What problem do queues solve?",
            answer:
              "Queues decouple systems and allow asynchronous processing, improving scalability and reliability.",
          },
        ],
        code: `API -> Queue -> Worker`,
      },
      {
        name: "Background Jobs",
        summary:
          "Long-running tasks should be handled outside of the request-response cycle.",
        mockQuestions: [
          {
            id: "background-jobs-1",
            question: "Why move tasks to background jobs?",
            answer:
              "Background jobs prevent blocking user requests and improve performance and user experience.",
          },
        ],
        code: `sendEmailJob()`,
      },
      {
        name: "Event-driven Systems",
        summary:
          "Events allow systems to react asynchronously to changes without tight coupling.",
        mockQuestions: [
          {
            id: "event-driven-1",
            question: "What is an event-driven architecture?",
            answer:
              "An event-driven system reacts to events and allows services to communicate asynchronously, improving decoupling.",
          },
        ],
        code: `UserCreated -> sendEmail`,
      },
    ],
  },
  {
    title: "Observability and Reliability",
    items: [
      {
        name: "Logging",
        summary: "Logs help track system behaviour and diagnose issues.",
        mockQuestions: [
          {
            id: "logging-1",
            question: "Why is logging important?",
            answer:
              "Logging helps debug issues, monitor behaviour, and understand system activity.",
          },
        ],
        code: `console.log("User created");`,
      },
      {
        name: "Monitoring and Alerts",
        summary:
          "Monitoring tracks system health, while alerts notify when something goes wrong.",
        interview: true,
        mockQuestions: [
          {
            id: "monitoring-1",
            question: "What should you monitor in a production system?",
            answer:
              "Key metrics include latency, error rates, throughput, and system resource usage.",
          },
        ],
        code: `errorRate > threshold`,
      },
      {
        name: "Resilience and Failover",
        summary: "Systems should be designed to handle failures gracefully.",
        mockQuestions: [
          {
            id: "resilience-1",
            question: "What does designing for failure mean?",
            answer:
              "It means assuming components will fail and building systems that can recover or degrade gracefully.",
          },
        ],
        code: `retry with backoff`,
      },
    ],
  },
];
