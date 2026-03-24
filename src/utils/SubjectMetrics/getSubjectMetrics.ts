import type {SubjectKey} from "@/data/subjects";
import type {InterviewHistory} from "@/types/Interviews.types";
import type {TopicReviewLevel} from "@/types/Progress.types";

import type {CountTrend, SubjectMetrics} from "./types";

const getCountTrend = (previous: number, current: number): CountTrend => {
  if (current > previous) return "up";
  if (current < previous) return "down";
  return "same";
};

const getAttemptLevelCount = (
  attempt: {topics: Record<string, TopicReviewLevel>} | undefined,
  level: TopicReviewLevel,
) => {
  if (!attempt) return 0;

  return Object.values(attempt.topics).filter((value) => value === level)
    .length;
};

export function getSubjectMetrics({
  subject,
  checkedTopics,
  flaggedTopics,
  mockSelectedTopics,
  interviewHistory,
}: {
  subject: SubjectKey;
  checkedTopics: Record<string, boolean>;
  flaggedTopics: Record<string, TopicReviewLevel>;
  mockSelectedTopics: Record<string, boolean>;
  interviewHistory: InterviewHistory;
}): SubjectMetrics {
  const reviewedCount = Object.entries(checkedTopics).filter(
    ([key, value]) => key.startsWith(`${subject}::`) && value,
  ).length;

  const poorCount = Object.entries(flaggedTopics).filter(
    ([key, value]) => key.startsWith(`${subject}::`) && value === "poor",
  ).length;

  const weakCount = Object.entries(flaggedTopics).filter(
    ([key, value]) => key.startsWith(`${subject}::`) && value === "weak",
  ).length;

  const decentCount = Object.entries(flaggedTopics).filter(
    ([key, value]) => key.startsWith(`${subject}::`) && value === "decent",
  ).length;

  const strongCount = Object.entries(flaggedTopics).filter(
    ([key, value]) => key.startsWith(`${subject}::`) && value === "strong",
  ).length;

  const mockQuestionsCount = Object.entries(mockSelectedTopics).filter(
    ([key, value]) => {
      return key.startsWith(`${subject}::`) && value;
    },
  ).length;

  const attempts = interviewHistory[subject] ?? [];
  const latestAttempt = attempts[attempts.length - 1];
  const previousAttempt = attempts[attempts.length - 2];

  const poorTrend = getCountTrend(
    getAttemptLevelCount(previousAttempt, "poor"),
    getAttemptLevelCount(latestAttempt, "poor"),
  );

  const weakTrend = getCountTrend(
    getAttemptLevelCount(previousAttempt, "weak"),
    getAttemptLevelCount(latestAttempt, "weak"),
  );

  const decentTrend = getCountTrend(
    getAttemptLevelCount(previousAttempt, "decent"),
    getAttemptLevelCount(latestAttempt, "decent"),
  );

  const strongTrend = getCountTrend(
    getAttemptLevelCount(previousAttempt, "strong"),
    getAttemptLevelCount(latestAttempt, "strong"),
  );

  return {
    reviewedCount,
    poorCount,
    weakCount,
    decentCount,
    strongCount,
    mockQuestionsCount,
    poorTrend,
    weakTrend,
    decentTrend,
    strongTrend,
  };
}
