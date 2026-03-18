import {getProgress} from "./progressStorage";

export const getSubjectScore = (subjectKey: string) => {
  const progress = getProgress();
  const subject = progress?.[subjectKey];

  if (!subject) return null;

  const scores = Object.values(subject)
    .map((section) => section.interviewScore)
    .filter((score): score is number => typeof score === "number");

  if (scores.length === 0) return null;

  return Math.round(
    scores.reduce((sum, score) => sum + score, 0) / scores.length,
  );
};
