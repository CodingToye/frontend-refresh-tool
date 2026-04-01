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
import type {InterviewButtonMode} from "@/types/Interviews.types";
import {filterSections} from "@/utils/filterSections";
import {getMockSessionQuestions} from "@/utils/getMockSessionQuestions";
import {getTopicKey} from "@/utils/topicKeys";

import {subjectIcon} from "./components/shared/SubjectIcon";
import {Tag} from "./components/shared/Tag";
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
  const [questionMode, setQuestionMode] = useState<"classic" | "extended">(
    "classic",
  );

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
    resetSubjectProgress,
    resetAllSubjectsProgress,
    interviewHistory,
    getHasStartedInterview,
    getHasCompletedInterview,
    setHasStartedInterview,
    setHasCompletedInterview,
    getTopicTrend,
  } = useLearningProgress();

  const {
    reviewedCount,
    poorCount,
    weakCount,
    decentCount,
    strongCount,
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

  const hasStartedInterview = getHasStartedInterview(subject);
  const hasCompletedInterview = getHasCompletedInterview(subject);

  const recommendedQuestionTopicKeys = subjectData[subject].sections.flatMap(
    (section) =>
      section.items
        .filter((item) => item.interview && item.mockQuestions?.length)
        .map((item) => getTopicKey(subject, section.title, item.name)),
  );

  const allQuestionTopicKeys = subjectData[subject].sections.flatMap(
    (section) =>
      section.items
        .filter((item) => item.mockQuestions?.length)
        .map((item) => getTopicKey(subject, section.title, item.name)),
  );

  const activeQuestionTopicKeys =
    questionMode === "extended"
      ? allQuestionTopicKeys
      : recommendedQuestionTopicKeys;

  const activeQuestionSelection = Object.fromEntries(
    activeQuestionTopicKeys.map((key) => [key, true]),
  );

  const mockSessionQuestions = getMockSessionQuestions(
    subject,
    activeQuestionSelection,
  );

  const activeMockQuestionsCount = mockSessionQuestions.length;

  const classicTotalAvailable = subjectData[subject].sections.reduce(
    (total, section) =>
      total +
      section.items
        .filter((item) => item.interview)
        .reduce(
          (sectionTotal, item) =>
            sectionTotal + (item.mockQuestions?.length ?? 0),
          0,
        ),
    0,
  );

  const activeTotalAvailable =
    questionMode === "extended"
      ? subjectMetrics[subject].totalAvailable
      : classicTotalAvailable;

  const interviewButtonMode: InterviewButtonMode =
    activeMockQuestionsCount === 0
      ? null
      : hasCompletedInterview
        ? "retake"
        : hasStartedInterview
          ? "continue"
          : "take";

  const {toasts, addToast, removeToast, clearToasts} = useToasts();

  const filteredSections = filterSections({
    sections,
    subject,
    flaggedTopics,
    showInterviewOnly,
    showFlaggedOnly,
    searchTerm,
  });

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
    document.body.style.overflow = showMockQuestions ? "hidden" : "";
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

  function handleResetSubject() {
    resetSubjectProgress(subject);
    clearToasts();

    addToast({
      toastStyle: "success",
      title: "Everything reset",
      message: "All study progress has been cleared",
    });

    setMockInterviewResetKey((prev) => prev + 1);
  }

  function handleResetAllSubjects() {
    resetAllSubjectsProgress();
    clearToasts();
    setMockInterviewResetKey((prev) => prev + 1);
    addToast({
      toastStyle: "success",
      title: "Reset all subjects",
      message: "All subjects progress reset",
    });
  }

  const handleOpenMockQuestions = (): void => {
    if (interviewButtonMode === "retake") {
      resetInterviewProgress(subject);
      setHasCompletedInterview(subject, false);
      setHasStartedInterview(subject, true);
      setMockInterviewResetKey((prev) => prev + 1);
      setShowMockQuestions(true);
      return;
    }

    setHasStartedInterview(subject, true);
    setShowMockQuestions(true);
  };

  const handleSetShowMockQuestions = (value: boolean): void => {
    setShowMockQuestions(value);
  };

  const Icon = subjectIcon[subject];

  const hasFilteredSections = filteredSections.length > 0;

  return (
    <div className="min-h-screen bg-bg  text-text">
      <SubjectNav
        subjects={subjects}
        subject={subject}
        setSubject={setSubject}
        subjectMetrics={subjectMetrics}
      />

      <div className="p-4 pt-0">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <header className="flex flex-col items-center mt-4">
            <h1 className="flex flex-col items-center gap-2 mb-4 text-3xl font-bold leading-5">
              <Icon className="w-8 h-8 text-white/70" />
              {subjectData[subject].label}{" "}
              <span className="text-primary-500 text-xl">
                Knowledge Refresh
              </span>
            </h1>
            <p className="mb-4 text-slate-300/50 text-sm">
              Click a section to open its topics.
            </p>
          </header>

          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="order-3 lg:order-0 lg:w-1/5 lg:min-w-3xs">
              <Toolbar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onResetProgress={handleResetStudy}
                onResetSubjectProgress={handleResetSubject}
                onResetAllSubjectsProgress={handleResetAllSubjects}
                questionMode={questionMode}
                onQuestionModeChange={setQuestionMode}
                showInterviewOnly={showInterviewOnly}
                onShowInterviewOnlyChange={setShowInterviewOnly}
                showFlaggedOnly={showFlaggedOnly}
                onShowFlaggedOnlyChange={setShowFlaggedOnly}
                onShowMockQuestions={handleOpenMockQuestions}
                interviewButtonMode={interviewButtonMode}
              />
            </div>

            <div className="order-1 flex flex-col gap-8 lg:order-0 lg:w-3/5">
              <section className="flex flex-col gap-2">
                <header className="flex justify-center">
                  <div className="flex flex-row items-center">
                    <span className="material-symbols-outlined mr-2 text-base!">
                      folder
                    </span>
                    <h2 className="mb-0 text-primary-500">
                      Topics{" "}
                      <span className="text-xxs text-secondary-200">
                        ({filteredSections.length})
                      </span>
                    </h2>
                  </div>
                </header>

                {hasFilteredSections ? (
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
                          interviewScore={getInterviewScore(
                            subject,
                            section.title,
                          )}
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
                ) : (
                  <div className="flex flex-col w-full py-4 items-center justify-center">
                    <Tag tagLabel="No Topics Found" />
                  </div>
                )}
              </section>
            </div>

            <div className="order-2 lg:order-0 lg:w-1/5 lg:min-w-3xs">
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
                subjectScore={getSubjectScore(subject) ?? 0}
                subjectMetrics={subjectMetrics[subject]}
                mockQuestionsCount={activeMockQuestionsCount}
                totalAvailable={activeTotalAvailable}
                questionMode={questionMode}
              />
            </div>
          </div>
        </div>

        <MockInterview
          key={`${subject}-${mockInterviewResetKey}`}
          subject={subject}
          showMockQuestions={showMockQuestions}
          setShowMockQuestions={handleSetShowMockQuestions}
          setHasStartedInterview={setHasStartedInterview}
          setHasCompletedInterview={setHasCompletedInterview}
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

        <div className="fixed left-0 top-0 flex w-full flex-col gap-2 lg:left-auto lg:right-10 lg:top-10 lg:w-auto">
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
    </div>
  );
}
