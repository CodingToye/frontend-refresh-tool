import type {SubjectKey} from "../data/subjects";

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
  saveInterviewScore: (
    subject: SubjectKey,
    sectionTitle: string,
    score: number,
  ) => void;
};

export type MockQuestion = {
  id: string;
  question: string;
  answer: string;
};

export type MockSelectedTopics = Record<string, boolean>;
