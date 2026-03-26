import type {Section} from "../components/SectionCard/types";
import {sections as accessibilitySections} from "./accessibilitySections";
import {sections as awsSections} from "./awsSections";
import {sections as browserAPIsSections} from "./browserAPIsSections";
import {sections as cssSections} from "./cssSections";
import {sections as fullstackSections} from "./fullstackSections";
import {sections as htmlSections} from "./htmlSections";
import {sections as javascriptSections} from "./javascriptSections";
import {sections as nextJSSections} from "./nextjsSections";
import {sections as nodeSections} from "./nodeSections";
import {sections as reactSections} from "./reactSections";
import {sections as testingSections} from "./testingSections";
// import {sections as testSections} from "./testSections";
import {sections as typescriptSections} from "./typescriptSections";
import {sections as webPerformanceSections} from "./webperformanceSections";

type SubjectFileType = "jsx" | "js" | "css" | "tsx" | "ts" | "html" | "basic";

export const subjectData = {
  // testSection: {
  //   label: "Test",
  //   sections: testSections,
  //   fileType: "js",
  // },
  react: {
    label: "React",
    sections: reactSections,
    fileType: "jsx",
  },
  javaScript: {
    label: "JavaScript",
    sections: javascriptSections,
    fileType: "js",
  },
  css: {
    label: "CSS",
    sections: cssSections,
    fileType: "css",
  },
  typeScript: {
    label: "TypeScript",
    sections: typescriptSections,
    fileType: "tsx",
  },
  nextJS: {
    label: "Next.JS",
    sections: nextJSSections,
    fileType: "js",
  },
  html: {
    label: "HTML",
    sections: htmlSections,
    fileType: "html",
  },
  node: {
    label: "Node.js",
    sections: nodeSections,
    fileType: "js",
  },
  aws: {
    label: "AWS",
    sections: awsSections,
    fileType: "js",
  },
  fullStack: {
    label: "Full Stack System Design",
    sections: fullstackSections,
    fileType: "js",
  },
  testing: {
    label: "Testing",
    sections: testingSections,
    fileType: "js",
  },
  accessibility: {
    label: "Accessibility",
    sections: accessibilitySections,
    fileType: "html",
  },
  browserAPIs: {
    label: "Browser APIs",
    sections: browserAPIsSections,
    fileType: "js",
  },
  webPerformance: {
    label: "Web Performance",
    sections: webPerformanceSections,
    fileType: "basic",
  },
} satisfies Record<
  string,
  {label: string; sections: Section[]; fileType?: SubjectFileType}
>;

export type SubjectKey = keyof typeof subjectData;
