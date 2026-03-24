import type {TopicReviewLevel} from "./types";

export function getTopicReviewLevel(scores: number[]): TopicReviewLevel | null {
  if (scores.length === 0) return null;

  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

  if (average < 1) return "poor";
  if (average < 2) return "weak";
  if (average < 3) return "decent";
  return "strong";
}
