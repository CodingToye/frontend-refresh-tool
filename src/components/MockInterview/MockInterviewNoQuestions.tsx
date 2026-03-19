import type {MockInterviewNoQuestionsProps} from "./types";
import {subjectData} from "../../data/subjects";
import {Button} from "../shared/Button";

export function MockInterviewNoQuestions({
  subject,
  onHandlePause,
}: MockInterviewNoQuestionsProps) {
  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onHandlePause}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-slate-800 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-xl font-semibold">
            {subjectData[subject].label} Mock Interview
          </h2>
          <Button
            buttonLabel="Leave Interview"
            handleClick={onHandlePause}
            buttonStyle="primary"
            buttonIcon="close"
          />
        </div>

        <p className="text-sm text-slate-400">
          No mock questions found for the topics currently added to your mock
          set.
        </p>
      </div>
    </div>
  );
}
