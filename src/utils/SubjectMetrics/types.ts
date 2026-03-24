export type CountTrend = "up" | "down" | "same";

export type SubjectMetrics = {
  reviewedCount: number;
  poorCount: number;
  weakCount: number;
  decentCount: number;
  strongCount: number;
  mockQuestionsCount: number;
  poorTrend: CountTrend;
  weakTrend: CountTrend;
  decentTrend: CountTrend;
  strongTrend: CountTrend;
};
