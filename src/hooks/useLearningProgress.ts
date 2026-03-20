import type {CheckedTopics} from "@/components/TopicModal/types";
import {
  FLAGGED_STORAGE_KEY,
  INTERVIEW_SCORE_STORAGE_KEY,
  MOCK_SELECTED_STORAGE_KEY,
  STORAGE_KEY,
} from "@/constants/storage";
import type {SubjectKey} from "@/data/subjects";
import {getTopicKey} from "@/utils/topicKeys";

import {useLocalStorageState} from "./useLocalStorageState";

export function useLearningProgress() {
  const [checkedTopics, setCheckedTopics] = useLocalStorageState<CheckedTopics>(
    STORAGE_KEY,
    {},
  );

  const [flaggedTopics, setFlaggedTopics] = useLocalStorageState<
    Record<string, boolean>
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

  const toggleTopicFlagged = (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => {
    const key = getTopicKey(subject, sectionTitle, topicName);

    setFlaggedTopics((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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
  };

  return {
    checkedTopics,
    flaggedTopics,
    mockSelectedTopics,
    interviewScores,
    toggleTopicChecked,
    toggleTopicFlagged,
    toggleMockSelected,
    saveInterviewScore,
    resetStudyProgress,
    resetInterviewProgress,
    resetAllProgress,
    getInterviewScore,
    getSubjectScore,
  };
}
