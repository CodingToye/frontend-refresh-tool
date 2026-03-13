import type {Section} from "../types/shared.types";

export const sections: Section[] = [
  {
    title: "TypeScript Fundamentals",
    items: [
      {
        name: "Basic Types",
        summary:
          "TypeScript adds static types such as string, number, boolean, arrays, and objects.",
        code: `const name: string = "Nick";
const age: number = 50;
const active: boolean = true;`,
      },
      {
        name: "Type Inference",
        summary:
          "TypeScript can often infer types automatically from assigned values.",
        code: `const count = 0; // inferred as number
const title = "Hello"; // inferred as string`,
      },
      {
        name: "Union Types",
        summary:
          "Union types allow a value to be one of several possible types.",
        code: `let value: string | number;

value = "hello";
value = 123;`,
      },
    ],
  },
  {
    title: "Functions",
    items: [
      {
        name: "Typed Parameters and Returns",
        summary:
          "Functions can declare both input and output types explicitly.",
        code: `function add(a: number, b: number): number {
  return a + b;
}`,
      },
      {
        name: "Optional Parameters",
        summary: "Optional parameters let callers omit certain values.",
        code: `function greet(name: string, title?: string) {
  return title ? \`\${title} \${name}\` : name;
}`,
      },
      {
        name: "Function Type Aliases",
        summary: "Type aliases are useful for reusable function signatures.",
        code: `type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;`,
      },
    ],
  },
  {
    title: "Objects and Aliases",
    items: [
      {
        name: "Type Aliases",
        summary: "Type aliases define reusable object shapes and other types.",
        code: `type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Nick",
  age: 50,
};`,
      },
      {
        name: "Interfaces",
        summary:
          "Interfaces describe object shapes and are common for props and domain models.",
        interview: true,
        code: `interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Nick",
  age: 50,
};`,
      },
      {
        name: "Readonly and Optional Fields",
        summary:
          "Properties can be marked as readonly or optional for more precise models.",
        code: `type User = {
  readonly id: string;
  name: string;
  nickname?: string;
};`,
      },
    ],
  },
  {
    title: "Arrays, Tuples, and Enums",
    items: [
      {
        name: "Typed Arrays",
        summary: "Arrays can be typed using T[] or Array<T> syntax.",
        code: `const numbers: number[] = [1, 2, 3];
const names: Array<string> = ["Nick", "Jane"];`,
      },
      {
        name: "Tuples",
        summary:
          "Tuples model a fixed-length array with known types in known positions.",
        code: `const point: [number, number] = [10, 20];`,
      },
      {
        name: "Enums",
        summary:
          "Enums group named constants, though unions are often preferred in modern TypeScript.",
        code: `enum Status {
  Idle,
  Loading,
  Success,
}

const status = Status.Loading;`,
      },
    ],
  },
  {
    title: "Generics",
    items: [
      {
        name: "Generic Functions",
        summary: "Generics let functions work safely with different types.",
        interview: true,
        code: `function identity<T>(value: T): T {
  return value;
}

const result = identity<string>("hello");`,
      },
      {
        name: "Generic Types",
        summary:
          "You can build reusable generic object shapes such as API responses.",
        code: `type ApiResponse<T> = {
  data: T;
  success: boolean;
};

const response: ApiResponse<string[]> = {
  data: ["a", "b"],
  success: true,
};`,
      },
      {
        name: "Generic Constraints",
        summary: "Constraints ensure generic types meet certain requirements.",
        code: `function getLength<T extends { length: number }>(value: T) {
  return value.length;
}`,
      },
    ],
  },
  {
    title: "Narrowing and Type Guards",
    items: [
      {
        name: "typeof Narrowing",
        summary: "TypeScript narrows unions when runtime checks are used.",
        code: `function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}`,
      },
      {
        name: "in Operator",
        summary:
          "The in operator can narrow types based on property existence.",
        code: `type User = { name: string };
type Admin = { name: string; role: string };

function printPerson(person: User | Admin) {
  if ("role" in person) {
    console.log(person.role);
  }
}`,
      },
      {
        name: "Custom Type Guards",
        summary:
          "A custom type guard helps TypeScript narrow more complex unions.",
        code: `type Cat = { meow: () => void };
type Dog = { bark: () => void };

function isCat(animal: Cat | Dog): animal is Cat {
  return "meow" in animal;
}`,
      },
    ],
  },
  {
    title: "Utility Types",
    items: [
      {
        name: "Partial",
        summary: "Partial makes all properties optional.",
        code: `type User = {
  name: string;
  age: number;
};

type PartialUser = Partial<User>;`,
      },
      {
        name: "Pick and Omit",
        summary: "Pick selects fields, while Omit removes fields.",
        code: `type User = {
  id: string;
  name: string;
  age: number;
};

type UserPreview = Pick<User, "id" | "name">;
type UserWithoutAge = Omit<User, "age">;`,
      },
      {
        name: "Record",
        summary:
          "Record is useful for keyed objects where all values share the same type.",
        code: `type Roles = Record<string, boolean>;

const roles: Roles = {
  admin: true,
  editor: false,
};`,
      },
    ],
  },
  {
    title: "TypeScript with JavaScript Patterns",
    items: [
      {
        name: "Typing Destructured Params",
        summary: "Destructured arguments often need explicit object typing.",
        code: `function greet({ name }: { name: string }) {
  return \`Hello, \${name}\`;
}`,
      },
      {
        name: "Casting and Assertions",
        summary:
          "Assertions tell TypeScript how you want a value treated, but should be used carefully.",
        code: `const input = document.getElementById("name") as HTMLInputElement;
console.log(input.value);`,
      },
      {
        name: "unknown vs any",
        summary:
          "unknown is safer than any because it requires narrowing before use.",
        code: `let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}`,
      },
    ],
  },
  {
    title: "Core Type Operators",
    items: [
      {
        name: "keyof",
        summary: "keyof creates a union of an object's property names.",
        code: `type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;`,
      },
      {
        name: "typeof in Types",
        summary:
          "typeof can capture the type of a value for reuse in type space.",
        code: `const user = {
  name: "Nick",
  age: 50,
};

type User = typeof user;`,
      },
      {
        name: "Indexed Access Types",
        summary:
          "Indexed access types let you extract the type of a specific property.",
        code: `type User = {
  name: string;
  age: number;
};

type Age = User["age"];`,
      },
      {
        name: "extends",
        summary:
          "extends is used in generics and conditional types to express constraints and relationships.",
        code: `function getLength<T extends { length: number }>(value: T) {
  return value.length;
}`,
      },
    ],
  },
  {
    title: "Advanced Unions",
    items: [
      {
        name: "Discriminated Unions",
        summary:
          "Discriminated unions use a shared literal field to narrow safely between cases.",
        code: `type Loading = { status: "loading" };
type Success = { status: "success"; data: string[] };
type ErrorState = { status: "error"; message: string };

type State = Loading | Success | ErrorState;`,
      },
      {
        name: "Exhaustive Checking",
        summary: "A never check helps ensure all union cases are handled.",
        code: `function handleState(state: State) {
  switch (state.status) {
    case "loading":
      return "Loading";
    case "success":
      return state.data;
    case "error":
      return state.message;
    default: {
      const exhaustive: never = state;
      return exhaustive;
    }
  }
}`,
      },
      {
        name: "Literal Types",
        summary:
          "Literal types represent exact values and are useful for small constrained sets.",
        code: `type Theme = "light" | "dark";`,
      },
    ],
  },
  {
    title: "Mapped and Conditional Types",
    items: [
      {
        name: "Mapped Types",
        summary:
          "Mapped types transform an existing type into a new one by iterating over keys.",
        code: `type Flags<T> = {
  [K in keyof T]: boolean;
};`,
      },
      {
        name: "Conditional Types",
        summary:
          "Conditional types allow types to branch based on relationships.",
        code: `type IsString<T> = T extends string ? true : false;`,
      },
      {
        name: "Infer",
        summary: "infer lets conditional types extract part of another type.",
        code: `type ElementType<T> = T extends (infer U)[] ? U : T;`,
      },
    ],
  },
  {
    title: "Assertions and Const Patterns",
    items: [
      {
        name: "as const",
        summary:
          "as const narrows values to readonly literals instead of wider general types.",
        code: `const status = {
  loading: "loading",
  success: "success",
} as const;`,
      },
      {
        name: "Type Assertions",
        summary:
          "Assertions tell TypeScript how to treat a value, but they do not change runtime behaviour.",
        code: `const input = document.querySelector("input") as HTMLInputElement;`,
      },
      {
        name: "Non-null Assertion",
        summary:
          "The non-null assertion operator tells TypeScript a value is not null or undefined.",
        code: `const root = document.getElementById("root")!;
root.innerHTML = "Ready";`,
      },
    ],
  },
  {
    title: "Modules and Config",
    items: [
      {
        name: "Type Imports",
        summary:
          "Type-only imports keep runtime output cleaner when only types are needed.",
        code: `import type { User } from "./types";`,
      },
      {
        name: "tsconfig Basics",
        summary:
          "tsconfig controls TypeScript compiler behaviour such as strictness and module output.",
        code: `{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true
  }
}`,
      },
      {
        name: "Module Augmentation",
        summary:
          "Module augmentation lets you extend existing module types when needed.",
        code: `declare module "my-library" {
  interface Config {
    debug?: boolean;
  }
}`,
      },
    ],
  },
];
