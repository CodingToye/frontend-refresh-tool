import {Button} from "@/components/shared/Button";
import {SearchInput} from "@/components/shared/SearchInput";

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
          buttonIconColour: "tertiary-500",
          handleClick: onShowMockQuestions,
          extraClasses: "w-full lg:w-auto lg:justify-normal",
        }
      : interviewButtonMode === "view"
        ? {
            buttonLabel: "View Mock Interview Results",
            buttonIcon: "assessment",
            buttonStyle: "primary" as const,
            buttonIconColour: "tertiary-500",
            handleClick: onShowMockQuestions,
            extraClasses: "w-full lg:w-auto lg:justify-normal",
          }
        : interviewButtonMode === "retake"
          ? {
              buttonLabel: "Retake Mock Interview",
              buttonIcon: "restart_alt",
              buttonStyle: "primary" as const,
              buttonIconColour: "tertiary-500",
              handleClick: onShowMockQuestions,
              extraClasses: "w-full lg:w-auto lg:justify-normal",
            }
          : null;

  const actionButtons: ActionButtonConfig[] = [
    ...(interviewButtonConfig ? [interviewButtonConfig] : []),
    {
      buttonLabel: "Reset Study",
      buttonIcon: "school",
      buttonIconColour: "primary-500",
      buttonStyle: "tertiary" as const,
      handleClick: onResetProgress,
    },
    {
      buttonLabel: "Reset Interview",
      buttonIcon: "groups",
      buttonIconColour: "primary-500",
      buttonStyle: "tertiary" as const,
      handleClick: onResetInterviewProgress,
    },
    {
      buttonLabel: "Reset All",
      buttonIcon: "restart_alt",
      buttonIconColour: "primary-500",
      buttonStyle: "tertiary" as const,
      handleClick: onResetAllProgress,
    },
  ];

  // Presentation
  const panelClasses =
    "flex flex-col flex-wrap items-start gap-2 rounded-xl bg-black/20 p-4 pt-2 text-shadow inner-shadow-soft";
  const panelHeadingClasses =
    "text-[12px] uppercase text-primary-600 font-bold";

  // Render
  return (
    <>
      <div className="rounded bg-tertiary-800 p-4 inner-shadow-soft">
        <div className="flex flex-col gap-4 justify-between">
          <SearchInput searchTerm={searchTerm} handleChange={onSearchChange} />

          <div className="flex flex-col gap-4 lg:flex-col ">
            <div className={panelClasses}>
              <small className={panelHeadingClasses}>Filter Topics</small>
              {/* <div className="flex flex-col lg:flex-col gap-1"> */}
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
              {/* </div> */}
            </div>

            <div className={panelClasses}>
              <small className={panelHeadingClasses}>Actions</small>
              <div className="flex flex-col w-full lg:w-full lg:flex-col gap-4">
                {actionButtons.map(
                  ({
                    buttonLabel,
                    buttonIcon,
                    buttonStyle,
                    buttonIconColour,
                    handleClick,
                    extraClasses,
                  }) => (
                    <Button
                      key={buttonLabel}
                      buttonLabel={buttonLabel}
                      buttonIcon={buttonIcon}
                      buttonStyle={buttonStyle}
                      buttonIconColour={buttonIconColour}
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
    </>
  );
}
