import type {ToolbarProps} from "../types/Toolbar.types";

function Toolbar({
  searchTerm,
  onSearchChange,
  reviewedCount,
  flaggedCount,
  onResetProgress,
  showInterviewOnly,
  onShowInterviewOnlyChange,
  showFlaggedOnly,
  onShowFlaggedOnlyChange,
  onShowMockQuestions,
}: ToolbarProps) {
  return (
    <div className="mb-4">
      <div className="mb-8 rounded-2xl border border-white/10 bg-surface-light p-4 shadow-sm">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center justify-between">
          <div className="flex-1">
            <input
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search topics or summaries"
              className="w-full rounded-xl bg-slate-800 px-4 py-3 text-xs text-white outline-none placeholder:text-slate-400 shadow-inner transition focus:bg-black/50"
            />
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between xl:justify-end">
            <div className="flex  flex-wrap items-center gap-4 rounded-xl bg-black/20 px-4 py-3">
              <label className="flex items-center gap-2 text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={showInterviewOnly}
                  onChange={(e) => onShowInterviewOnlyChange(e.target.checked)}
                  className="h-4 w-4 accent-accent"
                />
                Interview only
              </label>

              <label className="flex items-center gap-2 text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={showFlaggedOnly}
                  onChange={(e) => onShowFlaggedOnlyChange(e.target.checked)}
                  className="h-4 w-4 accent-accent"
                />
                Flagged only
              </label>
            </div>

            <div className="flex flex-row gap-2">
              <button
                onClick={onShowMockQuestions}
                className="rounded-xl bg-amber-400 px-4 py-2 text-xs font-medium text-black transition hover:bg-amber-600"
              >
                <span className="material-symbols-outlined align-middle mr-2">
                  quick_reference
                </span>
                Mock Questions
              </button>

              <button
                onClick={onResetProgress}
                className="rounded-xl bg-accent px-4 py-2 text-xs text-white transition hover:bg-accent-hover"
              >
                <span className="material-symbols-outlined align-middle mr-2">
                  refresh
                </span>
                Reset Progress
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-black/70 rounded-xl px-2 py-3 border border-black/90 text-xs text-white/50">
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
      </div>
    </div>
  );
}

export default Toolbar;
