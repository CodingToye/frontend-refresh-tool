import { fireEvent,render, screen } from '@testing-library/react';

import { MockInterviewQuestions } from './MockInterviewQuestions';
import type { MockSessionQuestion } from './types';

const mockQuestion: MockSessionQuestion = {
  id: 'q1',
  key: 'q1',
  topicName: 'Hooks',
  sectionTitle: 'React Fundamentals',
  question: 'What is the difference between useState and useRef?',
  answer: 'useState triggers re-renders; useRef holds a mutable value without re-rendering.',
};

const defaultProps = {
  subject: 'react' as const,
  currentIndex: 0,
  totalQuestions: 3,
  currentQuestion: mockQuestion,
  currentAnswer: '',
  setCurrentAnswer: vi.fn(),
  revealed: false,
  onHandlePause: vi.fn(),
  onHandleReveal: vi.fn(),
  onHandleScore: vi.fn(),
};

describe('MockInterviewQuestions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('displays the current question text', () => {
    render(<MockInterviewQuestions {...defaultProps} />);
    expect(
      screen.getByText('What is the difference between useState and useRef?'),
    ).toBeInTheDocument();
  });

  it('shows the "Reveal Answer" button and hides scoring when not yet revealed', () => {
    render(<MockInterviewQuestions {...defaultProps} revealed={false} />);
    expect(screen.getByText('Reveal Answer')).toBeInTheDocument();
    expect(screen.queryByText('Score your answer')).not.toBeInTheDocument();
  });

  it('calls onHandleReveal when the "Reveal Answer" button is clicked', () => {
    render(<MockInterviewQuestions {...defaultProps} revealed={false} />);
    fireEvent.click(screen.getByText('Reveal Answer'));
    expect(defaultProps.onHandleReveal).toHaveBeenCalledTimes(1);
  });

  it('shows the suggested answer and scoring buttons when revealed', () => {
    render(<MockInterviewQuestions {...defaultProps} revealed={true} />);
    expect(screen.queryByText('Reveal Answer')).not.toBeInTheDocument();
    expect(screen.getByText('Score your answer')).toBeInTheDocument();
    expect(screen.getByText('Suggested answer')).toBeInTheDocument();
    expect(
      screen.getByText(
        'useState triggers re-renders; useRef holds a mutable value without re-rendering.',
      ),
    ).toBeInTheDocument();
  });

  it('calls onHandleScore with the correct value when a score button is clicked', () => {
    render(<MockInterviewQuestions {...defaultProps} revealed={true} />);
    fireEvent.click(screen.getByText('0 - Missed'));
    expect(defaultProps.onHandleScore).toHaveBeenCalledWith(0);

    fireEvent.click(screen.getByText('1 - Weak'));
    expect(defaultProps.onHandleScore).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText('2 - Decent'));
    expect(defaultProps.onHandleScore).toHaveBeenCalledWith(2);

    fireEvent.click(screen.getByText('3 - Strong'));
    expect(defaultProps.onHandleScore).toHaveBeenCalledWith(3);
  });

  it('displays the question progress indicator', () => {
    render(<MockInterviewQuestions {...defaultProps} currentIndex={1} totalQuestions={5} />);
    expect(screen.getByText('Question 2 of 5')).toBeInTheDocument();
  });

  it('disables the textarea after the answer is revealed', () => {
    render(<MockInterviewQuestions {...defaultProps} revealed={true} />);
    expect(screen.getByPlaceholderText('Type your answer here...')).toBeDisabled();
  });
});
