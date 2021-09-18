import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('Test page <NotFound />', () => {
  test('should be render', () => {
    render(<NotFound />);
    const linkElement = screen.getByText(/hat page doesn't exist!/i);
    expect(linkElement).toBeInTheDocument();
  });
});
