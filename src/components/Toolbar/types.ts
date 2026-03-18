export type ToolbarProps = {
  subjectKey: string;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  reviewedCount: number;
  flaggedCount: number;
  mockQuestionsCount: number;
  onResetProgress: () => void;
  onResetInterviewProgress: () => void;
  onResetAllProgress: () => void;
  showInterviewOnly: boolean;
  onShowInterviewOnlyChange: (value: boolean) => void;
  showFlaggedOnly: boolean;
  onShowFlaggedOnlyChange: (value: boolean) => void;
  onShowMockQuestions: () => void;
  subjectScore: number | null;
};
