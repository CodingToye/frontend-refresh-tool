import {getProgress, saveProgress} from "./progressStorage";

export const resetSubjectProgress = (subjectKey: string) => {
  const progress = getProgress();

  delete progress[subjectKey];

  saveProgress(progress);
};
