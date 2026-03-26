// import {AwsIcon} from "@/icons/AwsIcon";

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
  TestIcon,
  TSIcon,
  WebPerformanceIcon,
} from "./subjectIcons";

export const subjectIcon: Record<
  SubjectKey,
  React.ComponentType<{className?: string}>
> = {
  react: ReactIcon,
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
  // aws: AwsIcon,
  // add others...
};
