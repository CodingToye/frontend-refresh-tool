import type {Section} from "@/components/SectionCard/types";
import type {SubjectKey} from "@/data/subjects";
import type {InterviewHistory} from "@/types/Interviews.types";
import type {TrendLevel} from "@/types/Progress.types";
import type {TopicReviewLevel} from "@/utils/TopicReviewLevel";

export type CheckedTopics = Record<string, boolean>;

export type TopicModalProps = {
  subject: SubjectKey;
  section: Section;
  expandedTopic: string | null;
  checkedTopics: CheckedTopics;
  flaggedTopics: Record<string, TopicReviewLevel>;
  mockSelectedTopics: Record<string, boolean>;
  interviewHistory: InterviewHistory;
  getTopicTrend: (
    previous?: TopicReviewLevel,
    current?: TopicReviewLevel,
  ) => TrendLevel | null;
  onClose: () => void;
  onToggleOpen: (topicName: string | null) => void;
  onToggleChecked: (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => void;
  onToggleMockSelected: (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => void;
  setTopicFlagged: (topicKey: string, level: TopicReviewLevel | null) => void;
};
