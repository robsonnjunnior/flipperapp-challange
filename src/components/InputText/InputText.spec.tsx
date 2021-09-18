import { render, screen } from '@testing-library/react';
import InputText from './InputText';

describe('Test component <InputText />', () => {
  test('should be render', () => {
    render(<InputText label="test" name="test" />);
    const dchecboxElement = screen.getByText(/test/i);
    expect(dchecboxElement).toBeInTheDocument();
  });
});
