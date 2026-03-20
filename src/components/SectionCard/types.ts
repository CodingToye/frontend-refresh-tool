import type {Topic} from "@/components/TopicItem/types";
import type {SubjectKey} from "@/data/subjects";

export type Section = {
  title: string;
  items: Topic[];
};

export type SectionCardProps = {
  subject: SubjectKey;
  section: Section;
  completedTopics: number;
  flaggedTopics: Record<string, boolean>;
  mockQuestions: Record<string, boolean>;
  interviewScore: number | null;
  totalTopics: number;
  onOpen: () => void;
};
