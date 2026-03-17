import {sections as reactSections} from "./reactSections";
import {sections as javascriptSections} from "./javascriptSections";
import {sections as cssSections} from "./cssSections";
import {sections as typescriptSections} from "./typescriptSections";
import {sections as htmlSections} from "./htmlSections";
import {sections as nodeSections} from "./nodeSections";
import {sections as testingSections} from "./testingSections";
import {sections as accessibilitySections} from "./accessibilitySections";
import {sections as browserAPIsSections} from "./browserAPIsSections";
import {sections as webPerformanceSections} from "./webperformanceSections";
import type {Section} from "../types/Section.types";

type SubjectFileType = "jsx" | "js" | "css" | "tsx" | "ts" | "html" | "basic";

export const subjectData = {
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
