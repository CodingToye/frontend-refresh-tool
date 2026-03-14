import type {HeaderProps} from "../types/Header.types";

function Header({
  searchTerm,
  onSearchChange,
  reviewedCount,
  onResetProgress,
  showInterviewOnly,
  onShowInterviewOnlyChange,
  showFlaggedOnly,
  onShowFlaggedOnlyChange,
}: HeaderProps) {
  return (
    <div className="mb-8 flex flex-row gap-4">
      <input
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search topics or summaries"
        className="w-full max-w-md rounded-full bg-slate-800 pl-4 text-xxs text-white outline-none placeholder:text-slate-400 focus:bg-slate-700 shadow-inner transition-all"
      />

      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-xxs text-slate-300">
          <input
            type="checkbox"
            checked={showInterviewOnly}
            onChange={(e) => onShowInterviewOnlyChange(e.target.checked)}
            className="h-4 w-4 accent-accent"
          />
          Interview topics only
        </label>

        <label className="flex items-center gap-2 text-xxs text-slate-300">
          <input
            type="checkbox"
            checked={showFlaggedOnly}
            onChange={(e) => onShowFlaggedOnlyChange(e.target.checked)}
            className="h-4 w-4 accent-accent"
          />
          Flagged for review only
        </label>
      </div>

      <div className="flex items-center gap-3">
        {reviewedCount > 0 && (
          <p className="text-xs text-accent">
            {reviewedCount} topics completed
          </p>
        )}
        <button
          onClick={onResetProgress}
          className="rounded-lg bg-surface px-2 py-1 text-xxs text-white transition hover:bg-surface-hover"
        >
          Reset progress
        </button>
      </div>
    </div>
  );
}

export default Header;
