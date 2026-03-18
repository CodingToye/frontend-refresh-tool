import type {RefreshProgress} from "../types/Progress.types";
import {STORAGE_KEY} from "../constants/storage";

export const getStudyProgress = (): RefreshProgress => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
};

export const saveStudyProgress = (progress: RefreshProgress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

// export const saveInterviewSectionScore = (
//   subjectKey: string,
//   sectionTitle: string,
//   score: number,
// ) => {
//   const progress = getProgress();

//   if (!progress[subjectKey]) {
//     progress[subjectKey] = {};
//   }

//   if (!progress[subjectKey][sectionTitle]) {
//     progress[subjectKey][sectionTitle] = {
//       completedTopics: [],
//       flaggedTopics: [],
//     };
//   }

//   progress[subjectKey][sectionTitle].interviewScore = score;

//   saveProgress(progress);
// };
