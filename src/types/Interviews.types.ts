import type {TopicReviewLevel} from "./Progress.types";

export type InterviewAttempt = {
  date: string;
  topics: Record<string, TopicReviewLevel>;
};

export type InterviewHistory = {
  [subjectKey: string]: InterviewAttempt[];
};
