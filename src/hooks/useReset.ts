import type {SectionProgress} from "@/types/Progress.types";
import {getStudyProgress, saveStudyProgress} from "@/utils/progressStorage";

export function useReset(subjectKey: string) {
  const resetStudyProgress = () => {
    console.log("test1");
    const studyProgress = getStudyProgress();
    console.log(studyProgress);
    if (!studyProgress[subjectKey]) return;
    Object.values(studyProgress[subjectKey]).forEach(
      (section: SectionProgress) => {
        section.completedTopics = {};
        section.flaggedTopics = {};
      },
    );

    console.log("test2");

    saveStudyProgress(studyProgress);
  };

  return {
    resetStudyProgress,
  };
}
