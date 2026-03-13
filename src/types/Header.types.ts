export type HeaderProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  reviewedCount: number;
  onResetProgress: () => void;
  topicFilter: "all" | "interview";
  onTopicFilterChange: (value: "all" | "interview") => void;
};
