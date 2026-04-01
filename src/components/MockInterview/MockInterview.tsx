import {useCallback, useEffect, useRef, useState} from "react";

import type {TopicReviewLevel} from "@/utils/TopicReviewLevel";
import {getTopicReviewLevel} from "@/utils/TopicReviewLevel";

import {MockInterviewComplete} from "./MockInterviewComplete";
import {MockInterviewNoQuestions} from "./MockInterviewNoQuestions";
import {MockInterviewQuestions} from "./MockInterviewQuestions";
import type {MockInterviewProps} from "./types";

export function MockInterview({
  subject,
  showMockQuestions,
  setShowMockQuestions,
  setHasStartedInterview,
  setHasCompletedInterview,
  saveInterviewScore,
  saveInterviewAttempt,
  setTopicFlagged,
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

  const persistInterviewProgress = useCallback(() => {
    const answeredQuestions = questions.filter(
      (question) => question.id in scores,
    );

    if (answeredQuestions.length === 0) return;

    const sectionTotals: Record<string, {attempted: number; correct: number}> =
      {};

    answeredQuestions.forEach((question) => {
      const sectionTitle = question.sectionTitle;
      const score = scores[question.id] ?? 0;

      if (!sectionTotals[sectionTitle]) {
        sectionTotals[sectionTitle] = {attempted: 0, correct: 0};
      }

      sectionTotals[sectionTitle].attempted += 1;

      if (score >= 2) {
        sectionTotals[sectionTitle].correct += 1;
      }
    });

    Object.entries(sectionTotals).forEach(([sectionTitle, scoreData]) => {
      saveInterviewScore(subject, sectionTitle, scoreData);
    });

    const topicResults: Record<string, TopicReviewLevel> = {};
    const topicKeys = [...new Set(answeredQuestions.map((q) => q.key))];

    topicKeys.forEach((topicKey) => {
      const topicScores = answeredQuestions
        .filter((q) => q.key === topicKey)
        .map((q) => scores[q.id] ?? 0);

      const topicLevel = getTopicReviewLevel(topicScores);

      if (topicLevel) {
        topicResults[topicKey] = topicLevel;
      }
    });

    if (Object.keys(topicResults).length > 0) {
      saveInterviewAttempt(subject, {
        date: new Date().toISOString(),
        topics: topicResults,
      });
    }
  }, [questions, scores, subject, saveInterviewScore, saveInterviewAttempt]);

  useEffect(() => {
    if (!isComplete || savedScoreRef.current) return;

    persistInterviewProgress();
    setHasCompletedInterview(subject, true);
    savedScoreRef.current = true;
  }, [isComplete, persistInterviewProgress, setHasCompletedInterview, subject]);

  if (!showMockQuestions) {
    return null;
  }

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const nextIndex = currentIndex + 1;
  const nextQuestion = questions[nextIndex];

  const handlePause = () => {
    if (!isComplete) {
      persistInterviewProgress();
      setHasStartedInterview(subject, true);
    }
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

    const updatedScores = {
      ...scores,
      [currentQuestion.id]: score,
    };

    setScores(updatedScores);

    const topicScores = questions
      .filter((question) => question.key === currentQuestion.key)
      .map((question) => updatedScores[question.id] ?? 0);

    const topicLevel = getTopicReviewLevel(topicScores);
    setTopicFlagged(currentQuestion.key, topicLevel);

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
