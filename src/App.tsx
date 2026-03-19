import {useEffect, useState} from "react";

import {subjectData} from "./data/subjects";
import type {SubjectKey} from "./data/subjects";

import {Toolbar} from "./components/Toolbar";
import SectionCard from "./components/SectionCard";
import {TopicModal} from "./components/TopicModal";
import {MockInterview} from "./components/MockInterview";
import {SubjectNav} from "./components/SubjectNav";

import {getTopicKey} from "./utils/topicKeys";
import {filterSections} from "./utils/filterSections";
import {getMockSessionQuestions} from "./utils/getMockSessionQuestions";

import {useLearningProgress} from "./hooks/useLearningProgress";

import type {Section} from "./types/Section.types";

export default function App() {
  const [subject, setSubject] = useState<SubjectKey>("react");
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [showInterviewOnly, setShowInterviewOnly] = useState(false);
  const [showFlaggedOnly, setShowFlaggedOnly] = useState(false);
  const [showMockQuestions, setShowMockQuestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = subjectData[subject].sections;
  const subjects = Object.entries(subjectData);

  const {
    checkedTopics,
    flaggedTopics,
    mockSelectedTopics,
    saveInterviewScore,
    getInterviewScore,
    getSubjectScore,
    toggleTopicChecked,
    toggleTopicFlagged,
    toggleMockSelected,
    resetStudyProgress,
    resetInterviewProgress,
    resetAllProgress,
  } = useLearningProgress();

  const filteredSections = filterSections({
    sections,
    subject,
    flaggedTopics,
    showInterviewOnly,
    showFlaggedOnly,
    searchTerm,
  });

  const mockSessionQuestions = getMockSessionQuestions(
    subject,
    mockSelectedTopics,
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSection(null);
        setExpandedTopic(null);
        setShowMockQuestions(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (showMockQuestions) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showMockQuestions]);

  const handleCloseModal = () => {
    document.body.style.overflow = "";
    setSelectedSection(null);
    setExpandedTopic(null);
  };

  const reviewedCount = Object.entries(checkedTopics).filter(
    ([key, value]) => key.startsWith(`${subject}::`) && value,
  ).length;

  const flaggedCount = Object.entries(flaggedTopics).filter(([key, value]) => {
    return key.startsWith(`${subject}::`) && value;
  }).length;

  const mockQuestionsCount = Object.entries(mockSelectedTopics).filter(
    ([key, value]) => {
      return key.startsWith(`${subject}::`) && value;
    },
  ).length;

  return (
    <div className="min-h-screen bg-bg p-10 pt-0 text-text">
      <SubjectNav
        subjects={subjects}
        subject={subject}
        setSubject={setSubject}
      />
      <div className="mx-auto max-w-7xl">
        <header className="mt-4 mb-8">
          <h1 className="mb-0 text-3xl font-bold">
            {subjectData[subject].label} Knowledge Refresh
          </h1>
          <p className="mb-4 text-slate-300/50">
            Click a section to open its topics.
          </p>
        </header>

        <Toolbar
          subjectKey={subject}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          reviewedCount={reviewedCount}
          flaggedCount={flaggedCount}
          mockQuestionsCount={mockQuestionsCount}
          onResetProgress={() => resetStudyProgress(subject)}
          onResetInterviewProgress={() => resetInterviewProgress(subject)}
          onResetAllProgress={() => resetAllProgress(subject)}
          showInterviewOnly={showInterviewOnly}
          onShowInterviewOnlyChange={setShowInterviewOnly}
          showFlaggedOnly={showFlaggedOnly}
          onShowFlaggedOnlyChange={setShowFlaggedOnly}
          onShowMockQuestions={() => setShowMockQuestions(true)}
          subjectScore={getSubjectScore(subject)}
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
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
                mockQuestions={mockSelectedTopics}
                interviewScore={getInterviewScore(subject, section.title)}
                onOpen={() => {
                  setSelectedSection(section);
                  setExpandedTopic(null);
                }}
              />
            );
          })}
        </div>
      </div>

      <MockInterview
        subject={subject}
        showMockQuestions={showMockQuestions}
        setShowMockQuestions={setShowMockQuestions}
        questions={mockSessionQuestions}
        saveInterviewScore={saveInterviewScore}
      />

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
          mockSelectedTopics={mockSelectedTopics}
          onToggleMockSelected={toggleMockSelected}
          onToggleFlagged={toggleTopicFlagged}
        />
      )}
    </div>
  );
}
