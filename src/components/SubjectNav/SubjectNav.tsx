import {useEffect, useState} from "react";

import type {SubjectKey} from "@/data/subjects";

import {subjectIcon} from "../shared/SubjectIcon/subjectIcon";
import type {SubjectNavProps} from "./types";

export function SubjectNav({
  subjects,
  subject,
  setSubject,
  subjectMetrics,
}: SubjectNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleSelect = (key: SubjectKey) => {
    setSubject(key);
    closeMobileMenu();
  };

  const isSubjectComplete = (key: SubjectKey) => {
    const metrics = subjectMetrics[key];
    return metrics ? metrics.weightedScore >= 0.999 : false;
  };

  const subjectEntries = subjects.map(([key, value]) => ({
    key: key as SubjectKey,
    label: value.label,
    isActive: subject === key,
  }));

  const getDesktopButtonClasses = (isActive: boolean, isComplete: boolean) =>
    `group flex flex-col gap-1 justify-between rounded px-4 py-2 h-12 ${isComplete ? "bg-tertiary-500 hover:bg-tertiary-600 text-white/50" : "bg-black/20 hover:bg-black/40"} text-xxs text-shadow inner-shadow-soft inner-glow-gradient leading-normal font-medium transition ${isActive ? "text-white  bg-black/50" : "text-white/50 hover:text-white"}`;

  const getMobileButtonClasses = (isActive: boolean) =>
    `rounded px-4 py-2 text-xs font-medium transition ${isActive ? "bg-secondary-500 text-black" : "bg-tertiary-500 text-white hover:bg-black/40"}`;

  return (
    <>
      {/* Mobile button */}
      <div className="mb-4 flex justify-center lg:hidden">
        <button
          onClick={openMobileMenu}
          className="flex items-center rounded-b bg-primary-500 px-4 py-2 text-xs font-medium text-black shadow-lg shadow-white/10 transition hover:bg-primary-600"
        >
          <span className="material-symbols-outlined mr-2">menu</span>
          Subjects
        </button>
      </div>

      {/* Desktop nav */}
      <div className="mb-6 hidden w-full flex-wrap justify-center gap-2 bg-tertiary-500 p-4 shadow-soft lg:flex">
        {subjectEntries.map(({key, label, isActive}) => {
          const isComplete = isSubjectComplete(key);
          const Icon = subjectIcon[key];
          const subjectCoverage = Math.round(
            subjectMetrics[key].coverage * 100,
          );
          const confidenceOpacityMap = {
            low: "bg-danger-500",
            medium: "bg-warning-500",
            high: "bg-success-500",
          } as const;

          const subjectConfidence =
            confidenceOpacityMap[subjectMetrics[key].confidence];

          return (
            <button
              key={key}
              onClick={() => setSubject(key)}
              className={`group relative overflow-hidden ${getDesktopButtonClasses(isActive, isComplete)}`}
            >
              <div className="flex flex-row items-center gap-1 h-4">
                {Icon && (
                  <Icon
                    className={`h-4 w-4 text-white/70 transition ${isActive ? "grayscale-0" : "grayscale group-hover:grayscale-0"}`}
                  />
                )}

                {label}
                {isComplete && (
                  <span className="material-symbols-outlined text-base! text-success-400">
                    check
                  </span>
                )}
              </div>

              <div className=" h-2 overflow-hidden rounded-full bg-black/20 inner-soft-shadow border border-black/20">
                <div
                  className={`h-full rounded-full transition-all ${
                    subjectConfidence
                  }`}
                  style={{width: `${subjectCoverage}%`}}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMobileMenu}
        >
          <div
            className="absolute left-0 top-0 h-full w-full bg-tertiary-600 p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold text-white">
                Choose subject
              </h2>
              <button
                onClick={closeMobileMenu}
                className="text-slate-300 hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex flex-col gap-2 overflow-y-auto">
              {subjectEntries.map(({key, label, isActive}) => (
                <button
                  key={key}
                  onClick={() => handleSelect(key)}
                  className={getMobileButtonClasses(isActive)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
