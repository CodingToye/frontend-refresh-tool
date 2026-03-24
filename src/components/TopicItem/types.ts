import type {SubjectKey} from "@/data/subjects";
import type {TrendLevel} from "@/types/Progress.types";

export type MockQuestion = {
  id: string;
  question: string;
  answer: string;
};

export type Topic = {
  name: string;
  summary: string;
  code?: string;
  interview?: boolean;
  mockQuestions?: MockQuestion[];
};

export type TopicItemProps = {
  subject: SubjectKey;
  item: Topic;
  sectionTitle: string;
  isOpen: boolean;
  isChecked: boolean;
  isFlagged: boolean;
  isMockSelected: boolean;
  trend?: TrendLevel;
  onToggleOpen: () => void;
  onToggleChecked: (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => void;
  onToggleMockSelected: (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => void;
  onToggleFlagSelected: () => void;
  onArrowUp: () => void;
  onArrowDown: () => void;
};
