/**
 * Round score based on data
 * @param {number} score 
 * @returns rounded score if decimals greater than 0.5 or flored if less
 */

export const roundScore = (score) => {
  const flored = Math.floor(score);
  const rounded = Math.round(score);
  const decimal = score - flored;

  if (decimal === 0 || decimal === 0.5) {
    return score;
  }

  return decimal > 0.5 ? rounded : flored + 0.5;
};

/**
 * Price formatter based on data, with possibility to change currency
 * @param {number} number 
 * @param {string} curr 
 * @returns formated price depended on locale and remove last digits to fit design
 */

export const currFormatter = (number, curr = "EUR") => {
  return new Intl.NumberFormat("en-us", { style: "currency", currency: curr })
    .format(number)
    .replace(/\.00$/, "");
};

/**
 * Plural format of data depended on data
 * @param {number} data
 * @param {string} plural
 * @param {string} single    
 * @returns string with plural or singular format
 */
export const pluralFormat = (data, plural, single) => {
  return data !== 1 ? `${data} ${plural}` : `${data} ${single}`;
}