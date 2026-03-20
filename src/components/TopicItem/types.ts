import type {SubjectKey} from "@/data/subjects";

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
