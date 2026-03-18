import { render, screen } from '@testing-library/react';
import { MockInterviewComplete } from './MockInterviewComplete';

describe('MockInterviewComplete', () => {
  it('displays the correct score and max score', () => {
    render(
      <MockInterviewComplete
        subject="react"
        totalScore={6}
        maxScore={9}
        percentage={67}
        totalQuestions={3}
        onHandlePause={() => {}}
      />,
    );
    expect(screen.getByText('Score: 6 / 9')).toBeInTheDocument();
  });

  it('displays the correct percentage', () => {
    render(
      <MockInterviewComplete
        subject="react"
        totalScore={6}
        maxScore={9}
        percentage={67}
        totalQuestions={3}
        onHandlePause={() => {}}
      />,
    );
    expect(screen.getByText(/You scored 67%/)).toBeInTheDocument();
  });

  it('displays the correct question count with plural suffix', () => {
    render(
      <MockInterviewComplete
        subject="react"
        totalScore={6}
        maxScore={9}
        percentage={67}
        totalQuestions={3}
        onHandlePause={() => {}}
      />,
    );
    expect(screen.getByText(/across 3 questions/)).toBeInTheDocument();
  });

  it('displays singular "question" when totalQuestions is 1', () => {
    render(
      <MockInterviewComplete
        subject="react"
        totalScore={3}
        maxScore={3}
        percentage={100}
        totalQuestions={1}
        onHandlePause={() => {}}
      />,
    );
    expect(screen.getByText(/across 1 question\./)).toBeInTheDocument();
    expect(screen.queryByText(/questions/)).not.toBeInTheDocument();
  });

  it('displays the subject label in the heading', () => {
    render(
      <MockInterviewComplete
        subject="react"
        totalScore={0}
        maxScore={3}
        percentage={0}
        totalQuestions={1}
        onHandlePause={() => {}}
      />,
    );
    expect(screen.getByRole('heading', { name: /React Mock Results/ })).toBeInTheDocument();
  });
});
