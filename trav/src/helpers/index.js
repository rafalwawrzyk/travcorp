// round score helper for stars
export const roundScore = (score) => {
  const flored = Math.floor(score);
  const rounded = Math.round(score);
  const decimal = score - flored;

  if (decimal === 0 || decimal === 0.5) {
    return score;
  }

  return decimal > 0.5 ? rounded : flored + 0.5;
};

// format currency and remvoe last digits
export const currFormatter = (number, curr = "EUR") => {
  return new Intl.NumberFormat("en-us", { style: "currency", currency: curr })
    .format(number)
    .replace(/\.00$/, "");
};

// create plurals depended on data
export const pluralFormat = (data, plural, single) => {
  return data !== 1 ? `${data} ${plural}` : `${data} ${single}`;
}