import type {InterviewButtonMode} from "@/types/Interviews.types";

export type ToolbarProps = {
  interviewButtonMode: InterviewButtonMode;
  subjectKey: string;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  mockQuestionsCount: number;
  onResetProgress: () => void;
  onResetInterviewProgress: () => void;
  onResetAllProgress: () => void;
  showInterviewOnly: boolean;
  onShowInterviewOnlyChange: (value: boolean) => void;
  showFlaggedOnly: boolean;
  onShowFlaggedOnlyChange: (value: boolean) => void;
  onShowMockQuestions: () => void;
};

export type ActionButtonConfig = {
  buttonLabel: string | number;
  buttonIcon?: string;
  buttonStyle?: "primary" | "secondary" | "tertiary";
  buttonIconColour: string;
  handleClick: () => void;
  extraClasses?: string;
};
