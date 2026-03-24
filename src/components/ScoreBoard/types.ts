import type {TopicReviewLevel} from "@/utils/TopicReviewLevel";

export type ScoreTrend = "up" | "down" | "same";

export type ScoreBoardProps = {
  reviewedCount: number;
  // flaggedCount: number;
  poorCount: number;
  weakCount: number;
  decentCount: number;
  strongCount: number;
  poorTrend?: ScoreTrend;
  weakTrend?: ScoreTrend;
  decentTrend?: ScoreTrend;
  strongTrend?: ScoreTrend;
  subjectScore: number | null;
  mockQuestionsCount: number;
};

export type ScoreProps = {
  count: number;
  scoreStyle: TopicReviewLevel;
  trend?: ScoreTrend;
  scoreIcon: string;
  contentNoun: string;
  contentVerb: string;
};
