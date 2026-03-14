import type {Section, Topic, CheckedTopics} from "./shared.types";
import type {SubjectKey} from "../data/subjects";

export type TopicModalProps = {
  subject: SubjectKey;
  section: Section;
  expandedTopic: string | null;
  checkedTopics: CheckedTopics;
  flaggedTopics: Record<string, boolean>;
  onClose: () => void;
  onToggleOpen: (topicName: string | null) => void;
  onToggleChecked: (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => void;
  onToggleFlagged: (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => void;
};

export type TopicItemProps = {
  subject: SubjectKey;
  item: Topic;
  sectionTitle: string;
  isOpen: boolean;
  isChecked: boolean;
  isFlagged: boolean;
  onToggleOpen: () => void;
  onToggleChecked: (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => void;
  onToggleFlagged: (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => void;
  onArrowUp: () => void;
  onArrowDown: () => void;
};
