import {useEffect, useState} from "react";

import {MockInterview} from "@/components/MockInterview";
import {ScoreBoard} from "@/components/ScoreBoard";
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

import {getSubjectMetrics} from "./utils/SubjectMetrics";

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
  const subjects = Object.entries(subjectData) as [
    SubjectKey,
    (typeof subjectData)[SubjectKey],
  ][];

  const {
    checkedTopics,
    flaggedTopics,
    mockSelectedTopics,
    saveInterviewScore,
    saveInterviewAttempt,
    getInterviewScore,
    getSubjectScore,
    getSubjectInterviewMetrics,
    toggleTopicChecked,
    setTopicFlagged,
    toggleMockSelected,
    resetStudyProgress,
    resetInterviewProgress,
    resetAllProgress,
    interviewHistory,
    getTopicTrend,
  } = useLearningProgress();

  const {
    reviewedCount,
    poorCount,
    weakCount,
    decentCount,
    strongCount,
    mockQuestionsCount,
    poorTrend,
    weakTrend,
    decentTrend,
    strongTrend,
  } = getSubjectMetrics({
    subject,
    checkedTopics,
    flaggedTopics,
    mockSelectedTopics,
    interviewHistory,
  });

  const subjectMetrics = Object.fromEntries(
    subjects.map(([key]) => [key, getSubjectInterviewMetrics(key)]),
  ) as Record<SubjectKey, ReturnType<typeof getSubjectInterviewMetrics>>;
  const subjectInterviewHistory = interviewHistory[subject] ?? [];
  const hasInterviewHistory = subjectInterviewHistory.length > 0;
  const hasInterviewScore = getSubjectScore(subject) !== null;

  const interviewButtonMode =
    mockQuestionsCount === 0
      ? null
      : !hasInterviewHistory
        ? "take"
        : hasInterviewScore
          ? "view"
          : "retake";

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
    <div className="min-h-screen bg-bg p-4 lg:p-10 pt-0 lg:pt-18 text-text">
      <SubjectNav
        subjects={subjects}
        subject={subject}
        setSubject={setSubject}
        subjectMetrics={subjectMetrics}
      />
      <div className="flex flex-col gap-8 mx-auto max-w-7xl">
        <header className="mt-4">
          <h1 className="mb-0 text-3xl font-bold">
            {subjectData[subject].label}{" "}
            <span className="text-primary-500">Knowledge Refresh</span>
          </h1>
          <p className="mb-4 text-slate-300/50">
            Click a section to open its topics.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="order-3 lg:order-0 lg:w-1/5">
            <Toolbar
              subjectKey={subject}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
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
              interviewButtonMode={interviewButtonMode}
            />
          </div>
          <div className="flex flex-col gap-8 order-1 lg:order-0 lg:w-3/5">
            <section className="flex flex-col gap-2">
              <header className="flex justify-center">
                <div className="flex items-center flex-row">
                  <span className="material-symbols-outlined text-base! mr-2">
                    folder
                  </span>
                  <h2 className="text-primary-500 mb-0">Topics</h2>
                </div>
              </header>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">
                {filteredSections.map((section) => {
                  const totalTopics = section.items.length;
                  const completedTopics = section.items.filter(
                    (item) =>
                      checkedTopics[
                        getTopicKey(subject, section.title, item.name)
                      ],
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
                      interviewHistory={interviewHistory}
                      getTopicTrend={getTopicTrend}
                      onOpen={() => {
                        setSelectedSection(section);
                        setExpandedTopic(null);
                      }}
                    />
                  );
                })}
              </div>
            </section>
          </div>
          <div className="order-2 lg:order-0 lg:w-1/5">
            <ScoreBoard
              reviewedCount={reviewedCount}
              poorCount={poorCount}
              weakCount={weakCount}
              decentCount={decentCount}
              strongCount={strongCount}
              poorTrend={poorTrend}
              weakTrend={weakTrend}
              decentTrend={decentTrend}
              strongTrend={strongTrend}
              subjectScore={getSubjectScore(subject)}
              subjectMetrics={subjectMetrics[subject]}
              mockQuestionsCount={mockQuestionsCount}
            />
          </div>
        </div>
      </div>

      <MockInterview
        key={`${subject}-${mockInterviewResetKey}`}
        subject={subject}
        showMockQuestions={showMockQuestions}
        setShowMockQuestions={setShowMockQuestions}
        questions={mockSessionQuestions}
        saveInterviewScore={saveInterviewScore}
        saveInterviewAttempt={saveInterviewAttempt}
        setTopicFlagged={setTopicFlagged}
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
          interviewHistory={interviewHistory}
          mockSelectedTopics={mockSelectedTopics}
          onToggleMockSelected={toggleMockSelected}
          setTopicFlagged={setTopicFlagged}
          getTopicTrend={getTopicTrend}
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
