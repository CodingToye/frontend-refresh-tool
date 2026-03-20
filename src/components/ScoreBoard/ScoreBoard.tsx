import type {ScoreBoardProps} from "./types";

export function ScoreBoard({
  reviewedCount,
  flaggedCount,
  subjectScore,
  mockQuestionsCount,
}: ScoreBoardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-start lg:items-center mb-4 bg-black/70 rounded-xl px-4 py-3 border border-black/90 text-xs text-white/50">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
        <p
          className={`text-xs text-left transition ${reviewedCount > 0 ? "opacity-100" : "opacity-50"}`}
        >
          <span className="material-symbols-outlined align-middle mr-1 text-primary-500">
            check
          </span>
          {reviewedCount !== 1
            ? `${reviewedCount} topics completed`
            : `${reviewedCount} topic completed`}
        </p>
        <p
          className={`text-xs lg:pl-4 text-left transition ${flaggedCount > 0 ? "opacity-100" : "opacity-50"}`}
        >
          <span className="material-symbols-outlined align-middle mr-1 text-primary-500">
            flag
          </span>
          {flaggedCount !== 1
            ? `${flaggedCount} topics flagged for review`
            : `${flaggedCount} topic flagged for review`}
        </p>
        <p
          className={`text-xs lg:pl-4 text-left transition ${mockQuestionsCount > 0 ? "opacity-100" : "opacity-50"}`}
        >
          <span className="material-symbols-outlined align-middle mr-1 text-secondary-500">
            quick_reference
          </span>
          {mockQuestionsCount !== 1
            ? `${mockQuestionsCount} topics added to mock interview`
            : `${mockQuestionsCount} topic added to mock interview`}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-center w-full lg:w-auto p-4 lg:p-0 rounded lg:rounded-none bg-tertiary-500 lg:bg-black/70">
        {subjectScore !== null && (
          <p className="lg:pl-4 text-xs text-center lg:text-left text-white/80">
            <span className="material-symbols-outlined align-middle mr-1 text-primary-400">
              workspace_premium
            </span>
            Overall interview score {subjectScore}%
          </p>
        )}
      </div>
    </div>
  );
}
