import type {HeaderProps} from "../types/Header.types";
import {TopicFilterToggle} from "./TopicFilter";

function Header({
  searchTerm,
  onSearchChange,
  reviewedCount,
  onResetProgress,
  topicFilter,
  onTopicFilterChange,
}: HeaderProps) {
  return (
    <div className="mb-8 flex flex-row gap-4">
      <input
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search topics or summaries"
        className="w-full max-w-md rounded-full bg-slate-800 pl-4 text-xxs text-white outline-none placeholder:text-slate-400 focus:bg-slate-700 shadow-inner transition-all"
      />

      <TopicFilterToggle value={topicFilter} onChange={onTopicFilterChange} />

      <div className="flex items-center gap-3">
        {reviewedCount > 0 && (
          <p className="text-xs text-amber-600">
            {reviewedCount} topics reviewed
          </p>
        )}
        <button
          onClick={onResetProgress}
          className="rounded-lg border border-slate-600 px-3 py-2 text-xs text-slate-200 transition hover:border-slate-400 hover:text-white"
        >
          Reset progress
        </button>
      </div>
    </div>
  );
}

export default Header;
