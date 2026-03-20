import {useEffect, useState} from "react";

import type {SubjectKey} from "@/data/subjects";

type SubjectNavProps = {
  subjects: [string, {label: string}][];
  subject: SubjectKey;
  setSubject: (subject: SubjectKey) => void;
};

export function SubjectNav({subjects, subject, setSubject}: SubjectNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleSelect = (key: SubjectKey) => {
    setSubject(key);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile button */}
      <div className="mb-4 flex justify-center lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center rounded-b bg-primary-500 px-4 py-2 text-xs font-medium text-black shadow-lg shadow-white/10 transition hover:bg-primary-600"
        >
          <span className="material-symbols-outlined mr-2">menu</span>
          Subjects
        </button>
      </div>

      {/* Desktop nav */}
      <div className="mb-6 hidden w-full flex-wrap justify-center gap-1 bg-surface shadow-lg shadow-black/10 p-1 lg:fixed lg:left-0 lg:top-0 lg:flex">
        {subjects.map(([key, value]) => (
          <button
            key={key}
            onClick={() => setSubject(key as SubjectKey)}
            className={`rounded px-4 py-2 text-xs font-medium transition ${
              subject === key
                ? "text-secondary-400 hover:text-secondary-500"
                : "text-white hover:text-secondary-400"
            }`}
          >
            {value.label}
          </button>
        ))}
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
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
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex flex-col gap-2 overflow-y-auto">
              {subjects.map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => handleSelect(key as SubjectKey)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                    subject === key
                      ? "bg-secondary-500 text-black"
                      : "bg-surface text-white hover:bg-black/40"
                  }`}
                >
                  {value.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
