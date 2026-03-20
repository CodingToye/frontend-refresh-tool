export type ToolbarProps = {
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
