import type {Section} from "@/components/SectionCard/types";

export const sections: Section[] = [
  {
    title: "TypeScript Fundamentals",
    items: [
      {
        name: "Basic Types",
        summary:
          "TypeScript adds static types such as string, number, boolean, arrays, and objects.",
        mockQuestions: [
          {
            id: "basic-types-1",
            question: "What are basic types in TypeScript?",
            answer:
              "Basic types in TypeScript include primitives like string, number, and boolean, along with arrays, objects, null, undefined, and others used to describe the shape of values.",
          },
          {
            id: "basic-types-2",
            question: "Why does TypeScript add basic types to JavaScript?",
            answer:
              "TypeScript adds static types to catch mistakes earlier, improve editor support, and make code easier to understand and maintain.",
          },
        ],
        code: `const name: string = "Nick";
const age: number = 50;
const active: boolean = true;`,
      },
      {
        name: "Type Inference",
        summary:
          "TypeScript can often infer types automatically from assigned values.",
        mockQuestions: [
          {
            id: "type-inference-1",
            question: "What is type inference in TypeScript?",
            answer:
              "Type inference is when TypeScript automatically works out the type of a variable, parameter, or return value based on how it is used, without an explicit annotation.",
          },
        ],
        code: `const count = 0; // inferred as number
const title = "Hello"; // inferred as string`,
      },
      {
        name: "Union Types",
        summary:
          "Union types allow a value to be one of several possible types.",
        mockQuestions: [
          {
            id: "union-types-1",
            question: "What is a union type in TypeScript?",
            answer:
              "A union type means a value can be one of multiple possible types, for example string | number.",
          },
          {
            id: "union-types-2",
            question: "Why are union types useful?",
            answer:
              "Union types are useful when a value can legitimately take different shapes, while still keeping type safety and allowing narrowing at runtime checks.",
          },
        ],
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
        mockQuestions: [
          {
            id: "typed-params-returns-1",
            question:
              "Why would you type function parameters and return values explicitly?",
            answer:
              "Explicit function typing makes contracts clearer, catches mistakes earlier, and improves readability and editor support, especially in shared or exported functions.",
          },
        ],
        code: `function add(a: number, b: number): number {
  return a + b;
}`,
      },
      {
        name: "Optional Parameters",
        summary: "Optional parameters let callers omit certain values.",
        mockQuestions: [
          {
            id: "optional-parameters-1",
            question: "What is an optional parameter in TypeScript?",
            answer:
              "An optional parameter is a function parameter marked with ?, meaning callers do not have to provide a value for it.",
          },
        ],
        code: `function greet(name: string, title?: string) {
  return title ? \`\${title} \${name}\` : name;
}`,
      },
      {
        name: "Function Type Aliases",
        summary: "Type aliases are useful for reusable function signatures.",
        mockQuestions: [
          {
            id: "function-type-aliases-1",
            question: "Why use a function type alias?",
            answer:
              "A function type alias lets you define a reusable function signature once and apply it consistently across multiple functions, callbacks, or APIs.",
          },
        ],
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
        mockQuestions: [
          {
            id: "type-aliases-1",
            question: "What is a type alias in TypeScript?",
            answer:
              "A type alias gives a name to a type, such as an object shape, union, tuple, or function signature, so it can be reused more easily.",
          },
        ],
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
        mockQuestions: [
          {
            id: "interfaces-1",
            question: "What is an interface in TypeScript?",
            answer:
              "An interface describes the shape of an object and is commonly used for props, API models, and other structured data contracts.",
          },
          {
            id: "interfaces-2",
            question:
              "What is the difference between a type alias and an interface?",
            answer:
              "Both can describe object shapes, but interfaces are often preferred for object contracts and can be extended or merged, while type aliases are more flexible because they can also represent unions, tuples, and primitives.",
          },
        ],
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
        mockQuestions: [
          {
            id: "readonly-optional-fields-1",
            question:
              "What do readonly and optional properties do in TypeScript?",
            answer:
              "readonly prevents a property from being reassigned after initialisation, while an optional property marked with ? means the property may be omitted.",
          },
        ],
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
        mockQuestions: [
          {
            id: "typed-arrays-1",
            question: "How do you type arrays in TypeScript?",
            answer:
              "Arrays can be typed using T[] syntax, such as string[], or with the generic form Array<T>, such as Array<string>.",
          },
        ],
        code: `const numbers: number[] = [1, 2, 3];
const names: Array<string> = ["Nick", "Jane"];`,
      },
      {
        name: "Tuples",
        summary:
          "Tuples model a fixed-length array with known types in known positions.",
        mockQuestions: [
          {
            id: "tuples-1",
            question: "What is a tuple in TypeScript?",
            answer:
              "A tuple is a fixed-length array where each position has a known type, for example [number, string].",
          },
        ],
        code: `const point: [number, number] = [10, 20];`,
      },
      {
        name: "Enums",
        summary:
          "Enums group named constants, though unions are often preferred in modern TypeScript.",
        mockQuestions: [
          {
            id: "enums-1",
            question:
              "What are enums in TypeScript and why are they sometimes avoided?",
            answer:
              "Enums group named constants, but many teams prefer string literal unions because they are simpler, more predictable, and often work better with modern TypeScript patterns.",
          },
        ],
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
        mockQuestions: [
          {
            id: "generic-functions-1",
            question: "What problem do generics solve in TypeScript?",
            answer:
              "Generics allow code to work with multiple types while preserving type safety, so you can write reusable functions, components, or utilities without losing useful type information.",
          },
          {
            id: "generic-functions-2",
            question:
              "What does a generic function return that a non-generic any-based function does not?",
            answer:
              "A generic function preserves the relationship between input and output types, whereas using any loses that type information and weakens type safety.",
          },
        ],
        code: `function identity<T>(value: T): T {
  return value;
}

const result = identity<string>("hello");`,
      },
      {
        name: "Generic Types",
        summary:
          "You can build reusable generic object shapes such as API responses.",
        mockQuestions: [
          {
            id: "generic-types-1",
            question: "Why are generic object types useful?",
            answer:
              "Generic object types let you reuse the same structure with different data types, for example wrapping different API response payloads while keeping the surrounding shape consistent.",
          },
        ],
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
        mockQuestions: [
          {
            id: "generic-constraints-1",
            question: "What is a generic constraint in TypeScript?",
            answer:
              "A generic constraint limits what types can be passed to a generic by requiring them to match a certain shape or extend another type.",
          },
        ],
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
        mockQuestions: [
          {
            id: "typeof-narrowing-1",
            question: "What is narrowing in TypeScript?",
            answer:
              "Narrowing is when TypeScript reduces a broader union type to a more specific type based on runtime checks such as typeof, in, or custom guards.",
          },
        ],
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
        mockQuestions: [
          {
            id: "in-operator-1",
            question: "How does the in operator help with narrowing?",
            answer:
              "The in operator checks whether a property exists on an object, allowing TypeScript to narrow a union to the types that contain that property.",
          },
        ],
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
        mockQuestions: [
          {
            id: "custom-type-guards-1",
            question: "What is a custom type guard?",
            answer:
              "A custom type guard is a function that returns a type predicate such as value is Cat, allowing TypeScript to narrow a value to a more specific type after the check passes.",
          },
        ],
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
        mockQuestions: [
          {
            id: "partial-1",
            question: "What does Partial<T> do?",
            answer:
              "Partial<T> creates a new type where all properties from T become optional.",
          },
        ],
        code: `type User = {
  name: string;
  age: number;
};

type PartialUser = Partial<User>;`,
      },
      {
        name: "Pick and Omit",
        summary: "Pick selects fields, while Omit removes fields.",
        mockQuestions: [
          {
            id: "pick-omit-1",
            question: "What is the difference between Pick and Omit?",
            answer:
              "Pick creates a type with only selected properties, while Omit creates a type by excluding selected properties from an existing type.",
          },
        ],
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
        mockQuestions: [
          {
            id: "record-1",
            question: "When is Record useful in TypeScript?",
            answer:
              "Record is useful when you want an object type with known key and value patterns, such as a lookup table or dictionary where all values share the same type.",
          },
        ],
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
        mockQuestions: [
          {
            id: "typing-destructured-params-1",
            question:
              "Why do destructured parameters often need explicit typing?",
            answer:
              "When parameters are destructured, TypeScript may need the full object shape annotated so it can understand the expected properties and their types clearly.",
          },
        ],
        code: `function greet({ name }: { name: string }) {
  return \`Hello, \${name}\`;
}`,
      },
      {
        name: "Casting and Assertions",
        summary:
          "Assertions tell TypeScript how you want a value treated, but should be used carefully.",
        mockQuestions: [
          {
            id: "casting-assertions-1",
            question: "What is a type assertion in TypeScript?",
            answer:
              "A type assertion tells TypeScript to treat a value as a specific type, but it does not change the runtime value or perform validation.",
          },
          {
            id: "casting-assertions-2",
            question: "Why should type assertions be used carefully?",
            answer:
              "Because they can silence useful type errors and make code unsafe if the asserted type does not match the actual runtime value.",
          },
        ],
        code: `const input = document.getElementById("name") as HTMLInputElement;
console.log(input.value);`,
      },
      {
        name: "unknown vs any",
        summary:
          "unknown is safer than any because it requires narrowing before use.",
        mockQuestions: [
          {
            id: "unknown-vs-any-1",
            question: "What is the difference between unknown and any?",
            answer:
              "any disables type safety and lets you do anything, while unknown is safer because you must narrow or check the value before using it.",
          },
          {
            id: "unknown-vs-any-2",
            question: "Why is unknown usually preferred over any?",
            answer:
              "unknown preserves type safety by forcing checks before use, whereas any can hide bugs and bypass the main benefits of TypeScript.",
          },
        ],
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
        mockQuestions: [
          {
            id: "keyof-1",
            question: "What does keyof do in TypeScript?",
            answer:
              "keyof produces a union of the property names of an object type, which is useful for building type-safe lookups and generic utilities.",
          },
        ],
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
        mockQuestions: [
          {
            id: "typeof-in-types-1",
            question: "How is typeof used in type space?",
            answer:
              "typeof can capture the type of an existing value and reuse it in a type alias or other type expression, helping keep runtime values and types aligned.",
          },
        ],
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
        mockQuestions: [
          {
            id: "indexed-access-types-1",
            question: "What is an indexed access type?",
            answer:
              "An indexed access type lets you look up the type of a specific property on another type, such as User['age'].",
          },
        ],
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
        mockQuestions: [
          {
            id: "extends-1",
            question: "How is extends used in TypeScript?",
            answer:
              "extends is used to express constraints in generics, inheritance in interfaces or classes, and relationships in conditional types.",
          },
        ],
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
        mockQuestions: [
          {
            id: "discriminated-unions-1",
            question: "What is a discriminated union?",
            answer:
              "A discriminated union is a union of object types that share a common literal property, such as status or kind, which TypeScript can use to narrow safely between cases.",
          },
        ],
        code: `type Loading = { status: "loading" };
type Success = { status: "success"; data: string[] };
type ErrorState = { status: "error"; message: string };

type State = Loading | Success | ErrorState;`,
      },
      {
        name: "Exhaustive Checking",
        summary: "A never check helps ensure all union cases are handled.",
        mockQuestions: [
          {
            id: "exhaustive-checking-1",
            question: "What is exhaustive checking and why is it useful?",
            answer:
              "Exhaustive checking ensures every case in a union is handled, often using never in the default branch, so missing cases are caught at compile time.",
          },
        ],
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
        mockQuestions: [
          {
            id: "literal-types-1",
            question: "What are literal types in TypeScript?",
            answer:
              "Literal types represent exact values like 'light', 'dark', or 42 rather than broader types like string or number.",
          },
        ],
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
        mockQuestions: [
          {
            id: "mapped-types-1",
            question: "What is a mapped type in TypeScript?",
            answer:
              "A mapped type creates a new type by iterating over the keys of an existing type and transforming the property definitions.",
          },
        ],
        code: `type Flags<T> = {
  [K in keyof T]: boolean;
};`,
      },
      {
        name: "Conditional Types",
        summary:
          "Conditional types allow types to branch based on relationships.",
        mockQuestions: [
          {
            id: "conditional-types-1",
            question: "What is a conditional type?",
            answer:
              "A conditional type selects one type or another depending on whether a type relationship is true, using a pattern like T extends U ? X : Y.",
          },
        ],
        code: `type IsString<T> = T extends string ? true : false;`,
      },
      {
        name: "Infer",
        summary: "infer lets conditional types extract part of another type.",
        mockQuestions: [
          {
            id: "infer-1",
            question: "What does infer do in TypeScript?",
            answer:
              "infer lets a conditional type capture and extract part of another type, such as the element type from an array or the return type from a function.",
          },
        ],
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
        mockQuestions: [
          {
            id: "as-const-1",
            question: "What does as const do?",
            answer:
              "as const tells TypeScript to infer the narrowest possible literal types and mark object properties or array values as readonly.",
          },
        ],
        code: `const status = {
  loading: "loading",
  success: "success",
} as const;`,
      },
      {
        name: "Type Assertions",
        summary:
          "Assertions tell TypeScript how to treat a value, but they do not change runtime behaviour.",
        mockQuestions: [
          {
            id: "type-assertions-1",
            question: "Do type assertions change runtime behaviour?",
            answer:
              "No. Type assertions only affect the TypeScript type system and do not change the actual runtime value or perform validation.",
          },
        ],
        code: `const input = document.querySelector("input") as HTMLInputElement;`,
      },
      {
        name: "Non-null Assertion",
        summary:
          "The non-null assertion operator tells TypeScript a value is not null or undefined.",
        mockQuestions: [
          {
            id: "non-null-assertion-1",
            question: "What does the non-null assertion operator do?",
            answer:
              "The non-null assertion operator tells TypeScript that a value is not null or undefined at that point, even though the type system thinks it might be.",
          },
          {
            id: "non-null-assertion-2",
            question: "Why can non-null assertions be risky?",
            answer:
              "They can hide real null or undefined cases and lead to runtime errors if your assumption is wrong.",
          },
        ],
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
        mockQuestions: [
          {
            id: "type-imports-1",
            question: "Why use import type in TypeScript?",
            answer:
              "import type makes it explicit that the import is only needed for type checking and helps avoid unnecessary runtime imports in emitted JavaScript.",
          },
        ],
        code: `import type { User } from "./types";`,
      },
      {
        name: "tsconfig Basics",
        summary:
          "tsconfig controls TypeScript compiler behaviour such as strictness and module output.",
        mockQuestions: [
          {
            id: "tsconfig-basics-1",
            question: "What is tsconfig.json used for?",
            answer:
              "tsconfig.json configures how TypeScript compiles your project, including strictness rules, target output, module settings, path aliases, and other compiler behaviour.",
          },
          {
            id: "tsconfig-basics-2",
            question: "Why is strict mode valuable in TypeScript?",
            answer:
              "Strict mode enables stronger type checking, catches more bugs earlier, and encourages clearer, safer code.",
          },
        ],
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
        mockQuestions: [
          {
            id: "module-augmentation-1",
            question: "What is module augmentation in TypeScript?",
            answer:
              "Module augmentation allows you to extend the type definitions of an existing module, which is useful when adding custom fields or adapting third-party library types.",
          },
        ],
        code: `declare module "my-library" {
  interface Config {
    debug?: boolean;
  }
}`,
      },
    ],
  },
];
