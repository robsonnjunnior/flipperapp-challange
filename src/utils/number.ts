export const currencyFormat = (value = 0) => {
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value || 0);
  return formatted;
};

export const percentFormat = (value = 0, decimals = 2) => {
  const formatted = `${value.toFixed(decimals).replace(/0+$/, '')}%`;
  return formatted;
};
