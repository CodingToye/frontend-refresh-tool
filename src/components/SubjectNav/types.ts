import type {SubjectKey} from "@/data/subjects";
import type {InterviewScoreMetrics} from "@/utils/InterviewScore/types";

export type SubjectNavProps = {
  subjects: [SubjectKey, {label: string}][];
  subject: SubjectKey;
  setSubject: (subject: SubjectKey) => void;
  subjectMetrics: Record<SubjectKey, InterviewScoreMetrics>;
};
