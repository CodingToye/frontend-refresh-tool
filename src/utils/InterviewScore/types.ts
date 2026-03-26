export type ConfidenceLevel = "low" | "medium" | "high";

export interface InterviewScoreMetrics {
  attempted: number;
  correct: number;
  totalAvailable: number;
  accuracy: number;
  coverage: number;
  weightedScore: number;
  confidence: ConfidenceLevel;
}
