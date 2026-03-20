import type {MockSessionQuestion} from "@/components/MockInterview/types";
import type {Section} from "@/components/SectionCard/types";
import type {SubjectKey} from "@/data/subjects";
import {subjectData} from "@/data/subjects";

import {getTopicKey} from "./topicKeys";

export const getMockSessionQuestions = (
  subject: SubjectKey,
  mockSelectedTopics: Record<string, boolean>,
): MockSessionQuestion[] => {
  const sections: Section[] = subjectData[subject].sections;

  return sections.flatMap((section) =>
    section.items.flatMap((item) => {
      const topicKey = getTopicKey(subject, section.title, item.name);

      if (!mockSelectedTopics[topicKey]) {
        return [];
      }

      return (item.mockQuestions ?? []).map((mockQuestion) => ({
        id: mockQuestion.id,
        key: topicKey,
        sectionTitle: section.title,
        topicName: item.name,
        question: mockQuestion.question,
        answer: mockQuestion.answer,
      }));
    }),
  );
};
