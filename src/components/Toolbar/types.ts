export type ToolbarProps = {
  interviewButtonMode: "take" | "view" | "retake" | null;
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
  handleClick: () => void;
  extraClasses?: string;
};
