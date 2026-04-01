import {Button} from "@/components/shared/Button";
import {subjectData} from "@/data/subjects";

import type {MockInterviewQuestionsProps} from "./types";

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
        className="w-full max-w-3xl max-h-full overflow-y-auto rounded-2xl bg-tertiary-400 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="mb-4 flex flex-col gap-4 lg:gap-0 items-center lg:items-start">
            <div className="flex flex-col gap-2 lg:flex-row lg:w-full justify-between items-center">
              <h2 className="text-xl font-semibold">
                {subjectData[subject].label} Mock Interview
              </h2>
              <Button
                buttonIcon="pause_circle"
                buttonIconColour="primary"
                buttonStyle="tertiary"
                handleClick={onHandlePause}
                iconOnly
              />
            </div>
            <p className="mt-1 text-xs lg:text-xs text-secondary-500 text-left">
              Question {currentIndex + 1} / {totalQuestions}
            </p>
          </div>

          <div className="mb-4 flex flex-col lg:flex-row flex-wrap items-center lg:gap-2">
            <span className="rounded bg-secondary-500 px-2 py-0.5 text-xs font-medium text-black">
              {currentQuestion.sectionTitle}
            </span>
            <em className="text-xxs lg:text-sm text-white">
              {currentQuestion.topicName}
            </em>
          </div>

          <div className="mb-6 rounded-xl border border-black/10 bg-tertiary-500 p-4">
            <p className="text-base text-white">{currentQuestion.question}</p>
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm text-primary-500">
              Your answer
            </label>
            <textarea
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              rows={4}
              disabled={revealed}
              className="w-full rounded-xl bg-tertiary-500 px-4 py-3 text-xs text-white outline-none placeholder:text-slate-400 shadow-inner transition focus:bg-black/50 inset-shadow-sm inset-shadow-black/20"
              placeholder="Type your answer here..."
            />
          </div>

          {!revealed ? (
            <div className="flex justify-center lg:justify-end">
              <Button
                buttonLabel="Reveal Answer"
                buttonIcon="visibility"
                buttonStyle="primary"
                buttonIconColour="primary"
                handleClick={onHandleReveal}
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-xl border border-black/10 bg-tertiary-500 p-4">
                <h3 className="mb-2 text-sm font-medium text-primary-500">
                  Suggested answer
                </h3>
                <p className="text-xs lg:text-base text-slate-200">
                  {currentQuestion.answer}
                </p>
              </div>

              <div>
                <p className="mb-4 text-sm text-primary-500">
                  Score your answer
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Button
                    buttonLabel="Poor"
                    buttonStyle="danger"
                    handleClick={() => onHandleScore(0)}
                  />
                  <Button
                    buttonLabel="Weak"
                    buttonStyle="warning"
                    handleClick={() => onHandleScore(1)}
                  />
                  <Button
                    buttonLabel="Decent"
                    buttonStyle="info"
                    handleClick={() => onHandleScore(2)}
                  />
                  <Button
                    buttonLabel="Strong"
                    buttonStyle="success"
                    handleClick={() => onHandleScore(3)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
