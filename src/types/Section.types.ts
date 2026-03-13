import type {Section} from "./shared.types";

export type SectionCardProps = {
  section: Section;
  completedTopics: number;
  totalTopics: number;
  onOpen: () => void;
};
