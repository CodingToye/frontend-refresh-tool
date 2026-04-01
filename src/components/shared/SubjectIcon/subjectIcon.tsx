import type {SubjectKey} from "@/data/subjects";

import {
  AccessibilityIcon,
  AWSIcon,
  BrowserAPIIcon,
  CSSIcon,
  FullStackIcon,
  HTMLIcon,
  JSIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  ReactNativeIcon,
  TestIcon,
  TSIcon,
  WebPerformanceIcon,
} from "./subjectIcons";

export const subjectIcon: Record<
  SubjectKey,
  React.ComponentType<{className?: string}>
> = {
  react: ReactIcon,
  reactNative: ReactNativeIcon,
  javaScript: JSIcon,
  css: CSSIcon,
  typeScript: TSIcon,
  nextJS: NextJSIcon,
  html: HTMLIcon,
  node: NodeJSIcon,
  aws: AWSIcon,
  testing: TestIcon,
  accessibility: AccessibilityIcon,
  webPerformance: WebPerformanceIcon,
  browserAPIs: BrowserAPIIcon,
  fullStack: FullStackIcon,
};
