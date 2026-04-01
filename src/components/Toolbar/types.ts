import type {InterviewButtonMode} from "@/types/Interviews.types";

export type ToolbarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  interviewButtonMode: InterviewButtonMode;

  onResetProgress: () => void;
  onResetSubjectProgress: () => void;
  onResetAllSubjectsProgress: () => void;

  questionMode: "classic" | "extended";
  onQuestionModeChange: (value: "classic" | "extended") => void;

  showInterviewOnly: boolean;
  onShowInterviewOnlyChange: (value: boolean) => void;
  showFlaggedOnly: boolean;
  onShowFlaggedOnlyChange: (value: boolean) => void;
  onShowMockQuestions: () => void;
};

export type ActionButtonConfig = {
  buttonLabel: string | number;
  buttonIcon?: string;
  buttonStyle?: "primary" | "secondary" | "tertiary" | "danger" | "success";
  buttonIconColour: string;
  handleClick: () => void;
  extraClasses?: string;
};
