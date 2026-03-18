import type {Section} from "./Section.types";
import type {SubjectKey} from "../data/subjects";
import type {MockQuestion} from "../components/MockInterview/types";

export type Topic = {
  name: string;
  summary: string;
  code?: string;
  interview?: boolean;
  mockQuestions?: MockQuestion[];
};

export type CheckedTopics = Record<string, boolean>;

export type TopicModalProps = {
  subject: SubjectKey;
  section: Section;
  expandedTopic: string | null;
  checkedTopics: CheckedTopics;
  flaggedTopics: Record<string, boolean>;
  mockSelectedTopics: Record<string, boolean>;
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
  onToggleMockSelected: (
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
  isMockSelected: boolean;
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
  onToggleMockSelected: (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => void;
  onArrowUp: () => void;
  onArrowDown: () => void;
};
