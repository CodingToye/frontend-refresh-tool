import {subjectData} from "../data/subjects";
import type {MockQuestionsModalProps} from "../types/MockQuestions.types";

export function MockQuestionsModal({
  subject,
  showMockQuestions,
  setShowMockQuestions,
  topics,
}: MockQuestionsModalProps) {
  if (!showMockQuestions) return null;

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={() => setShowMockQuestions(false)}
    >
      <div
        className="w-full max-w-4xl rounded-xl bg-slate-800 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {subjectData[subject].label} Mock Questions
          </h2>
          <button
            onClick={() => setShowMockQuestions(false)}
            className="text-xs text-slate-300 hover:text-white"
          >
            Close
          </button>
        </div>

        {topics.length === 0 ? (
          <p className="text-sm text-slate-400">
            No flagged or interview topics found.
          </p>
        ) : (
          <ul className="max-h-[70vh] space-y-4 overflow-y-auto pr-1">
            {topics.map((topic) => (
              <li
                key={topic.key}
                className="rounded-lg border border-white/10 bg-slate-900/40 p-4"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-amber-400">
                    {topic.sectionTitle}
                  </span>

                  {topic.isInterview && (
                    <span className="rounded bg-amber-600 px-2 py-0.5 text-xs font-medium text-black">
                      Interview
                    </span>
                  )}

                  {topic.isFlagged && (
                    <span className="rounded bg-blue-600 px-2 py-0.5 text-xs font-medium text-black">
                      Review
                    </span>
                  )}
                </div>

                <p className="mb-2 text-sm font-medium text-white">
                  {topic.item.summary}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
