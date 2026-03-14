import type {Section} from "./shared.types";
import type {SubjectKey} from "../data/subjects";

export type SectionCardProps = {
  subject: SubjectKey;
  section: Section;
  completedTopics: number;
  flaggedTopics: Record<string, boolean>;
  totalTopics: number;
  onOpen: () => void;
};
