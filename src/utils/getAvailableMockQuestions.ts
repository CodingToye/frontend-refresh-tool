import type {MockSessionQuestion} from "@/components/MockInterview/types";
import type {Section} from "@/components/SectionCard/types";
import type {MockQuestion} from "@/components/TopicItem/types";
import type {SubjectKey} from "@/data/subjects";
import {subjectData} from "@/data/subjects";

import {getTopicKey} from "./topicKeys";

export const getAvailableMockQuestions = (
  subject: SubjectKey,
): MockSessionQuestion[] => {
  const sections: Section[] = subjectData[subject].sections;

  return sections.flatMap((section) =>
    section.items.flatMap((item) =>
      (item.mockQuestions ?? []).map((mockQuestion: MockQuestion) => ({
        id: mockQuestion.id,
        key: getTopicKey(subject, section.title, item.name),
        sectionTitle: section.title,
        topicName: item.name,
        question: mockQuestion.question,
        answer: mockQuestion.answer,
      })),
    ),
  );
};
