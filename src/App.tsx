import {useEffect, useState} from "react";

import {MockInterview} from "@/components/MockInterview";
import {SectionCard} from "@/components/SectionCard";
import type {Section} from "@/components/SectionCard/types";
import {Toast} from "@/components/shared/Toast";
import {SubjectNav} from "@/components/SubjectNav";
import {Toolbar} from "@/components/Toolbar";
import {TopicModal} from "@/components/TopicModal";
import type {SubjectKey} from "@/data/subjects";
import {subjectData} from "@/data/subjects";
import {useLearningProgress} from "@/hooks/useLearningProgress";
import {useToasts} from "@/hooks/useToasts";
import {filterSections} from "@/utils/filterSections";
import {getMockSessionQuestions} from "@/utils/getMockSessionQuestions";
import {getTopicKey} from "@/utils/topicKeys";

export default function App() {
  const [subject, setSubject] = useState<SubjectKey>("react");
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [showInterviewOnly, setShowInterviewOnly] = useState(false);
  const [showFlaggedOnly, setShowFlaggedOnly] = useState(false);
  const [showMockQuestions, setShowMockQuestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mockInterviewResetKey, setMockInterviewResetKey] = useState(0);

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

  const {toasts, addToast, removeToast, clearToasts} = useToasts();

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

  function handleResetStudy() {
    resetStudyProgress(subject);
    addToast({
      toastStyle: "success",
      title: "Study reset",
      message: "Your study progress has been reset.",
    });
  }

  function handleResetAll() {
    resetAllProgress(subject);
    clearToasts();

    addToast({
      toastStyle: "success",
      title: "Everything reset",
      message: "All study progress has been cleared",
    });
  }

  return (
    <div className="min-h-screen bg-bg p-10 pt-0 lg:pt-10 text-text">
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
          onResetProgress={handleResetStudy}
          onResetInterviewProgress={() => {
            resetInterviewProgress(subject);
            setMockInterviewResetKey((prev) => prev + 1);
          }}
          onResetAllProgress={() => {
            handleResetAll();
            setMockInterviewResetKey((prev) => prev + 1);
          }}
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
        key={`${subject}-${mockInterviewResetKey}`}
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

      <div className="flex flex-col gap-2 fixed w-full lg:w-auto top-0 left-0 lg:top-10 lg:left-auto lg:right-10">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            message={toast.message}
            toastStyle={toast.toastStyle}
            onDismiss={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}
