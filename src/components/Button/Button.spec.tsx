import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Test component <Button />', () => {
  test('should be render', () => {
    render(<Button label="test" handleClick={() => console.log('')} />);
    const buttonElement = screen.getByText(/test/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
