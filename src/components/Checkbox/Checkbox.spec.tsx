import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Test component <Checkbox />', () => {
  test('should be render', () => {
    render(<Checkbox label="test" name="test" defaultChecked={false} />);
    const dchecboxElement = screen.getByText(/test/i);
    expect(dchecboxElement).toBeInTheDocument();
  });
});
