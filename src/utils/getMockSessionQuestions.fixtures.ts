export const mockSubjectData = {
  react: {
    label: "React",
    fileType: "tsx",
    sections: [
      {
        title: "Core Concepts",
        items: [
          {
            name: "Components and Props",
            summary: "Test summary",
            mockQuestions: [
              {
                id: "q1",
                question: "What are components?",
                answer: "Reusable UI building blocks.",
              },
              {
                id: "q2",
                question: "What are props?",
                answer: "Inputs passed to components.",
              },
            ],
          },
          {
            name: "What is React?",
            summary: "Another summary",
          },
        ],
      },
      {
        title: "Hooks",
        items: [
          {
            name: "useEffect",
            summary: "Hook summary",
            mockQuestions: [
              {
                id: "q3",
                question: "What does useEffect do?",
                answer: "Handles side effects.",
              },
            ],
          },
        ],
      },
    ],
  },
};
