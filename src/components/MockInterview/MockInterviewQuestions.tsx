import type {MockInterviewQuestionsProps} from "./types";
import {subjectData} from "../../data/subjects";
import {Button} from "../shared/Button";

export function MockInterviewQuestions({
  subject,
  currentIndex,
  totalQuestions,
  currentQuestion,
  currentAnswer,
  setCurrentAnswer,
  revealed,
  onHandlePause,
  onHandleReveal,
  onHandleScore,
}: MockInterviewQuestionsProps) {
  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onHandlePause}
    >
      <div
        className="w-full max-w-3xl rounded-2xl bg-surface-light p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {subjectData[subject].label} Mock Interview
            </h2>
            <Button
              buttonLabel="Pause Interview"
              buttonIcon="pause_circle"
              buttonStyle="primary"
              handleClick={onHandlePause}
            />
          </div>
          <p className="mt-1 text-sm text-slate-400 text-left">
            Question {currentIndex + 1} of {totalQuestions}
          </p>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded bg-primary-500 px-2 py-0.5 text-xs font-medium text-black">
            {currentQuestion.sectionTitle}
          </span>
          <span className="text-sm text-primary">
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
            <Button
              buttonLabel="Reveal Answer"
              buttonStyle="primary"
              handleClick={onHandleReveal}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-xl border border-black/10 bg-surface p-4">
              <h3 className="mb-2 text-sm font-medium text-primary">
                Suggested answer
              </h3>
              <p className="text-sm text-slate-200">{currentQuestion.answer}</p>
            </div>

            <div>
              <p className="mb-4 text-sm text-slate-300">Score your answer</p>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => onHandleScore(0)}
                  className="rounded-xl bg-danger px-4 py-1 text-xs text-white shadow-lg shadow-white/10 transition hover:bg-danger-dark"
                >
                  0 - Missed
                </button>
                <button
                  onClick={() => onHandleScore(1)}
                  className="rounded-xl bg-warning px-4 py-1 text-xs text-white shadow-lg shadow-white/10 transition hover:bg-warning-dark"
                >
                  1 - Weak
                </button>
                <button
                  onClick={() => onHandleScore(2)}
                  className="rounded-xl bg-info px-4 py-1 text-xs text-white shadow-lg shadow-white/10 transition hover:bg-info-dark"
                >
                  2 - Decent
                </button>
                <button
                  onClick={() => onHandleScore(3)}
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
