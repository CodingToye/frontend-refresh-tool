import type {Topic} from "./shared.types";
import type {SubjectKey} from "../data/subjects";

type MockQuestionTopic = {
  key: string;
  sectionTitle: string;
  item: Topic;
  isInterview: boolean;
  isFlagged: boolean;
  priority: number;
};

export type MockQuestionsModalProps = {
  subject: SubjectKey;
  showMockQuestions: boolean;
  setShowMockQuestions: (show: boolean) => void;
  topics: MockQuestionTopic[];
};
