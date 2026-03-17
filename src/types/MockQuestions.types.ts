// import type {Topic} from "./Topic.types";
import type {SubjectKey} from "../data/subjects";

// type MockQuestionTopic = {
//   key: string;
//   sectionTitle: string;
//   item: Topic;
//   isInterview: boolean;
//   isFlagged: boolean;
//   priority: number;
// };

export type MockSessionQuestion = {
  id: string;
  key: string;
  topicName: string;
  sectionTitle: string;
  question: string;
  answer: string;
};

export type MockQuestionsModalProps = {
  subject: SubjectKey;
  showMockQuestions: boolean;
  setShowMockQuestions: (show: boolean) => void;
  questions: MockSessionQuestion[];
};

export type MockQuestion = {
  id: string;
  question: string;
  answer: string;
};

export type MockSelectedTopics = Record<string, boolean>;
