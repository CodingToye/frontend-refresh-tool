import type {CheckedTopics} from "@/components/TopicModal/types";
import {
  FLAGGED_STORAGE_KEY,
  INTERVIEW_HISTORY_STORAGE_KEY,
  INTERVIEW_SCORE_STORAGE_KEY,
  MOCK_SELECTED_STORAGE_KEY,
  STORAGE_KEY,
} from "@/constants/storage";
import type {SubjectKey} from "@/data/subjects";
import type {
  InterviewAttempt,
  InterviewHistory,
} from "@/types/Interviews.types";
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
    Record<string, number>
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
    return interviewScores[key] ?? null;
  };

  const getSubjectScore = (subject: SubjectKey) => {
    const subjectEntries = Object.entries(interviewScores).filter(([key]) =>
      key.startsWith(`${subject}::`),
    );

    if (subjectEntries.length === 0) return null;

    const scores = subjectEntries.map(([, score]) => score);
    const average =
      scores.reduce((sum, score) => sum + score, 0) / scores.length;

    return Math.round(average);
  };

  const saveInterviewScore = (
    subject: SubjectKey,
    sectionTitle: string,
    score: number,
  ) => {
    const key = `${subject}::${sectionTitle}`;

    console.log("saveInterviewScore called", {key, score});

    setInterviewScores((prev) => {
      const next = {
        ...prev,
        [key]: score,
      };

      console.log("next interviewScores state", next);
      return next;
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
    setInterviewScores((prev) => {
      console.log("before reset", prev);

      const next = Object.fromEntries(
        Object.entries(prev).filter(([key]) => !key.startsWith(`${subject}::`)),
      );

      console.log("after reset", next);
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
    getTopicTrend,
  };
}
