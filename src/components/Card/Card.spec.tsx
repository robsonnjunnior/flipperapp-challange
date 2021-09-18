import { render, screen } from '@testing-library/react';
import { IWealthSummary } from 'models/wealthSummary/wealSummary.model';
import Card from './Card';

describe('Test component <Card />', () => {
  test('should be render', () => {
    const mockCardData: IWealthSummary = {
      cdi: 14.1,
      gain: 12.12,
      hasHistory: true,
      id: 7,
      profitability: 1.1,
      total: 1354334.11,
    };

    render(
      <Card
        title="Seu resumo"
        data={mockCardData}
        handleDelete={() => console.log()}
        handleEdit={() => console.log()}
      />,
    );
    const cardElement = screen.getByTestId('card-wealth-summary');
    expect(cardElement).toBeInTheDocument();
  });
});
