import type {Topic} from "@/components/TopicItem/types";
import type {SubjectKey} from "@/data/subjects";
import type {InterviewHistory} from "@/types/Interviews.types";
import type {TrendLevel} from "@/types/Progress.types";
import type {TopicReviewLevel} from "@/utils/TopicReviewLevel";

export type Section = {
  title: string;
  items: Topic[];
};

export type SectionCardProps = {
  subject: SubjectKey;
  section: Section;
  completedTopics: number;
  flaggedTopics: Record<string, TopicReviewLevel>;
  mockQuestions: Record<string, boolean>;
  interviewScore: number | null;
  interviewHistory: InterviewHistory;
  getTopicTrend: (
    previous?: TopicReviewLevel,
    current?: TopicReviewLevel,
  ) => TrendLevel | null;
  totalTopics: number;
  onOpen: () => void;
};

export type InterviewAttempt = {
  topics: Record<string, TopicReviewLevel>;
};
