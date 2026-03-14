import {useEffect, useState} from "react";
import Header from "./components/Header";
import {subjectData} from "./data/subjects";
import SectionCard from "./components/SectionCard";
import {TopicModal} from "./components/TopicModal";
import {getTopicKey} from "./utils/topicKeys";
import type {Section, CheckedTopics} from "./types/shared.types";
import type {SubjectKey} from "./data/subjects";
import {STORAGE_KEY, FLAGGED_STORAGE_KEY} from "./constants/storage";

export default function App() {
  const [subject, setSubject] = useState<SubjectKey>("react");
  const sections = subjectData[subject].sections;
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [showInterviewOnly, setShowInterviewOnly] = useState(false);
  const [showFlaggedOnly, setShowFlaggedOnly] = useState(false);
  const [checkedTopics, setCheckedTopics] = useState<CheckedTopics>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [flaggedTopics, setFlaggedTopics] = useState<Record<string, boolean>>(
    () => {
      try {
        const saved = localStorage.getItem(FLAGGED_STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    },
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSection(null);
        setExpandedTopic(null);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedTopics));
  }, [checkedTopics]);

  useEffect(() => {
    localStorage.setItem(FLAGGED_STORAGE_KEY, JSON.stringify(flaggedTopics));
  }, [flaggedTopics]);

  const query = searchTerm.trim().toLowerCase();

  const filteredSections = sections
    .map((section) => {
      let items = section.items;

      if (showInterviewOnly) {
        items = items.filter((item) => item.interview);
      }
      if (showFlaggedOnly) {
        items = items.filter(
          (item) =>
            flaggedTopics[getTopicKey(subject, section.title, item.name)],
        );
      }
      if (query) {
        items = items.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.summary.toLowerCase().includes(query),
        );
      }

      return {
        ...section,
        items,
      };
    })
    .filter((section) => section.items.length > 0);

  const toggleTopicChecked = (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => {
    const key = getTopicKey(subject, sectionTitle, topicName);

    setCheckedTopics((prev) => {
      const isNowChecked = !prev[key];

      if (isNowChecked) {
        setFlaggedTopics((flags) => {
          const copy = {...flags};
          delete copy[key];
          return copy;
        });
      }

      return {
        ...prev,
        [key]: isNowChecked,
      };
    });
  };

  const toggleTopicFlagged = (
    subject: SubjectKey,
    sectionTitle: string,
    topicName: string,
  ) => {
    const key = getTopicKey(subject, sectionTitle, topicName);
    setFlaggedTopics((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleCloseModal = () => {
    setSelectedSection(null);
    setExpandedTopic(null);
  };

  const handleResetSubjectProgress = () => {
    setCheckedTopics((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([key]) => !key.startsWith(`${subject}::`)),
      ),
    );
    setFlaggedTopics((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([key]) => !key.startsWith(`${subject}::`)),
      ),
    );
  };

  const reviewedCount = Object.entries(checkedTopics).filter(
    ([key, value]) => key.startsWith(`${subject}::`) && value,
  ).length;

  const subjects = Object.entries(subjectData);

  return (
    <div className="min-h-screen bg-bg p-10 text-text">
      <div className="fixed top-0 left-0 w-full mb-6 p-1 flex flex-wrap gap-1 bg-black/20">
        {subjects.map(([key, value]) => (
          <button
            key={key}
            onClick={() => setSubject(key as SubjectKey)}
            className={`rounded px-4 py-2 text-xs font-medium transition ${
              subject === key
                ? " text-amber-400 hover:text-amber-600"
                : " text-white hover:text-amber-600"
            }`}
          >
            {value.label}
          </button>
        ))}
      </div>
      <div className="mx-auto max-w-7xl">
        <header className="mt-4 mb-8">
          <h1 className="mb-0 text-3xl font-bold">
            {subjectData[subject].label} Knowledge Refresh
          </h1>
          <p className="mb-4 text-slate-300/50">
            Click a section to open its topics.
          </p>
        </header>

        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          reviewedCount={reviewedCount}
          onResetProgress={handleResetSubjectProgress}
          showInterviewOnly={showInterviewOnly}
          onShowInterviewOnlyChange={setShowInterviewOnly}
          showFlaggedOnly={showFlaggedOnly}
          onShowFlaggedOnlyChange={setShowFlaggedOnly}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {filteredSections.map((section) => {
            const totalTopics = section.items.length;
            const completedTopics = section.items.filter(
              (item) =>
                checkedTopics[getTopicKey(subject, section.title, item.name)],
            ).length;

            return (
              <SectionCard
                key={section.title}
                section={section}
                subject={subject}
                completedTopics={completedTopics}
                totalTopics={totalTopics}
                flaggedTopics={flaggedTopics}
                onOpen={() => {
                  setSelectedSection(section);
                  setExpandedTopic(null);
                }}
              />
            );
          })}
        </div>
      </div>

      {selectedSection && (
        <TopicModal
          subject={subject}
          section={selectedSection}
          expandedTopic={expandedTopic}
          checkedTopics={checkedTopics}
          onClose={handleCloseModal}
          onToggleOpen={setExpandedTopic}
          onToggleChecked={toggleTopicChecked}
          flaggedTopics={flaggedTopics}
          onToggleFlagged={toggleTopicFlagged}
        />
      )}
    </div>
  );
}
