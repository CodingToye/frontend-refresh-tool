import type {Section} from "@/components/SectionCard/types";
import type {SubjectKey} from "@/data/subjects";

export type CheckedTopics = Record<string, boolean>;

export type TopicModalProps = {
  subject: SubjectKey;
  section: Section;
  expandedTopic: string | null;
  checkedTopics: CheckedTopics;
  flaggedTopics: Record<string, boolean>;
  mockSelectedTopics: Record<string, boolean>;
  onClose: () => void;
  onToggleOpen: (topicName: string | null) => void;
  onToggleChecked: (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => void;
  onToggleFlagged: (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => void;
  onToggleMockSelected: (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => void;
};
