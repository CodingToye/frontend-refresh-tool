import type {ToolbarProps} from "./types";

import {Button} from "../shared/Button";

export function Toolbar({
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
        <div className="flex flex-col gap-2 xl:flex-row xl:items-center justify-between">
          <div className="flex-1">
            <input
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search topics or summaries"
              className="w-full rounded-xl bg-slate-800 px-4 h-8 text-xs text-white outline-none placeholder:text-slate-400 transition focus:bg-black/50 shadow-sm shadow-primary-500/10 inset-shadow-sm inset-shadow-black/20"
            />
          </div>

          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between xl:justify-end">
            <div className="flex  flex-wrap items-center gap-2 rounded-xl bg-black/20 px-4 h-8 shadow-sm shadow-primary-500/10 inset-shadow-sm inset-shadow-black/20">
              <label className="flex items-center gap-2 text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={showInterviewOnly}
                  onChange={(e) => onShowInterviewOnlyChange(e.target.checked)}
                  className="h-3 w-3 primary-500-primary-500"
                />
                Interview only
              </label>

              <label className="flex items-center gap-2 text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={showFlaggedOnly}
                  onChange={(e) => onShowFlaggedOnlyChange(e.target.checked)}
                  className="h-3 w-3 primary-500-primary-500"
                />
                Flagged only
              </label>
            </div>

            <div className="flex flex-row gap-2">
              <Button
                buttonLabel="Reset Study"
                buttonStyle="tertiary"
                buttonIcon="school"
                handleClick={onResetProgress}
              />

              <Button
                buttonLabel="Reset Interview"
                buttonStyle="tertiary"
                buttonIcon="groups"
                handleClick={onResetInterviewProgress}
              />

              <Button
                buttonLabel="Reset All"
                buttonStyle="tertiary"
                buttonIcon="warning"
                handleClick={onResetAllProgress}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-black/70 rounded-xl px-4 py-3 border border-black/90 text-xs text-white/50">
        <div className="flex">
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
            className={`text-xs pl-4 text-left transition ${flaggedCount > 0 ? "opacity-100" : "opacity-50"}`}
          >
            <span className="material-symbols-outlined align-middle mr-1 text-primary-500">
              flag
            </span>
            {flaggedCount !== 1
              ? `${flaggedCount} topics flagged for review`
              : `${flaggedCount} topic flagged for review`}
          </p>
          <p
            className={`text-xs pl-4 text-left transition ${mockQuestionsCount > 0 ? "opacity-100" : "opacity-50"}`}
          >
            <span className="material-symbols-outlined align-middle mr-1 text-secondary-500">
              quick_reference
            </span>
            {mockQuestionsCount !== 1
              ? `${mockQuestionsCount} topics added to mock interview`
              : `${mockQuestionsCount} topic added to mock interview`}
          </p>
        </div>
        <div className="flex items-center">
          <Button
            buttonLabel="Mock Interview"
            buttonIcon="groups"
            buttonStyle="primary"
            handleClick={onShowMockQuestions}
          />

          {subjectScore !== null && (
            <p className="pl-4 text-xs text-left text-white/80">
              <span className="material-symbols-outlined align-middle mr-1 text-primary-400">
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
