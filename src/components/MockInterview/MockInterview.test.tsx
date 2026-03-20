import { fireEvent,render, screen } from '@testing-library/react';

import { MockInterview } from './MockInterview';
import type { MockSessionQuestion } from './types';

const makeQuestion = (id: string, sectionTitle: string): MockSessionQuestion => ({
  id,
  key: id,
  topicName: `Topic ${id}`,
  sectionTitle,
  question: `Question ${id}?`,
  answer: `Answer ${id}`,
});

const baseProps = {
  subject: 'react' as const,
  showMockQuestions: true,
  setShowMockQuestions: vi.fn(),
  saveInterviewScore: vi.fn(),
};

describe('MockInterview', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('when there are no questions', () => {
    it('renders the no-questions view', () => {
      render(<MockInterview {...baseProps} questions={[]} />);
      expect(
        screen.getByText(/No mock questions found for the topics currently added/),
      ).toBeInTheDocument();
    });

    it('does not render the question or complete views', () => {
      render(<MockInterview {...baseProps} questions={[]} />);
      expect(screen.queryByText('Reveal Answer')).not.toBeInTheDocument();
      expect(screen.queryByText('Finish Interview')).not.toBeInTheDocument();
    });
  });

  describe('when showMockQuestions is false', () => {
    it('renders nothing', () => {
      const { container } = render(
        <MockInterview {...baseProps} showMockQuestions={false} questions={[]} />,
      );
      expect(container.firstChild).toBeNull();
    });
  });

  describe('question progression and scoring', () => {
    const questions = [
      makeQuestion('q1', 'Section A'),
      makeQuestion('q2', 'Section A'),
    ];

    it('renders the first question on mount', () => {
      render(<MockInterview {...baseProps} questions={questions} />);
      expect(screen.getByText('Question q1?')).toBeInTheDocument();
      expect(screen.getByText('Question 1 of 2')).toBeInTheDocument();
    });

    it('advances to the next question after scoring', () => {
      render(<MockInterview {...baseProps} questions={questions} />);

      fireEvent.click(screen.getByText('Reveal Answer'));
      fireEvent.click(screen.getByText('3 - Strong'));

      expect(screen.getByText('Question q2?')).toBeInTheDocument();
      expect(screen.getByText('Question 2 of 2')).toBeInTheDocument();
    });

    it('shows the complete screen after the last question is scored', () => {
      render(<MockInterview {...baseProps} questions={questions} />);

      // Score question 1
      fireEvent.click(screen.getByText('Reveal Answer'));
      fireEvent.click(screen.getByText('3 - Strong'));

      // Score question 2
      fireEvent.click(screen.getByText('Reveal Answer'));
      fireEvent.click(screen.getByText('1 - Weak'));

      // totalScore = 3 + 1 = 4, maxScore = 2 * 3 = 6
      expect(screen.getByText('Score: 4 / 6')).toBeInTheDocument();
      expect(screen.getByText(/You scored 67%/)).toBeInTheDocument();
      expect(screen.getByText(/across 2 questions/)).toBeInTheDocument();
    });

    it('calls saveInterviewScore with the correct section totals on completion', () => {
      const saveInterviewScore = vi.fn();
      render(
        <MockInterview
          {...baseProps}
          questions={questions}
          saveInterviewScore={saveInterviewScore}
        />,
      );

      fireEvent.click(screen.getByText('Reveal Answer'));
      fireEvent.click(screen.getByText('3 - Strong')); // q1: 3

      fireEvent.click(screen.getByText('Reveal Answer'));
      fireEvent.click(screen.getByText('1 - Weak')); // q2: 1

      // Both questions are in 'Section A': earned=4, max=6 → 67%
      expect(saveInterviewScore).toHaveBeenCalledWith('react', 'Section A', 67);
      expect(saveInterviewScore).toHaveBeenCalledTimes(1);
    });

    it('scores each section independently when questions span multiple sections', () => {
      const mixedQuestions = [
        makeQuestion('q1', 'Section A'),
        makeQuestion('q2', 'Section B'),
      ];
      const saveInterviewScore = vi.fn();

      render(
        <MockInterview
          {...baseProps}
          questions={mixedQuestions}
          saveInterviewScore={saveInterviewScore}
        />,
      );

      fireEvent.click(screen.getByText('Reveal Answer'));
      fireEvent.click(screen.getByText('3 - Strong')); // Section A: 3/3 = 100%

      fireEvent.click(screen.getByText('Reveal Answer'));
      fireEvent.click(screen.getByText('0 - Missed')); // Section B: 0/3 = 0%

      expect(saveInterviewScore).toHaveBeenCalledWith('react', 'Section A', 100);
      expect(saveInterviewScore).toHaveBeenCalledWith('react', 'Section B', 0);
      expect(saveInterviewScore).toHaveBeenCalledTimes(2);
    });
  });
});
