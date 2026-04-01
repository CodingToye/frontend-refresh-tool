import type {Section} from "../components/SectionCard/types";

export const sections: Section[] = [
  {
    title: "Core Concepts",
    items: [
      {
        name: "What React Native Is",
        summary:
          "React Native lets you build mobile apps using React and JavaScript or TypeScript, rendering to native platform components.",
        interview: true,
        mockQuestions: [
          {
            id: "what-react-native-is-1",
            question: "What is React Native?",
            answer:
              "React Native is a framework for building mobile applications using React. You write components in JavaScript or TypeScript, and React Native renders them using native platform components.",
          },
          {
            id: "what-react-native-is-2",
            question: "How is React Native different from React for the web?",
            answer:
              "React Native uses native mobile components like View, Text, and Pressable instead of HTML elements like div or button. It is designed for iOS and Android apps rather than the browser.",
          },
        ],
        code: `import { View, Text } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Hello React Native</Text>
    </View>
  );
}`,
      },
      {
        name: "Native Components",
        summary:
          "React Native uses built-in components like View, Text, Image, ScrollView, and Pressable instead of HTML.",
        interview: true,
        mockQuestions: [
          {
            id: "native-components-1",
            question: "What are some core React Native components?",
            answer:
              "Some core React Native components include View, Text, Image, ScrollView, TextInput, FlatList, and Pressable. These are the building blocks for native mobile UIs.",
          },
        ],
        code: `import { View, Text, Image } from "react-native";

<View>
  <Text>Profile</Text>
  <Image source={{ uri: avatarUrl }} />
</View>`,
      },
      {
        name: "JSX in React Native",
        summary:
          "You still use JSX, but you compose mobile UI with native components rather than HTML tags.",
        mockQuestions: [
          {
            id: "jsx-react-native-1",
            question: "Does React Native use JSX?",
            answer:
              "Yes, React Native uses JSX in the same way as React. The main difference is that JSX renders native components rather than HTML elements.",
          },
        ],
        code: `return (
  <View>
    <Text>Welcome</Text>
  </View>
);`,
      },
      {
        name: "Platform Differences",
        summary:
          "Apps often share most code, but iOS and Android sometimes need platform-specific behaviour or styling.",
        interview: true,
        mockQuestions: [
          {
            id: "platform-differences-1",
            question: "Why do platform differences matter in React Native?",
            answer:
              "Although much of the code can be shared, iOS and Android sometimes behave differently in navigation, styling, permissions, and native APIs, so platform-specific handling is sometimes needed.",
          },
        ],
        code: `import { Platform } from "react-native";

const paddingTop = Platform.OS === "ios" ? 50 : 20;`,
      },
    ],
  },
  {
    title: "Components and Layout",
    items: [
      {
        name: "View and Text",
        summary:
          "View is the basic container component, and Text is used for displaying text content.",
        interview: true,
        mockQuestions: [
          {
            id: "view-text-1",
            question: "What are View and Text used for in React Native?",
            answer:
              "View is the main layout container in React Native, similar to a generic block wrapper. Text is used to render text content and must wrap textual content instead of placing raw text directly inside View.",
          },
        ],
        code: `import { View, Text } from "react-native";

<View>
  <Text>Hello</Text>
</View>`,
      },
      {
        name: "Images",
        summary:
          "The Image component renders local or remote images in a native mobile app.",
        mockQuestions: [
          {
            id: "images-1",
            question: "How do you display images in React Native?",
            answer:
              "You use the Image component and provide either a remote URI or a local static asset. Styles usually control width, height, and resize behaviour.",
          },
        ],
        code: `import { Image } from "react-native";

<Image
  source={{ uri: "https://example.com/photo.png" }}
  style={{ width: 120, height: 120 }}
/>`,
      },
      {
        name: "Flexbox Layout",
        summary:
          "React Native uses Flexbox for layout, with column direction by default.",
        interview: true,
        mockQuestions: [
          {
            id: "flexbox-layout-1",
            question: "How does Flexbox work in React Native?",
            answer:
              "React Native uses Flexbox for layout, similar to CSS Flexbox, but the default flexDirection is column instead of row. It is used to align, size, and space components.",
          },
          {
            id: "flexbox-layout-2",
            question:
              "What is one key layout difference between React Native and CSS on the web?",
            answer:
              "A key difference is that React Native defaults to flexDirection: 'column', whereas CSS Flexbox on the web defaults to row behaviour only when display:flex is applied and flex-direction is not changed.",
          },
        ],
        code: `const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});`,
      },
      {
        name: "ScrollView",
        summary:
          "ScrollView is useful for smaller scrollable layouts where everything can render at once.",
        mockQuestions: [
          {
            id: "scrollview-1",
            question: "When should you use ScrollView?",
            answer:
              "ScrollView is useful when you have a limited amount of content that should be scrollable and can safely render all at once. For large lists, FlatList is usually a better choice.",
          },
        ],
        code: `import { ScrollView, Text } from "react-native";

<ScrollView>
  <Text>Section 1</Text>
  <Text>Section 2</Text>
</ScrollView>`,
      },
      {
        name: "Safe Area",
        summary:
          "Safe area handling helps content avoid notches, status bars, and rounded screen edges.",
        mockQuestions: [
          {
            id: "safe-area-1",
            question: "Why is safe area handling important in React Native?",
            answer:
              "Safe area handling helps ensure content is not hidden behind notches, status bars, home indicators, or rounded edges on modern mobile devices.",
          },
        ],
        code: `import { SafeAreaView, Text } from "react-native";

<SafeAreaView style={{ flex: 1 }}>
  <Text>Content</Text>
</SafeAreaView>`,
      },
    ],
  },
  {
    title: "Styling",
    items: [
      {
        name: "StyleSheet",
        summary:
          "Styles are defined with JavaScript objects, often using StyleSheet.create for organisation and clarity.",
        interview: true,
        mockQuestions: [
          {
            id: "stylesheet-1",
            question: "How are styles defined in React Native?",
            answer:
              "Styles in React Native are usually defined as JavaScript objects, often using StyleSheet.create to organise them. These styles are then passed to the style prop.",
          },
        ],
        code: `import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  box: {
    padding: 16,
    backgroundColor: "#eee",
  },
});

<View style={styles.box} />`,
      },
      {
        name: "Inline Styles",
        summary:
          "Simple or dynamic styles can be applied directly with the style prop.",
        mockQuestions: [
          {
            id: "inline-styles-1",
            question: "When might you use inline styles in React Native?",
            answer:
              "Inline styles are useful for small one-off styles or when part of the styling is dynamic and depends on props or state.",
          },
        ],
        code: `<View style={{ padding: 12, backgroundColor: "tomato" }} />`,
      },
      {
        name: "Style Arrays",
        summary:
          "You can combine multiple style objects by passing an array to the style prop.",
        mockQuestions: [
          {
            id: "style-arrays-1",
            question: "Why would you use a style array in React Native?",
            answer:
              "Style arrays let you combine base styles with conditional or overriding styles in a clean way, which is useful for states like active, disabled, or selected.",
          },
        ],
        code: `<Text style={[styles.label, isActive && styles.active]}>
  Label
</Text>`,
      },
      {
        name: "Responsive Styling",
        summary:
          "Responsive layouts rely on Flexbox, dimensions, percentages, and device-aware design rather than traditional media queries.",
        mockQuestions: [
          {
            id: "responsive-styling-1",
            question: "How do you approach responsive design in React Native?",
            answer:
              "Responsive design in React Native often relies on Flexbox, percentage-based sizing, the Dimensions API, and thoughtful layout decisions for different screen sizes and platforms.",
          },
        ],
        code: `import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const cardWidth = width > 600 ? 400 : width - 32;`,
      },
    ],
  },
  {
    title: "State and Hooks",
    items: [
      {
        name: "useState",
        summary:
          "Manage local component state such as form input, toggles, or loading state.",
        interview: true,
        mockQuestions: [
          {
            id: "rn-usestate-1",
            question: "How is useState used in React Native?",
            answer:
              "useState works the same way as in React for the web. It is used to store local component state and trigger re-renders when that state changes.",
          },
        ],
        code: `const [count, setCount] = useState(0);`,
      },
      {
        name: "useEffect",
        summary:
          "Handle side effects such as fetching data, subscriptions, or reacting to lifecycle-like changes.",
        interview: true,
        mockQuestions: [
          {
            id: "rn-useeffect-1",
            question: "What kinds of side effects are common in React Native?",
            answer:
              "Common side effects in React Native include data fetching, setting up listeners, using timers, interacting with device APIs, and syncing component state with external systems.",
          },
        ],
        code: `useEffect(() => {
  loadProfile();
}, []);`,
      },
      {
        name: "useRef",
        summary:
          "Persist mutable values across renders or access native-backed component instances.",
        mockQuestions: [
          {
            id: "rn-useref-1",
            question: "What is useRef useful for in React Native?",
            answer:
              "useRef is useful for storing mutable values that persist across renders and for referencing components such as TextInput when you need imperative behaviour like focusing.",
          },
        ],
        code: `const inputRef = useRef(null);`,
      },
      {
        name: "useContext",
        summary:
          "Share values like theme, user, or app settings across multiple components.",
        mockQuestions: [
          {
            id: "rn-usecontext-1",
            question:
              "What types of values are often stored in context in React Native apps?",
            answer:
              "Context is often used for values like theme, authenticated user data, localisation, app settings, or other shared state that many screens need to read.",
          },
        ],
        code: `const theme = useContext(ThemeContext);`,
      },
      {
        name: "Custom Hooks",
        summary:
          "Extract reusable mobile-specific logic such as permissions, connectivity, or device behaviour.",
        mockQuestions: [
          {
            id: "rn-custom-hooks-1",
            question: "Why are custom hooks useful in React Native?",
            answer:
              "Custom hooks let you reuse logic such as fetching, permissions, keyboard handling, network status, or device integration without repeating code across screens and components.",
          },
        ],
        code: `function useToggle(initial = false) {
  const [open, setOpen] = useState(initial);
  return { open, toggle: () => setOpen((v) => !v) };
}`,
      },
    ],
  },
  {
    title: "User Input and Interaction",
    items: [
      {
        name: "Pressable",
        summary:
          "Pressable is the modern way to handle touch interactions with fine-grained pressed state behaviour.",
        interview: true,
        mockQuestions: [
          {
            id: "pressable-1",
            question: "Why is Pressable commonly used in React Native?",
            answer:
              "Pressable provides a flexible way to handle touch interactions and supports states like pressed, hovered, and focused where relevant, making it a strong default for interactive UI.",
          },
        ],
        code: `import { Pressable, Text } from "react-native";

<Pressable onPress={handleSave}>
  <Text>Save</Text>
</Pressable>`,
      },
      {
        name: "TextInput",
        summary:
          "TextInput is used for collecting user text input such as names, search queries, or passwords.",
        interview: true,
        mockQuestions: [
          {
            id: "textinput-1",
            question: "What is TextInput used for in React Native?",
            answer:
              "TextInput is the standard component for collecting text input from the user, such as search fields, forms, messages, or passwords.",
          },
        ],
        code: `import { TextInput } from "react-native";

<TextInput
  value={name}
  onChangeText={setName}
  placeholder="Enter your name"
/>`,
      },
      {
        name: "Controlled Inputs",
        summary:
          "React Native inputs are often controlled so their value is driven by component state.",
        mockQuestions: [
          {
            id: "rn-controlled-inputs-1",
            question: "What is a controlled TextInput in React Native?",
            answer:
              "A controlled TextInput is one whose value is driven by React state, with updates handled through callbacks like onChangeText.",
          },
        ],
        code: `const [email, setEmail] = useState("");

<TextInput value={email} onChangeText={setEmail} />`,
      },
      {
        name: "Keyboard Handling",
        summary:
          "Mobile apps often need to account for the on-screen keyboard covering inputs or buttons.",
        mockQuestions: [
          {
            id: "keyboard-handling-1",
            question:
              "Why does keyboard handling matter in React Native forms?",
            answer:
              "The on-screen keyboard can cover inputs or buttons, so React Native apps often need to adjust layout, scroll position, or safe spacing to keep forms usable.",
          },
        ],
        code: `import { KeyboardAvoidingView, Platform } from "react-native";

<KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : undefined}
  style={{ flex: 1 }}
>
  <Form />
</KeyboardAvoidingView>`,
      },
    ],
  },
  {
    title: "Lists and Rendering",
    items: [
      {
        name: "FlatList",
        summary:
          "FlatList efficiently renders large lists by virtualising rows rather than rendering everything at once.",
        interview: true,
        mockQuestions: [
          {
            id: "flatlist-1",
            question:
              "Why is FlatList preferred over mapping a large array in a ScrollView?",
            answer:
              "FlatList is preferred for large datasets because it virtualises items, rendering only what is needed on screen. This improves performance and memory usage compared with rendering every item at once.",
          },
          {
            id: "flatlist-2",
            question: "Why are keys important in FlatList?",
            answer:
              "Keys help React Native track list items efficiently and keep rendering predictable when items change, are inserted, or are removed.",
          },
        ],
        code: `import { FlatList, Text } from "react-native";

<FlatList
  data={users}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>`,
      },
      {
        name: "SectionList",
        summary:
          "SectionList is useful when grouped data needs headers and structured rendering.",
        mockQuestions: [
          {
            id: "sectionlist-1",
            question: "When would you use SectionList?",
            answer:
              "SectionList is useful when data is grouped into sections, such as contacts by letter or settings grouped by category, and you need section headers as part of the list.",
          },
        ],
        code: `import { SectionList, Text } from "react-native";

<SectionList
  sections={sections}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
  renderItem={({ item }) => <Text>{item.label}</Text>}
/>`,
      },
      {
        name: "Conditional Rendering",
        summary:
          "Show loading states, empty states, or fallback UI based on data and app state.",
        mockQuestions: [
          {
            id: "rn-conditional-rendering-1",
            question:
              "What are common uses of conditional rendering in React Native?",
            answer:
              "Conditional rendering is commonly used for loading states, empty states, authentication flows, permission messages, and switching between different mobile UI states.",
          },
        ],
        code: `return isLoading ? <Spinner /> : <Content />;`,
      },
    ],
  },
  {
    title: "Navigation",
    items: [
      {
        name: "React Navigation Basics",
        summary:
          "React Native apps usually rely on navigation libraries to move between screens.",
        interview: true,
        mockQuestions: [
          {
            id: "react-navigation-basics-1",
            question: "Why do React Native apps use navigation libraries?",
            answer:
              "Navigation libraries help React Native apps manage screen transitions, navigation stacks, tabs, and deep navigation state in a structured way.",
          },
        ],
        code: `navigation.navigate("Profile");`,
      },
      {
        name: "Stack Navigation",
        summary:
          "A stack navigator models push-and-pop screen flow, which is common in mobile apps.",
        mockQuestions: [
          {
            id: "stack-navigation-1",
            question: "What is stack navigation?",
            answer:
              "Stack navigation models a screen history where new screens are pushed onto a stack and users can go back to previous screens, which matches common mobile app behaviour.",
          },
        ],
        code: `const Stack = createNativeStackNavigator();`,
      },
      {
        name: "Tab Navigation",
        summary:
          "Tab navigators provide persistent top-level sections such as Home, Search, and Settings.",
        mockQuestions: [
          {
            id: "tab-navigation-1",
            question: "When is tab navigation a good fit?",
            answer:
              "Tab navigation is a good fit for top-level destinations that users need to switch between frequently, such as Home, Search, Notifications, and Settings.",
          },
        ],
        code: `const Tab = createBottomTabNavigator();`,
      },
      {
        name: "Route Params",
        summary:
          "Pass values between screens, such as ids or initial form data.",
        mockQuestions: [
          {
            id: "rn-route-params-1",
            question:
              "What are route params used for in React Native navigation?",
            answer:
              "Route params are used to pass values such as ids, titles, or configuration between screens so the destination screen can render the correct data or state.",
          },
        ],
        code: `navigation.navigate("Details", { id: user.id });`,
      },
    ],
  },
  {
    title: "Data Fetching",
    items: [
      {
        name: "Fetching with useEffect",
        summary:
          "A common basic pattern for loading remote data when a screen mounts.",
        mockQuestions: [
          {
            id: "rn-fetching-useeffect-1",
            question:
              "How do you fetch remote data in a simple React Native screen?",
            answer:
              "A common approach is to fetch data inside useEffect when the screen mounts, then store the result in state while also managing loading and error states.",
          },
        ],
        code: `useEffect(() => {
  fetch("/api/profile")
    .then((r) => r.json())
    .then(setProfile);
}, []);`,
      },
      {
        name: "Loading and Error States",
        summary:
          "Mobile apps should clearly communicate pending, failed, and empty states.",
        mockQuestions: [
          {
            id: "rn-loading-error-1",
            question:
              "Why are loading and error states especially important on mobile?",
            answer:
              "Mobile users often deal with slower or less reliable network conditions, so loading and error states are important for giving clear feedback and keeping the experience understandable.",
          },
        ],
        code: `if (isLoading) return <ActivityIndicator />;
if (error) return <Text>Something went wrong</Text>;`,
      },
      {
        name: "React Query",
        summary:
          "Useful for server state, caching, retries, stale data, and request status management.",
        mockQuestions: [
          {
            id: "rn-react-query-1",
            question: "Why might you use React Query in a React Native app?",
            answer:
              "React Query helps with server state by handling fetching, caching, retries, refetching, and status tracking, which reduces boilerplate and improves consistency across screens.",
          },
        ],
        code: `const { data, isLoading, error } = useQuery({
  queryKey: ["profile"],
  queryFn: fetchProfile,
});`,
      },
    ],
  },
  {
    title: "Device and Platform APIs",
    items: [
      {
        name: "Permissions",
        summary:
          "Accessing device features like camera, location, or notifications often requires runtime permissions.",
        interview: true,
        mockQuestions: [
          {
            id: "permissions-1",
            question: "Why do permissions matter in React Native apps?",
            answer:
              "Permissions matter because device features such as camera, microphone, location, and notifications often require explicit user approval at runtime, and the app must handle granted or denied states properly.",
          },
        ],
        code: `// Example: request camera permission via a library or native API`,
      },
      {
        name: "Platform API",
        summary:
          "The Platform module helps handle iOS and Android differences in behaviour or UI.",
        mockQuestions: [
          {
            id: "platform-api-1",
            question: "What is the Platform API used for?",
            answer:
              "The Platform API lets you detect the current platform and apply platform-specific code or styles when behaviour differs between iOS and Android.",
          },
        ],
        code: `import { Platform } from "react-native";

const fontSize = Platform.OS === "ios" ? 16 : 15;`,
      },
      {
        name: "Dimensions",
        summary:
          "Read device screen size to help adapt layouts and responsive behaviour.",
        mockQuestions: [
          {
            id: "dimensions-1",
            question: "What is the Dimensions API used for in React Native?",
            answer:
              "The Dimensions API provides information about screen size, which can help with responsive layouts, breakpoints, or full-screen component sizing.",
          },
        ],
        code: `import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;`,
      },
      {
        name: "Linking",
        summary: "Open external URLs or handle deep links into the app.",
        mockQuestions: [
          {
            id: "linking-1",
            question: "What is the Linking API used for?",
            answer:
              "The Linking API is used to open external URLs, phone links, email links, or handle deep links that route users into a specific part of the app.",
          },
        ],
        code: `import { Linking } from "react-native";

Linking.openURL("https://example.com");`,
      },
    ],
  },
  {
    title: "Performance Optimisation",
    items: [
      {
        name: "Avoiding Unnecessary Re-renders",
        summary:
          "Keep state local, memoise where useful, and avoid passing unstable props through large trees.",
        mockQuestions: [
          {
            id: "rn-avoid-rerenders-1",
            question:
              "How can you reduce unnecessary re-renders in React Native?",
            answer:
              "You can reduce unnecessary re-renders by keeping state close to where it is needed, memoising expensive calculations or callbacks when appropriate, and avoiding unstable props that cause child components to update unnecessarily.",
          },
        ],
        code: `const onPress = useCallback(() => save(id), [id]);`,
      },
      {
        name: "React.memo",
        summary:
          "Useful when a component receives the same props repeatedly and is expensive enough to benefit from memoisation.",
        mockQuestions: [
          {
            id: "rn-react-memo-1",
            question: "When is React.memo useful in React Native?",
            answer:
              "React.memo is useful when a component re-renders often with the same props and the cost of rendering is high enough that skipping those renders improves performance.",
          },
        ],
        code: `const Row = React.memo(function Row({ item }) {
  return <Text>{item.name}</Text>;
});`,
      },
      {
        name: "FlatList Optimisation",
        summary:
          "Large list performance often depends on item rendering strategy, keys, and list configuration.",
        interview: true,
        mockQuestions: [
          {
            id: "flatlist-optimisation-1",
            question: "How do you optimise FlatList performance?",
            answer:
              "You can optimise FlatList by providing stable keys, avoiding expensive inline render logic, memoising row components when useful, and tuning list props based on the dataset and UI needs.",
          },
        ],
        code: `<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  renderItem={renderItem}
/>`,
      },
    ],
  },
  {
    title: "Testing",
    items: [
      {
        name: "Component Testing",
        summary:
          "Test screens and components by focusing on behaviour and user interaction.",
        mockQuestions: [
          {
            id: "rn-component-testing-1",
            question: "What should React Native component tests focus on?",
            answer:
              "React Native component tests should focus on rendering, user interactions, visible state changes, and the behaviour users actually experience rather than internal implementation details.",
          },
        ],
        code: `render(<LoginScreen />);
expect(screen.getByText("Sign in")).toBeTruthy();`,
      },
      {
        name: "User Interaction Testing",
        summary:
          "Simulate presses, text entry, and other interactions to verify app behaviour.",
        mockQuestions: [
          {
            id: "rn-user-interaction-testing-1",
            question: "Why is interaction testing important in React Native?",
            answer:
              "Interaction testing helps verify that the app responds correctly to user actions such as pressing buttons, entering text, and navigating between screens.",
          },
        ],
        code: `fireEvent.press(screen.getByText("Save"));`,
      },
      {
        name: "Mocking Native Modules",
        summary:
          "Tests often mock device APIs, navigation, or native integrations to stay reliable.",
        mockQuestions: [
          {
            id: "mocking-native-modules-1",
            question: "Why do React Native tests often mock native modules?",
            answer:
              "Native modules are often mocked so tests stay isolated, predictable, and fast without depending on real device APIs or native platform behaviour.",
          },
        ],
        code: `jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));`,
      },
    ],
  },
  {
    title: "Advanced React Native",
    items: [
      {
        name: "Native Modules",
        summary:
          "Native modules expose platform-specific functionality to JavaScript when built-in APIs are not enough.",
        interview: true,
        mockQuestions: [
          {
            id: "native-modules-1",
            question: "What is a native module in React Native?",
            answer:
              "A native module is a bridge or integration point that exposes platform-specific functionality written in native code to the JavaScript side of a React Native app.",
          },
        ],
        code: `// Native modules are implemented in platform code and consumed in JS`,
      },
      {
        name: "Bridging",
        summary:
          "Bridging refers to communication between JavaScript and native platform code.",
        mockQuestions: [
          {
            id: "bridging-1",
            question: "What does bridging mean in React Native?",
            answer:
              "Bridging refers to the communication layer between JavaScript code and native platform code, allowing React Native apps to access native functionality.",
          },
        ],
        code: `// JS <-> native communication`,
      },
      {
        name: "Animations",
        summary:
          "React Native supports animations through APIs such as Animated and libraries like Reanimated.",
        mockQuestions: [
          {
            id: "animations-1",
            question: "How are animations handled in React Native?",
            answer:
              "Animations can be handled with the built-in Animated API or with libraries like Reanimated, depending on the complexity and performance requirements of the interaction.",
          },
        ],
        code: `const opacity = useRef(new Animated.Value(0)).current;`,
      },
      {
        name: "Offline Support",
        summary:
          "Many mobile apps need to handle poor connectivity and allow some functionality when offline.",
        mockQuestions: [
          {
            id: "offline-support-1",
            question: "Why is offline support important in mobile apps?",
            answer:
              "Mobile users may have weak or intermittent connectivity, so offline support helps preserve usability by caching data, showing useful fallback states, or queueing actions until connectivity returns.",
          },
        ],
        code: `// Cache data locally and sync later when online`,
      },
    ],
  },
  {
    title: "React Native + TypeScript",
    items: [
      {
        name: "Typing Props",
        summary:
          "Typed props make screens and components safer, easier to understand, and easier to reuse.",
        mockQuestions: [
          {
            id: "rn-typing-props-1",
            question:
              "Why is typing props useful in React Native with TypeScript?",
            answer:
              "Typing props improves safety, documentation, autocomplete, and refactoring confidence by making component contracts explicit.",
          },
        ],
        code: `type ButtonProps = {
  label: string;
  onPress: () => void;
};`,
      },
      {
        name: "Typing Navigation Params",
        summary:
          "Strong typing helps ensure screens receive the correct route params.",
        interview: true,
        mockQuestions: [
          {
            id: "typing-navigation-params-1",
            question: "Why is typing navigation params important?",
            answer:
              "Typing navigation params helps ensure screens receive the expected route data, reducing bugs and improving autocomplete when navigating or reading params.",
          },
        ],
        code: `type RootStackParamList = {
  Home: undefined;
  Details: { id: string };
};`,
      },
      {
        name: "Typing Refs and Events",
        summary:
          "Refs and handlers often benefit from explicit types when working with native components.",
        mockQuestions: [
          {
            id: "typing-refs-events-1",
            question:
              "What React Native values often need explicit TypeScript types?",
            answer:
              "Common examples include refs to TextInput or ScrollView, navigation params, callback props, and event handlers where stronger typing improves clarity and tooling.",
          },
        ],
        code: `const inputRef = useRef<TextInput | null>(null);`,
      },
    ],
  },
  {
    title: "Architecture",
    items: [
      {
        name: "Screen-based Organisation",
        summary:
          "React Native apps are often organised around screens, features, components, hooks, and services.",
        mockQuestions: [
          {
            id: "screen-based-organisation-1",
            question: "How are React Native apps commonly organised?",
            answer:
              "React Native apps are commonly organised by screens or features, with supporting folders for reusable components, hooks, services, navigation, and utilities.",
          },
        ],
        code: `src/
  screens/
  components/
  navigation/
  hooks/
  services/`,
      },
      {
        name: "Feature-based Structure",
        summary:
          "Grouping related files by feature makes larger apps easier to scale and maintain.",
        mockQuestions: [
          {
            id: "rn-feature-based-structure-1",
            question: "Why is feature-based structure useful in React Native?",
            answer:
              "Feature-based structure keeps related files close together, which improves maintainability and helps larger mobile apps scale more cleanly than splitting everything strictly by file type.",
          },
        ],
        code: `features/
  auth/
    screens/
    components/
    hooks/`,
      },
      {
        name: "Reusable UI Components",
        summary:
          "Shared mobile UI components improve consistency and reduce repeated styling or behaviour.",
        mockQuestions: [
          {
            id: "rn-reusable-ui-components-1",
            question: "What makes a React Native component reusable?",
            answer:
              "A reusable React Native component has a focused responsibility, a clear prop API, sensible defaults, and enough flexibility to support multiple screens without becoming overly generic.",
          },
        ],
        code: `<AppButton label="Save" onPress={handleSave} />`,
      },
      {
        name: "Design Systems",
        summary:
          "A design system helps mobile apps stay visually and behaviourally consistent across screens and platforms.",
        mockQuestions: [
          {
            id: "rn-design-systems-1",
            question: "Why are design systems valuable in React Native apps?",
            answer:
              "Design systems improve consistency, speed up development, support accessibility, and help teams build scalable mobile interfaces with shared components, tokens, and patterns.",
          },
        ],
        code: `tokens: { spacing: 8, radius: 12, colors: palette }`,
      },
    ],
  },
];
