export type ToolbarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  reviewedCount: number;
  flaggedCount: number;
  mockQuestionsCount: number;
  onResetProgress: () => void;
  showInterviewOnly: boolean;
  onShowInterviewOnlyChange: (value: boolean) => void;
  showFlaggedOnly: boolean;
  onShowFlaggedOnlyChange: (value: boolean) => void;
  onShowMockQuestions: () => void;
};
