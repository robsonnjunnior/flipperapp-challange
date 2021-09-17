export const currencyFormat = (value: number) => {
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value || 0);
  return formatted;
};

export const percentFormat = (value: number, decimals = 2) => {
  const formatted = `${value.toFixed(decimals).replace(/0+$/, '')}%`;
  return formatted;
};
