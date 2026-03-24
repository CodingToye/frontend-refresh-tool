import {Button} from "@/components/shared/Button";

import type {ActionButtonConfig, ToolbarProps} from "./types";
export function Toolbar({
  searchTerm,
  onSearchChange,
  interviewButtonMode,
  onResetProgress,
  onResetInterviewProgress,
  onResetAllProgress,
  showInterviewOnly,
  onShowInterviewOnlyChange,
  showFlaggedOnly,
  onShowFlaggedOnlyChange,
  onShowMockQuestions,
}: ToolbarProps) {
  // Data
  const filterOptions = [
    {
      id: "interview-only",
      label: "Interview focused",
      checked: showInterviewOnly,
      onChange: onShowInterviewOnlyChange,
    },
    {
      id: "flagged-only",
      label: "Flagged for review",
      checked: showFlaggedOnly,
      onChange: onShowFlaggedOnlyChange,
    },
  ];

  const interviewButtonConfig: ActionButtonConfig | null =
    interviewButtonMode === "take"
      ? {
          buttonLabel: "Take Mock Interview",
          buttonIcon: "groups",
          buttonStyle: "primary" as const,
          handleClick: onShowMockQuestions,
          extraClasses: "w-full lg:w-auto lg:justify-normal",
        }
      : interviewButtonMode === "view"
        ? {
            buttonLabel: "View Mock Interview Results",
            buttonIcon: "assessment",
            buttonStyle: "primary" as const,
            handleClick: onShowMockQuestions,
            extraClasses: "w-full lg:w-auto lg:justify-normal",
          }
        : interviewButtonMode === "retake"
          ? {
              buttonLabel: "Retake Mock Interview",
              buttonIcon: "restart_alt",
              buttonStyle: "primary" as const,
              handleClick: onShowMockQuestions,
              extraClasses: "w-full lg:w-auto lg:justify-normal",
            }
          : null;

  const actionButtons: ActionButtonConfig[] = [
    ...(interviewButtonConfig ? [interviewButtonConfig] : []),
    {
      buttonLabel: "Reset Study",
      buttonIcon: "school",
      buttonStyle: "tertiary" as const,
      handleClick: onResetProgress,
    },
    {
      buttonLabel: "Reset Interview",
      buttonIcon: "groups",
      buttonStyle: "tertiary" as const,
      handleClick: onResetInterviewProgress,
    },
    {
      buttonLabel: "Reset All",
      buttonIcon: "restart_alt",
      buttonStyle: "tertiary" as const,
      handleClick: onResetAllProgress,
    },
  ];

  // Presentation
  const panelClasses =
    "flex flex-col flex-wrap items-start gap-2 rounded-xl bg-black/20 p-4 shadow-sm shadow-primary-500/10 inset-shadow-sm inset-shadow-black/20";
  const panelHeadingClasses =
    "text-[12px] uppercase text-primary-600 font-bold";
  const searchInputClasses =
    "w-full rounded-xl bg-slate-800 px-4 h-8 text-xs text-white outline-none placeholder:text-slate-400 transition focus:bg-black/50 shadow-sm shadow-primary-500/10 inset-shadow-sm inset-shadow-black/20";

  // Render
  return (
    <div className="mb-4">
      <div className="mb-8 rounded border border-white/10 bg-surface-light p-4 shadow-sm">
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex-1">
            <input
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search topics or summaries"
              className={searchInputClasses}
            />
          </div>

          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <div className={panelClasses}>
              <small className={panelHeadingClasses}>Filter Topics</small>
              <div className="flex flex-col lg:flex-row gap-4">
                {filterOptions.map(({id, label, checked, onChange}) => (
                  <label
                    key={id}
                    className="flex items-center gap-2 text-xxs text-slate-300"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => onChange(e.target.checked)}
                      className="h-3 w-3 accent-primary-500"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className={panelClasses}>
              <small className={panelHeadingClasses}>Actions</small>
              <div className="flex flex-col w-full lg:w-auto lg:flex-row gap-4">
                {actionButtons.map(
                  ({
                    buttonLabel,
                    buttonIcon,
                    buttonStyle,
                    handleClick,
                    extraClasses,
                  }) => (
                    <Button
                      key={buttonLabel}
                      buttonLabel={buttonLabel}
                      buttonIcon={buttonIcon}
                      buttonStyle={buttonStyle}
                      handleClick={handleClick}
                      extraClasses={extraClasses}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// TODO: Disable or handle Reset Interview while a mock interview session is active.
