import type {Section} from "@/components/SectionCard/types";
import type {SubjectKey} from "@/data/subjects";

import {getTopicKey} from "./topicKeys";

export const getMockQuestionTopics = (
  sections: Section[],
  subject: SubjectKey,
  flaggedTopics: Record<string, "poor" | "weak">,
) => {
  return sections
    .flatMap((section) =>
      section.items.map((item) => {
        const key = getTopicKey(subject, section.title, item.name);
        const isInterview = Boolean(item.interview);
        const isFlagged = Boolean(flaggedTopics[key]);
        return {
          key,
          sectionTitle: section.title,
          item,
          isInterview,
          isFlagged,
          priority: isInterview && isFlagged ? 0 : isInterview ? 1 : 2,
        };
      }),
    )
    .filter((topic) => topic.isInterview || topic.isFlagged)
    .sort((a, b) => a.priority - b.priority);
};
