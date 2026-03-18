import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with the correct label', () => {
    render(<Button buttonLabel="Click me" handleClick={() => {}} />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('renders an icon when buttonIcon is provided', () => {
    render(<Button buttonLabel="Save" buttonIcon="check" handleClick={() => {}} />);
    expect(screen.getByText('check')).toBeInTheDocument();
  });

  it('does not render an icon element when buttonIcon is omitted', () => {
    render(<Button buttonLabel="Save" handleClick={() => {}} />);
    expect(screen.queryByRole('button')!.querySelector('.material-symbols-outlined')).toBeNull();
  });

  it('applies primary style classes by default', () => {
    render(<Button buttonLabel="Save" handleClick={() => {}} />);
    expect(screen.getByRole('button')).toHaveClass('bg-primary-500');
  });

  it('applies secondary style classes when buttonStyle is secondary', () => {
    render(<Button buttonLabel="Save" buttonStyle="secondary" handleClick={() => {}} />);
    expect(screen.getByRole('button')).toHaveClass('bg-secondary-500');
  });

  it('applies tertiary style classes when buttonStyle is tertiary', () => {
    render(<Button buttonLabel="Save" buttonStyle="tertiary" handleClick={() => {}} />);
    expect(screen.getByRole('button')).toHaveClass('bg-btn-tertiary-500');
  });

  it('calls handleClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button buttonLabel="Save" handleClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
