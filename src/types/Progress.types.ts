export type SectionProgress = {
  completedTopics: Record<string, boolean>;
  flaggedTopics: Record<string, boolean>;
  mockQuestions: Record<string, boolean>;
  interviewScore?: number;
};

export type LearningProgress = {
  [subjectKey: string]: {
    [sectionTitle: string]: SectionProgress;
  };
};

export type SubjectProgress = {
  [sectionTitle: string]: SectionProgress;
};

export type RefreshProgress = {
  [subjectKey: string]: SubjectProgress;
};
