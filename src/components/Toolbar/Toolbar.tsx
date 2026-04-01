import {useState} from "react";

import {Button} from "@/components/shared/Button";
import {SearchInput} from "@/components/shared/SearchInput";

import {Checkbox} from "../shared/Checkbox";
import {Droplet} from "../shared/Droplet";
import {SwitchToggle} from "../shared/SwitchToggle";
import type {ActionButtonConfig, ToolbarProps} from "./types";

const panelClasses =
  "flex flex-col flex-wrap items-start gap-2 rounded-xl border border-tertiary-800 bg-black/20 p-4 pt-2 text-shadow inner-shadow-soft";

const panelHeadingClasses =
  "text-[11px] font-bold uppercase text-secondary-200";

export function Toolbar({
  searchTerm,
  onSearchChange,
  interviewButtonMode,
  onResetProgress,
  onResetSubjectProgress,
  onResetAllSubjectsProgress,
  questionMode,
  onQuestionModeChange,
  showInterviewOnly,
  onShowInterviewOnlyChange,
  showFlaggedOnly,
  onShowFlaggedOnlyChange,
  onShowMockQuestions,
}: ToolbarProps) {
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

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
          buttonStyle: "primary",
          buttonIconColour: "tertiary-500",
          handleClick: onShowMockQuestions,
          extraClasses: "w-full lg:w-auto lg:justify-normal",
        }
      : interviewButtonMode === "continue"
        ? {
            buttonLabel: "Continue Interview",
            buttonIcon: "assessment",
            buttonStyle: "primary",
            buttonIconColour: "tertiary-500",
            handleClick: onShowMockQuestions,
            extraClasses: "w-full lg:w-auto lg:justify-normal",
          }
        : interviewButtonMode === "retake"
          ? {
              buttonLabel: "Retake Mock Interview",
              buttonIcon: "restart_alt",
              buttonStyle: "primary",
              buttonIconColour: "tertiary-500",
              handleClick: onShowMockQuestions,
              extraClasses: "w-full lg:w-auto lg:justify-normal",
            }
          : null;

  const interviewButtons: ActionButtonConfig[] = interviewButtonConfig
    ? [interviewButtonConfig]
    : [];

  const actionButtons: ActionButtonConfig[] = [
    {
      buttonLabel: "Reset Study",
      buttonIcon: "school",
      buttonIconColour: "primary-500",
      buttonStyle: "tertiary",
      handleClick: onResetProgress,
    },
    {
      buttonLabel: "Reset Subject",
      buttonIcon: "topic",
      buttonIconColour: "primary-500",
      buttonStyle: "tertiary",
      handleClick: onResetSubjectProgress,
    },
    {
      buttonLabel: "Reset All Subjects",
      buttonIcon: "restart_alt",
      buttonIconColour: "white",
      buttonStyle: "danger",
      handleClick: onResetAllSubjectsProgress,
    },
  ];

  const toggleMobileTools = () => setMobileToolsOpen(!mobileToolsOpen);

  return (
    <>
      {mobileToolsOpen && (
        <div
          className="z-1 fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={toggleMobileTools}
        />
      )}
      <div className="lg:hidden absolute top-2 right-2">
        <Button
          buttonIcon="construction"
          buttonIconColour="primary"
          buttonStyle="tertiary"
          handleClick={toggleMobileTools}
          iconOnly
        />
      </div>
      <div
        className={`${mobileToolsOpen ? "left-0" : "-left-100"} z-2 absolute top-12 transition-all duration-200 lg:relative lg:left-auto lg:top-auto lg:flex flex-col gap-2`}
      >
        <header className="hidden lg:flex justify-center">
          <div className="flex flex-row items-center">
            <span className="material-symbols-outlined mr-2 text-base!">
              construction
            </span>
            <h2 className="mb-0 text-primary-500">Tools</h2>
          </div>
        </header>

        <div className="rounded bg-tertiary-600 p-4 shadow-soft">
          <div className="flex flex-col justify-between gap-4">
            <SearchInput
              searchTerm={searchTerm}
              handleChange={onSearchChange}
            />

            <div className={panelClasses}>
              <small className={panelHeadingClasses}>Colour Key</small>
              <div className="grid w-full grid-cols-4 gap-1">
                <Droplet dropletLabel="Poor" dropletStyle="danger" />
                <Droplet dropletLabel="Weak" dropletStyle="warning" />
                <Droplet dropletLabel="Decent" dropletStyle="info" />
                <Droplet dropletLabel="Strong" dropletStyle="success" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className={panelClasses}>
                <small className={panelHeadingClasses}>Filter Topics</small>

                {filterOptions.map(({id, label, checked, onChange}) => (
                  <Checkbox
                    key={id}
                    label={label}
                    checked={checked}
                    onChange={onChange}
                  />
                ))}
              </div>

              <div className={panelClasses}>
                <small className={panelHeadingClasses}>Interview Actions</small>

                <div className="flex w-full flex-col gap-4">
                  {interviewButtons.map(
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

                  <section className="flex flex-col gap-2 text-left">
                    <span className="text-left text-xxs">
                      Choose which question set to load.
                    </span>

                    <SwitchToggle
                      leftLabel="Classic"
                      rightLabel="Extended"
                      leftValue="classic"
                      rightValue="extended"
                      value={questionMode}
                      onChange={onQuestionModeChange}
                    />
                  </section>
                </div>
              </div>

              <div className={panelClasses}>
                <small className={panelHeadingClasses}>Reset Actions</small>

                <div className="flex w-full flex-col gap-4">
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
      </div>
    </>
  );
}
