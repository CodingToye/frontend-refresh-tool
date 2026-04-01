import type {TopicReviewLevel} from "@/utils/TopicReviewLevel";

export type InterviewAttempt = {
  date: string;
  topics: Record<string, TopicReviewLevel>;
};

export type InterviewHistory = {
  [subjectKey: string]: InterviewAttempt[];
};

export type InterviewScoreData = {
  attempted: number;
  correct: number;
};

export type InterviewStatus = "not-started" | "in-progress" | "completed";
export type InterviewButtonMode = "take" | "continue" | "retake" | null;
