import {useState, useEffect, useRef} from "react";
import type {MockInterviewProps} from "./types";

import {MockInterviewNoQuestions} from "./MockInterviewNoQuestions";
import {MockInterviewComplete} from "./MockInterviewComplete";
import {MockInterviewQuestions} from "./MockInterviewQuestions";

export function MockInterview({
  subject,
  showMockQuestions,
  setShowMockQuestions,
  saveInterviewScore,
  questions,
}: MockInterviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const savedScoreRef = useRef(false);

  const totalQuestions = questions.length;
  const maxScore = totalQuestions * 3;
  const totalScore = Object.values(scores).reduce(
    (sum, score) => sum + score,
    0,
  );
  const percentage =
    maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  const isComplete = totalQuestions > 0 && currentIndex >= totalQuestions;

  useEffect(() => {
    if (!isComplete || savedScoreRef.current) return;

    const sectionTotals: Record<string, {earned: number; max: number}> = {};

    questions.forEach((question) => {
      const sectionTitle = question.sectionTitle;
      const score = scores[question.id] ?? 0;

      if (!sectionTotals[sectionTitle]) {
        sectionTotals[sectionTitle] = {earned: 0, max: 0};
      }

      sectionTotals[sectionTitle].earned += score;
      sectionTotals[sectionTitle].max += 3;
    });

    Object.entries(sectionTotals).forEach(([sectionTitle, totals]) => {
      const sectionPercentage =
        totals.max > 0 ? Math.round((totals.earned / totals.max) * 100) : 0;

      saveInterviewScore(subject, sectionTitle, sectionPercentage);
    });

    savedScoreRef.current = true;
  }, [isComplete, questions, scores, subject, saveInterviewScore]);

  if (!showMockQuestions) {
    return null;
  }

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const nextIndex = currentIndex + 1;
  const nextQuestion = questions[nextIndex];

  const handlePause = () => {
    setShowMockQuestions(false);
  };

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

    setCurrentIndex(nextIndex);
    setCurrentAnswer(nextQuestion ? (answers[nextQuestion.id] ?? "") : "");
    setRevealed(false);
  };

  if (questions.length === 0) {
    return (
      <MockInterviewNoQuestions subject={subject} onHandlePause={handlePause} />
    );
  }

  if (isComplete) {
    return (
      <MockInterviewComplete
        subject={subject}
        totalScore={totalScore}
        maxScore={maxScore}
        percentage={percentage}
        totalQuestions={totalQuestions}
        onHandlePause={handlePause}
      />
    );
  }

  return (
    <MockInterviewQuestions
      subject={subject}
      currentIndex={currentIndex}
      totalQuestions={totalQuestions}
      currentQuestion={currentQuestion}
      currentAnswer={currentAnswer}
      setCurrentAnswer={setCurrentAnswer}
      revealed={revealed}
      onHandlePause={handlePause}
      onHandleReveal={handleReveal}
      onHandleScore={handleScore}
    />
  );
}
