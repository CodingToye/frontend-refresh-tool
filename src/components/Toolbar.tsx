import type {ToolbarProps} from "../types/Toolbar.types";

function Toolbar({
  // subjectKey,
  searchTerm,
  onSearchChange,
  reviewedCount,
  flaggedCount,
  mockQuestionsCount,
  onResetProgress,
  onResetInterviewProgress,
  onResetAllProgress,
  showInterviewOnly,
  onShowInterviewOnlyChange,
  showFlaggedOnly,
  onShowFlaggedOnlyChange,
  onShowMockQuestions,
  subjectScore,
}: ToolbarProps) {
  // const subjectScore = getSubjectScore(subjectKey);
  return (
    <div className="mb-4">
      <div className="mb-8 rounded-2xl border border-white/10 bg-surface-light p-4 shadow-sm">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center justify-between">
          <div className="flex-1">
            <input
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search topics or summaries"
              className="w-full rounded-xl bg-slate-800 px-4 h-8 text-xs text-white outline-none placeholder:text-slate-400 transition focus:bg-black/50 shadow-sm shadow-accent/10 inset-shadow-sm inset-shadow-black/20"
            />
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between xl:justify-end">
            <div className="flex  flex-wrap items-center gap-4 rounded-xl bg-black/20 px-4 h-8 shadow-sm shadow-accent/10 inset-shadow-sm inset-shadow-black/20">
              <label className="flex items-center gap-2 text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={showInterviewOnly}
                  onChange={(e) => onShowInterviewOnlyChange(e.target.checked)}
                  className="h-3 w-3 accent-accent"
                />
                Interview only
              </label>

              <label className="flex items-center gap-2 text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={showFlaggedOnly}
                  onChange={(e) => onShowFlaggedOnlyChange(e.target.checked)}
                  className="h-3 w-3 accent-accent"
                />
                Flagged only
              </label>
            </div>

            <div className="flex flex-row gap-2">
              <button
                onClick={onResetProgress}
                className="flex items-center rounded-xl bg-btn-blue-500 px-4 h-8 text-xxs text-text transition hover:bg-btn-blue-700 shadow-sm shadow-btn-blue-700"
              >
                <span className="material-symbols-outlined text-base! mr-2">
                  school
                </span>
                Reset Study Progress
              </button>
              <button
                onClick={onResetInterviewProgress}
                className="flex items-center rounded-xl bg-btn-blue-500 px-4 h-8 text-xxs text-text transition hover:bg-btn-blue-700 shadow-sm shadow-btn-blue-700"
              >
                <span className="material-symbols-outlined text-base! mr-2">
                  groups
                </span>
                Reset Interview Progress
              </button>
              <button
                onClick={onResetAllProgress}
                className="flex items-center rounded-xl bg-btn-blue-500 px-4 h-8 text-xxs text-text transition hover:bg-btn-blue-700 shadow-sm shadow-btn-blue-700"
              >
                <span className="material-symbols-outlined  text-base! mr-2">
                  warning
                </span>
                Reset All Progress
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-black/70 rounded-xl px-2 py-3 border border-black/90 text-xs text-white/50">
        <div className="flex">
          <p
            className={`text-xs pl-4 text-left transition ${reviewedCount > 0 ? "opacity-100" : "opacity-50"}`}
          >
            <span className="material-symbols-outlined align-middle mr-1 text-accent">
              check
            </span>
            {reviewedCount !== 1
              ? `${reviewedCount} topics completed`
              : `${reviewedCount} topic completed`}
          </p>
          <p
            className={`text-xs pl-4 text-left transition ${flaggedCount > 0 ? "opacity-100" : "opacity-50"}`}
          >
            <span className="material-symbols-outlined align-middle mr-1 text-accent">
              flag
            </span>
            {flaggedCount !== 1
              ? `${flaggedCount} topics flagged for review`
              : `${flaggedCount} topic flagged for review`}
          </p>
          <p
            className={`text-xs pl-4 text-left transition ${mockQuestionsCount > 0 ? "opacity-100" : "opacity-50"}`}
          >
            <span className="material-symbols-outlined align-middle mr-1 text-amber-400">
              quick_reference
            </span>
            {mockQuestionsCount !== 1
              ? `${mockQuestionsCount} topics added to mock interview`
              : `${mockQuestionsCount} topic added to mock interview`}
          </p>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => {
              console.log("test");
              onShowMockQuestions();
            }}
            className="flex items-center rounded-xl bg-accent px-4 h-8 text-xs font-medium text-black transition hover:bg-accent-hover shadow-lg shadow-white/10"
          >
            <span className="material-symbols-outlined text-base! mr-2">
              groups
            </span>
            Mock Interview
          </button>
          {subjectScore !== null && (
            <p className="pl-4 text-xs text-left text-white/80">
              <span className="material-symbols-outlined align-middle mr-1 text-emerald-400">
                workspace_premium
              </span>
              Overall interview score {subjectScore}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
