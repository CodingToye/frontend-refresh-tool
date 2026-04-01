import {Button} from "@/components/shared/Button";
import {subjectData} from "@/data/subjects";

import type {MockInterviewCompleteProps} from "./types";

export function MockInterviewComplete({
  subject,
  totalScore,
  maxScore,
  percentage,
  totalQuestions,
  onHandlePause,
}: MockInterviewCompleteProps) {
  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onHandlePause}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-tertiary-500 p-6 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            {subjectData[subject].label} Mock Results
          </h2>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-lg font-medium text-primary">
            Score: {totalScore} / {maxScore}
          </p>
          <p className="text-sm text-slate-300">
            You scored {percentage}% across {totalQuestions} question
            {totalQuestions === 1 ? "" : "s"}.
          </p>
          <Button
            buttonLabel="Finish Interview"
            buttonIcon="check"
            buttonStyle="primary"
            buttonIconColour="primary"
            handleClick={onHandlePause}
          />
        </div>
      </div>
    </div>
  );
}
