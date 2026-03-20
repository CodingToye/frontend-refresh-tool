import {describe, expect, it, vi} from "vitest";

import {mockSubjectData} from "./getMockSessionQuestions.fixtures";

vi.mock("@/data/subjects", () => ({
  subjectData: mockSubjectData,
}));

import {getMockSessionQuestions} from "./getMockSessionQuestions";
import {getTopicKey} from "./topicKeys";

describe("getMockSessionQuestions", () => {
  it("returns an empty array when no topics are selected", () => {
    const result = getMockSessionQuestions("react", {});
    expect(result).toEqual([]);
  });

  it("returns questions for selected topics", () => {
    const section = mockSubjectData.react.sections[0];
    const item = section.items[0];
    const topicKey = getTopicKey("react", section.title, item.name);

    const result = getMockSessionQuestions("react", {
      [topicKey]: true,
    });

    expect(result).toHaveLength(2);
  });

  it("maps selected topic mock questions into mock session questions", () => {
    const section = mockSubjectData.react.sections[0];
    const item = section.items[0];
    const topicKey = getTopicKey("react", section.title, item.name);

    const result = getMockSessionQuestions("react", {[topicKey]: true});

    expect(result).toEqual([
      {
        id: "q1",
        key: topicKey,
        sectionTitle: section.title,
        topicName: item.name,
        question: "What are components?",
        answer: "Reusable UI building blocks.",
      },
      {
        id: "q2",
        key: topicKey,
        sectionTitle: section.title,
        topicName: item.name,
        question: "What are props?",
        answer: "Inputs passed to components.",
      },
    ]);
  });

  it("returns an empty array when a selected topic has no mock questions", () => {
    const section = mockSubjectData.react.sections[0];
    const item = section.items[1];
    const topicKey = getTopicKey("react", section.title, item.name);

    const result = getMockSessionQuestions("react", {[topicKey]: true});

    expect(result).toEqual([]);
  });
});
