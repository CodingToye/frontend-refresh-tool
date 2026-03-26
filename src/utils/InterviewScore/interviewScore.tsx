import type {ConfidenceLevel, InterviewScoreMetrics} from "./types";

function clamp(value: number, min = 0, max = 1): number {
  return Math.min(Math.max(value, min), max);
}

export function getConfidenceLevel(coverage: number): ConfidenceLevel {
  if (coverage < 0.2) return "low";
  if (coverage < 0.6) return "medium";
  return "high";
}

export function getInterviewScoreMetrics(params: {
  attempted: number;
  correct: number;
  totalAvailable: number;
}): InterviewScoreMetrics {
  const attempted = Math.max(params.attempted, 0);
  const correct = Math.max(params.correct, 0);
  const totalAvailable = Math.max(params.totalAvailable, 0);

  const accuracy = attempted > 0 ? correct / attempted : 0;
  const coverage = totalAvailable > 0 ? attempted / totalAvailable : 0;
  const weightedScore = accuracy * coverage;

  return {
    attempted,
    correct,
    totalAvailable,
    accuracy: clamp(accuracy),
    coverage: clamp(coverage),
    weightedScore: clamp(weightedScore),
    confidence: getConfidenceLevel(coverage),
  };
}

export function toPercentage(value: number): number {
  return Math.round(value * 100);
}
