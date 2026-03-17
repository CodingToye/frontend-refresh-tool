import type {Section} from "../types/Section.types";
import type {SubjectKey} from "../data/subjects";
import {getTopicKey} from "./topicKeys";

type FilterSectionsArgs = {
  sections: Section[];
  subject: SubjectKey;
  flaggedTopics: Record<string, boolean>;
  showInterviewOnly: boolean;
  showFlaggedOnly: boolean;
  searchTerm: string;
};

export function filterSections({
  sections,
  subject,
  flaggedTopics,
  showInterviewOnly,
  showFlaggedOnly,
  searchTerm,
}: FilterSectionsArgs): Section[] {
  const query = searchTerm.toLowerCase();

  return sections
    .map((section) => {
      let items = section.items;

      if (showInterviewOnly) {
        items = items.filter((item) => item.interview);
      }
      if (showFlaggedOnly) {
        items = items.filter(
          (item) =>
            flaggedTopics[getTopicKey(subject, section.title, item.name)],
        );
      }
      if (query) {
        items = items.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.summary.toLowerCase().includes(query),
        );
      }

      return {
        ...section,
        items,
      };
    })
    .filter((section) => section.items.length > 0);
}
