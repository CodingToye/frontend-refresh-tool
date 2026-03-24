import type {TopicReviewLevel} from "@/utils/TopicReviewLevel/types";
export type TrendLevel = "up" | "down" | "same";

export type SectionProgress = {
  completedTopics: Record<string, boolean>;
  flaggedTopics: Record<string, TopicReviewLevel>;
  mockQuestions: Record<string, boolean>;
  interviewScore?: number;
};

export type LearningProgress = {
  [subjectKey: string]: {
    [sectionTitle: string]: SectionProgress;
  };
};

export type SubjectProgress = {
  [sectionTitle: string]: SectionProgress;
};

export type RefreshProgress = {
  [subjectKey: string]: SubjectProgress;
};
