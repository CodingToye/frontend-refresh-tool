import type {SubjectKey} from "../../data/subjects";

export type MockSessionQuestion = {
  id: string;
  key: string;
  topicName: string;
  sectionTitle: string;
  question: string;
  answer: string;
};

export type MockInterviewProps = {
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

export type MockInterviewNoQuestionsProps = {
  subject: SubjectKey;
  onHandlePause: () => void;
};

export type MockInterviewCompleteProps = {
  subject: SubjectKey;
  totalScore: number;
  maxScore: number;
  percentage: number;
  totalQuestions: number;
  onHandlePause: () => void;
};

export type MockInterviewQuestionsProps = {
  subject: SubjectKey;
  currentIndex: number;
  totalQuestions: number;
  currentQuestion: MockSessionQuestion;
  currentAnswer: string;
  setCurrentAnswer: (value: string) => void;
  revealed: boolean;
  onHandlePause: () => void;
  onHandleReveal: () => void;
  onHandleScore: (score: number) => void;
};

export type MockSelectedTopics = Record<string, boolean>;
