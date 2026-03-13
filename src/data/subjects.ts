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
import type {Section} from "../types/shared.types";

export const subjectData = {
  react: {
    label: "React",
    sections: reactSections,
  },
  javaScript: {
    label: "JavaScript",
    sections: javascriptSections,
  },
  css: {
    label: "CSS",
    sections: cssSections,
  },
  typeScript: {
    label: "TypeScript",
    sections: typescriptSections,
  },
  html: {
    label: "HTML",
    sections: htmlSections,
  },
  node: {
    label: "Node.js",
    sections: nodeSections,
  },
  testing: {
    label: "Testing",
    sections: testingSections,
  },
  accessibility: {
    label: "Accessibility",
    sections: accessibilitySections,
  },
  browserAPIs: {
    label: "Browser APIs",
    sections: browserAPIsSections,
  },
  webPerformance: {
    label: "Web Performance",
    sections: webPerformanceSections,
  },
} satisfies Record<string, {label: string; sections: Section[]}>;

export type SubjectKey = keyof typeof subjectData;
