export const formatPrice = price => {
  const numericPrice = Number(price);

  if (Number.isNaN(numericPrice)) {
    return "0,00";
  }

  return numericPrice.toFixed(2).replace(".", ",");
};