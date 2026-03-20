import {Button} from "@/components/shared/Button";

import type {ToolbarProps} from "./types";

export function Toolbar({
  searchTerm,
  onSearchChange,
  mockQuestionsCount,
  onResetProgress,
  onResetInterviewProgress,
  onResetAllProgress,
  showInterviewOnly,
  onShowInterviewOnlyChange,
  showFlaggedOnly,
  onShowFlaggedOnlyChange,
  onShowMockQuestions,
}: ToolbarProps) {
  return (
    <div className="mb-4">
      <div className="mb-8 rounded-2xl border border-white/10 bg-surface-light p-4 shadow-sm">
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex-1">
            <input
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search topics or summaries"
              className="w-full rounded-xl bg-slate-800 px-4 h-8 text-xs text-white outline-none placeholder:text-slate-400 transition focus:bg-black/50 shadow-sm shadow-primary-500/10 inset-shadow-sm inset-shadow-black/20"
            />
          </div>

          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col flex-wrap items-start gap-2 rounded-xl bg-black/20 p-4 shadow-sm shadow-primary-500/10 inset-shadow-sm inset-shadow-black/20">
              <small
                className="uppercase text-primary-600 font-bold"
                style={{fontSize: "12px"}}
              >
                {/* <span className="material-symbols-outlined align-middle mr-1 text-primary-500">
                  filter_alt
                </span> */}
                Filter Topics
              </small>
              <div className="flex flex-col lg:flex-row gap-4">
                <label className="flex items-center gap-2 text-xxs text-slate-300">
                  <input
                    type="checkbox"
                    checked={showInterviewOnly}
                    onChange={(e) =>
                      onShowInterviewOnlyChange(e.target.checked)
                    }
                    className="h-3 w-3 accent-primary-500"
                  />
                  Interview focused
                </label>

                <label className="flex items-center gap-2 text-xxs text-slate-300">
                  <input
                    type="checkbox"
                    checked={showFlaggedOnly}
                    onChange={(e) => onShowFlaggedOnlyChange(e.target.checked)}
                    className="h-3 w-3 accent-primary-500"
                  />
                  Flagged for review
                </label>
              </div>
            </div>

            <div className="flex flex-col flex-wrap items-start gap-2 rounded-xl bg-black/20 p-4 shadow-sm shadow-primary-500/10 inset-shadow-sm inset-shadow-black/20">
              <small
                className="uppercase text-primary-600 font-bold"
                style={{fontSize: "12px"}}
              >
                Actions
              </small>
              <div className="flex flex-col w-full lg:w-auto lg:flex-row gap-4">
                {mockQuestionsCount !== 0 && (
                  <Button
                    buttonLabel="Take Mock Interview"
                    buttonIcon="groups"
                    buttonStyle="primary"
                    handleClick={onShowMockQuestions}
                    extraClasses="w-full justify-center lg:w-auto lg:justify-normal"
                  />
                )}
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
                  buttonIcon="restart_alt"
                  handleClick={onResetAllProgress}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
