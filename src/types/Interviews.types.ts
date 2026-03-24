import type {TopicReviewLevel} from "@/utils/TopicReviewLevel";

export type InterviewAttempt = {
  date: string;
  topics: Record<string, TopicReviewLevel>;
};

export type InterviewHistory = {
  [subjectKey: string]: InterviewAttempt[];
};
