import type {SubjectKey} from "@/data/subjects";

export type SubjectNavProps = {
  subjects: [string, {label: string}][];
  subject: SubjectKey;
  setSubject: (subject: SubjectKey) => void;
};
