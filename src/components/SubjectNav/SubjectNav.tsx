import {useEffect, useState} from "react";

import type {SubjectKey} from "@/data/subjects";

import type {SubjectNavProps} from "./types";

export function SubjectNav({subjects, subject, setSubject}: SubjectNavProps) {
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

  const subjectEntries = subjects.map(([key, value]) => ({
    key: key as SubjectKey,
    label: value.label,
    isActive: subject === key,
  }));

  const getDesktopButtonClasses = (isActive: boolean) =>
    `rounded px-4 py-2 text-xs font-medium transition ${isActive ? "text-secondary-400 hover:text-secondary-500" : "text-white hover:text-secondary-500"}`;

  const getMobileButtonClasses = (isActive: boolean) =>
    `rounded px-4 py-2 text-xs font-medium transition ${isActive ? "bg-secondary-500 text-black" : "bg-surface text-white hover:bg-black/40"}`;

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
      <div className="mb-6 hidden w-full flex-wrap justify-center gap-1 bg-surface p-1 shadow-lg shadow-black/10 lg:fixed lg:left-0 lg:top-0 lg:flex">
        {subjectEntries.map(({key, label, isActive}) => (
          <button
            key={key}
            onClick={() => setSubject(key)}
            className={getDesktopButtonClasses(isActive)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMobileMenu}
        >
          <div
            className="absolute left-0 top-0 h-full w-full bg-surface-light p-4 shadow-2xl"
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
