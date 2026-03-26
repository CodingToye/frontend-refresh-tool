import type {Section} from "@/components/SectionCard/types";

export const getTotalSubjectQuestions = (sections: Section[]) => {
  return sections.reduce((sectionTotal, section) => {
    const itemTotal = section.items.reduce((topicTotal, item) => {
      return topicTotal + (item.mockQuestions?.length ?? 0);
    }, 0);

    return sectionTotal + itemTotal;
  }, 0);
};
