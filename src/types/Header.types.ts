export type HeaderProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  reviewedCount: number;
  onResetProgress: () => void;
  showInterviewOnly: boolean;
  onShowInterviewOnlyChange: (value: boolean) => void;
  showFlaggedOnly: boolean;
  onShowFlaggedOnlyChange: (value: boolean) => void;
};
