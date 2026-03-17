import {useState} from "react";
import {subjectData} from "../data/subjects";
import type {MockQuestionsModalProps} from "../types/MockQuestions.types";

export function MockQuestionsModal({
  subject,
  showMockQuestions,
  setShowMockQuestions,
  questions,
}: MockQuestionsModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const resetSession = () => {
    setCurrentIndex(0);
    setCurrentAnswer("");
    setRevealed(false);
    setScores({});
    setAnswers({});
  };

  if (!showMockQuestions) {
    return null;
  }

  const totalQuestions = questions.length;
  const maxScore = totalQuestions * 3;
  const totalScore = Object.values(scores).reduce(
    (sum, score) => sum + score,
    0,
  );
  const percentage =
    maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  const isComplete = totalQuestions > 0 && currentIndex >= totalQuestions;

  const handleClose = () => {
    setShowMockQuestions(false);
    resetSession();
  };

  if (questions.length === 0) {
    return (
      <div
        className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        onClick={handleClose}
      >
        <div
          className="w-full max-w-2xl rounded-2xl bg-slate-800 p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {subjectData[subject].label} Mock Questions
            </h2>
            <button
              onClick={() => setShowMockQuestions(false)}
              className="text-sm text-slate-300 hover:text-white"
            >
              Close
            </button>
          </div>

          <p className="text-sm text-slate-400">
            No mock questions found for the topics currently added to your mock
            set.
          </p>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div
        className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        onClick={() => setShowMockQuestions(false)}
      >
        <div
          className="w-full max-w-2xl rounded-2xl bg-surface p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {subjectData[subject].label} Mock Results
            </h2>
            <button
              onClick={() => setShowMockQuestions(false)}
              className="text-sm text-slate-300 hover:text-white"
            >
              Close
            </button>
          </div>

          <div className="space-y-3">
            <p className="text-lg font-medium text-accent">
              Score: {totalScore} / {maxScore}
            </p>
            <p className="text-sm text-slate-300">
              You scored {percentage}% across {totalQuestions} question
              {totalQuestions === 1 ? "" : "s"}.
            </p>

            <button
              onClick={() => {
                setCurrentIndex(0);
                setCurrentAnswer("");
                setRevealed(false);
                setScores({});
                setAnswers({});
              }}
              className="rounded-xl bg-note px-4 py-2 text-xs font-medium text-black transition shadow-lg shadow-white/10 hover:bg-amber-600"
            >
              Restart Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleReveal = () => {
    if (!currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: currentAnswer,
    }));
    setRevealed(true);
  };

  const handleScore = (score: number) => {
    if (!currentQuestion) return;

    setScores((prev) => ({
      ...prev,
      [currentQuestion.id]: score,
    }));

    if (isLastQuestion) {
      setCurrentIndex((prev) => prev + 1);
      setRevealed(false);
      setCurrentAnswer("");
      return;
    }

    const nextIndex = currentIndex + 1;
    const nextQuestion = questions[nextIndex];

    setCurrentIndex(nextIndex);
    setCurrentAnswer(answers[nextQuestion.id] ?? "");
    setRevealed(false);
  };

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={() => setShowMockQuestions(false)}
    >
      <div
        className="w-full max-w-3xl rounded-2xl bg-surface-light p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">
              {subjectData[subject].label} Mock Interview
            </h2>
            <button
              onClick={handleClose}
              className="text-sm text-slate-300 hover:text-white"
            >
              Close
            </button>
          </div>
          <p className="mt-1 text-sm text-slate-400 text-left">
            Question {currentIndex + 1} of {totalQuestions}
          </p>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded bg-accent px-2 py-0.5 text-xs font-medium text-black">
            {currentQuestion.sectionTitle}
          </span>
          <span className="text-sm text-accent">
            {currentQuestion.topicName}
          </span>
        </div>

        <div className="mb-6 rounded-xl border border-black/10 bg-surface p-4">
          <p className="text-base text-white">{currentQuestion.question}</p>
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm text-slate-300">
            Your answer
          </label>
          <textarea
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            rows={8}
            disabled={revealed}
            className="w-full rounded-xl bg-surface px-4 py-3 text-xs text-white outline-none placeholder:text-slate-400 shadow-inner transition focus:bg-black/50 inset-shadow-sm inset-shadow-black/20"
            placeholder="Type your answer here..."
          />
        </div>

        {!revealed ? (
          <div className="flex justify-end">
            <button
              onClick={handleReveal}
              className="rounded-xl bg-note px-4 py-2 text-xs font-medium text-black transition hover:bg-amber-600"
            >
              Reveal Answer
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-xl border border-black/10 bg-surface p-4">
              <h3 className="mb-2 text-sm font-medium text-accent">
                Suggested answer
              </h3>
              <p className="text-sm text-slate-200">{currentQuestion.answer}</p>
            </div>

            <div>
              <p className="mb-4 text-sm text-slate-300">Score your answer</p>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => handleScore(0)}
                  className="rounded-xl bg-danger px-4 py-1 text-xs text-white shadow-lg shadow-white/10 transition hover:bg-danger-dark"
                >
                  0 - Missed
                </button>
                <button
                  onClick={() => handleScore(1)}
                  className="rounded-xl bg-warning px-4 py-1 text-xs text-white shadow-lg shadow-white/10 transition hover:bg-warning-dark"
                >
                  1 - Weak
                </button>
                <button
                  onClick={() => handleScore(2)}
                  className="rounded-xl bg-info px-4 py-1 text-xs text-white shadow-lg shadow-white/10 transition hover:bg-info-dark"
                >
                  2 - Decent
                </button>
                <button
                  onClick={() => handleScore(3)}
                  className="rounded-xl bg-success px-4 py-1 text-xs text-white shadow-lg shadow-white/10 transition hover:bg-success-dark"
                >
                  3 - Strong
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
