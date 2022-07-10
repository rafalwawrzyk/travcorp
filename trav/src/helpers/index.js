export const roundScore = (score) => {
  const flored = Math.floor(score);
  const rounded = Math.round(score);
  const decimal = score - flored;

  if (decimal === 0 || decimal === 0.5) {
    return score;
  }

  return decimal > 0.5 ? rounded : flored + 0.5;
};

export const currFormatter = (number, curr = "EUR") => {
  return new Intl.NumberFormat("en-us", { style: "currency", currency: curr })
    .format(number)
    .replace(/\.00$/, "");
};
