import type {Section} from "@/components/SectionCard/types";

export const getTotalSectionQuestions = (section: Section) => {
  return section.items.reduce((total, item) => {
    return total + (item.mockQuestions?.length ?? 0);
  }, 0);
};
