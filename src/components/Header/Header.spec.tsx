import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Test component <Header />', () => {
  test('should be render', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const logoImg = screen.getByRole('img');
    expect(logoImg).toHaveAttribute('alt', 'Logo Fliper');

    const linkResume = screen.getByRole('link');
    expect(linkResume).toHaveAttribute('href', '/resume');
  });
});
