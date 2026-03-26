import type {CheckedTopics} from "@/components/TopicModal/types";
import {
  FLAGGED_STORAGE_KEY,
  INTERVIEW_HISTORY_STORAGE_KEY,
  INTERVIEW_SCORE_STORAGE_KEY,
  MOCK_SELECTED_STORAGE_KEY,
  STORAGE_KEY,
} from "@/constants/storage";
import {subjectData, type SubjectKey} from "@/data/subjects";
import type {
  InterviewAttempt,
  InterviewHistory,
  InterviewScoreData,
} from "@/types/Interviews.types";
import {getTotalSectionQuestions} from "@/utils/getTotalSectionQuestions";
import {getTotalSubjectQuestions} from "@/utils/getTotalSubjectQuestions";
import {getInterviewScoreMetrics, toPercentage} from "@/utils/InterviewScore";
import {getTopicKey} from "@/utils/topicKeys";
import type {TopicReviewLevel} from "@/utils/TopicReviewLevel/types";

import {useLocalStorageState} from "./useLocalStorageState";

export function useLearningProgress() {
  const [checkedTopics, setCheckedTopics] = useLocalStorageState<CheckedTopics>(
    STORAGE_KEY,
    {},
  );
  const [interviewHistory, setInterviewHistory] =
    useLocalStorageState<InterviewHistory>(INTERVIEW_HISTORY_STORAGE_KEY, {});

  const [flaggedTopics, setFlaggedTopics] = useLocalStorageState<
    Record<string, TopicReviewLevel>
  >(FLAGGED_STORAGE_KEY, {});

  const [mockSelectedTopics, setMockSelectedTopics] = useLocalStorageState<
    Record<string, boolean>
  >(MOCK_SELECTED_STORAGE_KEY, {});

  const [interviewScores, setInterviewScores] = useLocalStorageState<
    Record<string, InterviewScoreData>
  >(INTERVIEW_SCORE_STORAGE_KEY, {});

  const toggleTopicChecked = (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => {
    const key = getTopicKey(subject, sectionTitle, topicName);

    setCheckedTopics((prev) => {
      const isNowChecked = !prev[key];

      if (isNowChecked) {
        setFlaggedTopics((flags) => {
          const copy = {...flags};
          delete copy[key];
          return copy;
        });
      }

      return {
        ...prev,
        [key]: isNowChecked,
      };
    });
  };

  const setTopicFlagged = (
    topicKey: string,
    level: TopicReviewLevel | null,
  ) => {
    console.log(topicKey, flaggedTopics[topicKey]);
    setFlaggedTopics((prev) => {
      const updated = {...prev};

      if (level) {
        updated[topicKey] = level;
      } else {
        delete updated[topicKey];
      }

      return updated;
    });
  };

  const toggleMockSelected = (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => {
    const key = getTopicKey(subject, sectionTitle, topicName);

    setMockSelectedTopics((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getInterviewScore = (subject: SubjectKey, sectionTitle: string) => {
    const key = `${subject}::${sectionTitle}`;
    const scoreData = interviewScores[key];

    if (
      !scoreData ||
      typeof scoreData !== "object" ||
      !("attempted" in scoreData) ||
      !("correct" in scoreData)
    ) {
      return 0;
    }
    if (scoreData.attempted === 0) return 0;

    const section = subjectData[subject].sections.find(
      (section) => section.title === sectionTitle,
    );

    if (!section) return 0;

    const totalAvailable = getTotalSectionQuestions(section);

    const metrics = getInterviewScoreMetrics({
      attempted: scoreData.attempted,
      correct: scoreData.correct,
      totalAvailable,
    });

    return toPercentage(metrics.weightedScore);
  };

  const saveInterviewScore = (
    subject: SubjectKey,
    sectionTitle: string,
    scoreData: InterviewScoreData,
  ) => {
    const key = `${subject}::${sectionTitle}`;

    const safeAttempted = Math.max(0, scoreData.attempted);
    const safeCorrect = Math.min(Math.max(0, scoreData.correct), safeAttempted);

    console.log("saveInterviewScore input", {key, scoreData});

    setInterviewScores((prev) => ({
      ...prev,
      [key]: {
        attempted: safeAttempted,
        correct: safeCorrect,
      },
    }));
  };

  const getSubjectScore = (subject: SubjectKey) => {
    const subjectEntries = Object.entries(interviewScores).filter(([key]) =>
      key.startsWith(`${subject}::`),
    );

    if (subjectEntries.length === 0) return 0;

    const totals = subjectEntries.reduce(
      (acc, [, scoreData]) => {
        if (
          typeof scoreData === "object" &&
          scoreData !== null &&
          "attempted" in scoreData &&
          "correct" in scoreData
        ) {
          acc.attempted += scoreData.attempted;
          acc.correct += scoreData.correct;
        }
        return acc;
      },
      {attempted: 0, correct: 0},
    );

    if (totals.attempted === 0) return 0;

    const totalAvailable = getTotalSubjectQuestions(
      subjectData[subject].sections,
    );

    const metrics = getInterviewScoreMetrics({
      attempted: totals.attempted,
      correct: totals.correct,
      totalAvailable,
    });

    console.log("interviewScores", interviewScores);
    console.log("subjectEntries", subjectEntries);

    console.log("getSubjectScore debug", {
      subject,
      subjectEntries,
      totals,
      totalAvailable,
      metrics,
      finalScore: toPercentage(metrics.weightedScore),
    });

    return toPercentage(metrics.weightedScore);
  };

  const getSubjectInterviewMetrics = (subject: SubjectKey) => {
    const subjectEntries = Object.entries(interviewScores).filter(([key]) =>
      key.startsWith(`${subject}::`),
    );

    if (subjectEntries.length === 0) {
      return getInterviewScoreMetrics({
        attempted: 0,
        correct: 0,
        totalAvailable: getTotalSubjectQuestions(subjectData[subject].sections),
      });
    }

    const totals = subjectEntries.reduce(
      (acc, [, scoreData]) => {
        acc.attempted += scoreData.attempted ?? 0;
        acc.correct += scoreData.correct ?? 0;
        return acc;
      },
      {attempted: 0, correct: 0},
    );

    const totalAvailable = getTotalSubjectQuestions(
      subjectData[subject].sections,
    );

    return getInterviewScoreMetrics({
      attempted: totals.attempted,
      correct: totals.correct,
      totalAvailable,
    });
  };

  const levelRank = {
    poor: 0,
    weak: 1,
    decent: 2,
    strong: 3,
  } as const;

  const getTopicTrend = (
    previous?: TopicReviewLevel,
    current?: TopicReviewLevel,
  ) => {
    if (!previous || !current) return null;
    if (levelRank[current] > levelRank[previous]) return "up";
    if (levelRank[current] < levelRank[previous]) return "down";

    return "same";
  };

  const saveInterviewAttempt = (
    subjectKey: string,
    attempt: InterviewAttempt,
  ) => {
    setInterviewHistory((prev) => ({
      ...prev,
      [subjectKey]: [...(prev[subjectKey] ?? []), attempt],
    }));
  };

  const resetStudyProgress = (subject: SubjectKey) => {
    setCheckedTopics((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([key]) => !key.startsWith(`${subject}::`)),
      ),
    );

    setFlaggedTopics((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([key]) => !key.startsWith(`${subject}::`)),
      ),
    );
  };

  const resetInterviewProgress = (subject: SubjectKey) => {
    setInterviewScores((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([key]) => !key.startsWith(`${subject}::`)),
      ),
    );

    setInterviewHistory((prev) => {
      const next = {...prev};
      delete next[subject];
      return next;
    });
  };

  const removeSubjectEntries = <T extends Record<string, unknown>>(
    state: T,
    subject: SubjectKey,
  ) =>
    Object.fromEntries(
      Object.entries(state).filter(([key]) => !key.startsWith(`${subject}::`)),
    ) as T;

  const resetAllProgress = (subject: SubjectKey) => {
    setCheckedTopics((prev) => removeSubjectEntries(prev, subject));
    setFlaggedTopics((prev) => removeSubjectEntries(prev, subject));
    setMockSelectedTopics((prev) => removeSubjectEntries(prev, subject));
    setInterviewScores((prev) => removeSubjectEntries(prev, subject));
    setInterviewHistory((prev) => {
      const next = {...prev};
      delete next[subject];
      return next;
    });
  };

  return {
    checkedTopics,
    flaggedTopics,
    mockSelectedTopics,
    interviewScores,
    interviewHistory,
    toggleTopicChecked,
    setTopicFlagged,
    toggleMockSelected,
    saveInterviewScore,
    saveInterviewAttempt,
    resetStudyProgress,
    resetInterviewProgress,
    resetAllProgress,
    getInterviewScore,
    getSubjectScore,
    getSubjectInterviewMetrics,
    getTopicTrend,
  };
}
