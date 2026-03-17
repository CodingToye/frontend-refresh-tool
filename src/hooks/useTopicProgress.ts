import {useLocalStorageState} from "./useLocalStorageState";
import {getTopicKey} from "../utils/topicKeys";
import type {CheckedTopics} from "../types/Topic.types";
import type {SubjectKey} from "../data/subjects";
import {
  STORAGE_KEY,
  FLAGGED_STORAGE_KEY,
  MOCK_SELECTED_STORAGE_KEY,
} from "../constants/storage";

export function useTopicProgress() {
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

  const resetSubjectProgress = (subject: SubjectKey) => {
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
    setMockSelectedTopics((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([key]) => !key.startsWith(`${subject}::`)),
      ),
    );
  };

  return {
    checkedTopics,
    flaggedTopics,
    mockSelectedTopics,
    toggleTopicChecked,
    toggleTopicFlagged,
    toggleMockSelected,
    resetSubjectProgress,
  };
}
